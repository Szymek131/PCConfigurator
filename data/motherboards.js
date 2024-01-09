export const MOTHERBOARDS = [
  {
    id: 1,
    name: "Płyta główna ASUS TUF Gaming B450M-Pro II",
    imgSource: require("D:/PracaInz/PCConfigurator/assets/images/Motherboards/motherboard_1.jpg"),
    categoryId: 1,
    compatibilities: {
      CPU: {
        socket: "AM4",
      },
      GPU: ["PCIe 4.0 x16", "PCIe 3.0 x16"],
      RAM: {
        type: "DIMM",
        slots: 4,
      },
      motherboard: {
        format: "m-ATX",
      },
    },
    parameters: [
      {
        label: "Obługiwane procesory",
        value: "AMD Ryzen™",
      },
      { label: "Gniazdo procesora", value: "Socket AM4" },
      { label: "Format", value: "microATX" },
      { label: "Chipset", value: "AMD B450" },
      {
        label: "Maksymalna wielkość pamięci:",
        value: "128 GB",
      },
      { label: "Rodzaj pamięci", value: "DDR 4" },
      { label: "Liczba banków pamięc", value: "4 x DIMM" },
      { label: "Obsługa układów graficznych w procesorach", value: "Tak" },
      { label: "Wbudowany układ dźwiękowy", value: "Realtek ALC S1200A" },
      //złącza wewnętrzne
      { label: "wewnętrzne M.2 PCIe NVMe 3.0 x4 / SATA", value: "1" },
      { label: "wewnętrzne M.2 SATA", value: "1" },
      { label: "wewnętrzne PCIe 2.0 x1", value: "1" },
      { label: "wewnętrzne PCIe 3.0/2.0 x16", value: "1" },
      { label: "wewnętrzne PCIe 3.0/2.0 x16 (tryb x8)", value: "1" },
      { label: "wewnętrzne SATA III (6 Gb/s)", value: "6" },
      {
        label: "wewnętrzne USB 2.0",
        value: "2",
      },
      { label: "wewnętrzne USB 3.2 Gen. 1 Typu-C", value: "1" },
      //złącza zewnętrzne
      { label: "zewnętrzne USB 2.0", value: "2" },
      {
        label: "zewnętrzne USB 3.1 Gen.1/USB 3.2 Gen. 1 (USB 3.0)",
        value: "2",
      },
      {
        label: "zewnętrzne USB 3.1 Gen. 2/USB 3.2 Gen.2 (USB 3.1)",
        value: "1",
      },
      { label: "zewnętrzne USB Type-C", value: "1" },
      { label: "zewnętrzne HDMI", value: "1" },
      { label: "zewnętrzne S/PDIF", value: "1" },
      {
        label: "zewnętrzne Audio jack",
        value: "5",
      },
      { label: "zewnętrzne PS/2", value: "1" },
      {
        label: "zewnętrzne RJ45 (LAN)",
        value: "2",
      },
    ],
  },
  {
    id: 2,
    name: "Płyta główna MSI MAG B550 Tomahawk",
    imgSource: require("D:/PracaInz/PCConfigurator/assets/images/Motherboards/motherboard_2.jpg"),
    categoryId: 1,
    compatibilities: {
      CPU: {
        socket: "AM5",
      },
      GPU: ["PCIe 4.0 x16", "PCIe 3.0 x16"],
      RAM: {
        type: "DIMM",
        slots: 4,
      },
      Memory: [],
      motherboard: {
        format: "ATX",
      },
    },
    parameters: [
      {
        label: "Obługiwane procesory",
        value: "AMD Ryzen™",
      },
      { label: "Gniazdo procesora", value: "Socket AM4" },
      { label: "Format", value: "ATX" },
      { label: "Chipset", value: "AMD B550" },
      {
        label: "Maksymalna wielkość pamięci:",
        value: "128 GB",
      },
      { label: "Rodzaj pamięci", value: "DDR 4" },
      { label: "Liczba banków pamięc", value: "4 x DIMM" },
      { label: "Obsługa układów graficznych w procesorach", value: "Tak" },
      { label: "Wbudowany układ dźwiękowy", value: "Realtek ALC1200" },
      //złącza wewnętrzne
      { label: "wewnętrzne M.2", value: "2" },
      { label: "wewnętrzne PCIe 3.0 x1", value: "2" },
      { label: "wewnętrzne PCIe 3.0 x16", value: "1" },
      { label: "wewnętrzne PCIe 4.0 x16", value: "1" },
      { label: "wewnętrzne SATA III (6 Gb/s)", value: "6" },
      { label: "wewnętrzne USB 2.0", value: "2" },
      {
        label: "wewnętrzne USB 3.1 Gen. 1/USB 3.2 Gen.1 (USB 3.0):",
        value: "1",
      },
      { label: "wewnętrzne USB 3.2 Gen. 1 Typu-C", value: "1" },
      //złącza zewnętrzne
      { label: "zewnętrzne USB 2.0", value: "2" },
      {
        label: "zewnętrzne USB 3.1 Gen.1/USB 3.2 Gen. 1 (USB 3.0)",
        value: "2",
      },
      {
        label: "zewnętrzne USB 3.1 Gen. 2/USB 3.2 Gen.2 (USB 3.1)",
        value: "1",
      },
      { label: "zewnętrzne USB Type-C", value: "1" },
      { label: "zewnętrzne HDMI", value: "1" },
      { label: "zewnętrzne S/PDIF", value: "1" },
      {
        label: "zewnętrzne Audio jack",
        value: "5",
      },
      { label: "zewnętrzne PS/2", value: "1" },
      {
        label: "zewnętrzne RJ45 (LAN)",
        value: "2",
      },
    ],
  },
  {
    id: 3,
    name: "MSI B550-A PRO",
    imgSource: require("D:/PracaInz/PCConfigurator/assets/images/Motherboards/motherboard_3.jpg"),
    categoryId: 1,
    compatibilities: {
      CPU: {
        socket: "AM4",
      },
      GPU: ["PCIe 4.0 x16", "PCIe 3.0 x16"],
      RAM: {
        type: "DIMM",
        slots: 4,
      },
      Memory: [],
      motherboard: {
        format: "ATX",
      },
    },
    parameters: [
      {
        label: "Obługiwane procesory",
        value: "AMD Ryzen",
      },
      { label: "Gniazdo procesora", value: "Socket AM4" },
      { label: "Format", value: "ATX" },
      { label: "Chipset", value: "AMD B550" },
      {
        label: "Maksymalna wielkość pamięci:",
        value: "128 GB",
      },
      { label: "Rodzaj pamięci", value: "DDR 4" },
      { label: "Liczba banków pamięc", value: "4 x DIMM" },
      { label: "Obsługa układów graficznych w procesorach", value: "Tak" },
      { label: "Wbudowany układ dźwiękowy", value: "Realtek ALC892" },
      //złącza wewnętrzne
      { label: "wewnętrzne M.2", value: "2" },
      { label: "wewnętrzne PCIe 3.0 x1", value: "2" },
      { label: "wewnętrzne PCIe 3.0 x16", value: "1" },
      { label: "wewnętrzne PCIe 4.0 x16", value: "1" },
      { label: "wewnętrzne SATA III (6 Gb/s)", value: "6" },
      { label: "wewnętrzne USB 2.0", value: "2" },
      { label: "wewnętrzne USB 3.2 Gen. 2 Typu-C", value: "1" },
      { label: "wewnętrzne USB 3.2 Gen. 1 ", value: "1" },
      //złącza zewnętrzne
      { label: "zewnętrzne USB 2.0", value: "4" },
      {
        label: "zewnętrzne USB 3.2 Gen. 2 ",
        value: "1",
      },
      {
        label: "zewnętrzne USB 3.2 Gen. 1",
        value: "2",
      },
      { label: "zewnętrzne USB Type-C", value: "1" },
      { label: "zewnętrzne HDMI", value: "1" },
      { label: "zewnętrzne DisplayPort", value: "1" },
      { label: "zewnętrzne S/PDIF", value: "1" },
      {
        label: "zewnętrzne Audio jack",
        value: "6",
      },
      { label: "zewnętrzne PS/2", value: "1" },
      {
        label: "zewnętrzne RJ45 (LAN)",
        value: "1",
      },
    ],
  },
  {
    id: 4,
    name: "MSI MAG Z790 TOMAHAWK WIFI",
    imgSource: require("D:/PracaInz/PCConfigurator/assets/images/Motherboards/motherboard_4.jpg"),
    categoryId: 1,
    compatibilities: {
      CPU: {
        socket: "1700",
      },
      GPU: ["PCIe 4.0 x16", "PCIe 3.0 x16", "PCIe 5.0 x16"],
      RAM: {
        type: "DIMM",
        slots: 4,
      },
      Memory: [],
      motherboard: {
        format: "ATX",
      },
    },
    parameters: [
      {
        label: "Obługiwane procesory",
        value: "Intel",
      },
      { label: "Gniazdo procesora", value: "Socket 1700" },
      { label: "Format", value: "ATX" },
      { label: "Chipset", value: "Intel Z790" },
      {
        label: "Maksymalna wielkość pamięci:",
        value: "128 GB",
      },
      { label: "Rodzaj pamięci", value: "DDR 4" },
      { label: "Liczba banków pamięc", value: "4 x DIMM" },
      { label: "Obsługa układów graficznych w procesorach", value: "Tak" },
      { label: "Wbudowany układ dźwiękowy", value: "Realtek ALC892" },
      //złącza wewnętrzne
      { label: "wewnętrzne M.2", value: "4" },
      { label: "wewnętrzne PCIe 3.0 x1", value: "2" },
      { label: "wewnętrzne PCIe 3.0 x16", value: "1" },
      { label: "wewnętrzne PCIe 4.0 x16", value: "1" },
      { label: "wewnętrzne PCIe 5.0 x16", value: "1" },
      { label: "wewnętrzne SATA III (6 Gb/s)", value: "7" },
      { label: "wewnętrzne USB 2.0", value: "2" },
      { label: "wewnętrzne USB 3.2 Gen. 2 Typu-C", value: "1" },
      { label: "wewnętrzne USB 3.2 Gen. 1 ", value: "1" },
      //złącza zewnętrzne
      {
        label: "zewnętrzne USB 3.2 Gen. 2 ",
        value: "4",
      },
      {
        label: "zewnętrzne USB 3.2 Gen. 1",
        value: "4",
      },
      { label: "zewnętrzne USB 2.0", value: "4" },
      { label: "zewnętrzne USB Type-C", value: "1" },
      { label: "zewnętrzne HDMI", value: "1" },
      { label: "zewnętrzne DisplayPort", value: "1" },
      { label: "zewnętrzne S/PDIF", value: "1" },
      {
        label: "zewnętrzne Audio jack",
        value: "5",
      },
      {
        label: "zewnętrzne RJ45 (LAN) 2.5 Gbps",
        value: "1",
      },
    ],
  },
];
