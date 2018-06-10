import React, {Component} from 'react';
import {Link} from 'react-router-dom'
class Header extends Component {


    render(){
        let {
            navIsOpen, 
            active,openNav, 
            closeNav
        } = this.props
        return(
                <header className="navbar">
                    <div className="date">
                        <h2>March 30th, 2018 </h2>
                    </div>
                    <div className="logobox">
                        <h1>Joey & Saida </h1>
                    </div>
                    {/* <div className="row menu-box">
                        <div className="menu-button"></div>
                    </div> */}
                <div className='test'>
                    <div className={navIsOpen} id='nav-icon' 
                        onClick={()=>{
                            openNav();
                        }} >
                        <div id='list-lines'>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div className={'nav-menu ' + active}>
                        <Link  to="/"><li onClick={()=>closeNav()} >Home</li></Link>
                        <Link  to="/photos"><li onClick={()=>closeNav()} >Photos</li></Link>
                    </div>
                    {/* <div className='dropdown-overlay'>
                    </div> */}
                </div>
                </header>
                
        )
    } 
}



export default Header;