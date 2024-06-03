import Feed from "@components/Feed";


const Home = async () => {

  let posts = []
  
  const res = await fetch( 'http://seeran-prompts.vercel.app/api/prompt', { next: { revalidate: 60 } }, );
  const data = await res.json();

  posts = data

  return (
    <section className="w-full flex-center flex-col">

        <h1 className="head_text text-center">
            Discover And Share 
            <br/>
            <span className="blue_gradient text-center"> AI Powered Prompts</span>
        </h1>

        <p className="desc text-center">
            seeran prompts, an open-source AI prompting tool for modern world to discover, 
            create and share creative prompts
        </p>

        <Feed posts={posts}/>

    </section>
  )
}

export default Home;