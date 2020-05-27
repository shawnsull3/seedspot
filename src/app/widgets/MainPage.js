import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import CompanyProfile from './CompanyProfile';
import Investors from './Investors';
import Tools from './Tools';
import FAQs from './FAQs';
import NavigationMenu from '../NavigationMenu';
import '../../styles/App.css';
import '../../styles/MainPage.css';

const MainPage = () => {
    return (
      <div className='container'>
        <div className='row full-height'>
          <div className='col-3'>
            <NavigationMenu />  
          </div>
          <div className='col-9 main'>
            <Switch>
              <Route path='/main/profile' component={CompanyProfile} />
              <Route path='/main/investors' component={Investors} />
              <Route path='/main/tools' component={Tools} />
              <Route path='/main/faqs' component={FAQs} />
            </Switch>
          </div>
        </div>
      </div>
    )
}

export default MainPage;
