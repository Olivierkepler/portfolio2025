"use client";

import { useState } from "react";
import Education from "./experience/education";
import Professional from "./experience/professional";
import Skills from "./experience/skill";
import Interview from "./experience/interview";

const tabs = ["Education", "Professional", "Skills", "Interview"];

const tabContent = {
  Education: <Education />,
  Professional: <Professional />,
  Skills: <Skills />,
  Interview: <Interview />,
};

export default function ExperienceTabs() {
  const [selectedTab, setSelectedTab] = useState("Education");

  return (
    <section className="w-full py-12">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Experience & Profile</h2>

      <div className="flex justify-center mb-8 gap-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
              selectedTab === tab
                ? "bg-teal-500 text-white"
                : "bg-gray-700 text-gray-200 hover:bg-teal-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="rounded-xl bg-slate-900/40 backdrop-blur-md border border-zinc-800 shadow-md p-6 space-y-4">
        {tabContent[selectedTab as keyof typeof tabContent]}
      </div>
    </section>
  );
}
