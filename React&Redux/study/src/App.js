import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }
  // 랜더링 직후 호출되는 함수
  componentDidMount() {
    this.tick();
  }
  tick() {
    this.setState(
      {
        time: new Date(),
      },
      () => {
        console.log(this.state);
      }
    );
  }

  render() {
    const { time } = this.state;
    return <div>{time.date}</div>;
  }
}
export default App;
