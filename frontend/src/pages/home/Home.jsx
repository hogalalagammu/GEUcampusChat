import React from "react";
import style from "./home.module.css";
import { useNavigate } from "react-router-dom";

export default function Home() {

  const navigate = useNavigate();

  return (
    <div className={style.homecontainer}>
      {/* Online users badge */}
      <div className={style.onlinebadge}>👥 128 users online</div>

      {/* Main cards */}
      <div className={style.cardscontainer}>
        {/* Video Chat Card */}
        <div className={`${style.card} ${style.videochat}`}>
          <h2>🎥 Video Chat</h2>
          <p>No toxic chats. Respect privacy. Positive vibes only ✨. Enjoy the discussions</p>
          <button className={style.cardbtn} onClick={() => navigate("/videochat")} >Start Video Chat</button>
        </div>

        {/* Community Chat Card */}
        <div className={`${style.card} ${style.communitychat}`}>
          <h2>💬 Community Chat</h2>
          <p>Connect with students. Respect everyone. Safe space for discussions 🏫</p>
          <button className={style.cardbtn} onClick={() => navigate("/chat")}>Join Community Chat</button>
        </div>
      </div>

      {/* FAQ Section */}
      <div className={style.faqsection}>
        <h2>❓ Frequently Asked Questions</h2>
        <details>
          <summary>Is the chat anonymous?</summary>
          <p>Yes, your identity is kept private unless you choose to share it.</p>
        </details>
        <details>
          <summary>Do I need an account?</summary>
          <p>You need a free account to join community chat. Video chat can be guest.</p>
        </details>
        <details>
          <summary>How do I report bad behavior?</summary>
          <p>Use the report button inside chats. Our team reviews all reports quickly.</p>
        </details>
        <details>
          <summary>Is Campus Chat free?</summary>
          <p>Yes, it's completely free for students.</p>
        </details>
      </div>
    </div>
  );
}
