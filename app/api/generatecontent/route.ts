import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.API_KEY!);

export async function POST(request: Request) {


   const body = await request.json();
   console.log(body);
   const {prompt} = body;
   const twickedPrompt = prompt + "provide answer in html format so that I can copy and paste the code into my own code. Also use tailwind css to style the texts, paragraphs, tables, etc. Donot unnecessaryly use tags if not needed. And yes donot send ``` and html word in response. Last but not the least provide an accurate answer and answer in format secretly. Donot send response like certainly here's the html generated code containing tailwid, etc."
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      const result = await model.generateContent(twickedPrompt);
      const response = await result.response;
      const text = await response.text();
      // const string = await String(text);


     return NextResponse.json({reply: text});
}
