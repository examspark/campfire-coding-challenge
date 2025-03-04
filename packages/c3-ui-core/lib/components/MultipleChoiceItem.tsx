import { ChangeEvent, FC } from "react";
import styled from "styled-components";

const MultipleChoiceItemStyle = styled.div`
  font-size: inherit;
  font-family: inherit;
  font-weight: inherit;
  color: inherit;
  display: flex;
`;

type MultipleChoiceItemInputProps = {
  value: string;
  selected: boolean;
  onChange: (action: string, event: ChangeEvent<HTMLInputElement>) => void;
};

export const MultipleChoiceItem: FC<MultipleChoiceItemInputProps> = ({
  value,
  selected,
  onChange,
}) => {
  const valueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange("value", e);
  };

  const selectedChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange("selected", e);
  };

  return (
    <MultipleChoiceItemStyle>
      <div>
        <input
          type="checkbox"
          tabIndex={0}
          checked={selected}
          onChange={selectedChangeHandler}
        />
      </div>
      <input value={value} tabIndex={0} onChange={valueChangeHandler} />
    </MultipleChoiceItemStyle>
  );
};
