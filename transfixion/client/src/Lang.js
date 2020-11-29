import React, { createContext, useEffect, useState } from "react";

export const LangContext = createContext();

const English = {
  main: "Main",
  home_page: "Home Page",
  title: "Title",
  more: "More",
  main_detail:
    "Contrary to popular belief, Lorem Ipsum is not simply random text. ",

  user: "User",
  search_user_page: "Search User Page",
  show_users_page: "Show Users Page",
  update_users_page: "Update User Page",
  reset_password_page: "Reset Password Page",

  search_user: "Search User",
  show_user: "Show Users",
  update_user: "Update User",
  old_password: "Old Password: ",
  new_password: "New Password: ",
  comfirm_password: "Comfirmation Password: ",
  reset_password: "Reset Password",

  search: "Search",
  email: "Email: ",
  submit: "Submit",
  username: "Username: ",
  position: "Position: ",
  password: "Password: ",

  factory: "Factory",
  search_factory_page: "Search Factory Page",
  show_factories_page: "Show Factories Page",
  create_factory_page: "Create Factory Page",
  update_analysis_page: "Update Analysis Page",
  update_factory_page: "Update Factory Page",

  search_factory: "Search Factory",
  show_factory: "Show Factory",
  create_factory: "Create Factory",
  update_factory: "Update Factory",
  update_analysis: "Update Analysis",

  find: "Find",
  find_factories_page: "Find Factories Page",
  find_factories: "Find factories",
  type_of_product: "Type of Product: ",
  specific_cost: "Specific Cost: ",
  specific_quantity: "Specific Quantity: ",
  specific_lead_time: "Specific Lead Time: ",
  hkd: "HKD",
  day: "Day",
  close: "Close",
  priority: "Priority(Ranking): ",
  liaison: "Liaison: ",
  analysis_report: "Analysis Report",

  details: "Details",
  search_info: "Search Information",
  analysis_info: "Analysis Information",
  name: "Name: ",
  factory_name: "Factory Name:",
  factory_email: "Factory Email:",
  location: "Location:",
  contact_person: "Contact Person:",
  contact_tel: "Phone Number:",
  items: "Items:",
  for_searching: "For Searching:",
  cost: "Cost: ",
  cost_hkd: "Cost(HKD):",
  quantity: "Quantity:",
  lead_time: "Lead Time:",
  lead_time_day: "Lead Time(Day):",
  minimum: "Minimum: ",
  maximum: "Maximum: ",
  for_analysis: "For Analysis: ",
  note_analysis:
    "Note: Below values are for AI evaluation purpose. All are default",
  ranking: "Ranking:",
  note_ranking: "Note: This value is for sorting purpose",
  inquiry: "Inquiry:",
  realiability: "Realiability:",
  scale: "Scale: ",
  reputation: "Reputation: ",
  audit_report: "Audit Report: ",
  service: "Service:",
  speed: "Speed: ",
  potential: "Potential: ",
  complement: "Complement: ",
  cooperation: "Cooperation: ",
  after_service: "After Service: ",
  quality: "Quality:",
  skills: "Skills: ",
  clear: "Clear: ",
  printing: "Printing: ",
  packing: "Packing: ",

  system_log: "System Log",
  logout: "Logout",
  login_note: "Don't show me your secret.",
  update: "Last updated 12 Feb, 20",
  company_name: "KINGS(HK) INTERNATIONAL LTD",
  term_and_conditions: "Terms and Conditions",
  contact_us: "Contact us",
  terms: "Terms",
  login: "Login",
  registration: "Registration"
};

export default props => {
  const [langChange, setLangChange] = useState(
    localStorage.getItem("SelectLanguage")
  );
  const [en] = useState(English);

  const changeLange = param => {
    setLangChange(param);
  };

  useEffect(() => {
    localStorage.setItem("SelectLanguage", langChange);
  }, [langChange, setLangChange]);
  return (
    <LangContext.Provider value={{ en, langChange, changeLange }}>
      {props.children}
    </LangContext.Provider>
  );
};
