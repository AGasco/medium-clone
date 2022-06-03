import React from 'react';
import { urlFor } from '../sanity';
import { IPost } from '../typings';
import styles from '../styles/Post.module.scss';

function Post({ _id, author, description, mainImage, slug, title }: IPost) {
  return (
    <div className={styles.Container}>
      {/* <h1>Image</h1> */}
      <img
        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        alt=""
      />
      <div className={styles.Bottom}>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className={styles.Author}>author</div>
      </div>
    </div>
  );
}

export default Post;
