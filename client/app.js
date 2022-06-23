import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Navbar, Footer } from "./components";
import Routes from "./routes";
import { willReadDB, alertInteraction } from "./store";
import { Alert, Loader, Fab } from "./sub-components";

// const firestore = firebase.firestore();

class App extends Component {
  state = {
    mounted: false,
  };

  async componentDidMount() {
    await this.props.willReadDB("updates");
    await this.props.willReadDB("specials");
    await this.props.willReadDB("images");
    await this.props.willReadDB("specialsMenu");
    // this.props.alertInteraction(
    //   true,
    //   <div className="flex column align-center maxw-550px w-90 background-primary">
    //     <span className="body-1 color-secondary p-10px text-center w-90">
    //       Thank you for choosing MARIA'S PIZZA PALACE!
    //     </span>
    //     <span className="body-1 color-secondary p-10px text-center w-90">
    //       We will be CLOSED SATURDAY DAY 7/3 to MONDAY 7/26.
    //     </span>
    //     <span className="body-1 color-secondary p-10px text-center w-90">
    //       We will reopen TUESDAY 7/27 9am - 8pm.
    //     </span>
    //   </div>
    // );
    this.setState({ mounted: true });
  }
  render() {
    const { alertStatus, alertTemplate } = this.props;
    const { mounted } = this.state;

    return mounted ? (
      <div>
        {/* <Fab
          options={[
            {
              name: 'meeting_room',
              label: 'Opportunities',
              action: () => this.props.history.push('/holdings/opportunities')
            },
            {
              name: 'view_agenda',
              label: 'Developments',
              action: () => this.props.history.push('/holdings/development')
            },
            {
              name: 'location_city',
              label: 'Properties',
              action: () => this.props.history.push('/holdings/all-properties')
            },
            {
              name: 'arrow_upward',
              label: 'Back To Top',
              action: () => window.scrollTo(0, 0)
            }

          ]}
        /> */}
        <Alert
          open={alertStatus}
          template={alertTemplate}
          onClickCatcher={() => this.props.alertInteraction(false)}
        />
        <Navbar />
        <Routes />
        <Footer />
      </div>
    ) : (
      <Loader />
    );
  }
}

const mapStateToProps = (state) => ({
  menu: state,
  alertTemplate: state.util.alertTemplate,
  alertStatus: state.util.alertStatus,
});

const mapDispatchToProps = (dispatch) => ({
  willReadDB: (field) => dispatch(willReadDB(field)),
  alertInteraction: (status, template) =>
    dispatch(alertInteraction(status, template)),
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
