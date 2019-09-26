import React from 'react';

const PizzaSpecials = () => {
  return (
    <div className="m-auto specials__pizza flex column align-center wrap ">
      <div className="specials__pizza__text flex column align-center">
        <h4 className="headline-4 color-primary p-20px">Pizza Specials</h4>

        <span className="headline-5 margin-0 p-10px color-primary underlined">
          2 LARGE 1 TOPPING PIZZAS
        </span>
        <span className="headline-4 margin-0 p-10px color-primary">$26.95</span>
        <span className="body-2 color-primary">Some exceptions apply</span>

        <span className="body-1  color-primary">--------------</span>
        <span className="headline-5 margin-0 p-10px color-primary underlined">
          BUY 3 PIZZAS GET 1 FREE
        </span>
        <span className="body-2 color-primary">Offers cannot be combined</span>
      </div>

      <img
        className="specials__pizza__image"
        src="https://firebasestorage.googleapis.com/v0/b/mariaspizza.appspot.com/o/main-carousel-images%2FIMG_1430.JPG?alt=media&token=1c35c3d2-d88a-4b64-bbb4-4245b1251910"
      />
    </div>
  );
};

export default PizzaSpecials;
