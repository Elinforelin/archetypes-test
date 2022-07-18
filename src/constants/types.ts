export interface QuestionType {
  id: number;
  archetypeId: number;
  text: string;
}

export interface ArchetypeType {
  id: number;
  name: string;
  description: string;
}

export interface AnswerType {
  id: number;
  text: string;
  points: number;
}
