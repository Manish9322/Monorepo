"use client";
import { ArrowRight } from "lucide-react";

export default function AdminPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-7xl font-bold mb-4">ADMIN PANEL</h1>
      <p className="text-xl text-gray-600 max-w-5xl text-center mb-4">
        Access your centralized management console with comprehensive system controls.
        Configure user permissions, monitor application performance, and deploy updates
        seamlessly from this secure dashboard. 
      </p>
       <div className="flex items-center justify-center">
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center bg-black text-white border-black border-2 rounded-full overflow-hidden transition-all duration-500 hover:pr-6 group hover:bg-white hover:text-black"
        >
          <span className="p-2 inline-flex">
            <ArrowRight className="h-6 w-6" />
          </span>
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out font-medium">
            Visit my Git repo
          </span>
        </a>
      </div>
    </div>
  );
}
