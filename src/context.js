import React, { useState } from "react";
import createMultiContext from "react-multi-context";
export const ParentContext = createMultiContext();

export const Parent = ({ child }) => {
  const [getVt, setVt] = useState({ valor: false });
  const [getDig, setDig] = useState({ valor: false });
  const [getApr, setApr] = useState({ valor: false });
  const [getDoc, setDoc] = useState({ valor: false });

  const global = {
    verificacion: {
      get: getVt,
      set: setVt
    },
    digitacion: {
      get: getDig,
      set: setDig
    },
    aprobacion: {
      get: getApr,
      set: setApr
    },
    documentos: {
      get: getDoc,
      set: setDoc
    }
  };

  return <ParentContext set={global}>{child}</ParentContext>;
};
