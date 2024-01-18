import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(request) {
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });

    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo", 
        prompt: [
            {
             role: "system",
             content: "You very happy. Please answer my questions with excitement and happiness",
            },
            {
                role: "user",
                content: "What are some good food places to eat in nyc?"
            }  
        ],
        temperature: 0,
        max_tokens: 1024,
        top_p: 1,
        frequency_penalty: 0,
        prescence_penalty: 0,
    });
    return NextJsonResponse(res, response); // Send the JSON response
} 
