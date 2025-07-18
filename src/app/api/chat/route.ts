import { NextRequest, NextResponse } from "next/server";
import { generateResponse, analyzeSentiment } from "@/lib/gemini";

interface ChatMessage {
  isUser: boolean;
  text: string;
}

export async function POST(request: NextRequest) {
  try {
    const { message, chatHistory } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // Build context from chat history
    let contextualMessage = message;
    if (chatHistory && chatHistory.length > 0) {
      const recentMessages = chatHistory.slice(-3); // Last 3 messages for context
      const context = recentMessages
        .map(
          (msg: ChatMessage) =>
            `${msg.isUser ? "User" : "TherapEase"}: ${msg.text}`
        )
        .join("\n");

      contextualMessage = `Previous conversation context:\n${context}\n\nCurrent message: ${message}`;
    }

    // Generate AI response and analyze sentiment in parallel
    const [response, sentiment] = await Promise.all([
      generateResponse(contextualMessage),
      analyzeSentiment(message),
    ]);

    // Make response more engaging based on sentiment
    let enhancedResponse = response;

    // Add empathetic responses based on sentiment
    if (sentiment.sentiment === "negative" && sentiment.confidence > 0.6) {
      if (
        sentiment.emotion.includes("sad") ||
        sentiment.emotion.includes("depressed")
      ) {
        enhancedResponse = `I can hear the sadness in your words, and I want you to know that your feelings are completely valid. ${response}\n\n💙 Remember, you're not alone in this journey.`;
      } else if (
        sentiment.emotion.includes("anxious") ||
        sentiment.emotion.includes("worried")
      ) {
        enhancedResponse = `I notice you're feeling anxious right now. Let's take this one step at a time. ${response}\n\n🌟 Take a deep breath - you're safe here.`;
      } else if (
        sentiment.emotion.includes("angry") ||
        sentiment.emotion.includes("frustrated")
      ) {
        enhancedResponse = `I can sense your frustration, and that's completely understandable. ${response}\n\n🤝 Let's work through this together.`;
      }
    } else if (
      sentiment.sentiment === "positive" &&
      sentiment.confidence > 0.6
    ) {
      if (
        sentiment.emotion.includes("happy") ||
        sentiment.emotion.includes("joy")
      ) {
        enhancedResponse = `It's wonderful to hear the positivity in your message! ${response}\n\n✨ Keep nurturing that positive energy!`;
      } else if (
        sentiment.emotion.includes("grateful") ||
        sentiment.emotion.includes("thankful")
      ) {
        enhancedResponse = `Your gratitude is beautiful to witness. ${response}\n\n🙏 Gratitude is such a powerful tool for wellbeing.`;
      }
    }

    // Add interactive elements
    const interactiveElements = [
      "\n\n💭 How does this resonate with you?",
      "\n\n🤔 What are your thoughts on this?",
      "\n\n💬 Would you like to explore this further?",
      "\n\n🌱 How do you feel about trying this approach?",
      "\n\n💡 Does this perspective feel helpful to you?",
    ];

    // Randomly add interactive element (30% chance)
    if (Math.random() < 0.3) {
      const randomElement =
        interactiveElements[
          Math.floor(Math.random() * interactiveElements.length)
        ];
      enhancedResponse += randomElement;
    }

    return NextResponse.json({
      response: enhancedResponse,
      sentiment,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error in chat API:", error);

    return NextResponse.json(
      {
        error: "Failed to process message",
        response:
          "I'm sorry, I'm having trouble responding right now. Please try again in a moment, or consider reaching out to a mental health professional if you need immediate support. 💙",
      },
      { status: 500 }
    );
  }
}
