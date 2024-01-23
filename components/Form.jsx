import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {

  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-center w-full">
        <span className="blue_gradient">{type} Prompt</span>
      </h1>
      <div className="w-full flex justify-center">
        <p className="desc text-center w-full mt-4">
          {type} and share amazing prompts with the world, and let your imagination run wild with 
          any AI-powered platform
        </p>
      </div>
      
      <div className="flex justify-center w-full mb-14">
          <form
          onSubmit={handleSubmit}
          className="mt-10 w-full max-w-3xl flex flex-col gap-7 glassmorphism"
        >
          <label>
            <span className=" font-satoshi font-semibold text-base text-gray-700">
              Your AI prompt
            </span>
          </label>
          <textarea
            value={post.prompt}
            onChange={(event) => setPost({
              ...post, prompt: event.target.value
            })}
            placeholder="write your prompt here"
            required
            className="form_textarea resize-none"
          />
          <label>
            <span className=" font-satoshi font-semibold text-base text-gray-700">
              Tag  {' '}
              <span className=" font-normal">( #product, #webdevelopment, #idea )</span>
            </span>
          </label>
          <input
            value={post.tag}
            onChange={(event) => setPost({
              ...post, tag: event.target.value
            })}
            placeholder="#tag"
            required
            className="form_input"
          />
          <div className="flex-end mx-3 mb-5 gap-4">
            <Link href={'/'}
              className="text-gray-500 text-sm"
            >
              cancel
            </Link>

            {/* create button */}
            <button
              type="submit"
              disabled={submitting}
              className="px-5 py-1.5 text-sm bg-blue-600 rounded-full text-white"
            >
              { submitting ? `${type}...` : type }
            </button>
          </div>
        </form>
      </div>
      
    </section>
  )

};

export default Form;