import { useContext } from "react";

import TypeTestContext from "../context/type-test-context/type-test-context";

// Custom TypeTestContext consumer to allow creation of empty context (<context | undefined>).
const useTypeTestContext = () => {
  const context = useContext(TypeTestContext);

  if (!context) {
    throw new Error(`Context: ${context} not found.`);
  }
  return context;
}

export default useTypeTestContext;