"use client"

import { useState } from "react"
import { ChevronUp } from "lucide-react"

export default function ChatAssistant() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [message, setMessage] = useState("")

  return (
    <div className="shadow-lg border-t border-x border-gray-200 rounded-t-lg overflow-hidden">
      <div 
        className="flex items-center justify-between p-4 bg-white cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h2 className="font-medium text-sm flex items-center">
          AI Assistant
        </h2>
        <div className="flex items-center">
          <ChevronUp className={`h-4 w-4 text-gray-500 transition-transform ${isExpanded ? 'rotate-0' : 'rotate-180'}`} />
        </div>
      </div>

      {isExpanded && (
        <div className="border-t bg-white p-4">
          <div className="flex items-center justify-center mb-4">
            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-blue-500">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </div>
          </div>
          
          <h3 className="text-center text-lg font-medium mb-1">How can I help you today?</h3>
          <p className="text-center text-sm text-gray-500 mb-4">Ask me anything about your franchise.</p>
          
          <div className="relative">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full px-4 py-3 pr-10 border rounded-md text-sm"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <path d="m22 2-7 20-4-9-9-4Z"/>
                <path d="M22 2 11 13"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
