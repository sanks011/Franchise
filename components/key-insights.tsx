"use client"

import { useState, useEffect } from "react"

export default function KeyInsights() {
  const [growth, setGrowth] = useState(0)
  const targetGrowth = 10

  useEffect(() => {
    const timer = setInterval(() => {
      setGrowth((prev) => {
        if (prev < targetGrowth) return prev + 1
        clearInterval(timer)
        return prev
      })
    }, 100)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-white rounded-xl shadow-sm max-w-sm mx-auto">
      <h2 className="text-lg font-semibold text-gray-800 mb-4 px-6 pt-6">Key Insights & Feedback</h2>
      
      <div className="px-6 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-4xl font-bold text-gray-900">10%</div>
            <div className="text-sm text-gray-600">Sales Growth</div>
          </div>
          <div className="relative">
            <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                <circle cx="12" cy="12" r="10"/>
                <path d="m9 12 2 2 4-4"/>
              </svg>
            </div>
            <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
              #1
            </div>
          </div>
        </div>
        <div className="text-xs text-center bg-blue-100 text-blue-600 py-1 rounded-full mt-2">Top Performer</div>
      </div>

      <div className="px-6 pb-6">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Feedback</h3>
        <div className="bg-blue-50 rounded-lg p-4">
          <div className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-blue-500 mt-0.5 mr-2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            <p className="text-sm text-gray-600">
              Franchisees are requesting more detailed training materials.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}