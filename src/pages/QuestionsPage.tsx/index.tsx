import { FC, FormEvent, MouseEvent } from "react";
import { useDispatch } from "react-redux";

import { answers } from "../../constants/answers";
import { questions } from "../../constants/quections";
import { countPoints, countScore } from "../../store/testSlice/reducer";
import classes from "./styles.module.scss";

export const QuestionsPage: FC = () => {
  const dispatch = useDispatch();
  const onClick = (
    event: MouseEvent<HTMLInputElement> & { target: HTMLInputElement }
  ) => {
    const values = event.target.value.split(" ");
    dispatch(
      countPoints({
        numOfQ: +values[0],
        points: +values[1],
        archetypeId: +values[2],
      })
    );
  };

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(countScore());
  };

  return (
    <div className={classes.wrapper}>
      <h1>Тест на архетип</h1>
      <form className={classes.form} onSubmit={submitForm}>
        {questions.map((q) => (
          <fieldset key={q.id} className={classes.fieldset}>
            <label className={classes.questionTitle}>
              {q.id}. {q.text}
            </label>
            {answers.map(({ text, points }) => (
              <label
                className={classes.answerTitle}
                htmlFor={`${q.id} ${points} ${q.archetypeId}`}
                key={points}
              >
                <input
                  id={`${q.id} ${points} ${q.archetypeId}`}
                  type="radio"
                  name={q.text}
                  value={`${q.id} ${points} ${q.archetypeId}`}
                  required
                  onClick={onClick}
                />
                {text}
              </label>
            ))}
          </fieldset>
        ))}
        <button type="submit" className={classes.finishBtn}>
          Закончить тест
        </button>
      </form>
    </div>
  );
};
