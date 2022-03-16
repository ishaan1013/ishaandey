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
        this.setState(({stitles, index}) => {
          index = (index + 1) % stitles.length
          return {
            index
          }
        })
      }, 3500)
    }
  
    render() {
      const { index, stitles } = this.state;
      return(
          <p>{stitles[index]}</p>
      );
    }
}

export default SwitchSubtitle