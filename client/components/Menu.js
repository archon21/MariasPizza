import React, { Component } from 'react';
import { WindoW, Flex, Divider } from '../sub-components/containers';

class Menu extends Component {
  state = {
    selectedMenus: [],
    breakfastMenu: [
      'https://firebasestorage.googleapis.com/v0/b/mariaspizza.appspot.com/o/menus%2FBreakfast%2Fbreakfast_1.jpg?alt=media&token=df8fe6af-2f3c-42b8-9bf3-80a46d77cfb4',
      'https://firebasestorage.googleapis.com/v0/b/mariaspizza.appspot.com/o/menus%2FBreakfast%2Fbreakfast_2.jpg?alt=media&token=b84fb232-a6f4-4802-927d-fc712aae22e0',
    ],
    lunchMenu: [
      'https://firebasestorage.googleapis.com/v0/b/mariaspizza.appspot.com/o/menus%2FLunch%20and%20Dinner%2Flunch_2.jpg?alt=media&token=8b652bec-1760-46e0-9538-00caaed33dde',
      'https://firebasestorage.googleapis.com/v0/b/mariaspizza.appspot.com/o/menus%2FLunch%20and%20Dinner%2Flunch_1.jpg?alt=media&token=b3ecaed9-56a1-469b-b2fa-ae13b527907e',
      'https://firebasestorage.googleapis.com/v0/b/mariaspizza.appspot.com/o/menus%2FLunch%20and%20Dinner%2Flunch_3.jpg?alt=media&token=a4a1527f-500c-42af-b00c-a18258ed686e',
      'https://firebasestorage.googleapis.com/v0/b/mariaspizza.appspot.com/o/menus%2FLunch%20and%20Dinner%2Flunch_4.jpg?alt=media&token=34ecc1a7-bd8b-4b31-a653-1ca603ec13a2',

      'https://firebasestorage.googleapis.com/v0/b/mariaspizza.appspot.com/o/menus%2FLunch%20and%20Dinner%2Flunch_5.jpg?alt=media&token=11283c07-aea2-4a6d-965a-e5d7cb218c4b',
    ],
  };

  componentDidMount() {
    const { breakfastMenu } = this.state;
    this.setState({ selectedMenus: breakfastMenu });
  }

  handleChangeMenu = (menu) => {
    const selectedMenus = this.state[menu];
    this.setState({ selectedMenus });
  };

  render() {
    const { selectedMenus } = this.state;
    return (
      <WindoW backgroundUrl="https://firebasestorage.googleapis.com/v0/b/mariaspizza.appspot.com/o/stock-counter.jpg?alt=media&token=ac0f9b82-9094-418c-9502-3195e1c0c6f7">
        <Divider
          border
          backgroundColor="background-secondary"
          color="color-primary"
        >
          <a
            href="https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=ee5f03dc-7efc-47ac-af86-48f90a9bff0a"
            target="_"
            className="flex row wrap justify-center align-center"
          >
            <h5 className="headline-4 cursive color-mimosa">
              Order from home with Füd Delivery{' '}
            </h5>
            <svg
              className="icon__fud"
              preserveAspectRatio="xMidYMid meet"
              data-bbox="28.001 52.001 143.998 95.998"
              viewBox="28.001 52.001 143.998 95.998"
              height="200"
              width="200"
              xmlns="http://www.w3.org/2000/svg"
              data-type="color"
              role="img"
            >
              <g>
                <path
                  d="M162.999 133h-6v-6h6c1.655 0 3-1.351 3-3.01v-20.361c0-2.408-1.011-3.628-3-3.628h-4.764l-11.071-19.923c-.415-.589-1.341-1.078-2.334-1.078H121v-6h23.83a8.996 8.996 0 0 1 7.435 3.927L161.763 94h1.236c5.382 0 9 3.869 9 9.628v20.361c0 4.969-4.037 9.011-9 9.011z"
                  fill="#C6A105"
                  data-color="1"
                />
                <path
                  fill="#C6A105"
                  d="M124 133H76v-6h42V58H70v-5.999h54V133z"
                  data-color="1"
                />
                <path
                  fill="#C6A105"
                  d="M52.001 127v6h-15v-6h15z"
                  data-color="1"
                />
                <path
                  d="M144.973 147.999c-8.285 0-15.026-6.718-15.026-14.973s6.741-14.973 15.026-14.973 15.026 6.718 15.026 14.973-6.741 14.973-15.026 14.973zm0-23.947c-4.977 0-9.026 4.025-9.026 8.974 0 4.948 4.049 8.974 9.026 8.974 4.977 0 9.026-4.025 9.026-8.974 0-4.948-4.048-8.974-9.026-8.974z"
                  fill="#C6A105"
                  data-color="1"
                />
                <path
                  d="M64.027 147.999c-8.285 0-15.026-6.718-15.026-14.973s6.741-14.973 15.026-14.973 15.026 6.718 15.026 14.973-6.741 14.973-15.026 14.973zm0-23.947c-4.977 0-9.026 4.025-9.026 8.974 0 4.948 4.049 8.974 9.026 8.974s9.026-4.025 9.026-8.974c0-4.948-4.049-8.974-9.026-8.974z"
                  fill="#C6A105"
                  data-color="1"
                />
                <path fill="#C6A105" d="M133 127v6h-12v-6h12z" data-color="1" />
                <path
                  fill="#C6A105"
                  d="M150.999 103H127v-6h17.399l-4.896-7.339 4.993-3.331 6.503 9.752V103z"
                  data-color="1"
                />
                <path
                  fill="#C6A105"
                  d="M79 88v6H28.001v-6H79z"
                  data-color="1"
                />
                <path
                  fill="#C6A105"
                  d="M97.001 70v6h-45v-6h45z"
                  data-color="1"
                />
                <path fill="#C6A105" d="M46.001 70v6h-6v-6h6z" data-color="1" />
                <path fill="#C6A105" d="M64 52.001v6h-6v-6h6z" data-color="1" />
              </g>
            </svg>
          </a>

          <span className=" body-1 cursive ">or</span>
          <a
            href="https://order.metispro.com/mariapizza"
            target="_blank"
            className="flex row wrap justify-center align-center"
          >
            <h5 className="headline-4 cursive color-primary">
              Click here for Online Ordering!
            </h5>
          </a>
        </Divider>
        <Flex row>
          <button
            type="button"
            onClick={() => this.handleChangeMenu('breakfastMenu')}
            className={`${
              selectedMenus.length === 2 ? 'button' : 'button inverted'
            }`}
          >
            Breakfast
          </button>
          <button
            type="button"
            onClick={() => this.handleChangeMenu('lunchMenu')}
            className={`${
              selectedMenus.length === 2 ? 'button inverted' : 'button '
            }`}
          >
            Lunch & Dinner
          </button>
        </Flex>
        {selectedMenus.map((menu) => {
          return (
            <img key={menu} className="menu-image maxw-1000px" src={menu} />
          );
        })}
      </WindoW>
    );
  }
}

export default Menu;
