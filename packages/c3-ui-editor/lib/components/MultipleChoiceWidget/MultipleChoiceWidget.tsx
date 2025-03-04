import { MultipleChoiceItem } from "@campfirelearning/c3-ui-core";
import { produce, enableMapSet } from "immer";
import { ChangeEvent, useState, useEffect } from "react";
import styled from "styled-components";

import { MultipleChoiceData } from "./MultipleChoiceData";

const StyledCode = styled.span`
  //background-color: #f0f0f0;
  //border-radius: 0.5rem;
  //margin: 0 0.3rem;
`;

type MultipleChoiceWidgetProps = {
  value: MultipleChoiceData;
  onChange: (value: MultipleChoiceData) => void;
};

export const MultipleChoiceWidget = ({
  value,
  onChange,
}: MultipleChoiceWidgetProps) => {
  enableMapSet();
  const [internalValue, setInternalValue] = useState(value);

  useEffect(() => {
    onChange(internalValue);
  }, [onChange, internalValue]);

  function promptChangeHandler({ e }: { e: ChangeEvent<HTMLInputElement> }) {
    setInternalValue(
      produce((prevState: MultipleChoiceData) => {
        prevState.prompt = e.target.value;
      }),
    );
  }

  function myChangeHandler({
    action,
    e,
    key,
  }: {
    action: string;
    e: ChangeEvent<HTMLInputElement>;
    key: number;
  }) {
    switch (action) {
      case "selected":
        setInternalValue(
          produce((prevState: MultipleChoiceData) => {
            if (!prevState.multiple) {
              if (prevState.correct.has(key)) {
                return;
              } else {
                prevState.correct.clear();
              }
            }

            if (e.target.checked) {
              prevState.correct.add(key);
            } else {
              prevState.correct.delete(key);
            }
          }),
        );
        break;
      case "value":
        setInternalValue(
          produce((prevState: MultipleChoiceData) => {
            prevState.answers[key] = e.target.value;
          }),
        );
        break;
    }
  }

  return (
    <StyledCode>
      <div>
        <input
          tabIndex={0}
          value={internalValue.prompt}
          onChange={(e) => {
            promptChangeHandler({ e });
          }}
        />
      </div>
      {internalValue.answers.map((answer: string, key: number) => {
        return (
          <div key={key}>
            <MultipleChoiceItem
              value={answer}
              selected={internalValue.correct.has(key)}
              onChange={(action, event) => {
                myChangeHandler({ action, e: event, key });
              }}
            ></MultipleChoiceItem>
          </div>
        );
      })}
      <div>
        Multiple: {internalValue.multiple ? "multiple" : "not multiple"}
      </div>
    </StyledCode>
  );
};
