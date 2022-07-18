import { createSlice } from "@reduxjs/toolkit";

import { TestState } from "./types";

const initialState: TestState = {
  isEnd: false,
  results: [],
  finalScore: [
    { archetypeId: 1, score: 0 },
    { archetypeId: 2, score: 0 },
    { archetypeId: 3, score: 0 },
    { archetypeId: 4, score: 0 },
    { archetypeId: 5, score: 0 },
    { archetypeId: 6, score: 0 },
    { archetypeId: 7, score: 0 },
    { archetypeId: 8, score: 0 },
    { archetypeId: 9, score: 0 },
    { archetypeId: 10, score: 0 },
    { archetypeId: 11, score: 0 },
    { archetypeId: 12, score: 0 },
  ],
};

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    countPoints: (state, action) => {
      const checkedAnswer = state.results.find(
        (obj) => obj.numOfQ === action.payload.numOfQ
      );

      if (checkedAnswer) {
        checkedAnswer.points = action.payload.points;
        return;
      }
      state.results.push(action.payload);
    },
    countScore: (state) => {
      state.isEnd = true;
      state.results.forEach((res) => {
        state.finalScore.forEach((obj) => {
          if (res.archetypeId === obj.archetypeId) {
            obj.score += res.points;
          }
        });
      });
    },
  },
});

export const { countPoints, countScore } = testSlice.actions;

export default testSlice.reducer;
