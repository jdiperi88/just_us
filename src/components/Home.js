import React, {Component} from 'react';
import Header from './Header';
class Home extends Component {
    render(){
        let {
            navIsOpen, 
            active,
            openNav, 
            closeNav
        } = this.props
        return(
                <div className='main_background'>
                    <Header
                        navIsOpen={navIsOpen}
                        active={active}
                        openNav={openNav}
                        closeNav={closeNav}
                    />
                </div>
                
        )
    } 
}


export default Home;