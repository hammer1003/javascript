import React, { createContext, useEffect, useState } from "react";

export const LangContext = createContext();

const English = {
  intro: "Introduction",
  intro_title: "Global distributor of Wuliangye, the top brand in China",
  product: "Product",
  product_title: "Global distributor of Wuliangye, the top brand in China",
  product_name: "Product Name: Wuliangye Brewing God",
  product_fragrance: "Fragrance: Sauce Type",
  product_alcohol: "Alcohol Degree: 53%vol",
  product_net_weight: "Net Weight: 500ml",
  product_origin: "Origin: Yibin City, Sichuan Province",
  product_package: "Package Type: bottled",
  product_manu: "Manufactor: Wuliangye Yibin China Co., Ltd.",
  history: "History",
  history_title_1:
    "More than 600 years of history, derived from the Ming Dynasty",
  history_content_1:
    "Open the bottle and pour the wine, which is elegant and elegant. Take a toast to see the color, the wine is clear and transparent, slightly yellow, no suspended matter and precipitation. There is a noticeable oily feeling under the light of shaking the glass. The drop of wine in the hanging glass is slow, the wine column is sparse and thick, and the tear glass is good for a long time.",
  history_content_2:
    "The aroma is pure and clean, the sauce is prominent, elegant and comfortable. The aroma characteristics are different from the Maotai aroma, and the sauce aroma is more obvious. The fragrance is rich and elegant. In addition to sauce aroma, the top aroma is also attractive. Body incense has grain aroma, koji aroma, grainy aroma, acid aroma and blends together. Smell the fragrance of flowers and fruits noble and elegant, comfortable and pleasant.",
  history_content_3:
    "The mouth is mellow and sweet. The wine is full-bodied and clean, and the not-so-obvious aroma of Chen runs throughout. The overall stimulation to the oral cavity is not great, but the bitter fragrance with a slight aftertaste stimulates Wei Lei's refreshing feeling. The liquor was covered with sour and fragrant tongue with soy, Chen, burnt, and roasted aromas, which immediately caused the tongue to regenerate. Just stirring two or three times, I couldn't help but bring swallowing. The wine is full-bodied, harmonious and has a long aftertaste. A little astringent scent intercepts the floral and fruity notes in the aftertaste, bringing a long and pleasant mellow body and aftertaste. Throughout the year, Chen Xiang brings a perfect presentation to the whole wine body.",
  history_content_4:
    "The empty cup has a fragrant and sour fragrance, the sauce is elegant and comfortable, and the burnt and fragrant baking fragrance continues to appear on the floral and slightly fruity aroma.",
  culture: "Culture",
  culture_title: "Harmonious integration of color, fragrance, taste and style",
  cooper: "Cooperation",
  cooper_title:
    "Global investment, joining and agency of Wuliangye Brewing God series",
  cooper_email: "Email: kjacgor@gmail.com",
  cooper_phone: "Mobile: +8613143803939",
  cooper_whatsapp: "whatsapp: +85292999719",
  cooper_wechat: "Wechat ID: wxid_zvrfnyu8v08v22",
  company: "Asialand Holdings",
  update: "Last updated 20 May, 20",
  copyright: "© Copyright 2008-2022",
};

const ZhongWen = {
  intro: "简绍",
  intro_title: "中国品牌之冠五粮液高端酿神系列酱香型白酒全球总代理",
  product: "产品",
  product_title: "中国品牌之冠五粮液高端酿神系列酱香型白酒全球总代理",
  product_details: "产品详情",
  product_name: "产品名称: 五粮液酿神",
  product_fragrance: "香型: 酱香型高端白酒",
  product_alcohol: "度数: 53%vol",
  product_net_weight: "净含量: 500ml",
  product_origin: "产地: 四川省宜宾市",
  product_package: "包装种类: 瓶装",
  product_manu: "生产企业: 中国‧宜宾五粮液股份有限公司",
  history: "历史",
  history_title_1: "600多年历史，源于明代",
  history_content_1:
    "开瓶倒酒，即有优雅酒香悠然扑鼻。举杯观色，酒色清亮透明，略有微黄，无悬浮物和沉淀等。晃动酒杯灯光下有明显油亮感。观挂杯酒滴下滑较缓慢，酒柱稀疏较粗，酒泪挂杯持久良好。",
  history_content_2:
    "香气纯正干净，酱香突出，优雅舒适。香气特征较茅台香气不同，酱香感更加明显。香气馥郁典雅。前香除了酱香之外，迷人的焦糊香、烘培香也较突出。体香有粮香、曲香、糟香、酸香浑然一体。细闻花香和果香高贵典雅，舒适宜人。",
  history_content_3:
    "入口醇柔，甜润。酒体醇厚干净，闻香中并不太明显的陈香感贯穿始终。对口腔整体刺激并不大，却与后味略有的苦香味激发了维蕾的爽感。酒液布满舌面酸香带酱香、陈香、焦糊香、烘培香味等，立刻引起口舌生津。只是搅拌了两三下，就忍不住带来吞咽。酒体醇厚丰满，谐调，回味悠长。少许的涩香截获了后味中的花果香，带来酒体醇厚谐调与回味的悠长宜人感。贯穿始终的陈香，给整个酒体带来了完美的呈现。",
  history_content_4:
    "空杯留香酸香突出，酱香优雅舒适，焦糊香烘培香等在花香、略带果馊香上持续呈现，喝完酒的空杯之香犹如恋人之唇。",
  culture: "文化",
  culture_title: "色、香、味、格和谐融合",
  cooper: "合作",
  cooper_title: "五粮液酿神系列全球招商、加盟、代理",
  cooper_email: "电邮: kjacgor@gmail.com",
  cooper_phone: "电话: +8613143803939",
  cooper_whatsapp: "whatsapp: +85292999719",
  cooper_wechat: "微信 ID: wxid_zvrfnyu8v08v22",
  company: "亚联集团",
  update: "上次更新时间：20年5月20日",
  copyright: "© 版权保留 2008-2022",
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
