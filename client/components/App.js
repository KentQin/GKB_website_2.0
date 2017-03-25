// import React from 'react';
//
// class App extends React.Component {
//     render() {
//         return (
//             <h1>Hello from react!</h1>
//         );
//     }
// }
//
// export default App;

import React from 'react'
import Sidebar from 'react-sidebar';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        sidebarOpen: false
    }

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({sidebarOpen: open});
  }

  render() {
    var sidebarContent = <b>Sidebar content</b>;
    var styles = {
      root: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
      },
      sidebar: {
        zIndex: 2,
        position: 'absolute',
        top: 0,
        bottom: 0,
        transition: 'transform .3s ease-out',
        WebkitTransition: '-webkit-transform .3s ease-out',
        willChange: 'transform',
        overflowY: 'auto',
      },
      content: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'auto',
        transition: 'left .3s ease-out, right .3s ease-out',
      },
      overlay: {
        zIndex: 1,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0,
        visibility: 'hidden',
        transition: 'opacity .3s ease-out',
        backgroundColor: 'rgba(0,0,0,.3)',
      },
      dragHandle: {
        zIndex: 1,
        position: 'fixed',
        top: 0,
        bottom: 0,
      }
    }

    return (
      <Sidebar sidebar={sidebarContent}
               open={this.state.sidebarOpen}
               onSetOpen={this.onSetSidebarOpen}
               styles={styles}>
        <b>Main content</b>
      </Sidebar>
    );
  }
}

export default App;
