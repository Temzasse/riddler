import type { CaseInfo } from "./types";
import { images } from "./images";

export const knownWords = ["a", "b", "c", "d"];

export const introLines = [
  "Hello 👋",
  "I've been waiting for you",
  "I have some bad news for you",
  "All your friends are... dead ☠️",
  "They have been mysteriously murdered...",
  "...by me! 😊",
  "I want to play a little game with you",
  "Before we start, take a shot to gather your courage 🥃",
  "When you are ready, type 'anna' to start",
];

export const introAnswers = [
  "Are you scared?",
  "Do you need another shot?",
  "Don't worry everything will be fine.",
  "I don't have all day.",
];

export const casesLines = [
  "I have to confess one thing",
  "The shot you drank was actually poison 😈",
  "You have 15mins before you die, unless...",
  "...you drink a potion every 15mins :)",
  "Fun right? Okay now to the main event",
  "Here on the left you have cases that you need to solve",
  "Each case file contains redacted information though",
  "You need to obtain keywords to unlock the missing info",
  "You can use a keyword by typing 'name=keyword'",
  "This will reveal one redacted detail for that person",
  "Each keyword can be used only once",
  "You'll find these keywords by going on quests",
  "A quest can be started by talking to a ghost",
  "Yes, your friends are ghosts now, boooooo! 👻",
  "Each time you solve a case you'll receive a reward",
  "Good luck! And remember to drink those potions 😉",
];

export const casesPositiveAnswers = [
  "Very good!",
  "Oh wow, how did you know that?",
  "Amazing!",
  "You are a true detective!",
  "I'm impressed!",
  "I didn't know you were so smart!",
  "Did you google that?",
];

export const casesNegativeAnswers = [
  "I'm not impressed",
  "What are you talking about?!",
  "You can do better",
  "I thought you were smart",
  "Are you a school dropout?",
  "Are you drunk?",
  "Are you even trying?!?",
  "Wrong, wrong, WRONG!!!",
];

export const casesFinalWord = "anaaliahven";

export const endingLines = [
  "Hello my love ❤️",
  "Congratulations for solving all the murders!",
  "Now we can live together without any distractions 👰🏻‍♀️🤵🏻‍♂️",
  "I hope you understand my motivations",
  "Will you still marry me? (yes/no)",
  "PS: the poison was actually not poison",
  "I would never kill my booboo 😘",
  "Back to the important question: you+me=forever?",
];

export const endingWrongAnswers = [
  "Wrong answer, please try again 🙂",
  "You had a typo, please try again 🙂",
  "Couldn't quite get that, please try again 🙂",
  "Are you sure? Please try again 🙂",
  "I'm not sure what you mean, please try again 🙂",
  "Try. Again. 🙂",
];

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
