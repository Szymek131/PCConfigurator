import { useState, useEffect, useContext } from "react";
import { CASES } from "../../data/cases";
import ConfiguratorStep from "../../components/Configurator/ConfiguratorStep";
import { configuratorContext } from "../../store/context/configurator-context";

const CaseStep = ({ navigation, route }) => {
  const choosedImage = route.params.image;
  const isChoosed = route.params.isChoosed;
  const choosedName = route.params.name;
  const partData = route.params.data;
  const CaseCompatibilities = route.params.compatibilities;

  const { compatibilities, updateCompatibilities, pcSet, updatePcSet } =
    useContext(configuratorContext);

  const [image, setImage] = useState(
    require("D:/PracaInz/PCConfigurator/assets/images/categories/Obudowa.png")
  );
  const [componentName, setComponentName] = useState("Płyta główna");
  const [isNextStepAvailable, setIsNextStepAvailable] = useState(false);

  useEffect(() => {
    if (isChoosed) {
      setImage(choosedImage);
      setComponentName(choosedName);
      setIsNextStepAvailable(true);
      updateSet();
      updateCaseCompatibilities();
    } else {
      setComponentName("Obudowa");
    }
  }, [choosedImage]);

  const updateSet = () => {
    const updatedSet = {
      ...pcSet,
    };
    const updatedParts = [...pcSet.parts];
    updatedParts[7] = partData;
    updatedSet.parts = updatedParts;

    updatePcSet(updatedSet);
  };

  const updateCaseCompatibilities = () => {
    const updatedCaseCompatibilities = {
      ...compatibilities,
      Case: {
        MaxGPULength: CaseCompatibilities.GPULength,
        MaxCoolerHeight: CaseCompatibilities.CoolerHeight,
        MotherboardType: CaseCompatibilities.motherboard,
      },
    };
    updateCompatibilities(updatedCaseCompatibilities);
  };

  const categoryItemHandler = () => {
    navigation.navigate("BrowseComponents", {
      categoryId: 8,
      data: CASES.filter((cs) => {
        return (
          cs.compatibilities.motherboard.includes(
            compatibilities.motherboard.format
          ) &&
          cs.compatibilities.GPULength >= compatibilities.GPU.length &&
          cs.compatibilities.CoolerHeight >= compatibilities.Cooler.height
        );
      }),
      name: "Obudowa",
      isConfigurating: true,
      componentNavigation: "CaseStep",
    });
  };

  const nextStepHandler = async () => {
    navigation.navigate("SetOverview", {
      name: "twój zestaw",
      isCreating: true,
      createdSet: pcSet,
      isSetCreated: false,
    });
  };

  return (
    <ConfiguratorStep
      image={image}
      headerTitle="Obudowa"
      nextStepHandler={nextStepHandler}
      componentName={componentName}
      categoryItemHandler={categoryItemHandler}
      isNextStepAvailable={isNextStepAvailable}
    />
  );
};

export default CaseStep;
