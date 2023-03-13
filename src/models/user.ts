export interface User {
    id: number;
    username: string;
    email: string;
    password: string;
    profile_picture: string;
    followers: number[];
    following: number[];
    bio: string;
    posts: number[];
  }