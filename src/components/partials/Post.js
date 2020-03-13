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
    <div className={styles.inputs}>
      <input type="text" onChange={onChange} value={post.newComment} placeholder="Een opmerking toevoegen..."/>
      <button className={styles.addComment} onClick={post.addComment}>Plaats</button>
    </div>
  ))
};


const Post = ({ post }) => {
  return useObserver(() => ( 
    <article className={styles.post}>
      <div className={styles.info}>
        <span>{ post.user }</span>
        <i className="fas fa-ellipsis-h"></i>
      </div>
      <figure>
        <img src={require(`../../assets/images/${post.image}`)} alt={post.description} />
        <figcaption>
          <div>
            <span>{post.description}</span>
          </div>
          <div>
            <i className={`far fa-heart ${styles.addLike}`} onClick={post.addLike} />
            <span>{ post.likes } vinden dit leuk </span>
            {/* <div className={styles.add} onClick={post.addLike}> */}
            {/*   Add like */}
            {/* </div> */}
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
