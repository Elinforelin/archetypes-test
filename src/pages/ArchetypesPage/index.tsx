import { FC, useEffect } from "react";
import { useSelector } from "react-redux";

import { archetypes } from "../../constants/archetypes";
import { selectScore } from "../../store/testSlice/selector";
import classes from "./styles.module.scss";

export const ArchetypePage: FC = () => {
  const score = useSelector(selectScore);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const initializedArray = score
    .map(({ archetypeId, score }) => {
      const archObj = archetypes.find(({ id }) => id === archetypeId);
      return {
        ...archObj,
        score,
      };
    })
    .sort((a, b) => b?.score - a?.score);

  return (
    <div className={classes.wrapper}>
      <h1>Результат</h1>
      {initializedArray.map(({ name, description, score }) => (
        <fieldset key={name} className={classes.archetype}>
          <div className={classes.name}>{name}</div>
          <div className={classes.score}>{score}</div>
          <div className={classes.description}>{description}</div>
        </fieldset>
      ))}
    </div>
  );
};
