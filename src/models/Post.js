import { decorate, observable } from 'mobx';

class Post {
  constructor({user, image, location, likes = 0, description = '', comments = []} = {}) {
    this.user = user;
    this.image = image;
    this.location = location;
    this.likes = likes;
    this.description = description;
    this.comments = comments;
    this.newComment = '';
  }

  addLike = () => {
    this.likes = this.likes + 1;
  }

  addComment = () => {
    this.comments.push(this.newComment);
    this.newComment = '';
  };
}

decorate(Post, {
  user: observable,
  image: observable,
  location: observable,
  likes: observable,
  description: observable,
  comments: observable,
  newComment: observable
});

export default Post;

