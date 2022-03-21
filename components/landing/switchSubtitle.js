// import React, { Component } from "react";
// import Subtitle1 from './subtitle-1'
// import Subtitle2 from './subtitle-2'

// class SwitchSubtitle extends Component {
//     constructor(...args) {
//       super(...args);
//       this.state = {
//         // stitles: [<Subtitle1 key="0"/>, <Subtitle2 key="1"/>],
//         stitles: [Subtitle1, Subtitle2],
//         index: 0
//       };
//     }
  
//     componentDidMount() {
//       this.timer = setInterval(() => {
//         this.setState({index: this.state.index + 1})
//       }, 3500)
//     }
  
//     render() {
//       const { index, stitles } = this.state;
//       // const { index } = this.state;
//       const Cmp = stitles[index%2];
//       return (
//         <p><Cmp/></p>
//       )


//       // let Out;
//       // if (index%2 == 0 ) {
//       //   Out = <p><Subtitle2/></p>
//       // } else {
//       //   Out = <p><Subtitle1/></p>
//       // }
//       // return(
//       //   <Out/>
//       // )


//       // return(
//       // // <p>{stitles[index % 2]}</p>
//       // <p key={index}>{stitles[index % 2]}</p>
//       // );
//     }
// }

// export default SwitchSubtitle