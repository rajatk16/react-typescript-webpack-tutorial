import React, { ReactElement } from 'react';
import Content from './Content';
import Heading from './Heading';
import Localize from './Localize';

const App: React.FC = (): ReactElement => {
  return ( 
    <>
      <Heading />
      <Content />
      <Localize />
    </>
  )
}

export default App;