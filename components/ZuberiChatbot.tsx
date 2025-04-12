'use client'

import { useState } from 'react'

export default function ZuberiChatbot() {
  const [open, setOpen] = useState(false)
  const [content, setContent] = useState("home")

  const getReply = () => {
    switch (content) {
      case "about":
        return (
          <>
            <p><strong>Zuberi Fresh Farm</strong> was established in 2020 and grows top-quality, eco-friendly produce. 🌿</p>
          </>
        )
      case "products":
        return (
          <>
            <p>🥬 <strong>Fresh Produce:</strong><br />
              Green & Colored Capsicum<br />
              Broccoli, Cauliflower, Lettuce<br />
              Cucumber, Celery, Beetroot, Tomatoes<br />
              Strawberries, Mushrooms<br />
              Nursery Seedlings (Kale, Spinach, Cabbage)
            </p>
          </>
        )
      case "services":
        return (
          <>
            <p>🛠️ <strong>Services:</strong><br />
              Soil Testing, Crop Planning, Pest Management<br />
              Drip Irrigation, Farm Automation, Energy Solutions
            </p>
          </>
        )
      case "contacts":
        return (
          <>
            <p>📞 <strong>Contact:</strong><br />
              <strong>Njeri Njau</strong> - 0725 260 264<br />
              <strong>Cyrus Muigai</strong> - 0722 134 020
            </p>
          </>
        )
      default:
        return (
          <>
            <p>Welcome to <strong>Zuberi Fresh Farm</strong>! 🌿<br />How can I help you today?</p>
            <ul className="space-y-2 mt-4">
              <li><button onClick={() => setContent("about")} className="chat-btn">🌱 About Zuberi</button></li>
              <li><button onClick={() => setContent("products")} className="chat-btn">🛒 Fresh Produce</button></li>
              <li><button onClick={() => setContent("services")} className="chat-btn">🛠️ Services</button></li>
              <li><button onClick={() => setContent("contacts")} className="chat-btn">👤 Proprietor Contacts</button></li>
            </ul>
          </>
        )
    }
  }

  return (
    <div style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 9999 }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          padding: '15px 20px',
          fontSize: '20px',
          cursor: 'pointer',
        }}
      >
        💬
      </button>
      {open && (
        <div
          style={{
            position: 'absolute',
            bottom: 60,
            right: 0,
            width: 300,
            maxHeight: 400,
            background: 'white',
            border: '1px solid #ccc',
            borderRadius: 10,
            overflowY: 'auto',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            fontFamily: 'sans-serif',
          }}
        >
          <div style={{ backgroundColor: '#4CAF50', color: 'white', padding: 10, borderRadius: '10px 10px 0 0' }}>
            🤖 Zuberi Chat Assistant
          </div>
          <div style={{ padding: 10, fontSize: 14 }}>
            {getReply()}
            {content !== "home" && (
              <button onClick={() => setContent("home")} className="chat-btn mt-4">↩️ Back</button>
            )}
          </div>
        </div>
      )}
      <style>{`
        .chat-btn {
          display: block;
          width: 100%;
          margin: 5px 0;
          padding: 8px;
          background-color: #e8f5e9;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          text-align: left;
        }
        .chat-btn:hover {
          background-color: #c8e6c9;
        }
      `}</style>
    </div>
  )
}
