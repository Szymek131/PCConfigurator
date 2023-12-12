import { useState, useEffect, useContext } from "react";
import { RAMS } from "../../data/rams";
import ConfiguratorStep from "../../components/Configurator/ConfiguratorStep";
import { configuratorContext } from "../../store/context/configurator-context";

const RAMStep = ({ navigation, route }) => {
  const choosedImage = route.params.image;
  const choosedName = route.params.name;
  const isChoosed = route.params.isChoosed;
  const partData = route.params.data;

  const { compatibilities, updateCompatibilities, pcSet, updatePcSet } =
    useContext(configuratorContext);

  console.log("current compatibilities GPU Step", compatibilities);

  const [image, setImage] = useState(
    require("D:/PracaInz/PCConfigurator/assets/images/categories/Ram.png")
  );
  const [componentName, setComponentName] = useState("Płyta główna");
  const [isNextStepAvailable, setIsNextStepAvailable] = useState(false);

  useEffect(() => {
    if (isChoosed) {
      setImage(choosedImage);
      setComponentName(choosedName);
      setIsNextStepAvailable(true);
    } else {
      setComponentName("Pamięć ram");
    }
  }, [choosedImage]);

  const updateSet = () => {
    const updatedSet = {
      ...pcSet,
    };
    const updatedParts = [...pcSet.parts];
    updatedParts[3] = partData;
    updatedSet.parts = updatedParts;

    updatePcSet(updatedSet);
  };

  const nextStepHandler = () => {
    navigation.navigate("MemoryStep", {
      isChoosed: false,
      image: "",
    });
    updateSet();
  };

  const categoryItemHandler = () => {
    navigation.navigate("BrowseComponents", {
      categoryId: 4,
      data: RAMS.filter((ram) => {
        return (
          compatibilities.RAM.slots >= ram.compatibilities.RAM.number &&
          compatibilities.RAM.type === ram.compatibilities.RAM.type
        );
      }),
      name: "Pamięć ram",
      isConfigurating: true,
      componentNavigation: "RAMStep",
    });
  };

  return (
    <ConfiguratorStep
      image={image}
      headerTitle="Wybierz pamięć RAM"
      nextStepHandler={nextStepHandler}
      componentName={componentName}
      categoryItemHandler={categoryItemHandler}
      isNextStepAvailable={isNextStepAvailable}
    />
  );
};

export default RAMStep;
