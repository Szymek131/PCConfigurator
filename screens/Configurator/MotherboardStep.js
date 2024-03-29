import { MOTHERBOARDS } from "../../data/motherboards";
import { useState, useEffect, useContext } from "react";
import ConfiguratorStep from "../../components/Configurator/ConfiguratorStep";
import { configuratorContext } from "../../store/context/configurator-context";

const MotherboardStep = ({ navigation, route }) => {
  const choosedImage = route.params.image;
  const isChoosed = route.params.isChoosed;
  const choosedName = route.params.name;
  const motherboardCompatibilities = route.params.compatibilities;
  const partData = route.params.data;

  const { compatibilities, updateCompatibilities, pcSet, updatePcSet } =
    useContext(configuratorContext);

  console.log(compatibilities);
  const [image, setImage] = useState(
    require("../../assets/images/categories/PlytaGlowna.png")
  );
  const [componentName, setComponentName] = useState("Płyta główna");
  const [isNextStepAvailable, setIsNextStepAvailable] = useState(false);

  const updateMotherboardCompatibilities = () => {
    const updatedMotherboardCompatibilities = {
      ...compatibilities,
      motherboard: {
        ...compatibilities.motherboard,
        format: motherboardCompatibilities.motherboard.format,
        CPUSocket: motherboardCompatibilities.CPU.socket,
        GPUSocket: motherboardCompatibilities.GPU,
        RAMtype: motherboardCompatibilities.RAM.type,
        RAMslots: motherboardCompatibilities.RAM.slots,
      },
    };
    updateCompatibilities(updatedMotherboardCompatibilities);
  };

  const updateSet = () => {
    const updatedSet = {
      ...pcSet,
    };
    const updatedParts = [...pcSet.parts];
    updatedParts[0] = partData;
    updatedSet.parts = updatedParts;

    updatePcSet(updatedSet);
  };

  useEffect(() => {
    if (isChoosed) {
      setImage(choosedImage);
      setComponentName(choosedName);
      setIsNextStepAvailable(true);
    } else {
      setComponentName("Płyta główna");
    }
  }, [choosedImage]);

  const nextStepHandler = () => {
    navigation.navigate("CPUStep", {
      isChoosed: false,
      image: "",
    });
    updateMotherboardCompatibilities();
    updateSet();
  };

  const categoryItemHandler = () => {
    navigation.navigate("BrowseComponents", {
      categoryId: 1,
      data: MOTHERBOARDS,
      name: "Płyty główne",
      isConfigurating: true,
      componentNavigation: "MotherboardStep",
    });
  };

  return (
    <ConfiguratorStep
      image={image}
      headerTitle="Wybierz płytę główną"
      nextStepHandler={nextStepHandler}
      componentName={componentName}
      categoryItemHandler={categoryItemHandler}
      isNextStepAvailable={isNextStepAvailable}
    />
  );
};

export default MotherboardStep;
