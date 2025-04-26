"use client"

import { useState, useEffect } from "react"

export default function FinancialWellbeing() {
  const [franchisees, setFranchisees] = useState(0)
  const targetFranchisees = 20

  useEffect(() => {
    // Animate the count
    const timer = setInterval(() => {
      setFranchisees((prev) => {
        if (prev < targetFranchisees) return prev + 1
        clearInterval(timer)
        return prev
      })
    }, 100)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100">
      <h2 className="text-base font-medium mb-4 p-4">Financial Wellbeing</h2>

      <div className="px-4 mb-4">
        <div className="flex items-center">
          <div>
            <div className="text-2xl font-bold">{franchisees}</div>
            <div className="text-xs text-gray-500">Total Franchisees</div>
          </div>
          <div className="ml-auto bg-green-100 text-green-700 flex items-center px-2 py-0.5 rounded-full text-xs font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3 w-3 mr-0.5"
            >
              <path d="m5 12 7-7 7 7"></path>
              <path d="M12 19V5"></path>
            </svg>
            21%
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 p-4 pt-0">
        <div className="bg-gray-50 p-3 rounded-lg">
          <div className="text-xs text-gray-500 mb-1">Target</div>
          <div className="text-sm font-bold">$500,000</div>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg">
          <div className="text-xs text-gray-500 mb-1">Current</div>
          <div className="text-sm font-bold">$450,000</div>
        </div>
      </div>
    </div>
  )
}
