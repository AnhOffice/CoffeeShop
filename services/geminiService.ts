import { GoogleGenAI } from "@google/genai";

export async function getSustainabilityTip() {
  const apiKey = (typeof process !== 'undefined' && process.env.API_KEY) || '';
  if (!apiKey) return "Small changes lead to a greener world.";

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: "Give me one short, inspiring sustainability tip related to coffee or home decor (max 15 words). Format as a single sentence.",
    });
    return response.text || "Small changes lead to a greener world.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Crafting beauty from what others leave behind.";
  }
}
