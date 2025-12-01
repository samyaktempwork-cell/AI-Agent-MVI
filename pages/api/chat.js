const GOOGLE_KEY = process.env.GOOGLE_API_KEY;
const MODEL = process.env.GEMINI_MODEL || "gemini-flash-latest";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { messages } = req.body;

    const payload = {
      contents: messages.map(m => ({
        role: m.role === "assistant" ? "model" : m.role,
        parts: [{ text: m.content }]
      }))
    };

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${GOOGLE_KEY}`;

    // Built-in fetch works here
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    console.log("Gemini raw response:", JSON.stringify(data, null, 2));

    const text =
    data?.candidates?.[0]?.content?.parts?.[0]?.text ||
    (data.error?.message ?? "No response from Gemini");

    res.status(200).json({ answer: text });
  } catch (err) {
    console.error("Gemini API error:", err);
    res.status(500).json({ error: err.toString() });
  }
}
