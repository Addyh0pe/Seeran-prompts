import PromptCard from "./PromptCard";


const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {

  return (

    <section className='w-full'>

      <h1 className='text-center head_text'>
        <span className='blue_gradient'>
          {name} Profile
        </span>
      </h1>

      <div className='w-full flex justify-center'>
        <p className='desc text-center'>{desc}</p>
      </div>

      <div className="mt-10 prompt_layout">
        {data.map( (post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
      
    </section>

  )

}

export default Profile;