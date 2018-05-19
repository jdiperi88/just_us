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
                <div className="navbar">
                    <div className="row">
                    </div>
                    <div className="row logobox">
                    </div>
                    {/* <div className="row menu-box">
                        <div className="menu-button"></div>
                    </div> */}
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
                    </div>
                    {/* <div className='dropdown-overlay'>
                    </div> */}
                </div>
                
        )
    } 
}



export default Header;