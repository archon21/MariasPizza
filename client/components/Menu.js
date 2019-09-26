import React, { Component } from 'react';
import { WindoW, Flex } from '../sub-components/containers';

class Menu extends Component {
  state = {
    selectedMenus: [],
    breakfastMenu: [
      'https://firebasestorage.googleapis.com/v0/b/mariaspizza.appspot.com/o/menus%2FBreakfast%20Page%201.jpg?alt=media&token=df6e1941-7ff4-4b1e-be5c-a704f589dfdc',
      'https://firebasestorage.googleapis.com/v0/b/mariaspizza.appspot.com/o/menus%2FBreakfast%202-page-001.jpg?alt=media&token=033b3a2e-03e0-4e4d-b6a8-4a9ca7f49ca3'
    ],
    lunchMenu: [
      'https://firebasestorage.googleapis.com/v0/b/mariaspizza.appspot.com/o/menus%2FLunch%20and%20Dinner%2FLunch-page-004.jpg?alt=media&token=f0b3d2b5-2f9b-4892-b42b-738a305f7c8d',
      'https://firebasestorage.googleapis.com/v0/b/mariaspizza.appspot.com/o/menus%2FLunch%20and%20Dinner%2FLunch-page-001.jpg?alt=media&token=ac602ffb-c533-493e-aee1-2b7de3124c51',
      'https://firebasestorage.googleapis.com/v0/b/mariaspizza.appspot.com/o/menus%2FLunch%20and%20Dinner%2FLunch-page-002.jpg?alt=media&token=19d3f5c8-da02-41f7-875e-80a60e32bde8',
      'https://firebasestorage.googleapis.com/v0/b/mariaspizza.appspot.com/o/menus%2FLunch%20and%20Dinner%2FLunch-page-003.jpg?alt=media&token=bdd6b4d4-f99e-412a-b003-5407f7127e0e',

      'https://firebasestorage.googleapis.com/v0/b/mariaspizza.appspot.com/o/menus%2FLunch%20and%20Dinner%2FDinner-page-001.jpg?alt=media&token=797bfa1e-584a-4035-a5a3-cbfb587a5a8d'
    ]
  };

  componentDidMount() {
    const { breakfastMenu } = this.state;
    this.setState({ selectedMenus: breakfastMenu });
  }

  handleChangeMenu = menu => {
    const selectedMenus = this.state[menu]
    this.setState({selectedMenus})
  }

  render() {
    const { selectedMenus } = this.state;
    return (
      <WindoW backgroundUrl="https://firebasestorage.googleapis.com/v0/b/mariaspizza.appspot.com/o/stock-counter.jpg?alt=media&token=ac0f9b82-9094-418c-9502-3195e1c0c6f7">
        <Flex row>
          <button
            type="button"
            onClick={() => this.handleChangeMenu('breakfastMenu')}
            className={`${selectedMenus.length === 2 ? 'button' : 'button inverted'}`}
          >
            Breakfast
          </button>
          <button
            type="button"
            onClick={() => this.handleChangeMenu('lunchMenu')}
            className={`${selectedMenus.length === 2 ? 'button inverted' : 'button '}`}
          >
            Lunch & Dinner
          </button>
        </Flex>
        {selectedMenus.map(menu => {
          return <img key={menu} className="menu-image maxw-1000px" src={menu} />;
        })}
      </WindoW>
    );
  }
}

export default Menu;
