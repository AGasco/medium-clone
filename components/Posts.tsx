import React from 'react';
import { IPost } from '../typings';
import Post from './Post';
import styles from '../styles/Posts.module.scss';

interface PostsProps {
  posts: IPost[];
}

function Posts({ posts }: PostsProps) {
  return (
    <div className={styles.Container}>
      {posts.map(({ ...props }) => (
        <Post key={props._id} {...props} />
      ))}
    </div>
  );
}

export default Posts;
