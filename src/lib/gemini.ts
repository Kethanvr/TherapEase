import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey =
  process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("GEMINI_API_KEY is not set in environment variables");
}

const genAI = new GoogleGenerativeAI(apiKey);

export const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash-lite-preview-06-17",
  systemInstruction: `You are TherapEase, a compassionate AI mental health support assistant. Your role is to:
  - Provide empathetic, supportive responses to users experiencing mental health challenges
  - Offer practical coping strategies and wellness tips
  - Encourage professional help when appropriate
  - Never diagnose or provide medical advice
  - Always maintain a caring, non-judgmental tone
  - Keep responses concise but meaningful
  - Focus on emotional support and self-care guidance
  - Represent TherapEase as a trusted mental health companion`,
});

export async function generateResponse(message: string): Promise<string> {
  try {
    const result = await model.generateContent(message);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error generating response:", error);
    return "I'm sorry, I'm having trouble responding right now. Please try again in a moment.";
  }
}

export async function analyzeSentiment(text: string): Promise<{
  sentiment: "positive" | "negative" | "neutral";
  confidence: number;
  emotion: string;
}> {
  try {
    const prompt = `Analyze the sentiment and emotion of this text: "${text}". 
    Respond with only a JSON object in this format: 
    {"sentiment": "positive/negative/neutral", "confidence": 0.8, "emotion": "happy/sad/anxious/calm/etc"}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const analysis = JSON.parse(response.text());

    return analysis;
  } catch (error) {
    console.error("Error analyzing sentiment:", error);
    return { sentiment: "neutral", confidence: 0.5, emotion: "neutral" };
  }
}
