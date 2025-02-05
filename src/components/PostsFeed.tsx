import React from "react";
import Post from "@/components/Post";  // Import the Post component

// Example post data (you can dynamically add posts here)
const postsData = [
  {
    username: "jennierubyjane",
    profileImage: "https://assets.puzzlefactory.com/puzzle/383/384/original.jpg",
    postImage: "https://i.pinimg.com/474x/9b/7b/a7/9b7ba703a08a4a4bc4d84260592d1050.jpg",
    heartCount: "1.6M",
    commentCount: "7,177",
    shareCount: "13.3K",
    timeAgo: "11h",
  },
  {
    username: "roses_are_red",
    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNC8vD7js6jU79E2koWs91aCww8sFXwtcMUw&s",
    postImage:[
      "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/2048x1365+0+0/resize/1100/quality/85/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Fdf%2Fb0%2F80b10ea94176bfdd024e70de6d73%2Fapt-rose-brunomars.jpg",
      "https://images.lifestyleasia.com/wp-content/uploads/sites/7/2024/11/13101108/Untitled-design-2024-11-12T170849.678-1600x900.jpg",
      "https://i.pinimg.com/736x/37/21/2f/37212fa45a60a76a315a4deb1f9030c1.jpg",
      "https://6.soompi.io/wp-content/uploads/image/20241123005019_Rose-Bruno-Mars-1.jpg?s=900x600&e=t"
    ],
    heartCount: "456K",
    commentCount: "5,600",
    shareCount: "9.2K",
    timeAgo: "2h",
  },
  {
    username: "lalalalisa_m",
    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfO8zVs8-OS2JiJj9WWPoRszQjCVP-fZ_VzQ&s",
    postImage: "https://wallpapercat.com/w/full/b/1/b/43928-3840x2160-desktop-4k-lisa-wallpaper.jpg",
    heartCount: "400M",
    commentCount: "10K",
    shareCount: "9.2K",
    timeAgo: "4h",
  },
  {
    username: "ireeen_g",
    profileImage: "https://i.imghippo.com/files/MeI2787sw.jpg",
    postImage: "https://i.imghippo.com/files/vA3218HAE.jpg",
    heartCount: "400M",
    commentCount: "10K",
    shareCount: "9.2K",
    timeAgo: "4h",
  }
  // Add more posts if needed
];

const PostsFeed: React.FC = () => (
  <div>
    {postsData.slice(0, 5).map((post, index) => (  // Slice to show up to 5 posts
      <Post
        key={index}  // Unique key for each post
        username={post.username}
        profileImage={post.profileImage}
        postImages={post.postImage}
        heartCount={post.heartCount}
        commentCount={post.commentCount}
        shareCount={post.shareCount}
        timeAgo={post.timeAgo}
      />
    ))}
  </div>
);

export default PostsFeed;
