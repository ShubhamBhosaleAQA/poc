import React from 'react';

interface Test3Props {
  name: string;
  age?: number;
}

const Test3: React.FC<Test3Props> = ({ name ,age}) => {
  return <p>{name}, {age ?? 'N/A'}</p>;
};

export default Test3;
