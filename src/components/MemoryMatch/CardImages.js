import React, { useState } from "react";
import MemoModal from "./MemoModal.js";
import Card from './Card.js';

const CardImages = () => {
  // const [items, setItems] = useState([
  //   { id: 1, img: '/img/MemImg/angular.png', stat: 'correct'},
  //   { id: 1, img: '/img/MemImg/angular.png', stat: 'correct'},
  //   { id: 1, img: '/img/MemImg/angular.png', stat: 'correct'},
  //   { id: 2, img: '/img/MemImg/css.png', stat: 'correct'},
  //   { id: 2, img: '/img/MemImg/css.png', stat: 'correct'},
  //   { id: 3, img: '/img/MemImg/html.png', stat: 'correct'},
  //   { id: 3, img: '/img/MemImg/html.png', stat: 'correct'},
  //   { id: 4, img: '/img/MemImg/js.png', stat: 'correct'},
  //   { id: 4, img: '/img/MemImg/js.png', stat: 'correct'},
  //   { id: 5, img: '/img/MemImg/nodejs.png', stat: 'correct'},
  //   { id: 5, img: '/img/MemImg/nodejs.png', stat: 'correct'},
  //   { id: 6, img: '/img/MemImg/react.png', stat: 'correct'},
  //   { id: 6, img: '/img/MemImg/react.png', stat: 'correct'},
  //   { id: 7, img: '/img/MemImg/scss.png', stat: 'correct'},
  //   { id: 7, img: '/img/MemImg/scss.png', stat: 'correct'},
  //   { id: 8, img: '/img/MemImg/vue.png', stat: 'correct'},
  //   { id: 8, img: '/img/MemImg/vue.png', stat: 'correct'}
  // ].sort(() => Math.random() - 0.5))
  const [items, setItems] = useState([
    { id: 1, img: '/img/MemImg/angular.png', stat: ''},
    { id: 1, img: '/img/MemImg/angular.png', stat: ''},
    { id: 2, img: '/img/MemImg/css.png', stat: ''},
    { id: 2, img: '/img/MemImg/css.png', stat: ''},
    { id: 3, img: '/img/MemImg/html.png', stat: ''},
    { id: 3, img: '/img/MemImg/html.png', stat: ''},
    { id: 4, img: '/img/MemImg/js.png', stat: ''},
    { id: 4, img: '/img/MemImg/js.png', stat: ''},
    { id: 5, img: '/img/MemImg/nodejs.png', stat: ''},
    { id: 5, img: '/img/MemImg/nodejs.png', stat: ''},
    { id: 6, img: '/img/MemImg/react.png', stat: ''},
    { id: 6, img: '/img/MemImg/react.png', stat: ''},
    { id: 7, img: '/img/MemImg/scss.png', stat: ''},
    { id: 7, img: '/img/MemImg/scss.png', stat: ''},
    { id: 8, img: '/img/MemImg/vue.png', stat: ''},
    { id: 8, img: '/img/MemImg/vue.png', stat: ''}
  ].sort(() => Math.random() - 0.5))

  const [prev, setprev] = useState(-1);

  const checkId = (current) => {
    if (items[current].id === items[prev].id) {
      items[current].stat = 'correct';
      items[prev].stat = 'correct';
      setItems([...items]);
      setprev(-1);
    } else {
      items[current].stat = 'wrong';
      items[prev].stat = 'wrong';
      setItems([...items]);
      setTimeout(() => {
        items[current].stat = '';
        items[prev].stat = '';
        setItems([...items]);
        setprev(-1);
      }, 1000)
    }
  }

  const handleCardClick = (id) => {
    if (prev === -1) {
      items[id].stat = 'active';
      setItems([...items]);
      setprev(id);
    } else {
      checkId(id);
    }
  }

  const isAllCorrect = items.every(
    (item) => item.stat === 'correct'
  )

  return (
    <div className="cardImagesContainer">
      { items.map((item, index) => (
        <Card item={item} index={index} id={index} handleCardClick={handleCardClick} />
      )) }
      {isAllCorrect && <MemoModal />}
    </div>

  )
}

export default CardImages;
