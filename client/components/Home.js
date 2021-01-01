import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Block,
  WindoW,
  Flex,
  Divider,
  Animator,
} from '../sub-components/containers';
import { Video, Fab, List, Table, Carousel } from '../sub-components';
import Hours from '../sub-components/unique/Hours';
import PizzaSpecials from '../sub-components/unique/PizzaSpecials';
import Social from '../sub-components/unique/Social';

class Home extends Component {
  state = {
    scrolled: 0,
  };
  aboutBlock = React.createRef();
  aboutPicture = React.createRef();
  charity2 = React.createRef();
  charity3 = React.createRef();

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (e) => {
    this.setState({ scrolled: window.pageYOffset });
  };

  render() {
    const { aboutBlock, aboutPicture, state, props } = this;
    const { updates, specials, phone, gallery } = props;
    const { scrolled } = state;

    return (
      <div style={{ overflowX: 'hidden' }} className="flex column align-center">
        <Divider
          border
          backgroundColor="background-secondary"
          color="color-primary"
        >
          <h1 className="headline-3 cursive">Welcome To Maria’s!</h1>

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

          <Social />
        </Divider>
        <WindoW
          backgroundUrl="https://firebasestorage.googleapis.com/v0/b/mariaspizza.appspot.com/o/body3.png?alt=media&token=4247ad5c-ff2e-4180-a9f9-629338a3c5c6"
          row
        >
          <div className="site-box">
            <Hours />
          </div>
          <PizzaSpecials />
        </WindoW>

        <Divider
          border
          backgroundColor="background-secondary"
          color="color-primary"
        >
          <h1 className="headline-3 cursive">What We Offer</h1>
        </Divider>
        <WindoW backgroundUrl="https://firebasestorage.googleapis.com/v0/b/mariaspizza.appspot.com/o/stock-counter.jpg?alt=media&token=ac0f9b82-9094-418c-9502-3195e1c0c6f7">
          <div className='flex row align-center wrap justify-center' style={{ width: '90%' }}>
            {specials.map((s, index) => {
              console.log(s);
              return index !== 0 ? (
                <img
                  style={{
                    width: '325px',
                    height: '325px',
                    objectFit: 'cover',
                    margin: '5px',
                  }}
                  src={s.image}
                ></img>
              ) : (
                <div></div>
              );
            })}
          </div>
        </WindoW>

        <Divider
          border
          backgroundColor="background-primary"
          color="color-secondary"
        >
          <h1 className="headline-4 cursive">Updates</h1>
        </Divider>
        <WindoW
          row
          backgroundUrl="https://firebasestorage.googleapis.com/v0/b/mariaspizza.appspot.com/o/marias-background.png?alt=media&token=af3eb9a9-1906-4873-a881-410d2bac3d20"
        >
          {updates.map((update) => {
            return (
              <Block
                key={update.title}
                column
                type="info-card"
                maxWidth="maxw-400px"
                height="h-500px"
                width="w-90"
                full
              >
                <h4 className="headline-4 color-secondary p-20px w-90">
                  {update.title}
                </h4>
                {update.body.map((bodyItem) => {
                  return (
                    <span
                      key={bodyItem}
                      className="body-1 color-secondary p-20px w-90"
                    >
                      {bodyItem}
                    </span>
                  );
                })}
              </Block>
            );
          })}
        </WindoW>
        <Divider
          border
          backgroundColor="background-primary"
          color="color-secondary"
        >
          <h1 className="headline-4 cursive">Getting To Know Us</h1>
        </Divider>
        <WindoW
          column
          backgroundUrl="https://firebasestorage.googleapis.com/v0/b/mariaspizza.appspot.com/o/marias-back.png?alt=media&token=e3c66a2a-3be8-44a7-a85a-b2b9f25bbe4c"
        >
          <Flex row>
            <Animator
              inRef={aboutBlock}
              scrolled={scrolled}
              animation="a-wrapper--left"
              maxHeight="maxh-900px"
              maxWidth="maxw-600px"
            >
              <Block column type="info-card" full>
                <h4 className="headline-4 color-secondary p-20px">
                  The Passion for Pizza
                </h4>
                <p className="body-1 color-secondary p-20px">
                  Welcome to our family! For over 40 years Maria’s Pizza has
                  been serving pizza and great food to Connecticut. It all
                  started in the little town of Jewett City and over the years,
                  the family has served Colchester, Willimantic and Plainfeild
                  making friends family along the way. Stop in for a bite to eat
                  and experience not only the amazing food but the family
                  atmosphere at Maria’s. Ted, Maria, Nasoula or Dimitri are
                  always here to say hello and greet you, we can’t wait to see
                  you!
                </p>
              </Block>
            </Animator>
            <Animator
              inRef={aboutPicture}
              scrolled={scrolled}
              animation="a-wrapper--right"
              maxHeight="maxh-600px"
              maxWidth="maxw-550px"
            >
              <img
                className="maxw-650px  w-90"
                src="https://firebasestorage.googleapis.com/v0/b/mariaspizza.appspot.com/o/476543-Group%20Picture.jpg?alt=media&token=21af5153-fc4a-4767-b86c-f33f53042fc7"
              />
            </Animator>
          </Flex>
          <div className="flex row align-center wrap justify-center">
            {/* {gallery.map((img, index) => {
              if (index < 10) {
                return <img key={img} className="gallery__image" src={img} />;
              }
            })} */}
          </div>
        </WindoW>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  updates: state.firebase.updates,
  specials: state.firebase.specials,
  phone: state.init.phone,
  gallery: state.firebase.images[2].images,
});

export default connect(mapStateToProps)(Home);
