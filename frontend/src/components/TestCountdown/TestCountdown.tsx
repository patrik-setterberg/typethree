import { useState, useEffect } from "react";
import useSettingsContext from "../../hooks/useSettingsContext";

import * as S from "./TestCountdown.styles";

const TestCountdown = ({}): JSX.Element => {

  const settingsCtx = useSettingsContext();

  const [timeLeft, setTimeLeft] = useState<number>(settingsCtx.TestLength);

  // Circumference of circle. Probably not *technically* true but it works!
  const circumference: number = 1304;

  // Offset for dashed stroke around circle.
  const [dashOffset, setDashOffset] = useState<number>(0);

  useEffect(() => {
    const timer: number = window.setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft((timeLeft) => timeLeft - 1);
      } else {
        clearInterval(timer);
      }
    }, 1000);

    // Set offset based on percentage of time left.
    setDashOffset(
      Math.round((circumference - circumference * (timeLeft / settingsCtx.TestLength)) * 100) /
        100
    );

    return () => {
      clearInterval(timer);
    };
  }, [timeLeft]);

  return (
    <S.Wrapper>
      <S.CountdownCircle circumference={circumference} dashOffset={dashOffset}>
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
      <S.Counter>{timeLeft}</S.Counter>
    </S.Wrapper>
  );
};

export default TestCountdown;
