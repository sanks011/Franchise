"use client"

import { useEffect, useState } from "react"

export default function AccountProgress() {
  const [currentProgress, setCurrentProgress] = useState(0)
  const progress = 85

  // Define completed and remaining steps
  const completedSteps = [
    { name: "Profile Setup", completed: true },
    { name: "Initial Training", completed: true },
    { name: "Legal Documents", completed: true },
  ]

  const remainingSteps = [
    { name: "Financial Integration", completed: false },
    { name: "Final Review", completed: false },
  ]

  useEffect(() => {
    // Animate the progress
    const timer = setTimeout(() => {
      setCurrentProgress(progress)
    }, 100)
    return () => clearTimeout(timer)
  }, [progress])

  const radius = 70
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (currentProgress / 100) * circumference

  return (
    <div className="bg-white max-w-sm mx-auto">
      <h2 className="text-lg font-semibold mb-4 px-6 pt-6 text-gray-800">Account Progress</h2>
      
      <div className="flex items-center justify-center my-6">
        <div className="relative w-36 h-36 flex items-center justify-center">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 160 160">
            <circle cx="80" cy="80" r={radius} fill="none" stroke="#e5e7eb" strokeWidth="12" />
            <circle
              cx="80"
              cy="80"
              r={radius}
              fill="none"
              stroke="#279dd4"
              strokeWidth="12"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              style={{ transition: "stroke-dashoffset 1s ease-in-out" }}
            />
          </svg>
          <div className="absolute text-3xl font-bold text-gray-800">{currentProgress}%</div>
        </div>
      </div>

      {/* Steps Completed Section */}
      <div className="px-6 mb-5">
        <div className="bg-blue-50 rounded-lg p-4">
          <h4 className="text-sm font-semibold mb-3 text-gray-700">Steps Completed</h4>
          <div className="space-y-3">
            {completedSteps.map((step, i) => (
              <div key={i} className="flex items-center">
                <div className="w-5 h-5 rounded-full flex items-center justify-center mr-2.5 bg-green-100">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 text-green-600">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-sm text-gray-700">{step.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Steps Remaining Section */}
      <div className="px-6 pb-6">
        <div className="bg-blue-50 rounded-lg p-4">
          <h4 className="text-sm font-semibold mb-3 text-gray-700">Steps Remaining</h4>
          <div className="space-y-3">
            {remainingSteps.map((step, i) => (
              <div key={i} className="flex items-center">
                <div className="w-5 h-5 rounded-full flex items-center justify-center mr-2.5 bg-gray-100">
                  <span className="w-2.5 h-2.5 bg-gray-400 rounded-full"></span>
                </div>
                <span className="text-sm text-gray-700">{step.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}