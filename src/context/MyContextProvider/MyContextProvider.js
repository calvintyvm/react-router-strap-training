import React, { Component } from "react";

export const MyContext = React.createContext();

class MyContextProvider extends Component {
  state = {
    showOther: false
  };
  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          showTrue: () => this.setState({ showOther: true }),
          showFalse: () => this.setState({ showOther: false })
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyContextProvider;
