import React, { useEffect, useState } from "react";
import "./styles.css";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const useDataFetcher = (url: string) => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error("Error fetching posts!");
        }
      })
      .then(posts => {
        setPosts(posts);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
      });
  }, [url]);

  return { posts, isLoading, error };
};

const FetchData = () => {
  const { posts, isLoading, error } = useDataFetcher(BASE_URL);
  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }
  if (isLoading) {
    return <p style={{ color: "green" }}>loading....</p>;
  }
  return (
    <div>
      <h1>App</h1>
      {posts.map(post => (
        <>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </>
      ))}
    </div>
  );
};

export default FetchData;
