import { observable, decorate } from 'mobx';
import { Post } from '../models';
import { doFetch } from '../utils';

class PostStore {
  constructor() {
    this.posts = [];
    this.newPost = new Post();
    this.randomApi = '';
  };

  fetchRandomApi = async () => {
    const result = await doFetch('https://api.chucknorris.io/jokes/random', 'GET')
    this.randomApi = result;
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
      new Post({
        user: 'Andere user',
        image: 'cafe.jpg',
        location: 'Bruges',
        likes: 0,
        description: 'My cafe racer'
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
  randomApi: observable,
});

export default new PostStore();
