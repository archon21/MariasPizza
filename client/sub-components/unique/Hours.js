import React from 'react';
import moment from 'moment';

const Hours = props => {
  const { footer } = props;
  const now = moment().weekday();

  return (
    <div
      className={`flex column w-100 align-center ${
        footer ? 'footer__item' : ''
      }`}
    >
      <div className="flex column align-center w-90">
        {/* <h4 className="headline-4 color-secondary p-20px">Hours</h4> */}
        <div className="hours__item my-10px row column w-100">
          <div className="hours__border flex column align-center">
            <h1
              className={`hours__item__day color-white ${now === 0 &&
                'color-mimosa'} `}
            >
              S
            </h1>
          </div>

          <div
            className={`flex column justify-center color-white w-70 ${now === 0 &&
              'color-mimosa'} `}
          >
            <span className="body-2  text-left">
              <strong>Breakfast</strong> 7am - 2pm
            </span>
            <span className="body-2 color-white text-left">
              <strong>Lunch & Dinner</strong> 11am - 9pm
            </span>
          </div>
        </div>
        <div className="hours__item my-10px row column w-100">
          <div className="hours__border flex column align-center">
            <h1
              className={`hours__item__day color-white ${now === 1 &&
                'color-mimosa'} `}
            >
              M
            </h1>
          </div>

          <div
            className={`flex column justify-center color-white w-70 ${now === 1 &&
              'color-mimosa'} `}
          >
            <h1 className="headline-5 margin-0 text-left ">Closed</h1>
          </div>
        </div>
        <div className="hours__item my-10px row column  w-100">
          <div className="hours__border flex column align-center">
            <h1
              className={`hours__item__day color-white ${now === 2 &&
                'color-mimosa'} `}
            >
              T
            </h1>
            <h1
              className={`hours__item__day color-white ${now === 3 &&
                'color-mimosa'} `}
            >
              W
            </h1>
            <h1
              className={`hours__item__day color-white ${now === 4 &&
                'color-mimosa'} `}
            >
              TH
            </h1>
          </div>

          <div
            className={`flex column justify-center color-white w-70 ${now === 2 ||
              now === 3 ||
              (now === 4 && 'color-mimosa')} `}
          >
            <span className="body-1 text-left">
              <strong>Breakfast</strong>
            </span>
            <span className="body-1 text-left">7am - 2pm</span>
            <span className="body-1 text-left">
              <strong>Lunch & Dinner</strong>
            </span>
            <span className="body-1 text-left"> 11am - 9pm</span>
          </div>
        </div>
        <div className="hours__item my-10px row column w-100">
          <div className="hours__border flex column align-center">
            <h1
              className={`hours__item__day color-white ${now === 5 &&
                'color-mimosa'} `}
            >
              F
            </h1>
            <h1
              className={`hours__item__day color-white ${now === 6 &&
                'color-mimosa'} `}
            >
              S
            </h1>
          </div>

          <div
            className={`flex column justify-center color-white w-70 ${now === 5 ||
              (now === 6 && 'color-mimosa')} `}
          >
            <span className="body-1  text-left">
              <strong>Breakfast</strong>
            </span>
            <span className="body-1  text-left">7am - 2pm</span>
            <span className="body-1  text-left">
              <strong>Lunch & Dinner</strong>
            </span>
            <span className="body-1 text-left">11am - 9:30pm</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hours;
