import React from 'react';

interface Test5Props {
  year: number;
  name?: string;
}

const Test5: React.FC<Test5Props> = ({ year, name }) => {
  return <p>{year} {name}</p>;
};

export default Test5;
