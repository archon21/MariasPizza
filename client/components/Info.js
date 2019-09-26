import React, { Component } from 'react';
import { sendMessage } from '../store';
import { connect } from 'react-redux';
import { WindoW, Block, Flex } from '../sub-components/containers';
import Hours from '../sub-components/unique/Hours';
import Blurb from '../sub-components/unique/Blurb';

class Info extends Component {
  render() {
    return (
      <WindoW backgroundUrl="https://firebasestorage.googleapis.com/v0/b/mariaspizza.appspot.com/o/marias-back.png?alt=media&token=e3c66a2a-3be8-44a7-a85a-b2b9f25bbe4c" column background="background-secondary">
        <div className="flex row wrap align-center justify-center w-100 my-30px">
          <Block
            column
            type="info-card"
            maxWidth="maxw-400px"
            height="h-500px"
            width="w-90"
            full
          >
            <h4 className="headline-4 color-secondary p-20px">
              Marias's Pizza Palace
            </h4>
            <Blurb />
          </Block>
          <Block
            column
            type="info-card"
            maxWidth="maxw-400px"
            height="h-500px"
            width="w-90"
            full
          >
            <Hours />
          </Block>
        </div>
        <div className="flex row wrap align-center justify-center w-100 my-30px">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.96376616092!2d-72.41659738425795!3d41.5456063941341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e6413d6be6cb43%3A0x7ddc6879cdfbb59e!2sMaria&#39;s%20Pizza!5e1!3m2!1sen!2sus!4v1569513574593!5m2!1sen!2sus"
            className="info__map "
            frameBorder="0"
            // style="border:0;"
            allowFullScreen=""
          />
        </div>
      </WindoW>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  sendMessage: message => dispatch(sendMessage(message))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Info);
