import { MultipleChoiceWidget } from "@campfirelearning/c3-ui-editor";
import { MultipleChoiceData } from "@campfirelearning/c3-ui-editor";
import { useCallback } from "react";
import styled from "styled-components";
import { useImmer } from "use-immer";

const StyledCode = styled.span`
  //background-color: #f0f0f0;
  //border-radius: 0.5rem;
  //margin: 0 0.3rem;
`;

const defaultEditorData: MultipleChoiceData[] = [
  {
    prompt: "What is the meaning of life and everything?",
    answers: ["42", "something else"],
    correct: new Set([0]),
    multiple: false,
  },
  {
    prompt: "How many fingers do you have?",
    answers: ["1", "5", "10"],
    correct: new Set([1, 2]),
    multiple: true,
  },
];

export const ItemEditor = () => {
  const [multipleChoiceData, updateMultipleChoiceData] =
    useImmer(defaultEditorData);

  const handleChange = useCallback(
    (value: MultipleChoiceData, key: number) => {
      updateMultipleChoiceData((draft) => {
        draft[key] = value;
      });
    },
    [updateMultipleChoiceData],
  );

  return (
    <StyledCode>
      {multipleChoiceData.map(
        (multipleChoiceItem: MultipleChoiceData, key: number) => {
          return (
            <div key={key}>
              {multipleChoiceItem.prompt}
              <MultipleChoiceWidget
                key={key}
                value={multipleChoiceItem}
                onChange={(value: MultipleChoiceData) => {
                  handleChange(value, key);
                }}
              ></MultipleChoiceWidget>
            </div>
          );
        },
      )}
    </StyledCode>
  );
};
