"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function ChatToggle() {
  const [isExpanded, setIsExpanded] = useState(true)

const questions = [
    {
        name: "Phoenix Baker",
        username: "@phoenix.fr",
        time: "5min ago",
        question: "What are the requirements for opening a new store?",
        avatar: "/avatar1.jpg",
    },
    {
        name: "Koray Okumus",
        username: "@koray",
        time: "4hr ago",
        question: "How do I manage inventory effectively?",
        avatar: "/avatar2.jpg",
    },
    {
        name: "Olivia Martinez",
        username: "@olivia.m",
        time: "12hr ago",
        question: "What marketing strategies work best for franchise locations?",
        avatar: "/avatar3.jpg",
    },
]

  return (
    <div className="fixed bottom-0 left-[220px] right-0 z-20">
      {/* Toggle button */}
      <div className="flex justify-center">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-white rounded-t-lg shadow-[0px_-2px_8px_rgba(0,0,0,0.08)] px-4 py-2 flex items-center gap-2"
        >
          <ChevronDown 
            className={`h-5 w-5 text-gray-500 transition-transform ${isExpanded ? 'rotate-0' : 'rotate-180'}`} 
          />
        </button>
      </div>

      {/* Panels container - only visible when expanded */}
      {isExpanded && (
        <div className="flex transition-all duration-300">
          <div className="w-1/2 pr-1.5 pl-6">
            <div className="shadow-lg border-t border-x border-gray-200 rounded-t-lg overflow-hidden">
              <div className="p-4 bg-white">
                <h2 className="font-semibold text-sm flex items-center">
                  Pending Questions
                  <span className="ml-2 bg-blue-500 text-white text-xs px-1.5 py-0.5 rounded">02</span>
                </h2>
              </div>
              <div className="border-t bg-white divide-y max-h-[400px] overflow-y-auto">
                {questions.map((q, index) => (
                  <div key={index} className="flex items-start p-4">
                    <div className="flex-shrink-0 mr-3">
                      <div className="relative">
                        <div className="h-8 w-8 rounded-full overflow-hidden">
                          <img
                            src={q.avatar}
                            alt={q.name}
                            className="object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-full bg-green-500 border-2 border-white"></div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-1">
                        <span className="font-medium text-sm text-gray-900">{q.name}</span>
                        <span className="text-xs text-gray-500 ml-1.5">{q.username}</span>
                        <span className="text-xs text-gray-400 ml-auto">{q.time}</span>
                      </div>
                      <p className="text-sm text-gray-700">{q.question}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-1/2 pl-1.5 pr-6">
            <div className="shadow-lg border-t border-x border-gray-200 rounded-t-lg overflow-hidden">
              <div className="p-4 bg-white">
                <h2 className="font-semibold text-sm flex items-center">
                  AI Chat Assistant
                </h2>
              </div>
              <div className="border-t bg-white p-4">
                <div className="flex items-center justify-center mb-4">
                  <div className="h-12 w-12 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-blue-500">
                      <path d="M15 2C15 2 9 9 9 12C9 15 15 22 15 22M9 2C9 2 15 9 15 12C15 15 9 22 9 22"/>
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-center text-lg font-semibold text-gray-800 mb-1">Welcome to the AI Chat Assistant</h3>
                <p className="text-center text-sm text-gray-500 mb-4">Ask your question here...</p>
                
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Ask your question here..."
                    className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                      <path d="m22 2-7 20-4-9-9-4Z"/>
                      <path d="M22 2 11 13"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}