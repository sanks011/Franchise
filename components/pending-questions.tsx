"use client"

import Image from "next/image"
import { useState } from "react"
import { ChevronUp } from "lucide-react"

export default function PendingQuestions() {
  const [isExpanded, setIsExpanded] = useState(false)

  const questions = [
    {
      user: "Phoenix Baker",
      username: "@phoenix",
      time: "5min ago",
      question: "What are the requirements for opening a new store?",
      avatar: "/placeholder-user.jpg",
      isOnline: true
    },
    {
      user: "Koray Okumus",
      username: "@koray",
      time: "4hr ago",
      question: "How do I manage inventory effectively?",
      avatar: "/placeholder-user.jpg",
      isOnline: true
    },
  ]

  return (
    <div className="shadow-lg border-t border-x border-gray-200 rounded-t-lg overflow-hidden">
      <div 
        className="flex items-center justify-between p-4 bg-white cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h2 className="font-medium text-sm flex items-center">
          Pending Questions
          <span className="ml-2 bg-blue-500 text-white text-xs px-1.5 py-0.5 rounded">3</span>
        </h2>
        <div className="flex items-center">
          <ChevronUp className={`h-4 w-4 text-gray-500 transition-transform ${isExpanded ? 'rotate-0' : 'rotate-180'}`} />
        </div>
      </div>

      {isExpanded && (
        <div className="border-t bg-white divide-y">
          {questions.map((q, index) => (
            <div key={index} className="flex items-start p-4">
              <div className="flex-shrink-0 mr-3">
                <div className="relative">
                  <div className="h-10 w-10 rounded-full overflow-hidden">
                    <img
                      src={q.avatar}
                      alt={q.user}
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  {q.isOnline && (
                    <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></div>
                  )}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-1">
                  <span className="font-medium text-sm">{q.user}</span>
                  <span className="text-xs text-gray-500 ml-1.5">{q.username}</span>
                  <span className="text-xs text-gray-400 ml-auto">{q.time}</span>
                </div>
                <p className="text-sm text-gray-700">{q.question}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
