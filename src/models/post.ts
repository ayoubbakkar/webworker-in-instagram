export interface Post {
    id: number;
    userId: number;
    image: string;
    caption: string;
    likes: number;
    comments: Comment[];
  }
  
  export interface Comment {
    userId: number;
    text: string;
  }