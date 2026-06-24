import React from 'react';

interface Test4Props {
  year: number;
  name?: string;
}

const Test4: React.FC<Test4Props> = ({ year, name }) => {
  return <p>{year} {name}</p>;
};

export default Test4;
