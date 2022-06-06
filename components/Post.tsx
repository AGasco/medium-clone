import React from 'react';
import { urlFor } from '../sanity';
import { IPost } from '../typings';
import styles from '../styles/Post.module.scss';
import Image from 'next/image';

function Post({ _id, author, description, mainImage, slug, title }: IPost) {
  return (
    <div className={styles.Container}>
      <Image
        className={styles.Image}
        src={urlFor(mainImage).url()}
        alt="Landscape picture"
        width={400}
        height={300}
      />
      <div className={styles.Bottom}>
        <div>
          <h3>{title}</h3>
          <p>
            {description} by {author.name}
          </p>
        </div>
        <div className={styles.Author}>
          <Image
            className={styles.Author__Image}
            src={urlFor(author.image).url()}
            alt="Landscape picture"
            width={50}
            height={50}
          />
          {/* <div className={styles.Author__Name}>{author.name}</div> */}
        </div>
      </div>
    </div>
  );
}

export default Post;
