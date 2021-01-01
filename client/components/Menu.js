import React, { Component } from 'react';
import { WindoW, Flex } from '../sub-components/containers';

class Menu extends Component {
  state = {
    selectedMenus: [],
    breakfastMenu: [
      'https://firebasestorage.googleapis.com/v0/b/mariaspizza.appspot.com/o/menus%2FBreakfast%2Fbreakfast_1.jpg?alt=media&token=df8fe6af-2f3c-42b8-9bf3-80a46d77cfb4',
      'https://firebasestorage.googleapis.com/v0/b/mariaspizza.appspot.com/o/menus%2FBreakfast%2Fbreakfast_2.jpg?alt=media&token=b84fb232-a6f4-4802-927d-fc712aae22e0'
    ],
    lunchMenu: [
      'https://firebasestorage.googleapis.com/v0/b/mariaspizza.appspot.com/o/menus%2FLunch%20and%20Dinner%2Flunch_2.jpg?alt=media&token=8b652bec-1760-46e0-9538-00caaed33dde',
      'https://firebasestorage.googleapis.com/v0/b/mariaspizza.appspot.com/o/menus%2FLunch%20and%20Dinner%2Flunch_1.jpg?alt=media&token=b3ecaed9-56a1-469b-b2fa-ae13b527907e',
      'https://firebasestorage.googleapis.com/v0/b/mariaspizza.appspot.com/o/menus%2FLunch%20and%20Dinner%2Flunch_3.jpg?alt=media&token=a4a1527f-500c-42af-b00c-a18258ed686e',
      'https://firebasestorage.googleapis.com/v0/b/mariaspizza.appspot.com/o/menus%2FLunch%20and%20Dinner%2Flunch_4.jpg?alt=media&token=34ecc1a7-bd8b-4b31-a653-1ca603ec13a2',

      'https://firebasestorage.googleapis.com/v0/b/mariaspizza.appspot.com/o/menus%2FLunch%20and%20Dinner%2Flunch_5.jpg?alt=media&token=11283c07-aea2-4a6d-965a-e5d7cb218c4b'
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
