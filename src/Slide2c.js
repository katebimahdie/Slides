import React from "react";
const nam = "";
export default class Slide2c extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pic: `https://picsum.photos/seed/39/300`,
      num: 1
    };
  }

  componentDidMount() {
    var number = 1;

    this.setIntervalId = setInterval(() => {
      number = number + 1;

      this.setState({
        pic: `https://picsum.photos/seed/${number}/300`,
        num: this.state.num + 1
      });
    }, 5000);
  }

  render() {
    return (
      <div class="container">
        <img src={this.state.pic} />
        <h2>Picture:){this.state.num}</h2>
      </div>
    );
  }
}
