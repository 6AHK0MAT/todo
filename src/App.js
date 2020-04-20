import React, { Fragment } from 'react';

import ToDo from './containers/todo/todo';
import Title from './components/title/title';

const App = () => (
  <Fragment>
    <Title title="Список задач" />
    <ToDo />
  </Fragment>
);

export default App;
