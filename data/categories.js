import { RAMS } from "./rams";
import { COOLERS } from "./coolers";
import { CPUS } from "./cpus";
import { GPUS } from "./gpus";
import { POWER_SUPPLIES } from "./powerSupplies";
import { CASES } from "./cases";
import { MOTHERBOARDS } from "./motherboards";
import { MEMORIES } from "./memories";

export const CATEGORIES = [
  {
    id: 1,
    name: "Płyta główna",
    categoryName: "Płyty główne",
    imgSource: require("../assets/images/categories/PlytaGlowna.png"),
    data: MOTHERBOARDS,
  },
  {
    id: 2,
    name: "Karta graficzna",
    categoryName: "Karty graficzne",
    imgSource: require("../assets/images/categories/KartaGraficzna.png"),
    data: GPUS,
  },
  {
    id: 3,
    name: "Procesor",
    categoryName: "Procesory",
    imgSource: require("../assets/images/categories/Procesor.png"),
    data: CPUS,
  },
  {
    id: 4,
    name: "Pamięć ram",
    categoryName: "Pamięć ram",
    imgSource: require("../assets/images/categories/Ram.png"),
    data: RAMS,
  },
  {
    id: 5,
    name: "Zasilacz",
    categoryName: "Zasilacze",
    imgSource: require("../assets/images/categories/Zasilacz.png"),
    data: POWER_SUPPLIES,
  },
  {
    id: 6,
    name: "Pamięć",
    categoryName: "Pamięć",
    imgSource: require("../assets/images/categories/Pamiec.png"),
    data: MEMORIES,
  },
  {
    id: 7,
    name: "Chłodzenie",
    categoryName: "Chłodzenie",
    imgSource: require("../assets/images/categories/Chlodzenie.png"),
    data: COOLERS,
  },
  {
    id: 8,
    name: "Obudowa",
    categoryName: "Obudowy",
    imgSource: require("../assets/images/categories/Obudowa.png"),
    data: CASES,
  },
];
