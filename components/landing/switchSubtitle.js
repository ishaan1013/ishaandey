import React, { Component } from "react";
import Subtitle1 from './subtitle-1'
import Subtitle2 from './subtitle-2'

class SwitchSubtitle extends Component {
    constructor(...args) {
      super(...args);
      this.state = {
        stitles: [<Subtitle1/>, <Subtitle2/>],
        index: 0
      };
    }
  
    componentDidMount() {
      this.timer = setInterval(() => {
        this.setState({index: this.state.index + 1})
      }, 3500)
    }
  
    render() {
      const { index, stitles } = this.state;
      return(
          <p>{stitles[index % 2]}</p>
      );
    }
}

export default SwitchSubtitle