import React from 'react';
import ListProvider from './contexts/listContext';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Header from './components/Header';
import Board from './components/Board';

import GlobalCss from './styles/global';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <ListProvider>
        <GlobalCss />
        <Header />
        <Board />
      </ListProvider>
    </DndProvider>
  );
}

export default App;
