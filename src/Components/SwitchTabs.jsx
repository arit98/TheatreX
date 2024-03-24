import React, { useState } from "react";

const SwitchTabs = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [left, setLeft] = useState(0);

  const handleTabClick = (index) => {
    setSelectedTab(index);
    if (onTabChange) {
      onTabChange(index);
    }
    // bg left or right calc
    const tabWidth = 100 / data.length;
    setLeft(index * tabWidth);
  };

  return (
    <div className="switchingTabs w-[100px] h-[34px] bg-white rounded-2xl p-[2px] relative">
      <div className="tabItems flex items-center h-[30px] relative overflow-hidden">
        {data.map((tab, index) => (
          <span
            key={index}
            className={`tabItem h-full flex items-center justify-center w-full text-sm relative z-10 cursor-pointer transition-[color ease 0.3s] active:text-white ${
              selectedTab === index ? "text-white font-semibold" : ""
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab}
          </span>
        ))}
        <span
          className="movingBg h-[30px] w-1/2 rounded-2xl bg-gradient-to-r from-[#76ABAE] to-[#78A083] absolute left-0 transition-all"
          style={{ left: `${left}%` }}
        ></span>
      </div>
    </div>
  );
};

export default SwitchTabs;
