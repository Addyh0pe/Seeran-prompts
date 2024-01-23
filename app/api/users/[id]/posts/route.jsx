import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";


export const GET = async (request, { params }) => {

    try {

        await connectToDB();
        console.log('connected to the database')

        console.log('fetching user prompts...')
        const prompts = await Prompt.find({ creator: params.id }).populate('creator');

        console.log('returning specific user prompts...')
        return new Response(JSON.stringify(prompts), { status : 200 });

    } catch (error) {

        return new Response( 'Failed to fetch propmts from database' , { status : 500 });

    };

};