import React, { createContext, useEffect, useState } from "react";

export const LangContext = createContext();

const English = {
  home_content:
    "EYEMAX GROUP COVERS VR | AR | MR PRODUCT SALES, TECHNICAL SERVICES, SOFTWARE DEVELOPMENT, PROVIDING CUSTOMER REQUIREMENTS FOR INNOVATIVE TECHNOLOGY SOLUTIONS",
  about: "ABOUT US",
  about_company: "COMPANY",
  about_company_location: "HOME > ABOUT US > COMPANY",
  about_company_a:
    "Eyemax Eye Technology Co., Ltd. is the first company in China, Hong Kong and Taiwan to synchronize 'wearing virtual reality glasses' and 'virtual reality body machine'. In addition to the application of mobile phones and table machines, Eyemax Technology Co., Ltd. extends it to the body. In the application of the sense, through the visual and the somatosensory machine, while the film is playing, the effect is multiplied, and the multiplication effect between the two completely leads the experiencer into the space-time interlacing of the virtual reality. 'VR Virtual Reality' is a virtual world that uses a computer to simulate a three-dimensional space. Through a special wearable device (virtual reality glasses), people seem to enter the real world. In this three-dimensional space, the experience is not only the experience. It can follow the movement and can also shuttle and interact through the joystick.",
  about_company_b:
    "Eyemax Eye Technology Co., Ltd. has been committed to the application and development of virtual reality competition. Taiwan's first 'Eyemax Virtual Reality Experience Hall' was established in Taichung's Fengjia Business Circle, realizing a true 'human-machine experience'. The sense of the body, let the experiencer truly feel the shocking power brought by the virtual reality! In the future, Eyemax Technology Co., Ltd. will continue to explore more virtual reality goods, provide a dedicated platform, diversified channels, and create a convenient personal consumer market.",
  about_culture: "CULTURE",
  about_culture_location: "HOME > ABOUT US > CULTURE",

  about_culture_vision: "CORPORATE VISION: ",
  about_culture_vision_content:
    "CREATE WELL-KNOWN MANUFACTURERS, SUPPLIERS OF REAL EQUIPMENT FOR VIRTUAL REALITY",

  about_culture_spirit: "ENTREPRENEURIAL SPIRIT: ",
  about_culture_spirit_content:
    "EXCELLENT QUALITY, INSISTS ON INNOVATION-DRIVEN TO LEAD THE FUTURE OF THE INDUSTRY.",

  about_culture_value: "CORE VALUE: ",
  about_culture_value_content: "INTEGRITY PROFESSIONAL QUALITY INNOVATION",

  about_culture_philosophy: "CULTURAL PHILOSOPHY: ",
  about_culture_philosophy_content:
    "PEOPLE-ORIENTED, HONEST OPERATION, WIN-WIN COOPERATION",

  about_culture_service: "SERVICE PHILOSOPHY: ",
  about_culture_service_content:
    "PROVIDE COMPLETE IMPLEMENTATION SOLUTIONS AND SERVICES, WITH CUSTOMER SATISFACTION AS THE ULTIMATE GOAL",

  about_culture_adv: "CORE ADVANTAGES: ",

  about_culture_adv_soft:
    "INDEPENDENT SOFTWARE DEVELOPMENT - HAVE AN EXCELLENT SOFTWARE DEVELOPMENT TEAM, CAN COMPLETE CUSTOMER'S ECONOMIC, UPGRADE, UPDATE AND OTHER PRODUCT REQUIREMENTS",

  about_culture_adv_production:
    "PROFESSIONAL DESIGN AND PRODUCTION - PRODUCTS ARE DESIGNED EXCLUSIVELY BY PROFESSIONAL DESIGNERS, INJECTION MOLDING AND SCALE PRODUCTION",

  about_culture_adv_quality:
    "QUALITY CONTROL - INTERNATIONAL CERTIFICATION COMPANY, STRICT QUALITY INSPECTION PROCESS, CREATE FIRST-CLASS VIRTUAL SIMULATION EQUIPMENT",

  about_culture_adv_customer:
    "CUSTOMER SERVICE - ATTENTIVE SERVICE IN EVERY ASPECT, PROVIDING COMPREHENSIVE SERVICES THAT EXCEED CUSTOMER EXPECTATIONS",

  about_cert: "CERT.",
  about_cert_location: "HOME > ABOUT US > CERT.",

  about_cert_gifts: "EXCELLENT PRODUCT AWARD BY CHINA HI-TECH FAIR IN 2018",
  about_cert_ths:
    "CERTIFICATE OF APPRECIATION BY HONG KONG LUTHERAN SOCIAL SERVICE IN 2019",
  about_cert_miss: "MISS SOFTWARE CERTIFICATE",
  about_cert_mss: "MSS SOFTWARE CERTIFICATE",

  business: "BUSINESS",
  business_software: "SOFTWARE",
  business_software_location: "HOME > BUSINESS > SOFTWARE",
  business_software_home_content:
    "EYEMAX HAS A COPYRIGHTED MISS & MSS, MULTIPLAYER SIMULTANEOUS INTERACTIVE, AND VR PLAYBACK CONTROL SYSTEM",

  business_software_tab_intro: "INTRODUCTION",
  business_software_tab_advan: "ADVANTAGE",

  business_software_cpb_intro_title:
    "VR+ MULTI SYNCHRONIZATION SYSTEM(MSS SYSTEM)",
  business_software_cpb_intro_content:
    "MSS SYSTEM VR+ MULTI-PERSON INTERACTIVE SYNCHRONIZATION CONTROL SYSTEM IS PROBABLY A TEMPORARY MULTI-PERSON INTERACTIVE CONTROL SYSTEM FOR VR 1+N WIRELESS PLAYBACK. MSS SYSTEM CAN BE COMPATIBLE WITH PC OR ANDROID PAD LITHOGRAPHY AS THE MAIN CONTROL SERVICE. AS LONG AS YOU USE A SINGLE HOST SERVER TO BUNDLE MULTIPLE MOBILE WIRELESS HEADBAND VR PLAYBACK DEVICES, YOU CAN EASILY CONTROL THE CLIENT USAGE AND MULTIPLAYER SYNCHRONIZATION EXPERIENCE TO ASSIGN CONTENT.",

  business_software_cpb_advan_title: "MSS SYSTEM ADVANTAGES",
  business_software_cpb_advan_content_a:
    "1. MULTIPLAYER EXPERIENCE THE SAME ASSIGNED CONTENT SIMULTANEOUSLY",
  business_software_cpb_advan_content_b:
    "2. MULTIPLE PEOPLE EXPERIENCE DIFFERENT ASSIGNMENTS AT THE SAME TIME",
  business_software_cpb_advan_content_c:
    "3. NOT AFFECTED BY THE FREQUENCY OF THE INTERNET",
  business_software_cpb_advan_content_d:
    "4. INSTANTLY CONTROL THE CLIENT TO STOP PLAYING",
  business_software_cpb_advan_content_e:
    "5. EASY TO DIY HOMEMADE CONTENT DOWNLOAD SYSTEM",

  business_software_cb_intro_title:
    "VR+ MULTI INTERACTION SYNCHRONIZATION SYSTEM(MISS SYSTEM)",
  business_software_cb_intro_content:
    "MISS VR+ MULTI-PERSON INTERACTIVE SYNCHRONIZATION CONTROL SYSTEM IS PROBABLY A TEMPORARY MULTI-PERSON INTERACTIVE CONTROL SYSTEM FOR VR 1+N WIRELESS PLAYBACK. MISS SYSTEM CAN BE COMPATIBLE WITH PC COMPUTER OR ANDROID PAD LITHOGRAPHY AS THE MAIN CONTROL SERVER. BY USING A SINGLE MASTER SERVER TO BUNDLE MULTIPLE MOBILE WIRELESS HEADBAND VR PLAYERS, YOU CAN EASILY CONTROL THE CLIENT USAGE AND MULTIPLAYER EXPERIENCE TO ASSIGN CONTENT.",

  business_software_cb_advan_title: "MISS SYSTEM ADVANTAGES",
  business_software_cb_advan_content_a:
    "1. MULTI-PERSON SIMULTANEOUS EXPERIENCE OF THE SAME ASSIGNED CONTENT",
  business_software_cb_advan_content_b:
    "2. MULTIPLE PEOPLE EXPERIENCE DIFFERENT ASSIGNMENTS AT THE SAME TIME",
  business_software_cb_advan_content_c:
    "3. WHEN MULTIPLE PEOPLE INTERACT, THEY CAN IMMEDIATELY PASS THE SCORE BACK TO THE HOST.",
  business_software_cb_advan_content_d:
    "4. NOT AFFECTED BY THE FREQUENCY OF THE INTERNET",
  business_software_cb_advan_content_e:
    "5. INSTANTLY CONTROL THE CLIENT TO STOP PLAYING",
  business_software_cb_advan_content_f:
    "6. EASY TO DIY HOMEMADE CONTENT DOWNLOAD SYSTEM",

  business_software_fun_land_intro_title:
    "VR+ MULTI INTERACTION SYNCHRONIZATION SYSTEM(MISS SYSTEM)",
  business_software_fun_land_intro_content:
    "MISS VR+ MULTI-PERSON INTERACTIVE SYNCHRONIZATION CONTROL SYSTEM IS PROBABLY A TEMPORARY MULTI-PERSON INTERACTIVE CONTROL SYSTEM FOR VR 1+N WIRELESS PLAYBACK. MISS SYSTEM CAN BE COMPATIBLE WITH PC COMPUTER OR ANDROID PAD LITHOGRAPHY AS THE MAIN CONTROL SERVER. BY USING A SINGLE MASTER SERVER TO BUNDLE MULTIPLE MOBILE WIRELESS HEADBAND VR PLAYERS, YOU CAN EASILY CONTROL THE CLIENT USAGE AND MULTIPLAYER EXPERIENCE TO ASSIGN CONTENT.",

  business_software_fun_land_advan_title: "MISS SYSTEM ADVANTAGES",
  business_software_fun_land_advan_content_a:
    "1. MULTI-PERSON SIMULTANEOUS EXPERIENCE OF THE SAME ASSIGNED CONTENT",
  business_software_fun_land_advan_content_b:
    "2. MULTIPLE PEOPLE EXPERIENCE DIFFERENT ASSIGNMENTS AT THE SAME TIME",
  business_software_fun_land_advan_content_c:
    "3. WHEN MULTIPLE PEOPLE INTERACT, THEY CAN IMMEDIATELY PASS THE SCORE BACK TO THE HOST.",
  business_software_fun_land_advan_content_d:
    "4. NOT AFFECTED BY THE FREQUENCY OF THE INTERNET",
  business_software_fun_land_advan_content_e:
    "5. INSTANTLY CONTROL THE CLIENT TO STOP PLAYING",
  business_software_fun_land_advan_content_f:
    "6. EASY TO DIY HOMEMADE CONTENT DOWNLOAD SYSTEM",

  business_hardware: "HARDWARE",
  business_hardware_location: "HOME > BUSINESS > HARDWARE",
  business_hardware_home_content:
    "EYEMAX'S SELF-DEVELOPED CONTENT IS EQUIPPED WITH THE VR HELMET AND THE FOLLOW-UP HARDWARE DEVICE, SPECIALIZING IN CUSTOM HARDWARE ADAPTATION",

  business_hardware_chair_title:
    "VIRTUAL REALITY DYNAMIC SEAT 2 SEATER (DEVELOPER KIT IS OPTIONAL)",
  business_hardware_chair_content_a:
    "1. THE FOURTH GENERATION OF ALL-ROUND DYNAMIC SEATS, 2K VISUAL NEW EXPERIENCE, SELF-DEVELOPED CONTENT",
  business_hardware_chair_content_b:
    "2. DYNAMIC / VIBRATION / SWEEPING THE LEGS GIVE YOU A DIFFERENT IMPACT",
  business_hardware_chair_content_c: "3. CAN BE USED WITH DOZENS OF GAMES",
  business_hardware_chair_content_d:
    "4. EASY TO USE GAME INTERFACE, EASY TO USE, FUN AND ADDICTIVE",
  business_hardware_chair_content_e:
    "5. SUITABLE FOR STOREFRONT OR EVENT EXPERIENCE",

  business_hardware_fork_lift_title: "VR FORK LIFT TRAINING MACHINE",
  business_hardware_fork_lift_content:
    "CAN SIMULATE ALL LIFTING DEVICES ON THE MARKET",

  business_hardware_armor_title: "ARMOR ARENA",
  business_hardware_armor_content: "1 VS 1 ｜2 VS 2 ｜3 VS 3",

  business_hardware_esport_title: "VR ESPORT",
  business_hardware_esport_content: "BLUE + RED",

  business_hardware_tab_name: "NAME",
  business_hardware_tab_pcg: "PROCESSOR / CPU / GPU",
  business_hardware_tab_display: "DISPLAY",
  business_hardware_tab_storage: "STORAGE",
  business_hardware_tab_button: "BUILT-IN BUTTONS",
  business_hardware_tab_monitor: "3DOF MOTION CONTROLLER",
  business_hardware_tab_interface: "INTERFACES",
  business_hardware_tab_bw: "BATTERY / WEIGHT",
  business_hardware_tab_others: "OTHERS",

  business_hardware_name_title: "PRODUCT NAME",
  business_hardware_name_content: "VR HEADSET - ALL IN ONE",

  business_hardware_processor: "PROCESSOR: QUALCOMM SNAPDRAGON XR1",
  business_hardware_cpu: "CPU: KRYO360 OCTA-CORE",
  business_hardware_gpu: "GPU: ADRENO615",

  business_hardware_display_lcd: "2560 x1440 5.5 FAST LCD / 72Hz",
  business_hardware_display_view: "FIELD VIEW 100°",
  business_hardware_display_range: "AUTO ADJUST RANGE:54MM-74MM",

  business_hardware_storage_ram: "RAM : 3GB",
  business_hardware_storage_rom: "ROM : 32GB",
  business_hardware_storage_support: "SUPPORT MICRO-SD CARD UP TO 128GB",

  business_hardware_button:
    "POWER/SLEEP BUTTON, AWAKE BUTTON, HOME BUTTON, CONFIRM BUTTON, VOLUME ADJUST BUTTONS",

  business_hardware_monitor_sensor:
    "SENSOR:  9-AXISES MOVEMENT SENSOR TRACKING",
  business_hardware_monitor_button:
    "CONTROLLER BUTTONS, HOME/POWER BUTTON, VOLUME ADJUST BUTTONS",
  business_hardware_monitor_battery: "BATTERY: 2 AAA BATTERIES",
  business_hardware_monitor_io: "I/O: BLE BLUETOOTH 4.0 CONNECTION",

  business_hardware_interface: "802.11b/g/n 2.4G/5G, WIFI, BLUETOOTH 4.2",

  business_hardware_bw_battery: "BATTERY: 4000mAh",
  business_hardware_bw_weight: "WEIGHT: 358g",

  business_hardware_others:
    "EYE-CARE WITH TUV RHEINLAND BLUE-RAY CERTIFICATION",

  business_solution: "SOLUTION",
  business_solution_location: "HOME > BUSINESS > SOLUTION",
  business_solution_home_content:
    "EYEMAX VR VIRTUAL REALITY SERVICE COVERS SOFTWARE AND HARDWARE DEVELOPMENT, ADAPTIVE OPERATION AND SALES",
  business_solution_teach_title:
    "EYEMAX VR MSS & MISS SPECIALIZED TEACHING SYSTEM",
  business_solution_teach_content_a:
    "THE WORLD'S FIRST 1+N SYNCHRONOUS INTERACTIVE SMART DATA PLATFORM CAN DIRECTLY SOLVE THE PROBLEMS THAT ARE NOW DERIVED, INCLUDING THE SIMPLE OPERATION OF VR+ TEACHING, MULTI-PERSON SYNCHRONOUS INTERACTIVE TEACHING, NO NEED TO UNDERSTAND COMPLICATED PROGRAMMING, START FROM ZERO, AND INCREASE OR DECREASE AT RANDOM. THE TEACHING CONTENT, THE SIMPLE DEVELOPMENT OF SUPPLEMENTARY COURSES, COMPATIBLE COLLABORATIVE MANUFACTURERS CONTENT, INCLUDING SELF-TIMER VR 360° PANORAMIC VIDEO AND PICTURES, HAVE MADE GREAT CONTRIBUTIONS TO THE VR+ EDUCATION INDUSTRY, PROMPTING THE ACCELERATED ENTRY INTO A REVOLUTIONARY NEW ERA OF INNOVATIVE TEACHING.",
  business_solution_teach_content_b:
    "ORIGINALLY CREATED BY THE CHINA, HONG KONG AND TAIWAN COMPANIES AND THE ALL-CHINA TEAM, HONG KONG EYEMAX TECHNOLOGY HOLDINGS CO., LTD. WAS ESTABLISHED IN HONG KONG IN 2014, FOCUSING ON VR/AR VIRTUAL REALITY TECHNOLOGY AND AUGMENTED REALITY TECHNOLOGY, INTEGRATING APPLICATIONS AND SOLUTION",

  business_others: "OTHERS",
  business_others_location: "HOME > BUSINESS > OTHERS",
  business_others_home_content:
    "EYEMAX VR + VIRTUAL REALITY : EDUCATION, TOURISM, REAL ESTATE, INDUSTRIAL APPLICATIONS, COMMERCIAL APPLICATIONS",

  business_others_tab_explain:
    "EYEMAX FULL-SCALE INTERACTIVE BROADCAST THEATER",

  business_others_tab_contain: "THEORY",
  business_others_tab_part1: "PART 1",
  business_others_tab_part2: "PART 2",
  business_others_tab_part3: "PART 3",
  business_others_tab_part4: "PART 4",

  business_others_part1: "EYEMAX DEDICATED PLAYBACK SYSTEM",
  business_others_part2: "COOPERATE WITH EYEMAX VR HEADSET - ALL IN ONE",
  business_others_part3:
    "ADAPT TO THE OPTIONAL DIGITAL POSITION OF THE FOLLOW-UP SEAT",
  business_others_part4:
    "ADAPT TO THE CONTENT OF ALL-ROUND IMMERSION SPECIAL EFFECTS",

  business_others_explain_title:
    "EYEMAX FULL-SCALE INTERACTIVE BROADCAST THEATER",
  business_others_explain_content:
    "USE EYEMAX PLUS VR PREMIUM 1+N MULTI-PERSON SYNCHRONOUS INTERACTIVE PLAYBACK SYSTEM WITH VR360 FULL-SCREEN CONTENT, PACKAGING PROJECT AUTOCRACY, HISTORICAL PICTURES, HISTORICAL VIDEO, NEW 360 ANIMATION, ALL SINK INTO THE UNPRECEDENTED VIRTUAL REALITY IT IS NOW.",

  cases: "CASES",

  cases_hall: "EXPERIENCE HALL",
  cases_hall_location: "HOME > CASES > EXPERIENCE HALL",
  cases_hall_mixc: "WUXI, THE MIXC, VANKINE VR EXPERIENCE HALL",
  cases_hall_t101:
    "THE WORLD'S FIRST HIGHEST EYEMAX VR EXPERIENCE STORE IN 2016 - TAIWAN 101",
  cases_hall_far_eastern: "TAIPEI FAR EAST DEPARTMENT STORE",
  cases_hall_hot_spring:
    "IN 2018, THE FIRST FIVE-STAR HOT SPRING HOTEL IN TAIWAN WAS INJECTED INTO EYEMAX AR/VR",
  cases_hall_feng_jia:
    "TAIWAN'S FIRST VR EXPERIENCE MUSEUM, TAICHUNG FENGJIA SHOP",
  cases_hall_chiao_hsi: "HOTEL ROYAL CHIAO HSI",
  cases_hall_syntrend: "TAIWAN SYNTREND EXPERIENCE HALL",

  cases_event: "EXPERIENCE EVENTS",
  cases_event_location: "HOME > CASES > EXPERIENCE EVENTS",
  cases_event_gui_shan:
    "IN 2018, TAIWAN’S EDUCATION DIRECTOR “GAO ANBANG” VISITED THE KAMEYAMA ELEMENTARY SCHOOL TO EXPERIENCE THE EYEMAX VR EDUCATION SYSTEM AND EQUIPMENT, AND FULLY COOPERATE WITH THE INNOVATIVE EDUCATION SYSTEM.",

  cases_exhibit: "EXHIBITION ACTIVITIES",
  cases_exhibit_location: "HOME > CASES > EXHIBITION ACTIVITIES",
  cases_exhibit_hi_tech: "CHINA HI-TECH FAIR IN 2018",
  cases_exhibit_pa_zhou: "CANGZHOU VR/AR EXPO IN 2016, VR BOXING",
  cases_exhibit_zhong_shan: "ZHONGSHAN VR/AR EXPO IN 2016",
  cases_exhibit_wu_han: "WUHAN VR/AR EXPO IN 2018",
  cases_exhibit_shang_hai:
    "SHANGHAI VR/AR EXPO, MECH VS. THE WORLD'S FIRST MULTIPLAYER EQUIPMENT IN 2019",
  cases_exhibit_hk: "HK LEARNING & TEACHING EXPO IN 2018",

  news: "NEWS",
  news_location: "HOME > NEWS",
  news_tab_intro: "STORY",
  news_tab_pic1: "PIC 1",
  news_tab_pic2: "PIC 2",
  news_tab_pic3: "PIC 3",
  news_tab_pic4: "PIC 4",
  news_tab_pic5: "PIC 5",
  news_tab_pic6: "PIC 6",

  news_mid: "THE HONG KONG COMMUNITY CENTER",
  news_mid_pic:
    "SHARES THE EYEMAX VR EXPERIENCE TO CELEBRATE THE MID-AUTUMN FESTIVAL IN 2019",

  news_plk: "THE HONG KONG PO LEUNG KUK",
  news_plk_pic:
    "INTRODUCED THE EYEMAX VR BROADCASTING SYSTEM, AND SENIOR MANAGEMENT WAS EXPERIENCING GUIDANCE IN 2019",

  news_cctv:
    "EYEMAX'S OUTSTANDING PERFORMANCE HAS BECOME THE ONLY REPRESENTATIVE OF THE VR INDUSTRY IN SHENZHEN, AND HAS BEEN SELECTED AS A BRAND ENTERPRISE OF CHINA CENTRAL TELEVISION'S INTEGRITY CHINA COLUMN.",
  news_cctv_pic:
    "THE ONLY DESIGNATED DISPLAY AREA AT THE VENUE, EYEMAX'S VR EDUCATION SYSTEM",

  news_skh: "HONG KONG SHENG KUNG HUI TUNG CHUNG INTEGRATED SERVICES",
  news_skh_pic: "THE ELDERLY PREVIEWED EYEMAX VR WITH SO MUCH FUN",

  news_design:
    "TAIWAN NATIONAL CAMPUS VR INDUSTRIAL DESIGN COMPETITION IN 2017",

  news_develop: "VR DEVELOPER HACKATHON AWARDS CEREMONY",
  news_develop_pic1:
    "AWARDED BY THE EYEMAX VR INNOVATION INSTITUTE FOR THE BEST SOCIAL RESPONSIBILITY AWARD",
  news_develop_pic2:
    "AWARDED BY THE EYEMAX VR INNOVATION INSTITUTE FOR THE BEST OUTSTANDING CREATIVE AWARD",

  news_young: "EYEMAX VISION INNOVATION INSTITUTE - OFFICIAL OPENING",

  news_fun: "EYEMAX VR TOUR FUNTECH@KAOHSIUNG 2016-2018",

  news_ching_yi:
    "PROVIDENCE UNIVERSITY IN TAIWAN HAS ENTERED THE VR INNOVATION EDUCATION ASSISTANT SYSTEM",
  news_ching_yi_pic:
    "EXPERIENCED EYEMAX'S VR EDUCATION SYSTEM EQUIPMENT ON THE SPOT TO FULLY COOPERATE WITH THE INNOVATIVE EDUCATION SYSTEM",

  rent: "RENT EQUIPMENTS",
  rent_location: "HOME > RENT",

  rent_headset: "VR HEADSET - ALL IN ONE",
  rent_headset_a: "CONTENT CAN BE CUSTOMIZED",
  rent_headset_b: "ADS CAN GO STRAIGHT TO CUSTOM CONTENT",
  rent_headset_c: "PRICE NEGOTIABLE",

  rent_others: "OTHERS",
  rent_others_all: "VR HEADSET - ALL IN ONE",
  rent_others_fight: "VR BATTLE EXPERIENCE",
  rent_others_industry: "VR INDUSTRIAL APPLICATIONS",
  rent_others_education: "VR EDUCATION EXPERIENCE",

  details: "MORE DETAILS",

  carousel_small_home_title: "BREAKING NEWS",

  carousel_small_caption_young:
    "EYEMAX INNOVATION INSTITUTE - OFFICIAL OPENING",
  carousel_small_caption_ching_yi:
    "PROVIDENCE UNIVERSITY - VR EDUCATION ASSISTANT SYSTEM",

  update: "Last updated 20 Apr, 20",

  slogan: "Slogan",
  slogan_a: "Insist on innovation drive, build core competitiveness",
  slogan_b: "Excellent quality control, attention to every detail",
  slogan_c: "Deep cultural heritage guides the growth of the company",

  qr_code: "QR CODE",

  china_address: "F706, One City, Yantian, Shenzhen, China",

  email_albert: "lamyukkwan@eyemax-asia.cn",
  email_hammer: "lamsungfai@eyemax-asia.cn",

  china_tel: "+86 0755 2274 7273",
  content_weChat: "albertolam1022 / hammer031087",

  partner: "COOPERATION PARTNER",
  location: " LOCATION: ",
  copyright: "© Copyright 2015-2020 ",
  eyemax_asia: "EYEMAX ASIA HOLDINGS LTD",
  language: "LANGUAGE",
};

const Chinese = {
  home_content:
    "Eyemax 集團涵蓋了 VR | AR | MR 產品銷售、技術服務、軟體發展於一身，向著創新技術解決方案提供客戶要求",
  about: "關於我們",
  about_company: "公司簡介",
  about_company_location: "主頁 > 關於我們 > 公司簡介",
  about_company_a:
    "Eyemax 眼界科技有限公司為中國、香港、台灣 第一家同步「穿戴式虛擬實境眼鏡」及「虛擬實境體感機」的公司，除了手機、桌機的應用外，更將其延伸至體感的運用中，透過視覺所及、再加上體感機在影片播放的同時隨著擺動，藉由二者間相乘效果，完全帶領體驗者進入虛擬實境的時空交錯中。「VR 虛擬實境」是利用電腦模擬出一個三度空間的虛擬世界，透過特殊的穿戴式裝置(虛擬實境眼鏡)，讓人仿佛進入現實世界中，在這個三度空間裡，體驗者不僅可以跟隨移動，還可透過操作搖杆穿梭與互動",
  about_company_b:
    "Eyemax 眼界科技有限公司一直以來致力於虛擬實競的應用與發展，台灣第一家「Eyemax 虛擬實境體驗館」在台中逢甲商圈成立，實現了真正的「人機體驗」，透過眼中所見、身體所感，讓體驗者真真實實的感受到虛擬實境帶來的震撼力量！在未來，Eyemax 眼界科技有限公司將持續發掘更多的虛擬實境商品，提供專屬的平臺、多元化的管道，打造一個便利的個人消費市場。",
  about_culture: "企業文化",
  about_culture_location: "主頁 > 關於我們 > 企業文化",

  about_culture_vision: "企業願景: ",
  about_culture_vision_content: "打造知名的虛擬房真實裝備生產商、供應商。",

  about_culture_spirit: "企業精神: ",
  about_culture_spirit_content: "精工鑄造卓越品質，堅持創新驅動引領行業未來。",

  about_culture_value: "核心價值: ",
  about_culture_value_content: "誠信 專業 品質 創新",

  about_culture_philosophy: "文化理念: ",
  about_culture_philosophy_content: "以人為本 誠信經營 合作共贏",

  about_culture_service: "服務理念: ",
  about_culture_service_content:
    "提供完整的實施方案和服務，以顧客滿意為最終目標。",

  about_culture_adv: "核心優勢: ",

  about_culture_adv_soft:
    "軟件自主研發 - 擁有優秀的軟件開發團隊，可完成客戶的經濟、升級、更新等產品需求。",

  about_culture_adv_production:
    "專業設計生產 - 產品均由專業設計師獨家設計，整機注模製造、規模化生產。",

  about_culture_adv_quality:
    "品質管控 - 國際認證企業，嚴格的質檢流程，打造一流的虛擬仿真實裝備。",

  about_culture_adv_customer:
    "客戶服務 - 用心服務每一個環節，提供超越客戶預期的全方位服務。",

  about_cert: "榮譽證明",
  about_cert_location: "主頁 > 關於我們 > 榮譽證明",

  about_cert_gifts: "2018年中國高新技術交易會優秀產品獎",
  about_cert_ths: "香港路德會社會服務局, 2019年感謝狀",
  about_cert_miss: "MISS 軟件著作權證書",
  about_cert_mss: "MSS 軟件著作權證書",

  business: "主營業務",
  business_software: "軟體產品",
  business_software_location: "主頁 > 主營業務 > 軟體產品",
  business_software_home_content:
    "Eyemax 擁有尊蜀著作權的 MISS & MSS 多人同步互動 VR播放操控系統",

  business_software_tab_intro: "簡介",
  business_software_tab_advan: "優點",

  business_software_cpb_intro_title: "VR+ 多人同步播放操控系統",
  business_software_cpb_intro_content:
    "MSS 系統 VR+ 多人互動同步操控系統是可能是一個暫時最佳的VR 1+n台無線播放的多人互動操控系統. MSS系統能夠相容PC電腦或Andriod Pad安卓系統平版用作主控服務端，只要使用一台主控服務端捆綁多台流動無線頭帶式VR播放設備就能簡易操控客端使用及多人同步體驗指派內容",

  business_software_cpb_advan_title: "MSS系統優勢",
  business_software_cpb_advan_content_a: "1. 多人同步體驗同一指派內容",
  business_software_cpb_advan_content_b: "2. 多人同時體驗不同指派內容",
  business_software_cpb_advan_content_c: "3. 不受互聯網頻寛影響",
  business_software_cpb_advan_content_d: "4. 能夠即時操控客端停止播放",
  business_software_cpb_advan_content_e: "5. 能夠簡易DIY自製內容上下載系統",

  business_software_cb_intro_title: "VR+ 多人互動同步操控系統(MISS 系統)",
  business_software_cb_intro_content:
    "MISS VR+ 多人互動同步操控系統是可能是一個暫時最佳的VR 1+n台無線播放的多人互動操控系統. MISS系統能夠相容PC電腦或Andriod Pad安卓系統平版用作主控服務端，只要使用一台主控服務端捆綁多台流動無線頭帶式VR播放設備就能簡易操控客端使用及多人同步體驗指派內容。",

  business_software_cb_advan_title: "MISS系統優勢",
  business_software_cb_advan_content_a: "1. 多人同步體驗同一指派內容",
  business_software_cb_advan_content_b: "2. 多人同時體驗不同指派內容",
  business_software_cb_advan_content_c:
    "3. 多人互動時能夠即時考核分數回傳至主控端",
  business_software_cb_advan_content_d: "4. 不受互聯網頻寛影響",
  business_software_cb_advan_content_e: "5. 能夠即時操控客端停止播放",
  business_software_cb_advan_content_f: "6. 能夠簡易DIY自製內容上下載系統",

  business_software_fun_land_intro_title: "VR+ 多人互動同步操控系統(MISS 系統)",
  business_software_fun_land_intro_content:
    "MISS VR+ 多人互動同步操控系統是可能是一個暫時最佳的VR 1+n台無線播放的多人互動操控系統. MISS系統能夠相容PC電腦或Andriod Pad安卓系統平版用作主控服務端，只要使用一台主控服務端捆綁多台流動無線頭帶式VR播放設備就能簡易操控客端使用及多人同步體驗指派內容。",

  business_software_fun_land_advan_title: "MISS系統優勢",
  business_software_fun_land_advan_content_a: "1. 多人同步體驗同一指派內容",
  business_software_fun_land_advan_content_b: "2. 多人同時體驗不同指派內容",
  business_software_fun_land_advan_content_c:
    "3. 多人互動時能夠即時考核分數回傳至主控端",
  business_software_fun_land_advan_content_d: "4. 不受互聯網頻寛影響",
  business_software_fun_land_advan_content_e: "5. 能夠即時操控客端停止播放",
  business_software_fun_land_advan_content_f:
    "6. 能夠簡易DIY自製內容上下載系統",

  business_hardware: "硬體產品",
  business_hardware_location: "主頁 > 主營業務 > 硬體產品",
  business_hardware_home_content:
    "Eyemax 自硏開發內容配上尊蜀VR頭盔及隨動硬體設備，專蜀專制硬體適配",

  business_hardware_chair_title: "虛擬實境動感座椅2人座(開發者套件另購)",
  business_hardware_chair_content_a:
    "1. 第四代全方位動感座椅、2K視覺新體驗、可自行開發內容",
  business_hardware_chair_content_b:
    "2. 動感/震動/掃腿 統統給你不一樣的衝擊感受",
  business_hardware_chair_content_c: "3. 可搭配數十款遊戲",
  business_hardware_chair_content_d:
    "4. 遊戲介面操作容易, 簡易上手, 好玩容易上癮",
  business_hardware_chair_content_e: "5. 適用於店面或活動體驗",

  business_hardware_fork_lift_title: "VR 工業推高培訓機",
  business_hardware_fork_lift_content: "能模擬市面上所有的起重裝置",

  business_hardware_armor_title: "VR機甲格戰鬥",
  business_hardware_armor_content: "1 對 1 ｜2 對 2 ｜3 對 3",

  business_hardware_esport_title: "競技設備",
  business_hardware_esport_content: "藍色+紅色",

  business_hardware_tab_name: "名稱",
  business_hardware_tab_pcg: "處理器 / CPU / GPU",
  business_hardware_tab_display: "顯示",
  business_hardware_tab_storage: "存儲",
  business_hardware_tab_button: "內置按鈕",
  business_hardware_tab_monitor: "3DOF 運動控制器",
  business_hardware_tab_interface: "介面",
  business_hardware_tab_bw: "電池/重量",
  business_hardware_tab_others: "其他",

  business_hardware_name_title: "產品名稱",
  business_hardware_name_content: "VR 眼鏡 - 多合一",

  business_hardware_processor: "處理器: 高通驍龍XR1",
  business_hardware_cpu: "CPU: KRYO360 OCTA-CORE",
  business_hardware_gpu: "GPU: ADRENO615",

  business_hardware_display_lcd: "2560 x1440 5.5 高速 LCD / 72Hz",
  business_hardware_display_view: "視野100°",
  business_hardware_display_range: "自動調整範圍:54MM-74MM",

  business_hardware_storage_ram: "RAM : 3GB",
  business_hardware_storage_rom: "ROM : 32GB",
  business_hardware_storage_support: "支持MICRO-SD卡高達128GB",

  business_hardware_button:
    "電源/睡眠按鈕，喚醒按鈕，家庭按鈕，確認按鈕，音量調整按鈕",

  business_hardware_monitor_sensor: "傳感器：9軸運動傳感器跟踪",
  business_hardware_monitor_button: "控制器按鈕，家用/電源按鈕，音量調節按鈕",
  business_hardware_monitor_battery: "電池：2節AAA電池",
  business_hardware_monitor_io: "I/O: BLE 藍牙 4.0 連接",

  business_hardware_interface: "802.11b/g/n 2.4G/5G, WIFI, 藍牙 4.2",

  business_hardware_bw_battery: "電池: 4000mAh",
  business_hardware_bw_weight: "重量: 358g",

  business_hardware_others: "眼睛護理以TUV萊茵蘭藍光認證",

  business_solution: "解決方案",
  business_solution_location: "主頁 > 主營業務 > 解決方案",
  business_solution_home_content:
    "Eyemax VR 虛似實境服務範圍涵蓋了軟體及硬體開發適配運營銷售",
  business_solution_teach_title: "Eyemax VR MSS & MISS 專蜀教學系統",
  business_solution_teach_content_a:
    "全球首創1+n 同步互動智慧大資料平臺，能直接解決現在衍生的問題，包括VR＋教學簡易設定的操作，多人同步互動教學，不需要懂繁複程式設計，從零起步簡易入手、隨意增減教學內容、簡易制訂輔助課程，相容協力廠商內容、包括自拍VR 360°全景視頻及圖片等，為VR+教育行業作出巨大貢獻，促使加快進入革命性新時代創新教學。",
  business_solution_teach_content_b:
    "原創於中、港、台三地公司及全華人合力協同創建，香港Eyemax 科技控股有限公司於2014年在香港成立，專注於硏究VR/AR虛擬實境技術及增強實境技術、整合應用及解決方案。",

  business_others: "其他業務",
  business_others_location: "主頁 > 主營業務 > 其他業務",
  business_others_home_content:
    "Eyemax VR + 虛似實境 : 教育, 旅遊, 地產, 工業應用,商業應用",

  business_others_tab_contain: "原理",
  business_others_tab_part1: "部件1",
  business_others_tab_part2: "部件2",
  business_others_tab_part3: "部件3",
  business_others_tab_part4: "部件4",

  business_others_explain_title: "Eyemax 全方位互動體感播影院",
  business_others_explain_content:
    "運用EYEMAX PLUS VR尊蜀1＋N 多人同步互動播放系統配合VR360全影內容，包裝專案專制、歷史圖片、歷史視像、全新360動畫，全沉入引領大家進入前所未見的虛似實境重現眼前。",

  business_others_part1: "採用EYEMAX 專蜀播放系統",
  business_others_part2: "配合EYEMAX 專蜀一體機",
  business_others_part3: "適配自選數位合適隨動座椅",
  business_others_part4: "適配內容全方位沉浸感特殊效果",

  cases: "成功案例",

  cases_hall: "體驗館",
  cases_hall_location: "主頁 > 成功案例 > 體驗館",
  cases_hall_mixc: "無錫, 萬像城, VANKINE VR 体验馆",
  cases_hall_t101: "2016年全球第一間最高 EYEMAX VR 體驗店 - 台灣101",
  cases_hall_far_eastern: "臺北遠東百貨公司",
  cases_hall_hot_spring: "2018年台灣第一間五星溫泉旅館注入 EYEMAX AR/VR",
  cases_hall_feng_jia: "臺灣第一間VR體驗館, 台中逢甲店",
  cases_hall_chiao_hsi: "宜蘭礁溪老爺酒店",
  cases_hall_syntrend: "臺灣三創體驗館",

  cases_event: "體驗活動",
  cases_event_location: "主頁 > 成功案例 > 體驗活動",
  cases_event_gui_shan:
    "2018年 臺灣教育局長“高安邦”親臨龜山國小學，現場體驗 Eyemax VR教育系統設備，全方位配合創新教育系統",

  cases_exhibit: "參展活動",
  cases_exhibit_location: "主頁 > 成功案例 > 參展活動",
  cases_exhibit_hi_tech: "2018年中國高新技術交易會",
  cases_exhibit_pa_zhou: "2016年琶州 VR/AR 博覽會, VR 拳擊",
  cases_exhibit_zhong_shan: "2016年 中山 VR/AR 博覽會",
  cases_exhibit_wu_han: "2018年 武漢 VR/AR 博覽會",
  cases_exhibit_shang_hai:
    "2019年 上海 VR/AR 博覽會, 機甲對戰全球首款多人對賽設備",
  cases_exhibit_hk: "2018年香港教育展",

  news: "最新消息",
  news_location: "主頁 > 最新消息",
  news_tab_intro: "簡介",
  news_tab_pic1: "圖1",
  news_tab_pic2: "圖2",
  news_tab_pic3: "圖3",
  news_tab_pic4: "圖4",
  news_tab_pic5: "圖5",
  news_tab_pic6: "圖6",

  news_mid: "2019年香港社區中心",
  news_mid_pic: "EYEMAX VR 體驗共慶中佳秋節",

  news_plk: "2019年香港保良局",
  news_plk_pic: "引進 EYEMAX VR 廣播系統，高層實地體驗指導",

  news_cctv:
    "EYEMAX 傑出的表現成為深圳地區唯一的VR行業代表, 並入選中國中央電視臺誠信中國欄目的品牌企業",
  news_cctv_pic: "會場唯一指定展示區, Eyemax 的 VR教育系統",

  news_skh: "2019年香港聖公會東涌綜合服務",
  news_skh_pic: "老友記先體驗 EYEMAX VR 樂趣無限",

  news_design: "2017年台灣全國校園VR工業設計競賽",

  news_develop: "VR 開發者駭客大賽 頒獎典禮",
  news_develop_pic1: "EYEMAX VR 創新學院頒發 榮獲「最佳社會責任獎」",
  news_develop_pic2: "EYEMAX VR 創新學院頒發 榮獲「最佳奔放創意獎」",

  news_young: "EYEMAX眼界VR創新學院 - 正式開幕",

  news_fun: "EYEMAX VR 巡禮 FUNTECH@高雄2016-2018",

  news_ching_yi: "臺灣靜宜大學已經進入VR創新教育輔助系統",
  news_ching_yi_pic: "現場體驗EYEMAX專蜀VR教育系統設備，全方位配合創新教育系統",

  rent: "出租設備",
  rent_location: "主頁 > 出租設備",

  rent_headset: "VR 眼鏡 - 多合一",
  rent_headset_a: "內容能定制",
  rent_headset_b: "廣告能直入定制內容",
  rent_headset_c: "價錢可議",

  rent_others: "其他",
  rent_others_all: "VR一體機系統",
  rent_others_fight: "VR對戰體驗",
  rent_others_industry: "VR工業應用",
  rent_others_education: "VR教育體驗",

  details: "更多詳情",

  carousel_small_home_title: "熱點新聞",

  carousel_small_caption_young: "EYEMAX創新學院 - 正式開幕",
  carousel_small_caption_ching_yi: "靜宜大學 - 教育輔助系統",

  update: "上次更新時間：20年4月20日",

  slogan: "口號",
  slogan_a: "堅持創新驅動 打造核心競爭力",
  slogan_b: "卓越的品質管控 關注每一個細節",
  slogan_c: "深厚的文化底蘊 引導企業成長",

  qr_code: "掃描二維碼",

  china_address: "中國深圳鹽田區壹海中心706室",

  email_albert: "lamyukkwan@eyemax-asia.cn",
  email_hammer: "lamsungfai@eyemax-asia.cn",

  china_tel: "+86 0755 2274 7273",
  content_weChat: "albertolam1022 / hammer031087",

  partner: "合作夥伴",
  location: " 當前位置: ",
  copyright: "© 版權擁有 2015-2020 ",
  eyemax_asia: "深圳眼界科技控股有限公司",
  language: "改變語言",
};

const ZhongWen = {
  home_content:
    "Eyemax 集团涵盖了 VR | AR | MR 产品销售、技术服务、软体发展于一身，向着创新技术解决方案提供客户要求",
  about: "关于我们",
  about_company: "公司简介",
  about_company_location: "主页 > 关于我们 > 公司简介",
  about_company_a:
    "Eyemax 眼界科技有限公司为中国、香港、台湾第一家同步「穿戴式虚拟实境眼镜」及「虚拟实境体感机」的公司，除了手机、桌机的应用外，更将其延伸至体感的运用中，透过视觉所及、再加上体感机在影片播放的同时随着摆动，藉由二者间相乘效果，完全带领体验者进入虚拟实境的时空交错中。 「VR 虚拟实境」是利用电脑模拟出一个三度空间的虚拟世界，透过特殊的穿戴式装置(虚拟实境眼镜)，让人仿佛进入现实世界中，在这个三度空间里，体验者不仅可以跟随移动，还可透过操作摇杆穿梭与互动",
  about_company_b:
    "Eyemax 眼界科技有限公司一直以来致力于虚拟实竞的应用与发展，台湾第一家「Eyemax 虚拟实境体验馆」在台中逢甲商圈成立，实现了真正的「人机体验」，透过眼中所见、身体所感，让体验者真真实实的感受到虚拟实境带来的震撼力量！在未来，Eyemax 眼界科技有限公司将持续发掘更多的虚拟实境商品，提供专属的平台、多元化的管道，打造一个便利的个人消费市场。",
  about_culture: "企业文化",
  about_culture_location: "主页 > 关于我们 > 企业文化",

  about_culture_vision: "企业愿景: ",
  about_culture_vision_content: "打造知名的虚拟房真实装备生产商、供应商。",

  about_culture_spirit: "企业精神: ",
  about_culture_spirit_content: "精工铸造卓越品质，坚持创新驱动引领行业未来。",

  about_culture_value: "核心价值: ",
  about_culture_value_content: "诚信 专业 品质 创新",

  about_culture_philosophy: "文化理念: ",
  about_culture_philosophy_content: "以人为本 诚信经营 合作共赢",

  about_culture_service: "服务理念: ",
  about_culture_service_content:
    "提供完整的实施方案和服务，以顾客满意为最终目标。",

  about_culture_adv: "核心优势: ",

  about_culture_adv_soft:
    "软件自主研发 - 拥有优秀的软件开发团队，可完成客户的经济、升级、更新等产品需求。",

  about_culture_adv_production:
    "专业设计生产 - 产品均由专业设计师独家设计，整机注模制造、规模化生产。",

  about_culture_adv_quality:
    "品质管控 - 国际认证企业，严格的质检流程，打造一流的虚拟仿真实装备。",

  about_culture_adv_customer:
    "客户服务 - 用心服务每一个环节，提供超越客户预期的全方位服务。",

  about_cert: "荣誉证明",
  about_cert_location: "主页 > 关于我们 > 荣誉证明",

  about_cert_gifts: "2018年中国高新技术交易会优秀产品奖",
  about_cert_ths: "香港路德会社会服务局, 2019年感谢状",
  about_cert_miss: "MISS 软件著作权证书",
  about_cert_mss: "MSS 软件著作权证书",

  business: "主营业务",
  business_software: "软体产品",
  business_software_location: "主页 > 主营业务 > 软体产品",

  business_software_home_content:
    "Eyemax 拥有尊蜀著作权的 MISS & MSS 多人同步互动 VR播放操控系统",

  business_software_tab_intro: "简介",
  business_software_tab_advan: "优点",

  business_software_cpb_intro_title: "VR+ 多人同步播放操控系统",
  business_software_cpb_intro_content:
    "MSS 系统VR+ 多人互动同步操控系统是可能是一个暂时最佳的VR 1+n台无线播放的多人互动操控系统. MSS系统能够相容PC电脑或Andriod Pad安卓系统平版用作主控服务端，只要使用一台主控服务端捆绑多台流动无线头带式VR播放设备就能简易操控客端使用及多人同步体验指派内容",

  business_software_cpb_advan_title: "MSS系统优势",
  business_software_cpb_advan_content_a: "1. 多人同步体验同一指派内容",
  business_software_cpb_advan_content_b: "2. 多人同时体验不同指派内容",
  business_software_cpb_advan_content_c: "3. 不受互联网频寛影响",
  business_software_cpb_advan_content_d: "4. 能够即时操控客端停止播放",
  business_software_cpb_advan_content_e: "5. 能够简易DIY自制内容上下载系统",

  business_software_cb_intro_title: "VR+ 多人互动同步操控系统(MISS 系统)",
  business_software_cb_intro_content:
    "MISS VR+ 多人互动同步操控系统是可能是一个暂时最佳的VR 1+n台无线播放的多人互动操控系统. MISS系统能够相容PC电脑或Andriod Pad安卓系统平版用作主控服务端，只要使用一台主控服务端捆绑多台流动无线头带式VR播放设备就能简易操控客端使用及多人同步体验指派内容。",

  business_software_cb_advan_title: "MISS系统优势",
  business_software_cb_advan_content_a: "1. 多人同步体验同一指派内容",
  business_software_cb_advan_content_b: "2. 多人同时体验不同指派内容",
  business_software_cb_advan_content_c:
    "3. 多人互动时能够即时考核分数回传至主控端",
  business_software_cb_advan_content_d: "4. 不受互联网频寛影响",
  business_software_cb_advan_content_e: "5. 能够即时操控客端停止播放",
  business_software_cb_advan_content_f: "6. 能够简易DIY自制内容上下载系统",

  business_software_fun_land_intro_title: "VR+ 多人互动同步操控系统(MISS 系统)",
  business_software_fun_land_intro_content:
    "MISS VR+ 多人互动同步操控系统是可能是一个暂时最佳的VR 1+n台无线播放的多人互动操控系统. MISS系统能够相容PC电脑或Andriod Pad安卓系统平版用作主控服务端，只要使用一台主控服务端捆绑多台流动无线头带式VR播放设备就能简易操控客端使用及多人同步体验指派内容。",

  business_software_fun_land_advan_title: "MISS系统优势",
  business_software_fun_land_advan_content_a: "1. 多人同步体验同一指派内容",
  business_software_fun_land_advan_content_b: "2. 多人同时体验不同指派内容",
  business_software_fun_land_advan_content_c:
    "3. 多人互动时能够即时考核分数回传至主控端",
  business_software_fun_land_advan_content_d: "4. 不受互联网频寛影响",
  business_software_fun_land_advan_content_e: "5. 能够即时操控客端停止播放",
  business_software_fun_land_advan_content_f:
    "6. 能够简易DIY自制内容上下载系统",

  business_hardware: "硬体产品",
  business_hardware_location: "主页 > 主营业务 > 硬体产品",
  business_hardware_home_content:
    "Eyemax 自硏开发内容配上尊蜀VR头盔及随动硬体设备，专蜀专制硬体适配",

  business_hardware_chair_title: "虚拟实境动感座椅2人座(开发者套件另购)",
  business_hardware_chair_content_a:
    "1. 第四代全方位动感座椅、2K视觉新体验、可自行开发内容",
  business_hardware_chair_content_b:
    "2. 动感/震动/扫腿 统统给你不一样的冲击感受",
  business_hardware_chair_content_c: "3. 可搭配数十款游戏",
  business_hardware_chair_content_d:
    "4. 游戏介面操作容易, 简易上手, 好玩容易上瘾",
  business_hardware_chair_content_e: "5. 适用于店面或活动体验",

  business_hardware_fork_lift_title: "VR 工业推高培训机",
  business_hardware_fork_lift_content: "能模拟市面上所有的起重装置",

  business_hardware_armor_title: "VR机甲格战斗",
  business_hardware_armor_content: "1 對 1 ｜2 對 2 ｜3 對 3",

  business_hardware_esport_title: "竞技设备",
  business_hardware_esport_content: "蓝色+红色",

  business_hardware_tab_name: "名称",
  business_hardware_tab_pcg: "处理器 / CPU / GPU",
  business_hardware_tab_display: "显示",
  business_hardware_tab_storage: "存储",
  business_hardware_tab_button: "内置按钮",
  business_hardware_tab_monitor: "3DOF 运动控制器",
  business_hardware_tab_interface: "介面",
  business_hardware_tab_bw: "电池/重量",
  business_hardware_tab_others: "其他",

  business_hardware_name_title: "产品名称",
  business_hardware_name_content: "VR 眼镜 - 多合一",

  business_hardware_processor: "处理器: 高通骁龙XR1",
  business_hardware_cpu: "CPU: KRYO360 OCTA-CORE",
  business_hardware_gpu: "GPU: ADRENO615",

  business_hardware_display_lcd: "2560 x1440 5.5 高速 LCD / 72Hz",
  business_hardware_display_view: "视野100°",
  business_hardware_display_range: "自动调整范围:54MM-74MM",

  business_hardware_storage_ram: "RAM : 3GB",
  business_hardware_storage_rom: "ROM : 32GB",
  business_hardware_storage_support: "支持MICRO-SD卡高达128GB",

  business_hardware_button:
    "电源/睡眠按钮，唤醒按钮，家庭按钮，确认按钮，音量调整按钮",

  business_hardware_monitor_sensor: "传感器：9轴运动传感器跟踪",
  business_hardware_monitor_button: "控制器按钮，家用/电源按钮，音量调节按钮",
  business_hardware_monitor_battery: "电池：2节AAA电池",
  business_hardware_monitor_io: "I/O: BLE 蓝牙 4.0 连接",

  business_hardware_interface: "802.11b/g/n 2.4G/5G, WIFI, 藍牙 4.2",

  business_hardware_bw_battery: "電池: 4000mAh",
  business_hardware_bw_weight: "重量: 358g",

  business_hardware_others: "眼睛護理以TUV萊茵蘭藍光認證",

  business_solution: "解决方案",
  business_solution_location: "主页 > 主营业务 > 解决方案",
  business_solution_teach_title: "Eyemax VR MSS & MISS 专蜀教学系统",
  business_solution_teach_content_a:
    "全球首创1+n 同步互动智慧大资料平台，能直接解决现在衍生的问题，包括VR＋教学简易设定的操作，多人同步互动教学，不需要懂繁复程式设计，从零起步简易入手、随意增减教学内容、简易制订辅助课程，相容协力厂商内容、包括自拍VR 360°全景视频及图片等，为VR+教育行业作出巨大贡献，促使加快进入革命性新时代创新教学。",
  business_solution_teach_content_b:
    "原创于中、港、台三地公司及全华人合力协同创建，香港Eyemax 科技控股有限公司于2014年在香港成立，专注于硏究VR/AR虚拟实境技术及增强实境技术、整合应用及解决方案。",

  business_solution_home_content:
    "Eyemax VR 虚似实境服务范围涵盖了软体及硬体开发适配运营销售",
  business_others: "其他业务",
  business_others_location: "主页 > 主营业务 > 其他业务",
  business_others_home_content:
    "Eyemax VR + 虚似实境 : 教育, 旅游, 地产, 工业应用,商业应用",

  business_others_tab_contain: "原理",
  business_others_tab_part1: "部件1",
  business_others_tab_part2: "部件2",
  business_others_tab_part3: "部件3",
  business_others_tab_part4: "部件4",

  business_others_explain_title: "EYEMAX 全方位互动体感播影院",
  business_others_explain_content:
    "运用EYEMAX PLUS VR尊蜀1＋N 多人同步互动播放系统配合VR360全影内容，包装专案专制、历史图片、历史视像、全新360动画，全沉入引领大家进入前所未见的虚似实境重现眼前。",

  business_others_part1: "采用EYEMAX 专蜀播放系统",
  business_others_part2: "配合EYEMAX 专蜀一体机",
  business_others_part3: "适配自选数位合适随动座椅",
  business_others_part4: "适配内容全方位沉浸感特殊效果",

  cases: "成功案例",

  cases_hall: "體驗館",
  cases_hall_location: "主頁 > 成功案例 > 体验馆",
  cases_hall_mixc: "无锡, 万像城, VANKINE VR 体验馆",
  cases_hall_t101: "2016年全球第一间最高 EYEMAX VR 体验店 - 台湾101",
  cases_hall_far_eastern: "台北远东百货公司",
  cases_hall_hot_spring: "2018年台湾第一间五星温泉旅馆注入 EYEMAX AR/VR",
  cases_hall_feng_jia: "台湾第一间VR体验馆, 台中逢甲店",
  cases_hall_chiao_hsi: "宜兰礁溪老爷酒店",
  cases_hall_syntrend: "台湾三创体验馆",

  cases_event: "體驗活動",
  cases_event_location: "主頁 > 成功案例 > 体验活动",
  cases_event_gui_shan:
    "2018年 台湾教育局长“高安邦”亲临龟山国小学，现场体验 Eyemax VR教育系统设备，全方位配合创新教育系统",

  cases_exhibit: "參展活動",
  cases_exhibit_location: "主頁 > 成功案例 > 参展活动",
  cases_exhibit_hi_tech: "2018年中国高新技术交易会",
  cases_exhibit_pa_zhou: "2016年琶州 VR/AR 博览会, VR 拳击",
  cases_exhibit_zhong_shan: "2016年 中山 VR/AR 博览会",
  cases_exhibit_wu_han: "2018年 武汉 VR/AR 博览会",
  cases_exhibit_shang_hai:
    "2019年 上海 VR/AR 博览会, 机甲对战全球首款多人对赛设备",
  cases_exhibit_hk: "2018年香港教育展",

  news: "最新消息",
  news_location: "主頁 > 最新消息",
  news_tab_intro: "简介",
  news_tab_pic1: "图1",
  news_tab_pic2: "图2",
  news_tab_pic3: "图3",
  news_tab_pic4: "图4",
  news_tab_pic5: "图5",
  news_tab_pic6: "图6",

  news_mid: "2019年香港社区中心",
  news_mid_pic: "共享 EYEMAX VR 体验共庆中佳秋节",

  news_plk: "2019年香港保良局",
  news_plk_pic: "引进 EYEMAX VR 广播系统，高层实地体验指导",

  news_cctv:
    "EYEMAX 杰出的表现成为深圳地区唯一的VR行业代表, 并入选中国中央电视台诚信中国栏目的品牌企业",
  news_cctv_pic: "会场唯一指定展示区, Eyemax 的 VR教育系统",

  news_skh: "2019年香港圣公会东涌综合服务",
  news_skh_pic: "老友记先体验 EYEMAX VR 乐趣无限",

  news_design: "2017年台湾全国校园VR工业设计竞赛",

  news_develop: "VR 开发者骇客大赛 颁奖典礼",
  news_develop_pic1: "EYEMAX VR 创新学院颁发 荣获「最佳社会责任奖」",
  news_develop_pic2: "EYEMAX VR 创新学院颁发 荣获「最佳奔放创意奖」",

  news_young: "EYEMAX眼界VR创新学院 - 正式开幕",

  news_fun: "EYEMAX VR 巡礼 FUNTECH@高雄2016-2018",

  news_ching_yi: "台湾静宜大学已经进入VR创新教育辅助系统",
  news_ching_yi_pic: "现场体验EYEMAX专蜀VR教育系统设备，全方位配合创新教育系统",

  rent: "出租设备",
  rent_location: "主页 > 出租设备",

  rent_headset: "VR 眼鏡 - 多合一",
  rent_headset_a: "內容能定制",
  rent_headset_b: "广告能直入定制内容",
  rent_headset_c: "价钱可议",

  rent_others: "其他",
  rent_others_all: "VR一体机系统",
  rent_others_fight: "VR对战体验",
  rent_others_industry: "VR工业应用",
  rent_others_education: "VR教育体验",

  carousel_small_home_title: "热点新闻",

  carousel_small_caption_young: "EYEMAX创新学院 - 正式开幕",
  carousel_small_caption_ching_yi: "静宜大学 - 教育辅助系统",

  details: "更多详情",
  update: "上次更新时间：20年4月20日",

  slogan: "口号",
  slogan_a: "坚持创新驱动 打造核心竞争力",
  slogan_b: "卓越的品质管控 关注每一个细节",
  slogan_c: "深厚的文化底蕴 引导企业成长",

  qr_code: "扫描二维码",

  china_address: "中国深圳盐田区壹海中心706室",

  email_albert: "lamyukkwan@eyemax-asia.cn",
  email_hammer: "lamsungfai@eyemax-asia.cn",

  china_tel: "+86 0755 2274 7273",
  content_weChat: "albertolam1022 / hammer031087",

  partner: "合作伙伴",
  location: " 当前位置: ",
  copyright: "© 版权拥有 2015-2020 ",
  eyemax_asia: "深圳眼界科技控股有限公司",
  language: "改变语言",
};

const LangContextProvider = (props) => {
  const [langChange, setLangChange] = useState(
    localStorage.getItem("SelectLanguage")
  );
  const [en] = useState(English);
  const [tc] = useState(Chinese);
  const [zh] = useState(ZhongWen);

  const changeLange = (param) => {
    setLangChange(param);
  };

  useEffect(() => {
    localStorage.setItem("SelectLanguage", langChange);
  }, [langChange, setLangChange]);
  return (
    <LangContext.Provider value={{ en, zh, tc, langChange, changeLange }}>
      {props.children}
    </LangContext.Provider>
  );
};

export default LangContextProvider;
