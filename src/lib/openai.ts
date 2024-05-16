import { OpenAI } from "@ai-sdk/openai";

const openAIey = process.env.OPENAI_API_KEY

if (!openAIey) {
    throw new Error("OPENAI_API_KEY is not defined")
}

export const openAI = new OpenAI({
    apiKey: openAIey,
})