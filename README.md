# Ng10

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Methods for Singleton Service

```typescript
import { inject, Injectable, InjectFlags, ModuleWithProviders, NgModule, Optional, SkipSelf, Type } from "@angular/core";
import { CityPipe } from "../shared/pipes/city.pipe";


/**
 * Singleton even if lazy loaded
 * cons: if this get called inside a module it will be re-instanced :/
 */
@Injectable({providedIn: 'root'})
export class SingletonService {

}


/** 
 * Guarded Singleton  
*/
@Injectable({
    providedIn: 'root'
  })
  export class GuardedSingletonService {
    constructor(@Optional() @SkipSelf() parent?: GuardedSingletonService) {
      if (parent) {
        throw Error(
          `[GuardedSingletonService]: trying to create multiple instances,
          but this service should be a singleton.`
        );
      }
    }
  }


/**
 * Generic Guarded for Re-Usage
 */
 export class RootInjectorGuard {
    constructor(type: Type<any>) {
      const parent = inject(type, InjectFlags.Optional | InjectFlags.SkipSelf);
  
      if (parent) {
        throw Error(`[${type}]: trying to create multiple instances,
        but this service should be a singleton.`);
      }
    }
  }


  @Injectable({
    providedIn: 'root'
  })
  export class MySingletonService extends RootInjectorGuard {
    constructor() {
      super(MySingletonService);
    }
  }

/**
 * Module Scope
 */


@NgModule({
    declarations: [
        CityPipe
    ],
    exports: [
        CityPipe
    ]
})
export class SharedModule {
    /**
     *  by convention, Developers "trust" each other to call the "forRoot" only once
     */
    public static forRoot(): ModuleWithProviders<SharedModule> {

        return {
            ngModule: SharedModule,
            providers: [
                SingletonService
            ]
        }
    }

}
```
