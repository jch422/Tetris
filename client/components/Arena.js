import React, { useContext } from 'react';
import styled from '@emotion/styled';

import ItemsContext from '@contexts/items';

import Cell from './Cell';

const Arena = ({ arena }) => {
  const { state } = useContext(ItemsContext);
  const isExploding = (y) => state.exploding && y === arena.length - 1;

  return (
    <StyledArena width={arena[0].length} height={arena.length}>
      {arena.map((row, y) =>
        row.map(([type, , item], idx) => <Cell key={idx} type={type} item={item} exploding={isExploding(y)} />),
      )}
    </StyledArena>
  );
};

export default Arena;

const StyledArena = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${({ height }) => height},
    calc((25vw - (${({ width }) => width - 1 + 'px'})) / ${({ width }) => width})
  );
  grid-template-columns: repeat(${({ width }) => width}, 1fr);
  grid-gap: 1px;
  //border: 2px solid #333;
  width: 100%;
  max-width: 25vw;
  background: #111;
`;
