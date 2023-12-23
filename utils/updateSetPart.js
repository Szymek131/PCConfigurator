export const updateSetPart = (
  categoryId,
  setId,
  partData,
  createdSets,
  updateCreatedSets
) => {
  switch (categoryId) {
    case 1:
      const updatedMotheboard = createdSets.map((set) =>
        set.id === setId
          ? {
              ...set,
              parts: [partData, ...set.parts.slice(1)],
              compatibilities: {
                ...set.compatibilities,
                motherboard: {
                  format: partData.compatibilities.motherboard.format,
                  GPUSocket: partData.compatibilities.GPU,
                  CPUSocket: partData.compatibilities.CPU.socket,
                  RAMtype: partData.compatibilities.RAM.type,
                  RAMslots: partData.compatibilities.RAM.slots,
                },
              },
            }
          : set
      );
      updateCreatedSets(updatedMotheboard);
      break;
    case 2:
      const updatedGPU = createdSets.map((set) =>
        set.id === setId
          ? {
              ...set,
              parts: [
                ...set.parts.slice(0, 2),
                partData,
                ...set.parts.slice(3),
              ],
              compatibilities: {
                ...set.compatibilities,
                GPU: {
                  input: partData.compatibilities.GPU.input,
                  length: partData.compatibilities.GPU.length,
                },
                PowerSupply: {
                  ...set.compatibilities.PowerSupply,
                  recommended: partData.compatibilities.PowerSupply,
                },
              },
            }
          : set
      );
      updateCreatedSets(updatedGPU);
      break;
    case 3:
      const updatedCPU = createdSets.map((set) =>
        set.id === setId
          ? {
              ...set,
              parts: [
                ...set.parts.slice(0, 1),
                partData,
                ...set.parts.slice(2),
              ],
              compatibilities: {
                ...set.compatibilities,
                CPU: {
                  socket: partData.compatibilities.CPU.socket,
                },
              },
            }
          : set
      );
      updateCreatedSets(updatedCPU);
      break;
    case 4:
      const updatedRAM = createdSets.map((set) =>
        set.id === setId
          ? {
              ...set,
              parts: [
                ...set.parts.slice(0, 3),
                partData,
                ...set.parts.slice(4),
              ],
              compatibilities: {
                ...set.compatibilities,
                RAM: {
                  type: partData.compatibilities.RAM.type,
                  slots: partData.compatibilities.RAM.number,
                },
              },
            }
          : set
      );
      updateCreatedSets(updatedRAM);
      break;
    case 5:
      const updatedPowerSupply = createdSets.map((set) =>
        set.id === setId
          ? {
              ...set,
              parts: [
                ...set.parts.slice(0, 6),
                partData,
                ...set.parts.slice(7),
              ],
              compatibilities: {
                ...set.compatibilities,
                PowerSupply: {
                  power: partData.compatibilities.power,
                },
              },
            }
          : set
      );
      updateCreatedSets(updatedPowerSupply);
      break;
    case 6:
      const updatedMemory = createdSets.map((set) =>
        set.id === setId
          ? {
              ...set,
              parts: [
                ...set.parts.slice(0, 4),
                partData,
                ...set.parts.slice(5),
              ],
            }
          : set
      );
      updateCreatedSets(updatedMemory);
      break;
    case 7:
      const updatedCooler = createdSets.map((set) =>
        set.id === setId
          ? {
              ...set,
              parts: [
                ...set.parts.slice(0, 5),
                partData,
                ...set.parts.slice(6),
              ],
              compatibilities: {
                ...set.compatibilities,
                Cooler: {
                  height: partData.compatibilities.height,
                },
              },
            }
          : set
      );
      updateCreatedSets(updatedCooler);
      break;
    case 8:
      const updatedCase = createdSets.map((set) =>
        set.id === setId
          ? {
              ...set,
              parts: [
                ...set.parts.slice(0, 7),
                partData,
                ...set.parts.slice(8),
              ],
              compatibilities: {
                ...set.compatibilities,
                Case: {
                  MaxGPULength: partData.compatibilities.GPULength,
                  MaxCoolerHeight: partData.compatibilities.CoolerHeight,
                  MotherboardType: partData.compatibilities.motherboard,
                },
              },
            }
          : set
      );
      updateCreatedSets(updatedCase);
      break;
    default:
      return null;
  }
};
