"use client"

import { useState, useEffect } from "react"

export default function FranchiseesOnboard() {
  const [count, setCount] = useState(0)
  const targetCount = 14

  const stages = [
    { name: "Stage 1 (Initial Inquiry)", count: "02", color: "#0070C0" },
    { name: "Stage 2 (Document Submission)", count: "07", color: "#41B6F9" },
    { name: "Stage 3 (Training)", count: "05", color: "#B3E0FF" },
  ]

  useEffect(() => {
    // Animate the count
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev < targetCount) return prev + 1
        clearInterval(timer)
        return prev
      })
    }, 100)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 max-w-sm mx-auto">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Total Franchisees Onboard</h2>
      
      <div className="flex items-center mb-6">
        <div>
          <div className="text-4xl font-bold text-gray-900">{count}</div>
        </div>
        <div className="ml-3 bg-green-100 text-green-700 flex items-center px-2 py-1 rounded-full text-xs font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3 mr-1">
            <path d="m5 12 7-7 7 7"></path>
            <path d="M12 19V5"></path>
          </svg>
          +7.4%
        </div>
        <div className="ml-auto flex -space-x-2">
          {["/sankalpa.jpg", "/sankalpa.jpg", "/sankalpa.jpg", "/sankalpa.jpg"].map((src, i) => (
            <img
              key={i}
              className="h-6 w-6 rounded-full border-2 border-white"
              src={src}
              alt={`Avatar ${i + 1}`}
            />
          ))}
          <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-gray-200 text-xs font-medium text-gray-700">
            +7
          </div>
        </div>
      </div>

      <div className="space-y-3 mb-6">
        {stages.map((stage, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="h-3 w-3 rounded-full mr-2" style={{ backgroundColor: stage.color }}></div>
              <span className="text-sm text-gray-600">{stage.name}</span>
            </div>
            <span className="text-sm font-medium text-gray-900">{stage.count}</span>
          </div>
        ))}
      </div>

      <div className="px-6 space-y-2">
        {stages.map((stage, index) => {
          const width = (parseInt(stage.count) / targetCount) * 100;
          return (
            <div key={index} className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  backgroundColor: stage.color,
                  width: `${width}%`,
                }}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  )
}