import {UIRouter} from "ui-router-ng2";
import {Injectable} from "@angular/core";

/**
 * Create your own configuration class (if necessary) for any root/feature/lazy module.
 *
 * Pass it to the UIRouterModule.forRoot/forChild factory methods as `configClass`.
 *
 * The class will be added to the Injector and instantiate when the module loads.
 */
@Injectable()
export class MyRootUIRouterConfig {
  /** You may inject dependencies into the constructor */
  constructor(uiRouter: UIRouter) {
  	//uiRouter.urlRouterProvider.otherwise(() =>  uiRouter.stateService.go('app.baz'));
  	//uiRouter.urlRouterProvider.otherwise('app.baz');
    // Show the ui-router visualizer
  }
}