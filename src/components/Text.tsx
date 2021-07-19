import React, { FunctionComponent } from 'react';

//Datatype 추가
interface TextProps {
    text: string;
}

const Text: FunctionComponent<TextProps> = function ({ text }) {
  return <div>{text}</div>;
};

export default Text;