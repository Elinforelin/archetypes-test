export interface TestState {
  isEnd: boolean;
  finalScore: { archetypeId: number; score: number }[];
  results: { numOfQ: number; points: number; archetypeId: number }[];
}
