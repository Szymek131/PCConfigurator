import React, { createContext, useState } from "react";

export const configuratorContext = createContext({
  compatibilities: {
    motherboard: {
      format: "",
    },
    CPU: {
      socket: "",
    },
    GPU: {
      input: [],
      lenght: 0,
    },
    RAM: {
      type: "",
      slots: 0,
    },
    Memory: {},
    Cooler: {
      height: 0,
    },
    PowerSupply: {
      recommended: 0,
    },
    case: {},
  },
  updateCompatibilities: (compatibilities) => {},
  updatePcSet: (pcSet) => {},
  updateCreatedSets: (createdSet) => {},
});

const ConfiguratorContextProvider = ({ children }) => {
  const [currCompatibilities, setCurrCompatibilities] = useState({
    motherboard: {
      format: "",
    },
    CPU: {
      socket: "",
    },
    GPU: {
      input: [],
      lenght: 0,
    },
    RAM: {
      type: "",
      slots: 0,
    },
    Memory: {},
    Cooler: {
      height: 0,
    },
    PowerSupply: {
      recommended: 0,
    },
    case: {},
  });
  const [currPcSet, setCurrPcSet] = useState({
    id: null,
    name: "",
    parts: [{}, {}, {}, {}, {}, {}, {}, {}],
  });
  const [createdSets, setCreatedSets] = useState([]);

  const updateCompatibilities = (compatibilities) => {
    setCurrCompatibilities(compatibilities);
  };

  const updatePcSet = (pcSet) => {
    setCurrPcSet(pcSet);
  };

  const updateCreatedSets = (createdSet) => {
    setCreatedSets(createdSet);
  };

  const value = {
    compatibilities: currCompatibilities,
    pcSet: currPcSet,
    createdSets: createdSets,
    updateCompatibilities: updateCompatibilities,
    updatePcSet: updatePcSet,
    updateCreatedSets: updateCreatedSets,
  };

  return (
    <configuratorContext.Provider value={value}>
      {children}
    </configuratorContext.Provider>
  );
};

export default ConfiguratorContextProvider;
