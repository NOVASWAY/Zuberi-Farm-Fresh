'use client'

import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'

export default function ChatbaseChatbot() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
        aria-label="Toggle chatbot"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-full sm:w-96 h-[700px] bg-white dark:bg-gray-800 rounded-lg shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
          <div className="bg-green-600 text-white p-4 flex justify-between items-center">
            <h3 className="font-semibold">Chat with Us</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
              aria-label="Close chatbot"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="h-full" style={{ minHeight: '700px' }}>
            <iframe
              src="https://www.chatbase.co/chatbot-iframe/xvYYkH-lfMIV_J-cbcAZ6"
              width="100%"
              height="100%"
              style={{ 
                height: '100%', 
                minHeight: '700px',
                border: 'none'
              }}
              frameBorder="0"
              title="Zuberi Fresh Farm Chatbot"
              allow="microphone; camera"
            />
          </div>
        </div>
      )}
    </div>
  )
}

