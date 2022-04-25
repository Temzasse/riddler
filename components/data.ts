import { StaticImageData } from "next/image";

import lalliImg from "../assets/lalli_case.jpg";
import teemuImg from "../assets/teemu_case.jpg";
import eekiImg from "../assets/eeki_case.jpg";
import jopuImg from "../assets/jopu_case.jpg";
import jaakkoImg from "../assets/jaakko_case.jpg";
import merisImg from "../assets/meris_case.jpg";
import odeImg from "../assets/ode_case.jpg";
import henuImg from "../assets/henu_case.jpg";
import andreasImg from "../assets/andreas_case.jpg";

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
  img: StaticImageData;
  details: Array<{ label: string; value: string }>;
  hints: string[];
};

export type Line = {
  id: string;
  text: string;
  respondent: "killer" | "user";
};

export const knownWords = ["a", "b", "c", "d"];

export const cases: CaseInfo[] = [
  {
    id: "jopu",
    img: jopuImg,
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
    img: jaakkoImg,
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
    img: odeImg,
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
    img: merisImg,
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
    img: lalliImg,
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
    img: henuImg,
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
    img: andreasImg,
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
    img: eekiImg,
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
    img: teemuImg,
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

export const asciiAnna = `
                                                                       .     .    ..   .     ....:^.                                                                                          
                                                                    ..     .    ..        ..   .    ....:^.                                                                                          
                                                              ..       ...          ..             ...    ..:^:..                                                                                      
                                                            ...    ......   ......   ....   ......         ....:^^:.                                                                                   
                                                         ...      .   ..        .......     ........    .......::^^^~^.                                                                               
                                                        ...     ........   ........      ........         .........::^^^.                                                                              
                                                      ...     .............          ......    .....      ..........:::::::                                                                            
                                                     ....  .......::........    ...      .....   ......   .....::......:::::^.                                                                          
                                                    ............:::::...............   .         .    ......::^^^^:.....:::.:^^                                                                         
                                                   .  .........:^^:::.::.................   .............::^^~~~~~!~^.....::..:~.                                                                       
                                                  . ....:..:.:^^^^:^::^:..:::.::.......... ...::.:.....:^^~!77????77!~:.   .:..:~:                                                                      
                                                   ...::.::::^^^~^^^^^^:::^^::::............:^^^:..::^~!7?JJYYYYYYJJ?7!^.    ....~^                                                                     
                                                 ....::::^^^^~~~~~^^^^^^^^^:^:::::::......:^^^~^:^~!7?JYY555555555YYYJ?7~:     ...~^                                                                    
                                                . .::::^^~^^~~~~!~^^^~~^~~^^^^^::^:...:::^^:::^^~7?YY555555555555555YYYJ7~:.     ..!~                                                                   
                                               ...::.:^^^~^~~~~!!~^^^~^~!~^~^~^^^::::::^^^..:^~7JY555555555555P555555YYYJ?!:.     ..!!                                                                  
                                              ...::.:^^^~~~~!~!~!~^^^^!!~^~^^~^~^:::^^^^:..^~7J55555555PP5PPPPP5555555YYJJ7!:..    .:77                                                                 
                                              ...:.:^~~~~!~~~~!~~:^^:~!!^~~^^^~~^^::^~~..:^7JY55555PPPPPPPPPPPP55555555YYJ?7~:.     .:77                                                                
                                             ...:::^~~~~~~~~~^~^^:^::~~^^~^^^^~^^::^~~:.:~?Y55PPPPPPPPPPPPPPPPPP555555YYYYJ?7~.      .^?7                                                               
                                              ::::^~~~~~~~~~~^^::::::~^:^^:::~~~~:~~~~.^!JY55PPPPPPPPPPPPPPPPPPP5555555YYYJJ?7^.     .:!J!                                                              
                                              .:::^^~~!~~^~~^^::..::^^:^^:::^~~~^^~~~:^?Y55PPPPPPPPPPPPPPPPPPPPPPPP55555YYYYJ?7:      .^7Y:                                                             
                                              :::^^^^~~~^^^^:::...:::::^:.:^^~!~^~~~~^?5PPPPPPGGGGPPPPPPPPPPPPPPPPPPPP55555YYJ?!.     ..~Y?                                                             
                                             .:::^^^^~~~^~^::::...::.:::..:^~~~~~~~~^7Y5PPPGGGGGGGPPPPPPPPPPPPPPPPPPPPP55555YYY?:      .:?Y^                                                            
                                             .:::^:^~^~^^^::::....::.::...:^~~~~^^^!!J5PPPGGGGGGGPPPPPPPPPPPPPPPPPPPPP5555YYJ???!      ..~JY                                                            
                                             .^:^^:^~^^:^^::::......::....^^^^~^^:~!?Y5PPPGGPGGPPPPPPPPPPPPPPPPP555555YJ?7777???7:      .^7Y!                                                           
                                             .::^::!^^^:^::..........:...:^::~~^^:^~7JYYY555555PPPP5PPPPP55555555YYJ?7!!!!7?JYYYY?.     .:^?5^                                                          
                                             .:::.~~^^:^^.:.........:...:::.:~^^:^^^~~~!77?JJYY555555555555555YYYJ?7!~!!7JJYYJJJJY.     .:^~YJ                                                          
                                             .::::^::^:::.:......:.::..:::.:^^^::~!7?7!!!!!!77JJYYYY555555555YYJJ?7!!!7?J???7???JJ~     ..:^YP                                                          
                                             .::::^::^::.........:.:...::..:^^::^~7?JYJ?77!!!!7??JJYYY555555YYYJ?77!~~~^:..::^~7?JJ.     .:^7?                                                          
                                             ...::::^^::..............:....:::::^~7?JJYYYJJ?77777?JJYYY55555YYJ?7~:......^:.  :!?JY?.    .::~7                                                          
                                             ....:^^^::..............::....:.:::::^^^~~~^~~!7??777?JJYY555555YJ!^:... .:^?7^.:!?YY55!    .::~?.                                                         
                                             ....^~^:::.............:.......:......   ....:.:^!7777?JY55PGGPP5?!~!7~~~~~!7!7JYY555555^   ..:^7!                                                         
                                              ..:^~^:::.............:.......:..  ..... .:^J?!~^~7JJ??JY5PGBGP5JJYYYYJJ?JJJJYYY55PPP55Y:  ..:^!!                                                         
                                            . ..:~~::::.... .......:.......:::....:~^!~~~!?77?JJY55YYYY5PPGGGP5Y55YYYJJJJYY55PPPPPPP55?....:^~~                                                         
                                            ....:~:::::.......... ........:::::^~!7??J?JJ?JJYYY5555555555PGGGGP55555PPPPPPPPPPPPPPPPP55^...:^~!                                                         
                                           .....^^:^:........ ....:.....:.::^^^!?JYYY5555YYYYY55PPPPP5555PPGGGPP555PPPPGGGGGGGGGPPPPP55?....^~!^                                                        
                                           .....^^::......    ..........:::^^^!?JYY5555555555PGGGGPPPP5555PPGGGP555PPPPGGGGGGGGGPPPPP55Y....:^!:                                                        
                                          .... .^^:.......   ...........:::~~~?Y555PPPPPPPPGGGGGGGPPPP5555PPGBBGP5555PPPGGGGGGGGPPPPP55Y....:~!:                                                        
                                         .... .:.::...... .  ....... .::::^~~7J55PPGGGGGGGGGGBBBGGPPP5555PPGGGBGGPP5YY5PPPPGGGPPPPPP555J. ..:^!~                                                        
                                          ....:.......    . ....... .:::::^^!?Y5PPGGGGGGBBBBBBBGGP5YYYYY5PPGGBBBGGPP5YJJY5PPPPPPPPP5555?....:^~7.                                                       
                                         .....:..:.....    ..........::::^^~7JY5PPGGGGGBBBBBGGPP5YYY55YY5PPPGB#BBGPPP55JJJY555P555555YY!...::^~7~                                                       
                                         ....:::.:....     ..........:::^^~!?YY55PPGGGGGGGGPP55YJJYY555Y555PPPGGPPP5JJYYYJ?JYYY5555YYY?~.::::^~!~                                                       
                                         ....::::::...    ..........:::::^~7JYY555PPPPPPPPP55YJYYY??JJJ?7777?JYYYY?7!!7Y5YJ77?JJYYYYJJ^^^^^::^~!7                                                       
                                         ....::^:::..    ...........:::.:^~7JYY555555P55555YYJY55P57!~~^^^^~!77777!777J555YY?!7??JJJ?7.:~^^^:^^~J.                                                      
                                         :..:::::^:.. .  .........::::..:^~7?JYYYYY55555YYJJ?JY555P5YJJ??77!!!!!!7?JY55555YYJ?77??J?J^ :~~^::^^~?                                                       
                                         ::.::.:::.:..............:^:...::^!7??JJJJYYYYJJ?77JY555PPPPPPPPP5YJ777?J55PPPP55J77?JJJJJJ?. :~~::^^^~?                                                       
                                         :::::.::^:..............:^:....::^~!77???JJJ??77!7JYY5555PPPPPPPGGGPPPPPP5555YYJ7~7JYY5YYJJ: .:~~::^^^~J:                                                      
                                         ^::::.:::::............:::.  ..:^~~!!777????7!!!7??JJYYYY55555YYYYYYY5YJJ???77!^~Y55555YJJ~  .^~~::^^:^7                                                       
                                         ::::::::::::..:.......::::.  ..:^~!7777??????7???7^:::^!!!7777??7?JJ???YYYJ5????YP5555YJJ~ ...~~^::^^:^:                                                       
                                         :^::^:::::::.::.......::::.   .:^!777777??JJYYYY555J7~:^^~??7Y55YPGGP5PGP5YYJJYY5P555YJJ~  ..^~^::::^:^:                                                       
                                         .^::^^:::::^.^:...:...::::.    .:~!7???????JYY5555555YYJJJYYJJJYJYYYJ?J??JJJJJYY5555YJJ^  .::~^^:::::::^                                                       
                                          ^:^^::::::^:^...:..::^^^^..     :^!7???????JYY555555YYJJJJJYYY5555YYYYYYYJJJJJY5555YJ^   .:^^^:..::::::                                                       
                                          .:::::::::^^^...:.:::^^~~::.     .^~7??????JJYYY55555YYJJJJJJJJJJJJJJJJJJJJJJY5P55Y?:   .:^::::..:::.::                                                       
                                           :::::..:^^~^:..:::::^~~!!::     ..:^~77??JJJJYYYY55555YYJJJJJJJJ?????JJJJJY55P55Y!.    .:..::...:::...                                                       
                                           ::.:....^^~^..:::::^~~!!?~:.     ..::^~!7???JJYYYY55PPP555YYYYYYYYYYYYY555PPPP5Y^     .:....:...:^^...                                                       
                                           .:.....:^^^^.:::.^^~~!!7J?^:.    ..::::^^~!7???JJYYY55PPPPPPGGGGPPPPPPPPPPPPP5Y:     .:..........~!::.                                                       
                                            .....:::^~^.::.:^^!!!!!JJ!^:    ..:::::^^^^~!777??JYY55PPPGGGGGGGPGGGPPPPPP5J:    ..:.. ... .::::!~^:                                                       
                                            .....::::~^:.:::^~77!77??!~:.    ::^^^^^^^^^^~~~~!!7?JYY5555PPPPPPPPPP5555J~.    .:^...     :!~7~~!~~:                                                      
                                            ......^::!^:.:.:~~??7??7!!~~..   :~!!!~~^^^^^^^^^~~~~!7??JJYYYY5555YYYJJ7^.      :^.        ^7!J?~^^^7.                                                     
                                             ... .^:^!^:.:::~!?7?JJ7!~~~:.   :~7???77!~~^^^^^^~~~~~~~!!777777777!~^:.      ...          .!!7Y~::.:~                                                     
                                              . ..:^^~^:::::!7?!7JJ~~~~~^ .  .^7?JJYYJJ?7!~~~~~~~~~~~~~~~^^^^^.......    ..              .~!77^:.:~^                                                    
                                                ...^:^:::..:77?!7??~~~~~^.   ..^7JYYY55YYJJ?7!~~~~~~~~~~~^^^::......                ..... .~!!~^::^~:                                                   
                                                 ..:^::::..^7!!~777~~~~~^.    ..^?JYY555555YYJ?77!~~~~~~~^^::::...                  ....:::^~!~^^^~~~:.                                                 
                                                 ..:~:.:..:~7!!~777~^~~^^.     .:^7JYY55555555YYJ?7!!~~~^^^^^^::.                    .....::~~~~~^~~!!~~^..                                             
                                                 ..^^..:.:^~7!~^777~^~~^^.     .::^7?JYY55555555YYJJ?7!!~^~~^^^:.                    ......:^~!!^:^^~!!~~77777!~^:.                                     
                                                 .:^...:::^!77~~777!~~^^:.      ..:^!?JYY555555555YYYJJ?777777!:.           . .       ....::^^^^~~~^^~~~~!?77?77????7!7!~:.                             
                                                ::::....^:^777^~!77!^~^...   .....:^!77JY5555PPPPP5555YYJJYYJ7:.             ...      .........:::^~~~~^^~!~!!77!7???!!???J?7~:                         
                                           .^^:^^^~:...:^^~77!^~!77~~^: ... . ....:~!???J5PPPPPPPPPPPP55555Y!:.   .      ..   ::.    .....  . ......:^~~^~^!!~!!!!?777!7???J?YYY7.                      
                                    .^^^~^^^~~~~~~!^^:.:~~!77!~~!7!~^:...... ..::::~!7??JYPPPGGGGPPPPPPP55J~:.....       ... ..^.    ....        .....:~^:^^^^~777?77!7????J?YYYJY?.                    
                                .^~7J?!^~!~!~7!~~!~^^^:^~7777!~~!!!^:. ... . ..::::^!!7?JY5PGGGGGPPGGGGGPY~^:::::.........:...:^..  .....              ..^^~^~!?7777?~?7?77J?YJ????J~                   
                            :~??JJ??J?^~!~!!~!!~~!!!~~^^!7777!~~~!~... .   ...::^::^^^^~!?Y5PGGGGPPPPPPPY!~^:~~^:.::::..:.:.:::...  ......   ......     ..:^~!!7777??!77777J5??JY??JJ~                  
                       :!!7JJ?7?J7?J?7~~!~^!!!!7!!7!!~~~~!!?7~~~~~^. . .   ...:::^^^^^^^^^~!?Y5PPPPPPPP5?~!^~!~~:^~^^:^^^^^^^::......................   ..::^^!!!!7?7!77?7????7?JJJYJJJ:                
                     :7JJ???J????JJ?777777!^!7777!77!!!!~!!7~^^~~^:.  .. .....:::^^!^:!7?J?7~!7?Y5PPPPP57!!^~~^^^~^~^^~~::^~^::.......  ........::^::....:~~~~~~7!7!7777?J77?!?JJJ?JJJJY!.              
                  .!J???J??7?7???????J?J?777~!777?777777!!7~::^^~^. . ....:...:::^~!^^7??JY5Y!7?JJJYPP55?7!^^^^^:^^:^:^::^~~^^::....... ....:...:!~!~^:::^7!~77777!!!?7!777J77JJJ??YY?JJYJ7^            
                 ^JJJ?7Y??7!7??7??7JP??J?7??^!7777J????J!77^.::~^.. .. ..:....::^~~~~~7JJJY5Y?!JY5YJJ555J7!~:^^^::::::^^:^^^^^:.... . . ..:::^:..:!~!^^^~~~!!!!J!?!!!J!?7?7J7?J7Y?J????JY5YYY^          
               :?J7??JJ??J?77??7!7?7?7?7J???~777??77???777~.::^~... .   ......:^~!~!?~!7YY555Y!7JY5YJ?55Y?77~:::....:^^...........      ..:~:^^^..~~~^^!!7!7?7!777~!!7?5?7?J7JG5?7?7??YY?JJYY57         
              ^JJJ7JY?77!7?!77777777!?7?7??7!7777?JJ7?777~...^^:..      ....::^~~!!!77777Y555Y7!JJ5Y5?JPPY?77~:....::.........   .      ...!!:~~::^~~^~!~777!J?!777~!7JYJJ?!??7J?7J?J?J???J?JJY.        
            .!???J?7??7!7???!!7???7!7?Y57JJJ7?777??7?7777~..:^...       ....:^^!77!???!777555Y?!?J5YJ?JPP55Y?7~:.....  ......    ... .  .:.^~^^^^~^~!!~~~?7777J!777!?7?JJ77J7!7???J!J?J!YY?JJYY!        
          .^???7J77?J??777?!7???!7J??JJPJ7?J777???!77?77!~^::...        ..:::~!!!77??77!!7?PP5Y77J5YJ7YPGPP55Y?!::..  ...::::.  ...   ..:::^~^^^!7~77J??7!!~???777?777YJ7!7777J??JJ?7J??JJ?JY?JJ^       
         ^??????777?YJ7!J7J7777????7J777J!!7~77??5J??!7!7~^^:...       ...::^!!~~~!777!!7!JYPP5?7?JJ??PPGPGPP55J!^.. ..:..^~^::....  ...::^~~^~!!7~?7J7!J?!!?Y?7JJ77~77777J?7??7!7!J?JJ7J?7JY???Y.      
       .~??7777?JJ7?7?77????!!?7?J77?7!???!??!J7YJJJ77~!~7~^^:...      ....:^!~!~!?7!!!!!7JJ?5PY77?J?YPPGPPGGPP57^.. ..:..:::::....   ..:^^~~!?J!!?J!?J!7!?!7??7?7!7!?7!?77?!??7??J?JJ?YJ77J?JJ?Y!      
      ~J?7??77!7Y777!7?!7J777?7!!?J777??JJ7?!7??77??7?J~777~^^:..     ......^^!!!7777!77??77??YJ7???JPPPGGGGGGG5!^:. .::...:^^^:..  ..::^~~~!!!?7??!77JJ?!7777!!!!?7!?7?7!7777J???!J??7JJ??Y?J?J?J:     
   ^?????7??777?JJ?7?7777?7?7J7~!7!?JJJJ77!7!Y?~??Y?!~777!!!^~:...    .^^::.:^~~77!!!!~77!!!!77J?J??5PPGGGBGGGPY!~:...::.:^~~^::......::^!^?777?777!7!?J??!77JY~~7JJ?J???!?!7!YY!J??7???J?JYJ7JJ7JY^    
  ~JJ777!?J7?!7?~?!777!77!!7??77!!!7???7?77!JY77YY7J7?7?!7!?~~^::......:^:^:::^~~!!!!!!!!~~~~~~~!???YPPGGGBBBG5777^^^:^::~~~^::.......::^7~J7!7J?!J7?7J??JJJ?7?!7?J5?!!?J7?7~7~?!?77J7?77?7JJ7J?7?JY^   
:?J???!77J?JJ!Y!7!7J?77!?777J?J!!J!7?77?7?77J?!7??!!7!Y77!77~^~^^~:. ...:~!^::^^^~~~~~!!!!!~~~^::^~!7J55PGBBGG?~?7!!~:::^~^::.  .....:^^~?!J?!77?7?7?777??777!7!77YJ!~?77!7J777??!77!J??!?JJ7?JJ???J?   
7??7J???7J7~!J7?77?7!7!7??!??!!77!?Y??J??J!?J~~~?77!77!?J7~7~~?!~!!^:...:~7~^^^::^~!!~~!~~~7J~^^~^:^~!JY5GBBG57~J7!~7!~^~^:..  ....:.^^~7?7??7?7?!JJ77JJ??J!!77!?!?!!7777?!Y?77???J?7J??77J7JJ??JJJ?J!  
???J???77J!!7!!7!J777~7?7J7?777~77?7JJ!J?777??~7!J7Y??JY77!J77?~^^7!^:::^^!~?J!!~!^~~J?!~!!???J7~^^^^^~?YPGBGJ!!!~?7?!7!~^:........::~~!77777!JY???7?7Y?7777!!7JJJ!~77~??7~JG77!7??7777!???7??Y?JJJYJJ!.
?7!7J?77J?7J?77?J77?777~?7~!77!?!7!7??J?!!~??7?Y?7Y??~JY7!J???7?^^~!7~^^~~~^~!!!!7?~!!!~!~!!~!?J7~~~~!!7YPGBPY5?!7Y?~~^~~~!~^^:^..::~!7J7~7??!?J7?J7!~7?JJJ!!~Y?J!~!~!~!7?^!J7Y???!77!?777!J~???!?JJJ7??
J7?J777?7?J?J7~??J777J77J7J~~?7~!77!?7!!!77!?7JJ?!7JJJJY?!J7!?7!!~^^~!~~~~^^~!!~~~~!!~^~~~~7J!!?!7!!!7?J5GGG5~!P~??7~J?7!!?J7!77~~~^77???!???7?Y?7J!7!?P55?7^7??7~!7!7~77?~!J~7?YY!!?!??Y7!J7JJ77JJ77??7
J?77777!J?777??7!?7!?77?J77!?!~J7!7?!!77?J7?J?!?7?!7!J577?7?77!~~!~^~::^^^^^^^::::::.:::^:~~YJJ77!JB5?JYPGGG5Y!!!7JJ7J7?J77??~?7?7Y!J!7!7!?7?J7!7?YP!!77???7~7!?^7!77J7J?!?77?~J??7!?!J?!?7Y7J??7J?JJJ??
JY?!7??J77J!?J?7??777?JJ7?!??777!777!??7?777777~7J?!7~7J7J?!!777~!~~~^:::^::::::........:!!?7Y!7!7!?7??5GGGPJY?~?GJJ5?7!J!!?Y!!??7J7?!7~?777??7?JJ!J7?7!JJ7!~7?7!7!7!?!7J~7!7J!777J!777Y7?!J?J7??JJ?JYJ?
??!?7~!??777J!~???!!~!~777!J!JJ~7~77~~!!J?7!?!7!77777?7?7!?7J!77!7~^:^!~::.:::.......::.~!77?J?!?J???J7JPPP5?7Y~7?!?!!!!7!~7Y77J?77J!!!Y?7~777!?7Y!?777!777^~77!!!~7777~?77!~7~!?!77~77?777777?7??7?7JJ?
`;
