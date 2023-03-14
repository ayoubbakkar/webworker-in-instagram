const fs = require('fs');
const path = require('path');
const url = require('url');
const https = require('https')
const { readdirSync } = require('fs');

function getRandomImageFileName() {
  const imageDirPath = path.join(__dirname, '../assets/images');
  const imageFileNames = readdirSync(imageDirPath);
  const randomIndex = Math.floor(Math.random() * imageFileNames.length);
  return imageFileNames[randomIndex];
}



  function generatePosts(numberOfPosts, numberOfUsers) {
    const posts = [];
    for (let i = 1; i <= numberOfPosts; i++) {
      const post = {
        id: i,
        userId: Math.floor(Math.random() * numberOfUsers) + 1,
        username : `username ${i} `,
        image: `../assets/images/${getRandomImageFileName()}`,
        caption: `Post ${i} caption`,
        likes: Math.floor(Math.random() * 100),
        comments: [],
      };
      const numberOfComments = Math.floor(Math.random() * 10);
      for (let j = 1; j <= numberOfComments; j++) {
        const id = Math.floor(Math.random() * numberOfUsers) + 1
        const comment = {
          userId: id,
          username : `username ${id} `,
          text: `Comment ${j} on Post ${i}`,
        };
        post.comments.push(comment);
      }
      posts.push(post);
    }
    return posts;
  }
  
  function generateUsers(numberOfUsers) { 
    const users = [];
    for (let i = 1; i <= numberOfUsers; i++) {
      const user = {
        id: i,
        username: `user${i}`,
        email: `user${i}@example.com`,
        password: `passwordUser${i}`,
        profile_picture: `../assets/images/profilPicture${i}.jpg`,
        followers: [],
        following: [],
        bio: `User ${i} bio`,
        posts: [],
      };
      // generate random number of followers
    const numberOfFollowers = Math.floor(Math.random() * numberOfUsers) + 1;
    for (let j = 1; j <= numberOfFollowers; j++) {
      const followerId = Math.floor(Math.random() * numberOfUsers) + 1;
      if (user.followers.indexOf(followerId) === -1) {
        user.followers.push(followerId);
      }
    }

    // generate random number of users to follow
    const numberOfFollowing = Math.floor(Math.random() * numberOfUsers) + 1;
    for (let j = 1; j <= numberOfFollowing; j++) {
      const followingId = Math.floor(Math.random() * numberOfUsers) + 1;
      if (user.following.indexOf(followingId) === -1) {
        user.following.push(followingId);
      }
    }

    // generate random number of posts
    const numberOfPosts = Math.floor(Math.random() * 100);
    for (let j = 1; j <= numberOfPosts; j++) {
      const postId = Math.floor(Math.random() * numberOfPosts) + 1;
      if (user.posts.indexOf(postId) === -1) {
        user.posts.push(postId);
      }
    }
      users.push(user);
    }
    return users;
  }

  
  

  const numberOfPosts = 20000;
  const numberOfUsers = 200;
  
  const posts = generatePosts(numberOfPosts, numberOfUsers);
  const users = generateUsers(numberOfUsers);
  
  const data = { posts, users };
  const filePath = path.join(__dirname, '../../db.json');
  
 

  fs.writeFile(filePath, JSON.stringify(data), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Mock data saved to ${filePath}`);
    }
  });
  