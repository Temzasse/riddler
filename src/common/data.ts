import type { CaseInfo } from "./types";
import { images } from "./images";

export const knownWords = [
  "aliquam",
  "ante",
  "dapibus",
  "donec",
  "erat",
  "euismod",
  "fames",
  "feugiat",
  "fusce",
  "iaculis",
  "integer",
  "lacus",
  "lectus",
  "lorem",
  "massa",
  "mollis",
  "montes",
  "natoque",
  "netus",
  "nibh",
  "nisi",
  "non",
  "nullam",
  "ornare",
  "platea",
  "posuere",
  "proin",
  "purus",
  "quisque",
  "rhoncus",
  "sem",
  "semper",
  "sodales",
  "taciti",
  "tempor",
  "varius",
  "veni",
  "vici",
  "vidi",
  "vitae",
];

export const introLines = [
  "Hello 👋",
  "I've been waiting for you",
  "I have some bad news",
  "All your friends are... dead ☠️",
  "They have all been killed in mysterious circumstances",
  "I want to play a little game with you",
  "Before we start, take a shot to gather your courage 🥃",
  "When you are ready, type 'portugalilainen pornotähti' to start",
];

export const introAnswers = [
  "Are you scared?",
  "Do you need another shot?",
  "Don't worry everything will be fine.",
  "I don't have all day.",
];

export const casesLines = [
  "I have to confess something",
  "The shot you drank was actually poison 😈",
  "You have 15 mins before you die, unless...",
  "...you drink a potion every 15 mins :)",
  "Fun right? Okay, now to the main event",
  "Here on the left you have cases that you need to solve",
  "Each case file contains redacted information",
  "You need to obtain keywords to unlock the missing info",
  "You can use a keyword by typing 'name=keyword'",
  "This will reveal one redacted detail for that person",
  "Each keyword can be used only once",
  "You'll find these keywords by going on quests",
  "A quest can be started by talking to a ghost",
  "Yes, your friends are ghosts now, boooooo! 👻",
  "Find the first ghost to start your adventure",
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
  "Are you a high school dropout?",
  "Are you drunk?",
  "Are you even trying?!?",
  "Wrong, wrong, WRONG!!!",
];

export const casesFinalWord = "anaaliahven";

export const endingLines = [
  "Hello my love ❤️",
  "Congratulations for solving all the murders!",
  "I had no other option",
  "Your friends were getting in the way of our happiness",
  "Now we can live together without any distractions 👰🏻‍♀️🤵🏻‍♂️",
  "I hope you understand my motives",
  "Will you still marry me? (yes/no)",
  "PS: the poison wasn't actually poison",
  "I would never kill my booboo 😘",
  "Back to the important question: you+me=forever? 💍",
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
      { label: "Occupation", value: "Student" },
      { label: "Aliases", value: "Gollum, Ikiteekkari" },
    ],
    hints: [
      "Joel's bank account shows multiple [5.6€ purchases].",
      "His roommate tells that Joel has been studying the [Greek alphabet].",
      "Last words from Joel were '[red stripes, I have all the red stripes]...'",
    ],
  },
  {
    id: "jaakko",
    img: images.jaakko,
    name: "Jaakko",
    details: [
      { label: "Name", value: "Jaakko Kallio" },
      { label: "Occupation", value: "Helicopter Pilot" },
      { label: "Aliases", value: "Ritari, Air Rambo" },
    ],
    hints: [
      "People say that Jaakko has been [looking for a new car].",
      "Jaakko just bought a [fake Tesla] from the black market.",
      "Recent reports indicate that many [autopilot AIs] had been hacked.",
    ],
  },
  {
    id: "ode",
    img: images.ode,
    name: "Ode",
    details: [
      { label: "Name", value: "Oskar Loisamo" },
      { label: "Occupation", value: "Car Salesman" },
      { label: "Aliases", value: "Besserwisser, Mirri" },
    ],
    hints: [
      "Rumor has it that Ode recently [adopted a cat] from a swamp in Russia",
      "Ode is strongly [anti-vax]",
      "There are [many little bite marks] all over the body",
    ],
  },
  {
    id: "meris",
    img: images.meris,
    name: "Meris",
    details: [
      { label: "Name", value: "Teemu Meriluoto" },
      { label: "Occupation", value: "CEO of YIT" },
      { label: "Aliases", value: "Man of Steel, El Giganten" },
    ],
    hints: [
      "Meris has been involved in some [big building projects] which have been record breaking.",
      "In this project Meris has been exposed to [infernal heat] and he has only had access to alcoholic drinks.",
      "Meris is known for always being the [last person to leave a place].",
    ],
  },
  {
    id: "lalli",
    img: images.lalli,
    name: "Lalli",
    details: [
      { label: "Name", value: "Lalli Myllyaho" },
      { label: "Occupation", value: "Math Professor" },
      { label: "Aliases", value: "Bootleg Lalli, Benjamin Button" },
    ],
    hints: [
      "Arrested for [manufacturing booze] at home",
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
      { label: "Occupation", value: "Professional Jyväjemmari" },
      { label: "Aliases", value: "Kontulan Thanos, Asap Rock" },
    ],
    hints: [
      "There has been a bad [food shortage] in northern Finland",
      "Henu was seen [sitting still] for a long time.",
      "Vappu is almost here and Henu still [obsessively goes on the ice] every day.",
    ],
  },
  {
    id: "andreas",
    img: images.andreas,
    name: "Andreas",
    details: [
      { label: "Name", value: "Andreas Urbanski" },
      { label: "Occupation", value: "Renessance AI developer" },
      { label: "Aliases", value: "Ex Machina, Crypto Bro" },
    ],
    hints: [
      "The surveilance footage show that Andreas was [in his workshop] just before his death.",
      "Police searched Andreas' house and found out that one [Japanese knife] was missing.",
      "Latest news indicate that Andreas had managed to [create a new AI robot].",
    ],
  },
  {
    id: "eeki",
    img: images.eeki,
    name: "Eeki",
    details: [
      { label: "Name", value: "Eerikki Pihlajamaa" },
      { label: "Occupation", value: "UFC Warmup Act" },
      { label: "Aliases", value: "Siilitien Silva, Nelisilmä" },
    ],
    hints: [
      "Eeki's friends had tried to [call his cell phone numerous times] every Monday, Wednesday and Friday evening.",
      "Last time Eeki was seen he had some gnarly [marks around his neck and serious neck] pain.",
      "Eeki told you that he has been working on his [guillotine escapes]. Is this the French revolution?",
    ],
  },
  {
    id: "tasse",
    img: images.teemu,
    name: "Tasse",
    details: [
      { label: "Name", value: "Teemu Taskula" },
      { label: "Occupation", value: "Pixel Mover" },
      { label: "Aliases", value: "Mr Apple, Juhlamokka" },
    ],
    hints: [
      "The word says that Teemu had [invested all his money into] Netflix.",
      "Milka has been spotted [moving in with some man called Herlin]",
      "Witnesses say that Teemu was seen [talking to shady people in Vaasanaukio].",
    ],
  },
];
