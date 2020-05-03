import React, { useContext } from 'react';
import { ListContext } from '../../contexts/listContext';

import List from '../List';

import { Container } from './styles';

export default function Board() {
  const { project } = useContext(ListContext);

  return (
    <Container>
      {project.lists &&
        project.lists.map((list, index) => (
          <List key={list.title} index={index} data={list} />
        ))}
    </Container>
  );
}
