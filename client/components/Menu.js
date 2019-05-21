import React, { Component } from 'react';
import { WindoW, Flex } from '../sub-components/containers';

class Menu extends Component {
  state = {
    selectedMenus: [],
    breakfastMenu: [
      'https://firebasestorage.googleapis.com/v0/b/mariaspizza.appspot.com/o/menus%2Fbreakfast%20update%201-1.jpg?alt=media&token=3132c719-e2d9-4f8a-b52d-a20b5e978861',
      'https://firebasestorage.googleapis.com/v0/b/mariaspizza.appspot.com/o/menus%2FBreakfast%20Menu%202%20Update.jpg?alt=media&token=54db12cb-509b-4c32-b92d-178b0d3c395c'
    ],
    lunchMenu: [
      'https://firebasestorage.googleapis.com/v0/b/mariaspizza.appspot.com/o/menus%2Flunch%20%26%20dinner%2Fmenu%20update-1.jpg?alt=media&token=f715da36-3922-422e-ae95-c5c91f13a392',
      'https://firebasestorage.googleapis.com/v0/b/mariaspizza.appspot.com/o/menus%2Flunch%20%26%20dinner%2Fmenu%20update-2.jpg?alt=media&token=5e0efff0-03fd-4b19-977d-57c381e9f1c9',
      'https://firebasestorage.googleapis.com/v0/b/mariaspizza.appspot.com/o/menus%2Flunch%20%26%20dinner%2Fmenu%20update-3.jpg?alt=media&token=5d7045a8-1838-478f-908f-b4915e99b0ef',
      'https://firebasestorage.googleapis.com/v0/b/mariaspizza.appspot.com/o/menus%2Flunch%20%26%20dinner%2Fmenu%20update-4.jpg?alt=media&token=e4e5a4d4-0d2c-485a-b600-9e8c1fb20e25'
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
      <WindoW background="background-secondary">
        <Flex row>
          <button
            type="button"
            onClick={() => this.handleChangeMenu('breakfastMenu')}
            className="button"
          >
            Breakfast
          </button>
          <button
            type="button"
            onClick={() => this.handleChangeMenu('lunchMenu')}
            className="button"
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
