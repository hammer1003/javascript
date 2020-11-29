import React, { createContext, useEffect, useState } from "react";

export const LangContext = createContext();

const English = {
  goal: "Goal",
  goal_title: "Our Goal",
  goal_content: "Founded in 2020, Children Social Network is established as an NGO to enable caregivers to help develop children to reach their fullest potential with speed and widest distribution of parental information, skills and knowledge dissemination in a happy, positive, fun and quality assured environment via our SAFE technology platform, pads and other devices.",
  digital: "Digital",
  digital_title: "Digitalization provides Speed, Safe, Quality Assured, Standardized, Green Solutions",
  digital_content_1: "Bridging the massive Digital Divide for needy families in Hong Kong",
  digital_content_2: "Online integrated platform for both schools and homes for teaching, learning and communication citywide",
  digital_content_3: "Standardization for accuracy and service quality assurance and security",
  digital_content_4: "Streamline service enhancement and development, operational efficiency and speed",
  digital_content_5: "Practice-based empirical industrial strength data of service profile, case trajectory in an effective, meaningful and timely manner",
  digital_content_6: "Accountability with voluminous usage data for valuable consistent continuous reporting",
  digital_content_7: "Paperless, sustainable and environmentally friendly",
  digital_content_8: "Multi-lingual support for HK’s Minorities with disabilities",
  axispad: "AxisPad 安心板",
  axispad_title_1a: "The CSN Platform / AxisPads 安心板",
  axispad_title_1b: "Solution for Tier 1 Home Learning",
  axispad_content_1: "Home Learning 0-3 yrs. old",
  axispad_content_1A: "Knowledge & Skills",
  axispad_content_1B: "Chinese Culture and Values",
  axispad_content_2: "Home Learning 3-6 yrs. old",
  axispad_content_2A: "Knowledge & Skills",
  axispad_content_2B: "Chinese Culture and Values",
  axispad_content_3: "Parents’ World",
  axispad_content_3A: "Parental knowledge and skills",
  axispad_content_3B: "Chinese Culture",
  axispad_content_3C: "Chat Room with Experts",
  axispad_title_2a: "The CSN Platform / AxisPads 安心板",
  axispad_title_2b: "Solution for Tier 2&3 IP & OPRS",
  axispad_content_4: "Integrated Program",
  axispad_content_4A: "Main Manual",
  axispad_content_4B: "Parent’s Training",
  axispad_content_5: "Onsite Pre-School Rehabilitation Services",
  axispad_content_5A: "Main Manual",
  axispad_content_5B: "Parent’s Training",
  support:  "Support",
  support_title:  "Support for Tier 1, 2, 3 Children",
  prevention:  "Prevention",
  intervention:  "Intervention",

  tier1:"Tier 1",
  tier1_content_a:"Universal 0-6 Yrs.",
  tier1_content_b:"Parents, Schools, Caregivers",

  tier2:"Tier 2",
  tier2_content_a:"Group Interaction Therapeutic",
  tier2_content_b:"Parents, Schools, Caregivers",

  tier3:"Tier 3",
  tier3_content_a:"Remedial Therapeutic",
  tier3_content_b:"Parents, Schools, Caregivers",

  children_social_network:"Children Social Network",

  suspension: "Class Suspension",
  suspension_title: "Classroom Suspension cannot be Learning Suspension",
  suspension_content_1: "Avoid compromising quality education because of Pandemic and short changing this generation of 0-6 yrs old",
  suspension_content_2: "To provide education and support beyond physical premises and distance",
  suspension_content_3: "To provide learners additional home learning environment besides traditional school setting",
  suspension_content_4: "Professionals work closely, collaboratively and timely with students/parents to achieve the best outcomes for the children",
  suspension_content_5: "Always mindful to offer safe, fun, age appropriate, interesting and quality curriculum",

  suspension_title_1: "Faster & Wider Distribution",
  suspension_title_2: "Bridging the Digital Divide",
  suspension_title_3: "On CSN Platform",

  suspension_school: "Whether at School...",
  suspension_school_1: "Distribute AxisPads to children/parents",
  suspension_school_2: "Capturing usage data for research…continuous improvement",

  suspension_home: "Or at Home...",
  suspension_home_1: "Capturing usage data for research…continuous improvement",
  suspension_home_2: "A SAFE secured stable platform",
  suspension_home_3: "Helping Parents to be Teachers",
  suspension_home_4: "Fun-time at home with game based learning",

  suspension_back: "*A Magical AxisPad for all Children in the hands of Parents & Caregivers",

  ready_to_market: "Ready to Market",

  ready_to_market_title: "Specially Customised for Service Delivery Organisations",

  ready_to_market_content_1: "Exclusive use of our 21st century technology platform for distributing child caring content service provision.",
  ready_to_market_content_2: "Bringing multi-media channels and applications through television, mobile applications and the Internet.",
  ready_to_market_content_3: "Enable transition from a manual labour intensive administration to a modernized, digitalized and automated administration on a future-proof platform.",
  ready_to_market_content_4: "Enable reaching beneficiary groups efficiently expediently and cost effectively",

  company: "Children Social Network",
  update: "Last updated 5 Oct, 20",
  copyright: "© Copyright 2018-2020",
  construction_1: "THIS SITE IS UNDER CONSTRUCTION",
  construction_2: "KINDLY VISIT US AGAIN AFTER 8 OCTOBER 2020 FOR MORE DETAIL"
};

const ZhongWen = {
  goal: "目標",
  goal_title: "我們的目標",
  goal_content: "童心網絡有限公司是一家於2020年成立的非政府組織。致力讓照料者透過我們的SAFE技術平台、平板設備及其他儀器，在愉快有趣、正面高質素環境下迅速接收多方面的親子資訊、技能和傳播知識，協助小孩發揮最大潛能。",
  digital: "數字化",
  digital_title: "數碼化帶來速度、安全、質素保證、制定標準、綠色生活",
  digital_content_1: "為香港基層家庭彌補龐大的「數碼鴻溝」",
  digital_content_2: "隨時隨地在學校和家庭登入涵蓋教學、學習和交流之網上綜合平台",
  digital_content_3: "為精確度制定標準，保證服務質素及安全",
  digital_content_4: "精簡服務的改良及發展、流暢運作和速度",
  digital_content_5: "基於實踐經驗，以顯著有意義和及時的方式，強化服務結構、探察軌跡",
  digital_content_6: "利用大量應用數據建立可信性，提供有價值、一致而持續的報告",
  digital_content_7: "無紙化，推動環保及可持續發展",
  digital_content_8: "為香港少數族裔人士提供多國語言支援",
  axispad: "AxisPad 安心板",
  axispad_title_1a: "童心網絡有限公司(CSN)平台/AxisPads安心板",
  axispad_title_1b: "第1階段在家學習方案",
  axispad_content_1: "0-3歲幼兒在家學習",
  axispad_content_1A: "知識與技能",
  axispad_content_1B: "中國文化與價值觀",
  axispad_content_2: "3-6歲幼童在家學習",
  axispad_content_2A: "知識與技能",
  axispad_content_2B: "中國文化與價值觀",
  axispad_content_3: "家長世界",
  axispad_content_3A: "家長知識和技能",
  axispad_content_3B: "中國文化",
  axispad_content_3C: "與專家對話聊天室",
  axispad_title_2a: "童心網絡有限公司(CSN)平台/ AxisPads安心板",
  axispad_title_2b: "第二及第三階段在家學習方案",
  axispad_content_4: "兼收計劃（IP）",
  axispad_content_4A: "指南手冊",
  axispad_content_4B: "家長課程",
  axispad_content_5: "到校學前康復服務 （OPRS）",
  axispad_content_5A: "主要手冊",
  axispad_content_5B: "家長課程",

  support:"支援兒童",
  support_title:  "對各階段兒童的支援",
  prevention:  "預防教育",
  intervention:  "介入療育",

  tier1:"第一階段",
  tier1_content_a:"0-6歲",
  tier1_content_b:"家長、學校、照料者",

  tier2:"第二階段",
  tier2_content_a:"小組互動療法",
  tier2_content_b:"家長、學校、照料者",

  tier3:"第三階段",
  tier3_content_a:"輔導療法",
  tier3_content_b:"家長、學校、照料者",

  children_social_network:"兒童社交網絡",

  suspension: "停課不停學",

  suspension_content_1: "避免因疫情而影響優質教育、忽略這一代0-6歲的幼童",
  suspension_content_2: "不受距離及實際界限束縛，提供教育和支援",
  suspension_content_3: "為學生提供有別於傳統學校模式的在家學習環境",
  suspension_content_4: "專業人士與學生/家長緊密即時合作，為孩子們獲取最佳成效",
  suspension_content_5: "時刻謹記提供安全好玩、適齡有趣的優質課程",

  suspension_title_1: "童心網絡有限公司(CSN)平台",
  suspension_title_2: "可更快更廣泛傳達",
  suspension_title_3: "彌補「數碼鴻溝」",

  suspension_school: "不論在學校...",
  suspension_school_1: "提供安心板予兒童或父母",
  suspension_school_2: "研究收集到的應用數據，不斷改進",

  suspension_home: "或是在家...",
  suspension_home_1: "鼓勵孩子在家裡使用安心板",
  suspension_home_2: "安全穩定的平台",
  suspension_home_3: "協助父母充當老師",
  suspension_home_4: "在家亦可從遊戲中學習，寓學習於娛樂",

  suspension_back:"*由父母和照料者作主、適用於所有兒童的神奇AxisPad",

  ready_to_market: "即將推出",

  ready_to_market_title: "特別為服務提供組織定制",

  ready_to_market_content_1: "獨家透過我們21世紀技術平台發佈照顧兒童服務信息",
  ready_to_market_content_2: "在電視、手機程式和網絡上提供多媒體頻道和APP",
  ready_to_market_content_3: "在新技術平台上實現從需大量人力的模式邁向現代數碼化自動管理的過程",
  ready_to_market_content_4: "方便有效、並符合成本效益接觸受益群眾",

  
  company: "童心網絡有限公司",
  update: "更新時間：20年10月5日",
  copyright: "© 版權保留 2018-2020",
  construction_1: "本網站正在建設中",
  construction_2: "請在2020年10月8日之後再次訪問我們以獲取更多詳細信息"
};

const LangContextProvider = (props) => {
  const [langChange, setLangChange] = useState(
    localStorage.getItem("SelectLanguage")
  );
  const [en] = useState(English);
  const [zh] = useState(ZhongWen);

  const changeLange = (param) => {
    setLangChange(param);
  };

  useEffect(() => {
    localStorage.setItem("SelectLanguage", langChange);
  }, [langChange, setLangChange]);
  return (
    <LangContext.Provider value={{ en, zh, langChange, changeLange }}>
      {props.children}
    </LangContext.Provider>
  );
};

export default LangContextProvider;
