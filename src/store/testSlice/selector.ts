import { RootTypes } from "../RootTypes";

export const selectScore = (state: RootTypes) => state.test.finalScore;
export const selectIsFinished = (state: RootTypes) => state.test.isEnd;
