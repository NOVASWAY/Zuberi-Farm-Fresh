"use client"

import { useState } from "react"

export default function ZuberiChatbotClient() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        className="bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        💬
      </button>

      {isOpen && (
        <div className="bg-white border rounded-xl shadow-xl p-4 mt-2 w-80 max-h-[400px] overflow-y-auto">
          <h2 className="text-lg font-bold mb-2">Zuberi Chatbot</h2>
          <p className="text-sm">
            👋 Hi! I’m the Zuberi chatbot. How can I help you today?
          </p>
          <ul className="mt-2 text-sm">
            <li>📍 We're located in Thika.</li>
            <li>📞 Contact Njau: 0712 345 678</li>
            <li>📞 Contact Wangari: 0799 888 777</li>
            <li>🌿 We grow organic fruits & vegetables.</li>
          </ul>
        </div>
      )}
    </div>
  )
}
