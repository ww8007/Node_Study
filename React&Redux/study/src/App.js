import React from "react";

class Fast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: "javscript",
      date: new Date(),
    };
  }
  render() {
    const { lang, date } = this.state;
    return <div>{(lang, date)}</div>;
  }
}

// Stateless : 상태가 없는
// State : 상태 State Class
function App() {}

export default App;
