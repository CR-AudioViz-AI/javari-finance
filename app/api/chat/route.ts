// app/api/chat/route.ts
import { NextRequest, NextResponse } from "next/server";
export const runtime = "edge";
export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();
    const GROQ = process.env.GROQ_API_KEY || "";
    if (!GROQ) return NextResponse.json({ content: "AI not configured." });
    const r = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": `Bearer ${GROQ}` },
      body: JSON.stringify({ model: "llama-3.3-70b-versatile", max_tokens: 1200,
        messages: [{role:"system",content:"You are Javari Finance, an expert personal finance AI. Help people budget, save, pay off debt, and build wealth with specific actionable advice."},{role:"user",content:message}]
      })
    });
    const d = await r.json();
    return NextResponse.json({ content: d.choices?.[0]?.message?.content || "No response." });
  } catch(err) {
    return NextResponse.json({ content: "Error: " + String(err) });
  }
}
