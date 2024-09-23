import { useEffect } from "react";
import { useState } from "react";

export default function BlockList() {
  const [postsArray, setPosts] = useState([]);

  useEffect(() => {
    async function fetchBlogPosts() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const posts = await response.json();
        console.log(posts);
        setPosts(posts);
      } catch (error) {
        console.error(error);
      }
    }
    fetchBlogPosts();
  }, []);

  return (
    <>
      {postsArray.map((post) => {
        return (
          <div key={post.id}>
            <p>{post.title}</p>
            <p>{post.body}</p>
          </div>
        );
      })}
    </>
  );
}

//stacking useState does different things

// async useState (default) retaining the old count for next execution
//setCount(count + 1)
//setCount(count + 1)

// sequential useState
//setCount((count) => count + 1)
//setCount((count) => count + 1)
