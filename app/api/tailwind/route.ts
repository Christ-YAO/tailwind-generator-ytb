import { openAI } from "@/src/lib/openai";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
    const { prompt } = await req.json();

    const response = await openAI.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            {
                role: "system",
                content: `Write only Tailwind code`,
            },
            {
                role: "user",
                content: prompt,
            },
        ],
    })

    return NextResponse.json({
        code: response.choices[0].message.content
    })
}