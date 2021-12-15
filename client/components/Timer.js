import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';

const Timer = ({ started, paused }) => {
  const [time, setTime] = useState({ min: 0, sec: 0 });
  const timerIdRef = useRef();

  useEffect(() => {
    if (started) {
      timerIdRef.current = setInterval(() => {
        setTime(({ min, sec }) => {
          if (++sec === 60) {
            ++min;
            sec = 0;
          }
          return { min, sec };
        });
      }, 1000);
    } else {
      clearTimeout(timerIdRef.current);
    }

    return () => clearTimeout(timerIdRef.current);
  }, [started]);

  return (
    <TimerBox>
      <Minutes>{String(time.min).padStart(2, '0')}</Minutes>
      <span>:</span>
      <Seconds>{String(time.sec).padStart(2, '0')}</Seconds>
    </TimerBox>
  );
};

export default Timer;

const TimerBox = styled.div``;

const Minutes = styled.span``;

const Seconds = styled.span``;
