"use client";

// 서류관리 화면
// 담당자(담당 브랜치): yerim

import { useState } from "react";
import MozipLayout from "../mozipFormCreate/MozipLayout/MozipLayout";
import MozipTabs from "../mozipFormCreate/MozipTabs/MozipTabs";
import MozipManageDocument from "./MozipManageBlocks/MozipManageDocument";
import MozipManageInterview from "./MozipManageBlocks/MozipManageInterview";
import MozipManagePassOrFail from "./MozipManageBlocks/MozipManagePassOrFail";

export default function Home() {
  const [activeTab, setActiveTab] = useState("서류 관리");

  const renderContent = () => {
    switch (activeTab) {
      case "서류 관리":
        return <MozipManageDocument />;
      case "면접 관리":
        return <MozipManageInterview />;
      case "합불 관리":
        return <MozipManagePassOrFail />;
      default:
        return null;
    }
  };

  return (
    <MozipLayout>
      <MozipTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {renderContent()}
    </MozipLayout>
  );
}
