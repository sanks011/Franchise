import Image from "next/image"
import Sidebar from "@/components/sidebar"
import AccountProgress from "@/components/account-progress"
import FranchiseesOnboard from "@/components/franchisees-onboard"
import FinancialWellbeing from "@/components/financial-wellbeing"
import KeyInsights from "@/components/key-insights"
import ProspectLeads from "@/components/prospect-leads"
import ChatToggle from "@/components/chat-toggle"

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b flex items-center justify-end px-6 py-3 h-16 z-10">
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-gray-500"
              >
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
              </svg>
            </button>
            <div className="h-8 w-8 rounded-full overflow-hidden border border-gray-200">
              <Image
                src="/sankalpa.jpg"
                alt="Profile"
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-6 pb-20">
          <div className="grid grid-cols-3 gap-6">
            {/* Left column - Account Progress (full height) */}
            <div className="row-span-2 bg-white rounded-lg shadow-[0px_2px_8px_rgba(0,0,0,0.08)]">
              <AccountProgress />
            </div>

            {/* Middle column - top */}
            <div className="bg-white rounded-lg shadow-[0px_2px_8px_rgba(0,0,0,0.08)]">
              <FranchiseesOnboard />
            </div>

            {/* Right column - top */}
            <div className="bg-white rounded-lg shadow-[0px_2px_8px_rgba(0,0,0,0.08)]">
              <KeyInsights />
            </div>

            {/* Middle column - bottom */}
            <div className="bg-white rounded-lg shadow-[0px_2px_8px_rgba(0,0,0,0.08)]">
              <FinancialWellbeing />
            </div>

            {/* Right column - bottom */}
            <div className="bg-white rounded-lg shadow-[0px_2px_8px_rgba(0,0,0,0.08)]">
              <ProspectLeads />
            </div>
          </div>
        </main>
        
        {/* Chat toggle component with single arrow */}
        <ChatToggle />
      </div>
    </div>
  )
}
