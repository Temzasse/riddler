export type CaseId =
  | "lalli"
  | "tasse"
  | "eeki"
  | "jopu"
  | "jaakko"
  | "meris"
  | "ode"
  | "henu"
  | "andreas";

export type CaseInfo = {
  id: CaseId;
  name: string;
  img: any;
  details: Array<{ label: string; value: string }>;
  hints: string[];
};

export type Line = {
  id: string;
  text: string;
  respondent: "killer" | "user";
};

export type Phase = "intro" | "cases" | "ending";
