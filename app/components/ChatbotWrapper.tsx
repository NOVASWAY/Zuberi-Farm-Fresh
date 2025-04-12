'use client';

import dynamic from 'next/dynamic';

const ZuberiChatbot = dynamic(() => import('@/components/ZuberiChatbot'), { 
  ssr: false 
});

export default function ChatbotWrapper() {
  return <ZuberiChatbot />;
} 