import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

const NavigationMenu = () => {
    return (
        <div className='navMenu'>
            <div>Menu</div>
            <div>
              <Link to='/main/profile'>
                Company Profile
              </Link>
            </div>
            <div>
              <Link to='/main/investors'>
                Investors
              </Link>
            </div>
            <div>
              <Link to='/main/tools'>
                Tools
              </Link>
            </div>
            <div>
              <Link to='/main/faqs'>
                FAQs
              </Link>
            </div>
        </div>
    )
}

export default withRouter(NavigationMenu);