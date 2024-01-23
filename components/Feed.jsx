'use client';

import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";


const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map( (post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}

const Feed = () => {

  const [searchText, setsearchText] = useState('');
  const [posts, setPosts] = useState([]);

  const handleSearchChange = (event) => {

  };

  useEffect(() => {

    const fetchPosts = async () => {

      console.log('sending request to fetch prompts...');
      const res = await fetch('api/prompt');
      const data = await res.json();

      console.log('prompts recieved');
      setPosts(data)
    };

    fetchPosts();

  }, []);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="search"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>
      <PromptCardList
        data={posts}
        handleTagClick={() => {}}
      />
    </section>
  )

}

export default Feed;