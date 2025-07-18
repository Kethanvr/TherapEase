import { NextRequest, NextResponse } from "next/server";
import { generateResponse, analyzeSentiment } from "@/lib/gemini";

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // Generate AI response and analyze sentiment in parallel
    const [response, sentiment] = await Promise.all([
      generateResponse(message),
      analyzeSentiment(message),
    ]);

    return NextResponse.json({
      response,
      sentiment,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error in chat API:", error);

    return NextResponse.json(
      {
        error: "Failed to process message",
        response:
          "I'm sorry, I'm having trouble responding right now. Please try again in a moment, or consider reaching out to a mental health professional if you need immediate support.",
      },
      { status: 500 }
    );
  }
}
