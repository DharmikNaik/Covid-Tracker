import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import cx from "classnames";

const Cards = (props) => {
  const {
    data: { recovered, confirmed, deaths, lastUpdate },
  } = props;

  let cardsContent = null;

  if (!recovered) {
    return "Loading...";
  } else {
    cardsContent = [
      {
        title: "Infected",
        value: confirmed.value,
        bottomText: "Number of active cases of COVID-19",
        id: 1,
        classNames: cx(styles.card, styles.infected),
      },
      {
        title: "Recovered",
        value: recovered.value,
        bottomText: "Number of recoveries from COVID-19",
        id: 2,
        classNames: cx(styles.card, styles.recovered),
      },
      {
        title: "Deaths",
        value: deaths.value,
        bottomText: "Number of deaths caused by COVID-19",
        id: 3,
        classNames: cx(styles.card, styles.deaths),
      },
    ];
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        {cardsContent.map((card) => (
          <Grid
            item
            component={Card}
            key={card.id}
            className={card.classNames}
            xs={12}
            md={3}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                {card.title}
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={card.value}
                  duration={2.5}
                  seperator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">{card.bottomText}</Typography>
            </CardContent>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Cards;
