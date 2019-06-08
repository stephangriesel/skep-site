import React, { Component } from 'react'
import '../css/Header.css';
import Navbar from '../components/Navbar'

class Header extends Component {
  state = {
    showMenu: false
  }

  toggleMenuHandler = () => {
    const doesShow = this.state.showMenu;
    this.setState({ showMenu: !doesShow });
  }
  
  render() {
    return (
      <Navbar />
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
