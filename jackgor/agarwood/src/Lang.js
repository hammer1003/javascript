import React, { createContext, useEffect, useState } from "react";

export const LangContext = createContext();

const English = {
  home: "Home",
  home_title:
    "Royal imperial products of the Ming and Qing dynasties - ShangGuan imperial products",
  prestigious: "Certificate issued by international prestigious authority",
  home_malaysia_title: "Precious herbs from Malaysia",
  home_malaysia_content:
    "Edible agarwood is derived from the Gaharu Tea Valley in Gopeng. Combined with twelve types of agarwood and international scientific certification, it is refined, not only as a spice and medicine, but also as a dish.",
  home_taiwan_title: "Woody and Flowery",
  home_taiwan_content:
    "Soothing and relaxing, this precious eaglewood tea originated from Yunlin, Taiwan is picked and processed once a year in spring. Oxidized and roasted to the medium range, this tea accents on its herbal aroma, leaves a lingering sweetness and helps with sleeping difficulties",
  details: "Details",
  intro: "Introduction",
  gaharu: "Gaharu Tea Valley in Gopeng",
  gaharu_title:
    "Gaharu Tea Valley is the largest organic agarwood cultivation plant in Gopeng, Malaysia.",
  gaharu_content_1:
    "The tea garden is organically planted with approximately 200,000 precious agarwood trees and has been awarded the first organically-certified agarwood tea garden by the Malaysian Book of Records.",
  gaharu_content_2:
    "HOGA and Hele Agarwood products are derived from Gaharu Tea Garden in Gopeng, Malaysia, and are made in Malaysia. The use of modern technology combined with ancient recipes to give full play to the effect of agarwood. Products have been certified and affirmed by Halal Foods (HALAL), Food Safety (HACCP) and International Food Management (ISO: 22000: 2005).",
  advantages: "Advantages",
  advantages_content_1:
    "The agarwood tea we selected is derived from the agarwood tea plantation (deep mountain dense forest) grown naturally, with pesticides and fertilizers, and the original agarwood leaves. It adopts the fine traditional crafts of the native alpine oolong and is harvested and grown only in the spring of one year. The length of the cycle ensures that the fresh leaves have rich contents, sweet and mellow, a special woody fragrance, the soup is golden and translucent, and the original leaves at the bottom of the leaf are perfectly displayed and pleasing to the eye.",
  advantages_content_2:
    "Agarwood tea is an herbal tea. It is different from the six major Chinese teas. Caffeine, tannin, and poor sleep / intestines can be enjoyed.",
  methods: "Cooking Methods",
  method_1:
    "Agarwood Soup Base: Agarwood can be used as a hot pot soup base with various types of meat. Add the Agarwood Soup base, and it will return to the sweetness after entering the throat. Flavor-Agarwood flavor. Agarwood can make the soup more delicious, as well as health and beauty.",
  efficacy: "Healthy Efficacy",
  efficacy_1:
    "Agarwood tea is the most precious medicinal material gifted by nature. Agarwood tea has also been used in folks for a long time. The agarwood tea has a sweet and sweet taste at the entrance, which is unforgettable. Agarwood tea can help stabilize blood pressure, blood sugar, uric acid and relaxation Nerve, improve sleep and other effects.",
  efficacy_2:
    "Agarwood tea can calm the nerves, help the liver detoxify, help prevent and improve the three highs, lower uric acid, improve stomach cold and kidney deficiency, improve length function, and help smooth bowel movements. Contains a variety of trace elements required by the human body, and has good antioxidant effects, helps to remove harmful free radicals in the human body, prevents a variety of chronic diseases, and is mild and not cold, so it is a long-term health herbal tea .",
  efficacy_3:
    "In fact, agarwood contains abundant amounts of essential life elements such as calcium, zinc, iron, manganese, and vitamins. It is a good supplement for special nutrients for the human body and an important basis for maintaining normal human life activities. Elimination of multiple adverse factors can be of great benefit. 'Compendium of Materia Medica' records that agarwood, pungent smell, lukewarm, non-toxic. Into the lungs, kidneys, spleen, and stomach meridians, all unregulated qi can be adjusted.",
  product: "Product",
  product_list: "Product List",
  product_title_1: "Title 1",
  product_desc_1: "Desc 1",
  product_title_2: "Title 2",
  product_desc_2: "Desc 2",
  buy: "Buy",
  name: "Name",
  email: "Email",
  email_address: "Email Address",
  address: "Delivery Address",
  delivery_address: "Delivery Address",
  card_number: "Card Number",
  card_number_enter: "Enter digit without spaces",
  valid_until: "Valid Until",
  valid_until_month: "Month e.g. 01",
  valid_until_year: "Year e.g. 2020",
  cvv: "CVV",
  cvv_enter: "Last three digits on the card back",
  card_holder: "Card Holder",
  card_holder_enter: "Name on the front-end of your credit card",
  video: "Video",
  video_title_1: "The story of Gaharu Tea Valley",
  video_title_2: "Agarwood and Gaharu Tea Valley",
  video_title_3: "Clear explanation about Agarwood and Eaglewood",
  video_title_4: "The History begin from 1992",
  company_name: "ShangGuan Royal",
  language: "Language",
  submit: "Submit",
  update: "Last updated 20 Mar, 20",
  copyright: "© Copyright 2016-2020"
};

const ZhongWen = {
  home: "主页",
  home_title: "中国明，清朝的皇室御品 - 上官御品",
  prestigious: "国际权威机构颁发证书",
  home_malaysia_title: "源自马来西亚之珍贵药材",
  home_malaysia_content:
    "食用沉香源自于务边沉香山茶园，结合十二种沉香古借及现今科研国际认证，精炼而成，不但可做为香料及入药，还可入菜。",
  home_taiwan_title: "源自台湾云林之鲜花木香",
  home_taiwan_content:
    "沉香茶园，每年仅于春季采收，极为珍贵，以中道发酵与烘焙的工艺，呈现出大自然的木质分货，舒爽甜润，有安神助眠的功效。",
  details: "细节",
  intro: "介绍",
  gaharu: "务边沉香山茶园",
  gaharu_title: "务边沉香生茶园是全马来西亚最大型有机沉香培植场",
  gaharu_content_1:
    "茶园以有机种植约200,000 棵珍贵的沉香树，并获得马来西亚纪录大全颁授首个有机证明的沉香茶园。",
  gaharu_content_2:
    "贺嘉(HOGA) 及和乐沉香产品，就是源自马来西亚务边沉香茶园，马来西亚制造。利用现代科技结合古代配方，充分发挥沉香疗效。产品已获得清真食品(HALAL)、食品安全(HACCP) 及国际食品管理(ISO: 22000:2005)的证明及肯定。",
  advantages: "优点",
  advantages_content_1:
    "我们所选的沉香茶，源自(深山密林)自然农法种植的沉香茶园，冇农药化肥，原片沉香树叶，沿用了本土高山乌龙之优良传统工艺，仅于一年之春采制，生长周期之长，保障了鲜叶有丰富的内含物质，好咁甘甜醇和，特殊的木质方香，汤色金黄透亮，叶底原叶完美展现，赏心悦目。",
  advantages_content_2:
    "沉香茶乃草本茶，其与一般中国六大茶类不同，冇咖啡因、冇单宁酸，睡眠质素欠佳/肠胃不佳者，大可放心享用。",
  methods: "吃用方法",
  method_1:
    "沉香汤底: 沉香可配各款肉类一起煲汤作火锅汤底，加入沉香知汤底，入喉后有回甘淡甜味，此味便是超越甜、酸、苦、辣及鲜至第六味- 沉香之味，沉香能令汤更美味之外，更有养生美容之功效。",
  efficacy: "养生功效",
  efficacy_1:
    "沉香茶是自然界馈赠最为珍贵的药材，而沉香做茶在民间也早有应用，沉香茶味甘醇入口有回甘淡甜味，让人难忘，沉香茶更有助稳定血压、血糖、尿酸及松弛神经、改善睡眠等作用。",
  efficacy_2:
    "沉香茶可行安神助眠、协助肝脏排毒、有助预防改善三高、降尿酸、改善胃寒肾虚、改善长度功能、帮助排便顺畅。内含多种人体所需微量元素，且具有很好的抗氧化功效，有助清除人体内有害自由基，预防多种慢性疾病，性质温和不寒凉，因此是一款可长期饮用的养生草本茶饮。",
  efficacy_3:
    "实际上沉香含有人体必需的生命元素量极丰富，如钙、锌、铁、锰等和维生素，是人体很好的特殊营养物的补充剂，也是保持人体正常生命活动的重要基础，并对体内多种不利因子的消除大有益处。 <本草纲目>中记载，沉香，气味辛，微温，无毒。入肺、肾、脾、胃经，凡对人体一切不调之气皆能调之。",
  product: "产品",
  product_list: "产品清单",
  product_title_1: "标题 1",
  product_desc_1: "描述 1",
  product_title_2: "标题 2",
  product_desc_2: "描述 2",
  buy: "购买",
  name: "姓名",
  email: "电邮",
  email_address: "电邮地址",
  address: "送货",
  delivery_address: "送货地址",
  card_number: "信用卡号码",
  card_number_enter: "输入不带空格的数字",
  valid_until: "有效期至",
  valid_until_month: "月 e.g. 01",
  valid_until_year: "年 e.g. 2020",
  cvv: "CVV",
  cvv_enter: "卡片背面的最后三位数",
  card_holder: "持卡人",
  card_holder_enter: "信用卡前面的名称",
  video: "视频",
  video_title_1: "务边沉香山茶园的故事",
  video_title_2: "沉香木与务边沉香山茶园",
  video_title_3: "有关沉香木和沉香树的说明",
  video_title_4: "历史始于1992",
  company_name: "上官御品",
  language: "语言",
  submit: "提交",
  update: "上次更新時間：20年3月20日",
  copyright: "© Copyright 2016-2020"
};

const LangContextProvider = props => {
  const [langChange, setLangChange] = useState(
    localStorage.getItem("SelectLanguage")
  );
  const [en] = useState(English);
  const [zh] = useState(ZhongWen);

  const changeLange = param => {
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
