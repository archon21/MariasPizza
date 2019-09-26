import React, { Component } from 'react';
import {connect } from 'react-redux'
import { WindoW, Flex, Divider } from '../sub-components/containers';
import PizzaSpecials from '../sub-components/unique/PizzaSpecials';

class Specials extends Component {
  render() {
    const {specialsMenu} = this.props

    return (
      <WindoW backgroundUrl="https://firebasestorage.googleapis.com/v0/b/mariaspizza.appspot.com/o/stock-counter.jpg?alt=media&token=ac0f9b82-9094-418c-9502-3195e1c0c6f7">
        {/* <Divider
          border
          backgroundColor="background-secondary"
          color="color-primary"
        >
          <h1 className="headline-4">Specials</h1>
        </Divider> */}
        <div className="flex row wrap align-center justify-center w-100 py-50px">
          <div className="specials flex column align-center">
            <h3 className="headline-3 color-primary cursive py-10x">Monthly Breakfast Specials</h3>
            <img
              src={specialsMenu[0].monthly}
              className="specials__img"
            />
          </div>
          <div className="specials flex column align-center">
            <h3 className="headline-3 color-primary cursive py-10px">Weekly Lunch Specials</h3>
            <img
              src={specialsMenu[0].weekly}
              className="specials__img"
            />
          </div>
        </div>
          <Divider
          border
          backgroundColor="background-primary"
          color="color-secondary"
        >
          <h1 className="headline-4 cursive">Offers</h1>
          </Divider>
        <div className="flex row wrap align-center justify-center py-30px w-100 background-secondary">
          <PizzaSpecials />
          {Object.values(specialsMenu[1]).map(value => {
            return <img key={value} src={value} className="specials__offers" />
          })}
        </div>
      </WindoW>
    );
  }
}

const mapStateToProps = state => ({
specialsMenu: state.firebase.specialsMenu
})

export default connect(mapStateToProps, null)(Specials)
