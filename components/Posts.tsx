import React from 'react';
import { IPost } from '../typings';
import Post from './Post';
import styles from '../styles/Posts.module.scss';
import Link from 'next/link';

interface PostsProps {
  posts: IPost[];
}

function Posts({ posts }: PostsProps) {
  return (
    <div className={styles.Container}>
      {posts.map(({ ...props }) => (
        <Link key={props._id} href={`post/${props.slug.current}`}>
          <a>
            <Post {...props} />
          </a>
        </Link>
      ))}
    </div>
  );
}

export default Posts;
