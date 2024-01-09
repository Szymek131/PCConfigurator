export const MEMORIES = [
  {
    id: 1,
    name: "Samsung 4TB M.2 PCIe Gen4 NVMe 990 Pro",
    imgSource: require("../assets/images/Memories/memory_1.jpg"),
    categoryId: 6,
    compatibilities: {
      memory: "PCIe NVMe 4.0 x4",
    },
    parameters: [
      { label: "Pojemność [GB]", value: "4 000" },
      { label: "Format", value: "M.2" },
      { label: "Interfejs", value: "PCIe NVMe 4.0 x4" },
      { label: "Prędkość odczytu (maksymalna)", value: "7450 MB/s" },
      { label: "Prędkość zapisu (maksymalna)", value: "6900 MB/s" },
    ],
  },
  {
    id: 2,
    name: "Samsung 1TB M.2 PCIe NVMe 970 EVO Plus",
    imgSource: require("../assets/images/Memories/memory_2.jpg"),
    categoryId: 6,
    compatibilities: {
      memory: "PCIe NVMe 3.0 x4",
    },
    parameters: [
      { label: "Pojemność [GB]", value: "1 000" },
      { label: "Format", value: "M.2" },
      { label: "Interfejs", value: "PCIe NVMe 3.0 x4" },
      { label: "Prędkość odczytu (maksymalna)", value: "3500 MB/s" },
      { label: "Prędkość zapisu (maksymalna)", value: "3300 MB/s" },
    ],
  },
  {
    id: 3,
    name: "Pamięć RAM KINGSTON Fury Beast 32GB 6000MHz",
    imgSource: require("../assets/images/Memories/memory_3.jpg"),
    categoryId: 6,
    compatibilities: {
      memory: "PCIe NVMe 3.0 x4",
    },
    parameters: [
      { label: "Pojemność [GB]", value: "1 000" },
      { label: "Format", value: "2.5" },
      { label: "Interfejs", value: "2,5 SATA" },
      { label: "Prędkość odczytu (maksymalna)", value: "560 MB/s" },
      { label: "Prędkość zapisu (maksymalna)", value: "530 MB/s" },
    ],
  },
];
