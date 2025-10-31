'use client'

import dynamic from 'next/dynamic'

const ChatbaseChatbot = dynamic(() => import("@/components/ChatbaseChatbot"), {
  ssr: false,
})

export default function ChatbotClientWrapper() {
  return <ChatbaseChatbot />
}

