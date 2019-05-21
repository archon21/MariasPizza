import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavHButton from './NavHButton';
import { alertInteraction } from '../../store';
import { connect } from 'react-redux';
import Contact from '../Contact';

class Navbar extends Component {
  state = {
    open: true,
    selectedLink: ''
  };

  componentDidMount() {
    const { pathname } = this.props.location;
    const arr = pathname.split('/');
    const selectedLink = arr[arr.length - 1];
    this.setState({ selectedLink });
  }

  toggleNavH = () => {
    const css = !this.state.open;
    this.setState({ open: css });
  };

  openContact = () => {
    this.props.alertInteraction(true, <Contact />);
  };

  selectLink = link => {
    console.log(link);
    this.setState({ selectedLink: link });
  };

  render() {
    const { open, selectedLink } = this.state;
    return (
      <nav id="nav" className="flex row wrap black align-center">
        <Link
          className={`headline-6 p-5px nav__link ${selectedLink === 'home' &&
            'selected'}`}
          to={{ pathname: '/home' }}
          onClick={() => this.selectLink('home')}
        >
          HOME
        </Link>
        <Link
          className={`headline-6  p-5px nav__link ${selectedLink === 'menu' &&
            'selected'}`}
          to={{ pathname: '/menu' }}
          onClick={() => this.selectLink('menu')}
        >
          MENU
        </Link>
        <Link
          className={`headline-6  p-5px nav__link ${selectedLink === 'info' &&
            'selected'}`}
          to={{ pathname: '/info' }}
          onClick={() => this.selectLink('info')}
        >
          INFO
        </Link>
      </nav>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  alertInteraction: (status, template) =>
    dispatch(alertInteraction(status, template))
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Navbar)
);
