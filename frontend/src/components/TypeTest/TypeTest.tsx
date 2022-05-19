import { TypeTestProps } from "./TypeTest.interfaces";

import Input from "./Input/Input";
import TestCountdown from "../TestCountdown/TestCountdown";

const TypeTest = ({}: TypeTestProps): JSX.Element => {
  return (
    <>
      <TestCountdown />
      <Input />
    </>
  );
}

export default TypeTest;