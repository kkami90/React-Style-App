import React from 'react';
import styled from 'styled-components';
import './App.css';

function App() {
  const Mybox = styled.div`
    display: grid;
    grid-template-columns: auto auto;
  `;

  return (
    <div>
      <Mybox>1qqqq</Mybox>
      <Mybox>2qqqq</Mybox>
    </div>
  );
}

export default App;
