import { useState, useEffect, useContext } from "react";
import { CPUS } from "../../data/cpus";
import ConfiguratorStep from "../../components/Configurator/ConfiguratorStep";
import { configuratorContext } from "../../store/context/configurator-context";

const CPUStep = ({ navigation, route }) => {
  const choosedImage = route.params.image;
  const isChoosed = route.params.isChoosed;
  const choosedName = route.params.name;
  const partData = route.params.data;

  const { compatibilities, updateCompatibilities, pcSet, updatePcSet } =
    useContext(configuratorContext);

  console.log("current compatibilities", compatibilities);
  console.log("parts", pcSet.parts);
  const [image, setImage] = useState(
    require("D:/PracaInz/PCConfigurator/assets/images/categories/Procesor.png")
  );
  const [componentName, setComponentName] = useState("Płyta główna");
  const [isNextStepAvailable, setIsNextStepAvailable] = useState(false);

  useEffect(() => {
    if (isChoosed) {
      setImage(choosedImage);
      setComponentName(choosedName);
      setIsNextStepAvailable(true);
    } else {
      setComponentName("Procesor");
    }
  }, [choosedImage]);

  const updateSet = () => {
    const updatedSet = {
      ...pcSet,
    };
    const updatedParts = [...pcSet.parts];
    updatedParts[1] = partData;
    updatedSet.parts = updatedParts;

    updatePcSet(updatedSet);
  };

  const categoryItemHandler = () => {
    navigation.navigate("BrowseComponents", {
      categoryId: 3,
      data: CPUS.filter((cpu) =>
        cpu.compatibilities.CPU.includes(compatibilities.CPU)
      ),
      name: "Procesory",
      isConfigurating: true,
      componentNavigation: "CPUStep",
    });
  };

  const nextStepHandler = () => {
    navigation.navigate("GPUStep", {
      isChoosed: false,
      image: "",
    });
    updateSet();
  };

  return (
    <ConfiguratorStep
      image={image}
      headerTitle="Wybierz procesor"
      nextStepHandler={nextStepHandler}
      componentName={componentName}
      categoryItemHandler={categoryItemHandler}
      isNextStepAvailable={isNextStepAvailable}
    />
  );
};

export default CPUStep;
