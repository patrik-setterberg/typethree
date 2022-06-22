import { useContext, useState, useEffect } from "react";

import useSettingsContext from "../../../hooks/useSettingsContext";
import useTypeTestContext from "../../../hooks/useTypeTestContext";
import WindowContext from "../../../context/window-context";

import { TestCountdownProps } from "./TestCountdown.interfaces";

import * as S from "./TestCountdown.styles";
import PauseIcon from "../../UI/PauseIcon/PauseIcon";

const TestCountdown = ({ timeLeft }: TestCountdownProps): JSX.Element => {
  const settingsCtx = useSettingsContext();
  const typeTestCtx = useTypeTestContext();
  const wndowCtx = useContext(WindowContext);

  // Circumference of circle. Probably not *technically* true but it works!
  const circumference: number = 1304;

  // Offset for dashed stroke around circle.
  const [dashOffset, setDashOffset] = useState<number>(0);

  useEffect(() => {
    // Set offset based on percentage of time left.
    setDashOffset(
      Math.round(
        (circumference - circumference * (timeLeft / settingsCtx.TestLength)) *
          100
      ) / 100
    );
  }, [timeLeft, settingsCtx.TestLength]);

  return (
    <S.Wrapper>
      <S.CountdownCircle
        circumference={circumference}
        dashOffset={dashOffset}
        focused={wndowCtx.windowIsFocused}
      >
        <svg viewBox="0 0 567 567" xmlns="http://www.w3.org/2000/svg">
          <circle
            className="circle--background"
            cx="283.5"
            cy="283.5"
            r="207.5"
          />
          <circle
            className="circle--countdown"
            cx="283.5"
            cy="283.5"
            r="207.5"
          />
        </svg>
      </S.CountdownCircle>
      <S.Counter>
        {wndowCtx.windowIsFocused ? timeLeft : <PauseIcon />}
      </S.Counter>
    </S.Wrapper>
  );
};

export default TestCountdown;
