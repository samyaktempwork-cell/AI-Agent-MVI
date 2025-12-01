import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage(e) {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: [...messages, userMsg] })
    });

    const data = await res.json();
    setLoading(false);

    setMessages((prev) => [
      ...prev,
      { role: "model", content: data.answer || "No response" }
    ]);
  }

  return (
    <div style={styles.container}>
      <h2>Cyber Remediator — Gemini Chat</h2>

      <div style={styles.chat}>
        {messages.map((msg, i) => (
            <div
                key={i}
                style={msg.role === "user" ? styles.userBubble : styles.botBubble}
            >
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {msg.content}
                </ReactMarkdown>
            </div>
        ))}

        {loading && <div style={styles.loading}>Thinking...</div>}
      </div>

      <form onSubmit={sendMessage} style={styles.form}>
        <input
          style={styles.input}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about a breach or remediation..."
        />
        <button style={styles.button} disabled={loading}>Send</button>
      </form>
    </div>
  );
}

const styles = {
  container: { maxWidth: 800, margin: "20px auto", fontFamily: "Inter", padding: 20 },
  chat: {
    border: "1px solid #ddd",
    padding: 15,
    minHeight: 350,
    borderRadius: 8,
    marginBottom: 10,
    overflowY: "auto"
  },
  userBubble: {
    background: "#007bff",
    color: "white",
    padding: 10,
    borderRadius: 10,
    marginBottom: 6,
    alignSelf: "flex-end",
    maxWidth: "75%"
  },
  botBubble: {
    background: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    marginBottom: 6,
    maxWidth: "75%"
  },
  loading: { color: "#777", marginBottom: 8 },
  form: { display: "flex", gap: 8 },
  input: { flex: 1, padding: 10, borderRadius: 8, border: "1px solid #ccc" },
  button: { padding: "10px 18px", background: "#000", color: "#fff", borderRadius: 8 }
};
