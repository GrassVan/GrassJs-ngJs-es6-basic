import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.config';
import home from './app/components/home';

angular.module('app', [uirouter, home])
  .config(routing);
  // .config(function($stateProvider) {
  //   var helloState = {
  //     name: 'hello',
  //     url: '/hello',
  //     template: '<h3>hello world!</h3>'
  //   }
    
  //   var aboutState = {
  //     name: 'about',
  //     url: '/about',
  //     template: '<h3>Its the UI-Router hello world app!</h3>'
  //   }
    
  //   $stateProvider.state(helloState);
  //   $stateProvider.state(aboutState);
  // });


