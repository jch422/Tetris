import React from 'react';
import { FaForward, FaBackward, FaStar, FaBomb } from 'react-icons/fa';

const ITEM_CHANCE = 0.2;
const ITEMS = [
  {
    name: 'bomb',
    description: '라인이 한 줄 추가됩니다.',
  },
  // {
  //   name: 'star',
  //   description: '라인이 한 줄 삭제됩니다.',
  // },
  {
    name: 'faster',
    description: '낙하 속도가 가속됩니다.',
  },
  // {
  //   name: 'slower',
  //   description: '낙하 속도가 감속됩니다.',
  // },
];

export const getRandomItem = () => {
  if (Math.floor(Math.random() * 10) > ITEM_CHANCE) {
    return ITEMS[Math.floor(Math.random() * ITEMS.length)];
  }
};

export const itemMapper = {
  bomb: <FaBomb color="black" size="90%" />,
  star: <FaStar color="yellow" size="90%" />,
  faster: <FaForward color="green" size="90%" />,
  slower: <FaBackward color="crimson" size="90%" />,
};