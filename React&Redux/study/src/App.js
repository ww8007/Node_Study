import React from "react";

const Loading = () => <div>Loading</div>;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }
  comment() {
    const con = 1;
    const res = con > 0 ? true : false;
  }
  render() {
    const { loading } = this.state;

    return <>{loading && <Loading />}</>;
  }
}

export default App;
