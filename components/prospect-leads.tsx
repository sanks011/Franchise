"use client"

import Image from "next/image"

export default function ProspectLeads() {
  const leads = [
    { 
      name: "Sankalpa Sarkar", 
      stage: "Initial Inquiry", 
      avatar: "/sankalpa.jpg" 
    },
    { 
      name: "Ava Wright", 
      stage: "Initial Inquiry", 
      avatar: "/avatar2.jpg"
    },
    { 
      name: "Cody Fisher", 
      stage: "Initial Inquiry", 
      avatar: "/avatar3.jpg"
    },
  ]

  return (
    <div className="bg-white rounded-xl shadow-sm max-w-sm mx-auto">
      <h2 className="text-lg font-semibold text-gray-800 mb-4 px-6 pt-6">Prospect Leads</h2>
      
      <div className="px-6 pb-6">
        <div className="space-y-4">
          {leads.map((lead, index) => (
            <div key={index} className="flex items-center">
              <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                <img
                  src={lead.avatar}
                  alt={lead.name}
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-900">{lead.name}</div>
              </div>
              <div className="text-xs text-gray-500">Stage: {lead.stage}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}