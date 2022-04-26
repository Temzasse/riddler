import { images } from "./images";

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

export const knownWords = ["a", "b", "c", "d"];

export const cases: CaseInfo[] = [
  {
    id: "jopu",
    img: images.jopu,
    name: "Jopu",
    details: [
      { label: "Name", value: "Joel Lappalainen" },
      { label: "Age", value: "29" },
      { label: "Aliases", value: "Gollum, Ikiteekkari" },
    ],
    hints: [
      "Arrested for [manufactoring booze] at home",
      "Has complained about [eye sight] issues",
      "Body had a strong [nail polish remover] smell",
    ],
  },
  {
    id: "jaakko",
    img: images.jaakko,
    name: "Jaakko",
    details: [
      { label: "Name", value: "Jaakko Kallio" },
      { label: "Age", value: "28" },
      { label: "Aliases", value: "Ritari, Air Rambo" },
    ],
    hints: [
      "Arrested for [manufactoring booze] at home",
      "Has complained about [eye sight] issues",
      "Body had a strong [nail polish remover] smell",
    ],
  },
  {
    id: "ode",
    img: images.ode,
    name: "Ode",
    details: [
      { label: "Name", value: "Oskar Loisamo" },
      { label: "Age", value: "29" },
      { label: "Aliases", value: "Besserwisser, Mirri" },
    ],
    hints: [
      "Arrested for [manufactoring booze] at home",
      "Has complained about [eye sight] issues",
      "Body had a strong [nail polish remover] smell",
    ],
  },
  {
    id: "meris",
    img: images.meris,
    name: "Meris",
    details: [
      { label: "Name", value: "Teemu Meriluoto" },
      { label: "Age", value: "29" },
      { label: "Aliases", value: "Man of Steel, El Giganten" },
    ],
    hints: [
      "Arrested for [manufactoring booze] at home",
      "Has complained about [eye sight] issues",
      "Body had a strong [nail polish remover] smell",
    ],
  },
  {
    id: "lalli",
    img: images.lalli,
    name: "Lalli",
    details: [
      { label: "Name", value: "Lalli Myllyaho" },
      { label: "Age", value: "20" },
      { label: "Aliases", value: "Bootleg Lalli, Benjamin Button" },
    ],
    hints: [
      "Arrested for [manufactoring booze] at home",
      "Has complained about [eye sight] issues",
      "Body had a strong [nail polish remover] smell",
    ],
  },
  {
    id: "henu",
    img: images.henu,
    name: "Henu",
    details: [
      { label: "Name", value: "Henri Höytiä" },
      { label: "Age", value: "29" },
      { label: "Aliases", value: "Kontulan Thanos, Asap Rocky" },
    ],
    hints: [
      "Arrested for [manufactoring booze] at home",
      "Has complained about [eye sight] issues",
      "Body had a strong [nail polish remover] smell",
    ],
  },
  {
    id: "andreas",
    img: images.andreas,
    name: "Andreas",
    details: [
      { label: "Name", value: "Andreas Urbanski" },
      { label: "Age", value: "28" },
      { label: "Aliases", value: "Ex Machina, Crypto Bro" },
    ],
    hints: [
      "Arrested for [manufactoring booze] at home",
      "Has complained about [eye sight] issues",
      "Body had a strong [nail polish remover] smell",
    ],
  },
  {
    id: "eeki",
    img: images.eeki,
    name: "Eeki",
    details: [
      { label: "Name", value: "Eerikki Pihlajamaa" },
      { label: "Age", value: "29" },
      { label: "Aliases", value: "Siilitien Silva, Nelisilmä" },
    ],
    hints: [
      "Arrested for [manufactoring booze] at home",
      "Has complained about [eye sight] issues",
      "Body had a strong [nail polish remover] smell",
    ],
  },
  {
    id: "tasse",
    img: images.teemu,
    name: "Tasse",
    details: [
      { label: "Name", value: "Teemu Taskula" },
      { label: "Age", value: "30" },
      { label: "Aliases", value: "Mr Apple, Juhlamokka" },
    ],
    hints: [
      "Was found covered in [Apple products] at work",
      "Smart watch indicated two weeks [without sleeping] prior to death",
      "Credit card bill showed [countless iPhone preorders]",
    ],
  },
];
