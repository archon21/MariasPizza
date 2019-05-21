import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Block,
  WindoW,
  GalleryBlock,
  Flex,
  Divider,
  Animator
} from '../sub-components/containers';
import { Video, Fab, List, Table, Carousel } from '../sub-components';

class Home extends Component {
  state = {
    scrolled: 0
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

  handleScroll = e => {
    this.setState({ scrolled: window.pageYOffset });
  };

  render() {
    const { aboutBlock, aboutPicture, state, props } = this;
    const { updates } = props;
    const { scrolled } = state;

    return (
      <div style={{ overflowX: 'hidden' }} className="flex column align-center">
        <WindoW backgroundUrl="https://firebasestorage.googleapis.com/v0/b/mariaspizza.appspot.com/o/stock-counter.jpg?alt=media&token=ac0f9b82-9094-418c-9502-3195e1c0c6f7">
          <Carousel
            cover
            maxHeight="maxh-100vh"
            height="h-600px"
            width="w-70"
            items={[
              {
                primary: 'Pizza',
                secondary: '4.99',
                image:
                  'https://firebasestorage.googleapis.com/v0/b/hayesdevelopers.appspot.com/o/awards%2FGeneralAssembly1999.jpg?alt=media&token=4b1672b6-3c20-4478-bc86-40188c4d2ecd'
              }
            ]}
          />
        </WindoW>
        <Divider
          border
          backgroundColor="background-primary"
          color="color-secondary"
        >
          <h1 className="headline-4">About</h1>
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
              maxHeight="maxh-650px"
              maxWidth="maxw-600px"
            >
              <Block column type="info-card" full>
                <h4 className="headline-4 color-secondary p-20px">
                  The Passion for Pizza
                </h4>
                <p className="body-1 color-secondary p-20px">
                  For over 40 years Maria's Pizza in Colchester has been serving
                  up pizza and other great dishes to the community. We are a
                  family owned and operated buisness and plan to stay that way.
                  Stop in and say Hi and have a bite to eat. You will love the
                  food, the enviroment and are guaranteed to see someone you
                  know or at least make a new friend. We can't wait to see you
                  soon.
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
        </WindoW>
        <Divider
          border
          backgroundColor="background-primary"
          color="color-secondary"
        >
          <h1 className="headline-4">Updates</h1>
        </Divider>
        <WindoW
          row
          space
          backgroundUrl="https://firebasestorage.googleapis.com/v0/b/mariaspizza.appspot.com/o/marias-background.png?alt=media&token=af3eb9a9-1906-4873-a881-410d2bac3d20"
        >

            {updates.map(update => {
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
                  <h4 className="headline-4 color-secondary p-20px">
                    {update.title}
                  </h4>
                  {update.body.map(bodyItem => {
                    return (
                      <span
                        key={bodyItem}
                        className="body-1 color-secondary p-20px"
                      >
                        {bodyItem}
                      </span>
                    );
                  })}
                </Block>
              );
            })}

        </WindoW>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  updates: state.firebase.updates
});

export default connect(mapStateToProps)(Home);
