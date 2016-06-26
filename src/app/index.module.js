/* global moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { PersonController } from './person/person.controller';
import { Swapi } from '../app/components/swapi/swapi.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';

angular.module('swapi', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'ui.bootstrap', 'toastr', 'angular-inview'])
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('Swapi', Swapi)
  .controller('MainController', MainController)
  .controller('PersonController', PersonController)
  .directive('acmeNavbar', NavbarDirective);
