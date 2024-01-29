import PromptCard from "./PromptCard";

export const dynamic = 'force-dynamic'

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

const Feed = ({ posts }) => {
  
  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="search"
          required
          className="search_input peer"
        />
      </form>
      <PromptCardList
        data={posts}
      />
    </section>
  )
}

export default Feed;
