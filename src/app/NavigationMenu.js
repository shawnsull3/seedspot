import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import '../styles/NavigationMenu.css';

const NavigationMenu = () => {
    return (
        <div className='navMenu'>
            <div>Menu</div>
            <div className='linkBox'>
              <Link to='/main/profile' style={{ textDecoration: 'none' }}>
                Company Profile
              </Link>
            </div>
            <div className='linkBox'>
              <Link to='/main/investors' style={{ textDecoration: 'none' }}>
                Investors
              </Link>
            </div>
            <div className='linkBox'>
              <Link to='/main/tools' style={{ textDecoration: 'none' }}>
                Tools
              </Link>
            </div>
            <div className='linkBox'>
              <Link to='/main/faqs' style={{ textDecoration: 'none' }}>
                FAQs
              </Link>
            </div>
        </div>
    )
}

export default withRouter(NavigationMenu);