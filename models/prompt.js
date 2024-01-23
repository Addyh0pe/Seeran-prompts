import { Schema, model, models } from "mongoose";

const PromptScema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    prompt: {
        type: String,
        required: [true, 'prompt is required'],
    },
    tag: {
        type: String,
        required: [true, 'a tag is required']
    },
});

const Prompt = models.Prompt || model( 'Prompt', PromptScema );

export default Prompt;