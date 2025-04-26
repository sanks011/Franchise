import Link from "next/link"
import Image from "next/image"
import { Home, FileText, Upload, Store, Laptop, Target, BarChart, Settings, MessageSquare, LogOut } from "lucide-react"

export default function Sidebar() {
  return (
    <div className="w-[220px] bg-[#0a3b50] text-white flex flex-col h-screen">
      <div className="p-6 border-b border-[#0c4a64]">
        <h1 className="font-semibold text-xl">Franchise</h1>
      </div>
      
      <div className="flex-1 py-6">
        <nav className="space-y-1.5">
          <Link href="#" className="flex items-center px-6 py-2.5 text-sm font-medium rounded-none bg-[#0c4a64] text-white">
            <Home className="mr-3 h-5 w-5" />
            Home
          </Link>
          <Link
            href="#"
            className="flex items-center px-6 py-2.5 text-sm font-medium text-gray-300 hover:bg-[#0c4a64] hover:text-white"
          >
            <FileText className="mr-3 h-5 w-5" />
            Stages & Checklist
          </Link>
          <Link
            href="#"
            className="flex items-center px-6 py-2.5 text-sm font-medium text-gray-300 hover:bg-[#0c4a64] hover:text-white"
          >
            <Upload className="mr-3 h-5 w-5" />
            Upload Docs
          </Link>
          <Link
            href="#"
            className="flex items-center px-6 py-2.5 text-sm font-medium text-gray-300 hover:bg-[#0c4a64] hover:text-white"
          >
            <Store className="mr-3 h-5 w-5" />
            Preferred Vendors
          </Link>
          <Link
            href="#"
            className="flex items-center px-6 py-2.5 text-sm font-medium text-gray-300 hover:bg-[#0c4a64] hover:text-white"
          >
            <Laptop className="mr-3 h-5 w-5" />
            Tech Stack
          </Link>
          <Link
            href="#"
            className="flex items-center px-6 py-2.5 text-sm font-medium text-gray-300 hover:bg-[#0c4a64] hover:text-white"
          >
            <Target className="mr-3 h-5 w-5" />
            Targets
          </Link>
          <Link
            href="#"
            className="flex items-center px-6 py-2.5 text-sm font-medium text-gray-300 hover:bg-[#0c4a64] hover:text-white"
          >
            <BarChart className="mr-3 h-5 w-5" />
            Zee Sales Targets
          </Link>
          <Link
            href="#"
            className="flex items-center px-6 py-2.5 text-sm font-medium text-gray-300 hover:bg-[#0c4a64] hover:text-white"
          >
            <Settings className="mr-3 h-5 w-5" />
            MAI Settings
          </Link>
          <Link
            href="#"
            className="flex items-center justify-between px-6 py-2.5 text-sm font-medium text-gray-300 hover:bg-[#0c4a64] hover:text-white"
          >
            <div className="flex items-center">
              <MessageSquare className="mr-3 h-5 w-5" />
              Pending Questions
            </div>
            <span className="bg-white text-[#0a3b50] rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold">
              3
            </span>
          </Link>
        </nav>
      </div>
      
      <div className="p-6 mt-auto">
        <Link
          href="#"
          className="flex items-center px-0 py-2 text-sm font-medium text-gray-300 hover:text-white"
        >
          <LogOut className="mr-3 h-5 w-5" />
          Logout
        </Link>
      </div>
    </div>
  )
}
