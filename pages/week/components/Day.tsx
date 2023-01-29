import { Box } from "grommet";
import React from "react";
import styles from "../styles/Day.module.css";
import TimeBlock from "./TimeBlock";

function Day({ name }: { name: string }) {
  const times = Array.from(Array(24).keys())
    .filter((time) => time % 2 === 0 && time >= 6 && time <= 18)
    .map((time, i) => (
      <TimeBlock
        time={time < 12 ? `${time}am` : time === 12 ? `12pm` : `${time - 12}pm`}
        key={i}
      ></TimeBlock>
    ));

  return (
    <Box className={styles.day} margin="xsmall">
      <p className={styles.name}>{name}</p>
      <Box width="full" height="full">
        {times}
      </Box>
    </Box>
  );
}

export default Day;
