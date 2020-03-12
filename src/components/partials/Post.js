import React from 'react';
import { useObserver } from 'mobx-react-lite';

import styles from '../../assets/scss/post.module.scss';

const Comment = ({ comment }) => (
  <li>{ comment }</li>
);

const AddComment = ({ post }) => { 
  const onChange = ev => {
    post.newComment = ev.target.value;
  };

  return useObserver(() => (
    <>
      <input type="text" onChange={onChange} value={post.newComment}/>
      <button onClick={post.addComment}>Add Comment</button>
    </>
  ))
};


const Post = ({ post }) => {
  return useObserver(() => ( 
    <article className={styles.post}>
      <div className={styles.info}>
        <span>{ post.user }</span>
        <span>...</span>
      </div>
      <figure>
        <img src={require(`../../assets/images/${post.image}`)} alt={post.description} />
        <figcaption>
          <div>
            <span>{post.description}</span>
          </div>
          <div>
            <span>Likes { post.likes }</span>
            <button onClick={post.addLike}>Add like</button>
          </div>
        </figcaption>
      </figure>

      <ul>
        {
          post.comments.map((comment, index) => (<Comment comment={comment} key={index}/>))
        }
      </ul>
      <AddComment post={post}/>
    </article>
  ))
};

export default Post
