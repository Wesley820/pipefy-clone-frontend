import React, { useContext } from 'react';
import { ListContext } from '../../contexts/listContext';

import { Container } from './styles';

export default function Header() {
  const { project } = useContext(ListContext);
  return (
    <Container>
      <h1>pipefy</h1>
      <h3>{project.title}</h3>
    </Container>
  );
}
