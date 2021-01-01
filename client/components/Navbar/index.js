import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavHButton from './NavHButton';
import { alertInteraction } from '../../store';
import { connect } from 'react-redux';
import Contact from '../Contact';

class Navbar extends Component {
  state = {
    open: true,
    selectedLink: '',
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

  selectLink = (link) => {
    this.setState({ selectedLink: link });
  };

  render() {
    const { open, selectedLink } = this.state;
    const { phone } = this.props;
    return (
      <Fragment>
        <nav
          id="nav"
          className="flex row wrap black align-center justify-space-evenly py-5px"
        >
          <Link to="/" className="nav__logo flex row align-center">
            <img
              className="nav__logo__img"
              src="https://firebasestorage.googleapis.com/v0/b/mariaspizza.appspot.com/o/logos%2FStatues.png?alt=media&token=6af4ad71-3964-443c-a465-abde85eab9d0"
            />
            <div className="flex column ">
              <span className="nav__logo-text">Marias Pizza Palace</span>
              <span className="body-2 color-white">744 MIDDLETOWN RD.</span>
              <span className="body-2 color-white">COLCHESTER, CT</span>
              <span className="body-2 color-white">{phone}</span>
            </div>
          </Link>

          <Link
            className={`headline-6 p-5px nav__link ${
              selectedLink === 'home' || (selectedLink === '' && 'selected')
            }`}
            to={{ pathname: '/home' }}
            onClick={() => this.selectLink('home')}
          >
            HOME
          </Link>
          <Link
            className={`headline-6 p-5px nav__link ${
              selectedLink === 'specials' && 'selected'
            }`}
            to={{ pathname: '/specials' }}
            onClick={() => this.selectLink('specials')}
          >
            SPECIALS
          </Link>
          <Link
            className={`headline-6  p-5px nav__link ${
              selectedLink === 'menu' && 'selected'
            }`}
            to={{ pathname: '/menu' }}
            onClick={() => this.selectLink('menu')}
          >
            MENU
          </Link>

          <Link
            className={`headline-6  p-5px nav__link ${
              selectedLink === 'info' && 'selected'
            }`}
            to={{ pathname: '/info' }}
            onClick={() => this.selectLink('info')}
          >
            INFO
          </Link>
        </nav>
        <div
          style={{ minHeight: '80px' }}
          className="w-100 flex column align-center justify-center background-mimosa"
        >
          <div
            style={{ width: '90%', padding: '10px 0' }}
            className="flex column align-center justify-center"
          >
            <span className="body-1 color-primary text-center">
              <strong>Due to COVID-19 Our hours have changed</strong>
            </span>
            <span className="body-1 color-primary text-center">
              <strong>
                THANK YOU FOR YOUR SUPPORT DURING THIS TIME! WE DO HAVE ADJUSTED
                HOURS BUT ARE SERVING A FULL MENU!
              </strong>
            </span>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  phone: state.init.phone,
});

const mapDispatchToProps = (dispatch) => ({
  alertInteraction: (status, template) =>
    dispatch(alertInteraction(status, template)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
