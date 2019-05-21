import React, { Component } from 'react';
import { sendMessage } from '../store';
import { connect } from 'react-redux';
import { WindoW, Block, Flex } from '../sub-components/containers';

class Info extends Component {
  state = { name: '', email: '', message: '' };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.sendMessage(this.state);
  };

  render() {
    const { email, name, message } = this.state;
    return (
      <WindoW padding="py-50px" background="background-secondary">
        <Flex padding="py-50px" row space>
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

            <span className="body-1 color-secondary p-20px">
              We offer dine-in, carry outs as well as pizza parties and catering
              services. Get your piping hot pizza fresh from the oven! Give us a
              call at 860-267-8722 to place your order or enjoy at home. Or come
              visit us at the address below:
            </span>
          </Block>
          <Block
            column
            type="info-card"
            maxWidth="maxw-400px"
            height="h-500px"
            width="w-90"
            full
          >
            <h4 className="headline-4 color-secondary p-20px">Hours</h4>

            <span className="body-1 p-10px color-secondary">Mon: Closed</span>
            <span className="body-1 p-10px color-secondary">
              Tue - Wed: 11:00AM - 9:30 PM
            </span>

            <span className="body-1 p-10px color-secondary">
              Thur: 11:00AM - 10:00PM
            </span>
            <span className="body-1 p-10px color-secondary">
              Fri 7:00AM - 10:00PM
            </span>
            <span className="body-1 p-10px color-secondary">
              Sat - Sun: 7:00AM - 9:30PM
            </span>
          </Block>
        </Flex>
        <form
          onSubmit={this.handleSubmit}
          className="flex column align-center justify-center"
        >
          <input
            name="name"
            placeholder="Name"
            value={name}
            onChange={this.handleChange}
            className="textfield m-10px"
          />
          <input
            placeholder="Email"
            name="email"
            value={email}
            onChange={this.handleChange}
            className="textfield m-10px"
          />

          <textarea
            placeholder="Message"
            name="message"
            value={message}
            onChange={this.handleChange}
            className="textfield multi m-10px"
          />
          <button type="submit" className="button">
            Send Message
          </button>
        </form>
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
