import React, { Component } from 'react';

class Carousel extends Component {
  state = {
    focuseditem: this.props.items[0],
    focusedIndex: 0,
    inTransition: 'no-transition'
  };

  handleLoad = () => {
    this.setState({
      inTransition: 'no-transition'
    });
  };

  nextitem = () => {
    this.setState({ inTransition: 'transition' });
    const { items } = this.props;
    const { focusedIndex, focuseditem } = this.state;
    setTimeout(() => {
      if (focusedIndex === items.length - 1) {
        this.setState({
          focuseditem: items[0],
          focusedIndex: 0
        });
      } else {
        const newIndex = focusedIndex + 1;
        this.setState({
          focusedIndex: newIndex,
          focuseditem: items[newIndex]
        });
      }
    }, 800);
  };

  previtem = () => {
    this.setState({ inTransition: 'transition' });
    const { items } = this.props;
    const { focusedIndex, focuseditem } = this.state;
    setTimeout(() => {
      if (focusedIndex === 0) {
        this.setState({
          focuseditem: items[items.length - 1],
          focusedIndex: items.length - 1
        });
      } else {
        const newIndex = focusedIndex - 1;
        this.setState({
          focusedIndex: newIndex,
          focuseditem: items[newIndex]
        });
      }
    }, 800);
  };

  render() {
    const { focuseditem, inTransition, focusedIndex } = this.state;
    const {
      items,
      contain,
      primary,
      secondary,
      height,
      width,
      maxHeight,
      maxWidth,
      minWidth,
      backgroundColor
    } = this.props;
    return (
      <div
        className={`carousel   my-75px ${backgroundColor}
        ${width ? width : 'w-100'}
        ${maxWidth ? maxWidth : 'maxw-100vw'}
        ${minWidth ? minWidth : 'minw-325px'} ${height ? height : 'h-100'}
         flex column align-center`}
      >
        <div
          style={{ position: 'relative' }}
          className={`${contain && 'background-primary'} w-100 h-100 background-primary`}
        >
          <img
            style={{
              top: 0,
              left: 0,
              position: 'absolute',
              objectFit: contain ? 'contain' : 'cover',
              boxShadow:
                'rgba(0, 0, 0, 0.16) 0px 2px 5px 0px, rgba(0, 0, 0, 0.12) 0px 2px 10px 0px'
            }}
            className={`w-100 h-100 ${inTransition} ${maxHeight && maxHeight}`}
            onLoad={this.handleLoad}
            src={focuseditem.image ? focuseditem.image : focuseditem}
          />
          <div className="special-text carousel__special justify-center h-10">
            <div
              onClick={this.previtem}
              className="carosuel-right-button align-self-center"
            >
              <span />
              <span />
            </div>
            <div className="w-70 flex column align-center">
              <span
                className={`headline-4 color-white text-left ${inTransition}`}
              >
                {focuseditem.primary ? focuseditem.primary : primary}
              </span>
              <span
                className={`headline-5 color-white text-center ${inTransition}`}
              >
                {focuseditem.secondary ? focuseditem.secondary : secondary}
              </span>
            </div>

            <div
              onClick={this.nextitem}
              className="carosuel-left-button align-center align-self-center"
            >
              <span />
              <span />
            </div>
          </div>
        </div>

        <ul className="carosuel-index">
          {items.map((item, index) => {
            return (
              <li
                key={item.image}
                className={focusedIndex === index ? 'active' : null}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Carousel;
