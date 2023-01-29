import { Box } from "grommet";
import React from "react";
import styles from "../styles/TimeBlock.module.css";

function TimeBlock({ time }: { time: string }) {
  return (
    <Box className={styles.timeBlock}>
      <p>{time}</p>
    </Box>
  );
}

export default TimeBlock;
