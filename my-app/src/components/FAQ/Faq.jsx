import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./Faq.module.css";

const Faq = () => {
  return (
    <div className={styles.mainContainer}>
      <p className={styles.mainText}>FAQ</p>
      <div className={styles.secondMainContainer}>
        <div className={styles.leftTextBox}>
          <p className={styles.leftText}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </p>
        </div>
        <div className={styles.rightMainContainer}>
          <p className={styles.topText}>Do I need a personal injury report?</p>
          <div className={styles.descriptionBox}>
            <p className={styles.descriptionText}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p>
          </div>
          <div className={styles.line}></div>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={styles.topText}>
                Do I need a personal injury report?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className={styles.descriptionBox}>
                <p className={styles.descriptionText}>hi</p>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faq;
