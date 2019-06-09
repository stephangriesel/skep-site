import React, { Component } from 'react'
import '../css/Header.css';
import Navbar from '../components/Navbar';
import MenuSide from '../components/MenuSide';
import Backdrop from '../components/Backdrop';

class Header extends Component {
  state = {
    showMenu: false
  }

  toggleClickHandler = () => {
    this.setState((prevState) => {
      return {showMenu: !prevState.showMenu};
    });
  };

  backdropClickHandler = () => {
    this.setState({showMenu: false});
  };

  render() {

    let backDrop;

    if(this.state.showMenu) {
      backDrop = <Backdrop click={this.backdropClickHandler}/>;
    }

    return (
      <div style={{ height: '100%' }}>
        <Navbar menuClickHandler={this.toggleClickHandler}/>
        <MenuSide show={this.state.showMenu}/>
        {backDrop}
      </div>
    )
  }
}
// class Header extends Component {
//   state = {
//     showMenu: false
//   }

//   toggleMenuHandler = () => {
//     const doesShow = this.state.showMenu;
//     this.setState({ showMenu: !doesShow });
//   }

//   render() {
//     return (
//       <header>
//         <div className="logo">
//           <img className="logo-img" src={logo} />
//         </div>
//         <img className="logo-img" src={logo} />
//         <div
//           className="burger-menu"
//           onClick={this.toggleMenuHandler}
//         >
//           <img className="burger-img" src={burgerMenuIcon} />
//         </div>
//         {
//           this.state.showMenu === true ?
//             <nav className="menu">
//               <ul>
//                 <li>WORK</li>
//                 <li>OFFICE</li>
//                 <li>SHOP</li>
//                 <li>CONTACT</li>
//               </ul>
//             </nav> : null
//         }

//       </header>
//     )
//   }
// }

export default Header;
