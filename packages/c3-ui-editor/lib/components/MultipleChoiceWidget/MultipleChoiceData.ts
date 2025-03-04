export interface MultipleChoiceData {
  prompt: string;
  answers: string[];
  correct: Set<number>;
  multiple: boolean;
}
