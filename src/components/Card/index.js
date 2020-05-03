import React, { useRef, useContext } from 'react';
import { ListContext } from '../../contexts/listContext';
import { useDrag, useDrop } from 'react-dnd';

import { Container, Label } from './styles';

export default function Card({ data, index, listIndex }) {
  const ref = useRef();
  const { move } = useContext(ListContext);

  const [{ isDragging }, dragRef] = useDrag({
    item: { type: 'CARD', index, listIndex },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item, monitor) {
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      const draggedIndex = item.index;
      const targetIndex = index;

      if (
        draggedIndex === targetIndex &&
        draggedListIndex === targetListIndex
      ) {
        return;
      }

      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;

      const draggedOffSet = monitor.getClientOffset();
      const draggedTop = draggedOffSet.y - targetSize.top;

      //Se o elemento já vier antes do elemento alvo nada será feito
      if (
        draggedIndex < targetIndex &&
        draggedTop < targetCenter &&
        draggedListIndex === targetListIndex
      ) {
        return;
      }

      //Se o elemento já vier depois do elemento alvo nada será feito
      if (
        draggedIndex > targetIndex &&
        draggedTop > targetCenter &&
        draggedListIndex === targetListIndex
      ) {
        return;
      }

      move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);

      item.index = targetIndex;
      item.listIndex = targetListIndex;
    },
  });

  dragRef(dropRef(ref));

  return (
    <Container ref={ref} isDragging={isDragging}>
      <header>
        <Label color={data.labels} />
      </header>
      <p>{data.content}</p>
      <span>{data.description}</span>
    </Container>
  );
}
