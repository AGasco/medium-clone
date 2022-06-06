import React from 'react';
import { sanityClient, urlFor } from '../../sanity';
import Header from './../../components/Header';
import { IPost } from '../../typings';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import styles from '../../styles/PostPage.module.scss';
import PortableText from 'react-portable-text';

interface PostProps {
  post: IPost;
}

function PostPage({ post }: PostProps) {
  return (
    <main>
      <Header />

      <div className={styles.MainImage}>
        <Image
          src={urlFor(post.mainImage).url()}
          alt="post's main image"
          layout="fill"
        />
      </div>

      <article className={styles.Title}>
        <h1>{post.title}</h1>
        <h2>{post.description}</h2>

        <div className={styles.Author}>
          <img
            className={styles.Author__Image}
            src={urlFor(post.author.image).url()!}
            alt="author's avatar"
          />
          <p className={styles.Author__Text}>
            Blog post by{' '}
            <span className={styles.Author__Name}>{post.author.name}</span> -
            Publised at {new Date(post._createdAt).toLocaleString()}
          </p>
        </div>

        <div className={styles.Article}>
          <PortableText
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
            content={post.body}
            serializers={{
              h1: (props: any) => (
                <h1 className={styles.Article__h1} {...props} />
              ),
              h2: (props: any) => (
                <h2 className={styles.Article__h2} {...props} />
              ),
              li: ({ children }: any) => (
                <li className={styles.Article__li}>{children}</li>
              ),
              link: ({ href, children }: any) => (
                <a href={href} className={styles.Article__link}>
                  {children}
                </a>
              )
            }}
          />
        </div>
      </article>
    </main>
  );
}

export default PostPage;

export const getStaticPaths = async () => {
  const query = `
  *[_type == 'post']{
    _id,
      slug {
      current
    }
  }`;

  const posts = await sanityClient.fetch(query);

  const paths = posts.map((post: IPost) => ({
    params: { slug: post.slug.current }
  }));

  return {
    paths,
    fallback: 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `
  *[_type == 'post' && slug.current == $slug] [0]{
    _id,
    _createdAt,
     title,
      author-> {
      name,
      image
    },
    description,
    mainImage,
    slug,
    body
    }
    `;

  const post = await sanityClient.fetch(query, { slug: params?.slug });

  if (!post) {
    return {
      notFound: true
    };
  }

  return { props: { post }, revalidate: 60 };
};
