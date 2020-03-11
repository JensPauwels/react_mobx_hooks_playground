import { observable, decorate, action } from 'mobx';
import { Post } from '../models';

class PostStore {
  constructor() {
    this.posts = [];
    this.newPost = new Post();
  };

  initialize = () => {
    this.posts = [
      new Post({
        user: 'Jens Pauwels',
        image: 'caferacer.jpg',
        location: 'Bruges',
        likes: 0,
        description: 'Honda cb 550K #caferacer'
      }),
    ]
  };

  addPost = () => {
    this.posts.push(this.newPost);
    this.newPost = new Post();
  };
};

decorate(PostStore, {
  posts: observable,
  initialize: action
});

export default new PostStore();
