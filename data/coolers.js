export const COOLERS = [
  {
    id: 1,
    name: "Chłodzenie CPU BE QUIET! Dark Rock Pro 4 BK022",
    imgSource: require("D:/PracaInz/PCConfigurator/assets/images/Coolers/cooler_1.jpg"),
    categoryId: 7,
    compatibilities: {
      CPU: [
        "2066",
        "2011-3",
        "2011",
        "1700",
        "1200",
        "1155",
        "1151",
        "1150",
        "AM5",
        "AM4",
      ],
      height: 163,
    },
    parameters: [
      { label: "Rodzaj chłodzenia", value: "Aktywne" },
      {
        label: "Kompatybilność",
        value: "2066, 2011-3, 2011, 1700, 1200, 1155, 1151, 1150, AM5, AM4",
      },
      { label: "Maksymalny poziom hałasu", value: "24 dB" },
      { label: "Złącze", value: "4-pin PWM" },
      {
        label: "TDP",
        value: "250 W",
      },
    ],
  },
  {
    id: 2,
    name: "Silver Monkey X FROSTY 2x120 mm",
    imgSource: require("D:/PracaInz/PCConfigurator/assets/images/Coolers/cooler_2.jpg"),
    categoryId: 7,
    compatibilities: {
      CPU: [
        "2066",
        "2011",
        "1700",
        "1200",
        "1156",
        "1155",
        "1151",
        "1150",
        "AM5",
        "AM4",
      ],
      height: 156,
    },
    parameters: [
      { label: "Rodzaj chłodzenia", value: "Aktywne" },
      {
        label: "Kompatybilność",
        value: "2066, 2011, 1700, 1200, 1156, 1155, 1151, 1150, AM5, AM4",
      },
      { label: "Złącze", value: "4-pin PWM" },
      {
        label: "TDP",
        value: "250 W",
      },
    ],
  },
  {
    id: 3,
    name: "be quiet! Silent Loop 2 280mm 2x140mm",
    imgSource: require("D:/PracaInz/PCConfigurator/assets/images/Coolers/cooler_3.jpg"),
    categoryId: 7,
    compatibilities: {
      CPU: [
        "2066",
        "2011-3",
        "2011",
        "1700",
        "1200",
        "1155",
        "1151",
        "1150",
        "AM5",
        "AM4",
      ],
      height: 52,
    },
    parameters: [
      { label: "Rodzaj chłodzenia", value: "Wodne" },
      {
        label: "Kompatybilność",
        value: "2066, 2011, 1700, 1200, 1156, 1155, 1151, 1150, AM5, AM4",
      },
      { label: "Złącze", value: "4-pin PWM" },
      { label: "Maksymalny poziom hałasu", value: "36,1 dB" },
    ],
  },
];
