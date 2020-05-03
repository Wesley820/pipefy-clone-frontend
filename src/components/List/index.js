import React, { useContext } from 'react';
import { useDrop } from 'react-dnd';
import { ListContext } from '../../contexts/listContext';

import Card from '../Card';

import { Container } from './styles';
import { MdAdd } from 'react-icons/md';

export default function List({ data, index: listIndex }) {
  const { move } = useContext(ListContext);

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item) {
      //se a lista possuir algum card, nada aqui será feito
      if (data.cards.length > 0) {
        return;
      }

      //se não houver nenhum card, o card arrastado será movido
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;
      const draggedIndex = item.index;
      const targetIndex = 0;

      move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);

      item.index = targetIndex;
      item.listIndex = targetListIndex;
    },
  });

  return (
    <Container done={data.done} ref={dropRef}>
      <header>
        <h2>
          {data.title} <p>{data.cards.length}</p>
        </h2>
        {data.creatable && (
          <button type="button">
            <MdAdd size="24" color="#fff" />
          </button>
        )}
      </header>
      <ul>
        {data.cards.map((card, index) => (
          <Card key={card.id} data={card} index={index} listIndex={listIndex} />
        ))}
      </ul>
      <p>{data.description}</p>
    </Container>
  );
}
