"use client";

import { ArrowRight } from "lucide-react";

export default function CrmPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-7xl font-bold mb-4">CRM PANEL</h1>
      <p className="text-xl text-gray-600 max-w-5xl text-center mb-4">
        Welcome to our comprehensive Customer Relationship Management system. Efficiently
        organize contacts, track interactions, and manage your sales pipeline with
        intuitive tools designed for productivity.
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
