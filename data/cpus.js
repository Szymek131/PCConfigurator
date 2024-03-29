export const CPUS = [
  {
    id: 1,
    name: "Intel® Core™ i9-13900K",
    imgSource: require("../assets/images/CPUs/cpu_1.jpg"),
    categoryId: 3,
    compatibilities: {
      CPU: {
        socket: "1700",
      },
    },
    parameters: [
      { label: "Rodzina procesorów", value: "Intel Core i9" },
      { label: "Seria procesora", value: "i9-13900K" },
      { label: "Gniazdo procesora (socket)", value: "Socket 1700" },
      { label: "Architektura", value: "Raptor Lake (13 Generacja)" },
      {
        label: "Taktowanie rdzenia",
        value: "3.0 GHz (5.8 GHz w trybie turbo)",
      },
      { label: "Liczba rdzeni fizycznych", value: "24 rdzenie" },
      { label: "Liczba wątków", value: "32 wątki" },
      { label: "Odblokowany mnożnik", value: "Tak" },
      { label: "Pamięć podręczna", value: "36 MB" },
      { label: "Zintegrowany układ graficzny", value: "Tak" },
      { label: "Model układu graficznego", value: "Intel UHD Graphics 770" },
      { label: "Pobór mocy (TDP)", value: "125 W" },
      { label: "Maksymalna Moc Turbo (MTP)", value: "253 W" },
    ],
  },
  {
    id: 2,
    name: "AMD Ryzen 7 5700X",
    imgSource: require("../assets/images/CPUs/cpu_2.jpg"),
    categoryId: 3,
    compatibilities: {
      CPU: {
        socket: "AM4",
      },
    },
    parameters: [
      { label: "Rodzina procesorów", value: "AMD Ryzen™" },
      { label: "Seria procesora", value: "Ryzen™ 7 5700X" },
      { label: "Gniazdo procesora (socket)", value: "Socket AM4" },
      {
        label: "Obsługiwany chipset",
        value: "A520, B350, B450, X470, X570, X370",
      },
      { label: "Architektura", value: "Zen 3" },
      {
        label: "Taktowanie rdzenia",
        value: "3.4 GHz (4.6 GHz w trybie turbo)",
      },
      { label: "Liczba rdzeni fizycznych", value: "8 rdzeni" },
      { label: "Liczba wątków", value: "16 wątków" },
      { label: "Odblokowany mnożnik", value: "Tak" },
      { label: "Pamięć podręczna", value: "36 MB" },
      { label: "Zintegrowany układ graficzny", value: "Nie" },
      { label: "65 W", value: "125 W" },
    ],
  },
  {
    id: 3,
    name: "Intel Core i5-13600KF",
    imgSource: require("../assets/images/CPUs/cpu_3.jpg"),
    categoryId: 3,
    compatibilities: {
      CPU: {
        socket: "1700",
      },
    },
    parameters: [
      { label: "Rodzina procesorów", value: "Intel Core i5" },
      { label: "Seria procesora", value: "i5-13600KF" },
      { label: "Gniazdo procesora (socket)", value: "Socket 1700" },
      { label: "Architektura", value: "Raptor Lake (13 Generacja)" },
      {
        label: "Taktowanie rdzenia",
        value: "3.5 GHz (5.1 GHz w trybie turbo)",
      },
      { label: "Liczba rdzeni fizycznych", value: "14 rdzeni" },
      { label: "Liczba wątków", value: "20 wątków" },
      { label: "Odblokowany mnożnik", value: "Tak" },
      { label: "Pamięć podręczna", value: "36 MB" },
      { label: "Zintegrowany układ graficzny", value: "Nie" },
      { label: "Pobór mocy (TDP)", value: "125 W" },
      { label: "Maksymalna Moc Turbo (MTP)", value: "181 W" },
    ],
  },
  {
    id: 4,
    name: "AMD Ryzen 9 7950X",
    imgSource: require("../assets/images/CPUs/cpu_4.jpg"),
    categoryId: 3,
    compatibilities: {
      CPU: {
        socket: "AM5",
      },
    },
    parameters: [
      { label: "Rodzina procesorów", value: "AMD Ryzen™" },
      { label: "Seria procesora", value: "Ryzen™ 9 7950X" },
      { label: "Obsługiwany chipset", value: "X670, X670E, B650E, B560" },
      { label: "Gniazdo procesora (socket)", value: "Socket AM5" },
      { label: "Architektura", value: "Zen 4" },
      {
        label: "Taktowanie rdzenia",
        value: "4.5 GHz (5.7 GHz w trybie turbo)",
      },
      { label: "Liczba rdzeni fizycznych", value: "16 rdzeni" },
      { label: "Liczba wątków", value: "32 wątki" },
      { label: "Odblokowany mnożnik", value: "Tak" },
      { label: "Pamięć podręczna", value: "80 MB" },
      { label: "Zintegrowany układ graficzny", value: "Tak" },
      { label: "Model układu graficznego", value: "Radeon™ Graphics" },
      { label: "Pobór mocy (TDP)", value: "170 W" },
    ],
  },
];
