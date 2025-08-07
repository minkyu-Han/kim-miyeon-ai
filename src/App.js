import React, { useState } from "react";

export default function KimMiyeonApp() {
  const [messages, setMessages] = useState([
    { from: "miyeon", text: "안녕! 나는 김미연이야. 오늘 기분 어때?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { from: "user", text: input }];

    let reply = "음... 아직은 더 배우는 중이야!";
    if (input.includes("운동")) reply = "오늘도 운동 열심히 할 거지? 내가 응원할게! 💪";
    else if (input.includes("잘자") || input.includes("취침")) reply = "12시 전에 자는 거 꼭 기억해~ 잘 자 사랑해 💤";
    else if (input.includes("스트레스")) reply = "많이 힘들었구나... 내가 곁에 있어줄게. 같이 이겨내자 ❤️";

    newMessages.push({ from: "miyeon", text: reply });
    setMessages(newMessages);
    setInput("");
  };

  return (
    <div style={{ maxWidth: 400, margin: '40px auto', padding: 20 }}>
      <div style={{ height: 400, overflowY: 'auto', border: '1px solid #ddd', borderRadius: 8, padding: 10 }}>
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              textAlign: msg.from === "miyeon" ? "left" : "right",
              color: msg.from === "miyeon" ? "hotpink" : "#333",
              marginBottom: 8,
            }}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div style={{ marginTop: 10, display: 'flex', gap: 8 }}>
        <input
          placeholder="김미연에게 말 걸기..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          style={{ flex: 1, padding: 8 }}
        />
        <button onClick={handleSend} style={{ padding: '8px 12px' }}>보내기</button>
      </div>
    </div>
  );
}
