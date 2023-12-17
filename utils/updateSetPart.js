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
              parts: [partData, ...set.parts.slice(2)],
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
            }
          : set
      );
      updateCreatedSets(updatedCase);
      break;
    default:
      return null;
  }
};
