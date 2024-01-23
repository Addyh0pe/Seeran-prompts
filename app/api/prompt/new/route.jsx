import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";


export const POST = async (request) => {

   const { userId, prompt, tag } = await request.json();

   try {

      await connectToDB();
      console.log('..creating new prompt')

      const newPrompt = new Prompt({
         creator: userId,
         prompt: prompt,
         tag: tag,
      });

      await newPrompt.save();
      console.log('prompt successfully created')

      return new Response( JSON.stringify(newPrompt), { status : 201 } )

   } catch (error) {

      console.log(error)

   }
   
}