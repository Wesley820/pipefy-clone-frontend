import React, { createContext, useState } from 'react';
import { loadLists } from '../services/api';
import produce from 'immer';

export const ListContext = createContext();

const data = loadLists();

const ListProvider = function ({ children }) {
  const [project, setProject] = useState(data.project);

  function move(fromList, toList, from, to) {
    setProject({
      ...project,
      lists: produce(project.lists, (draft) => {
        const dragged = draft[fromList].cards[from];

        draft[fromList].cards.splice(from, 1);
        draft[toList].cards.splice(to, 0, dragged);
      }),
    });
  }

  return (
    <ListContext.Provider value={{ project, move }}>
      {children}
    </ListContext.Provider>
  );
};

export default ListProvider;
