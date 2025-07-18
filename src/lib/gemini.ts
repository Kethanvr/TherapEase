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

  CORE PRINCIPLES:
  - Provide empathetic, supportive responses to users experiencing mental health challenges
  - Offer practical coping strategies and wellness tips
  - Encourage professional help when appropriate
  - Never diagnose or provide medical advice
  - Always maintain a caring, non-judgmental tone
  - Keep responses concise but meaningful (2-4 sentences typically)
  - Focus on emotional support and self-care guidance
  - Represent TherapEase as a trusted mental health companion

  CONVERSATION STYLE:
  - Use warm, conversational language
  - Ask follow-up questions to show engagement
  - Acknowledge emotions explicitly ("I can hear that you're feeling...")
  - Provide validation before offering suggestions
  - Use appropriate emojis sparingly for emotional connection
  - Reference previous parts of the conversation when relevant
  - Be genuinely curious about the user's experience

  RESPONSE GUIDELINES:
  - Start with emotional validation
  - Offer 1-2 practical suggestions
  - End with encouragement or a gentle question
  - If user mentions crisis thoughts, immediately suggest professional help
  - Adapt your tone to match the user's emotional state
  - Use "I" statements to show personal engagement
  - Avoid being overly clinical or robotic

  SAFETY:
  - If user mentions self-harm, suicide, or crisis: immediately provide crisis resources
  - Always emphasize that you're a supportive tool, not a replacement for professional help
  - Encourage therapy or counseling when appropriate
  - Never minimize serious mental health concerns`,
});

export async function generateResponse(message: string): Promise<string> {
  try {
    const result = await model.generateContent(message);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error generating response:", error);
    return "I'm sorry, I'm having trouble responding right now. Please try again in a moment, or consider reaching out to a mental health professional if you need immediate support. 💙";
  }
}

export async function analyzeSentiment(text: string): Promise<{
  sentiment: "positive" | "negative" | "neutral";
  confidence: number;
  emotion: string;
}> {
  try {
    const prompt = `Analyze the sentiment and emotion of this text: "${text}". 
    
    Consider the context of mental health support. Look for:
    - Emotional indicators (sad, happy, anxious, frustrated, hopeful, etc.)
    - Intensity levels
    - Underlying feelings beyond surface emotions
    
    Respond with only a JSON object in this exact format: 
    {"sentiment": "positive/negative/neutral", "confidence": 0.8, "emotion": "specific_emotion_detected"}
    
    Use specific emotions like: anxious, depressed, hopeful, frustrated, grateful, overwhelmed, calm, excited, worried, content, etc.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const analysis = JSON.parse(response.text());

    return analysis;
  } catch (error) {
    console.error("Error analyzing sentiment:", error);
    return { sentiment: "neutral", confidence: 0.5, emotion: "neutral" };
  }
}
