import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../../styles/App.css';
import CompanyProfile from './CompanyProfile';
import Investors from './Investors';
import Tools from './Tools';
import FAQs from './FAQs';
import NavigationMenu from '../NavigationMenu';

const MainPage = () => {
    return (
      <div className='container h-100'>
        <div className='row'>
          <div className='col-2'>
            <NavigationMenu />  
          </div>
          <div className='col-10'>
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
