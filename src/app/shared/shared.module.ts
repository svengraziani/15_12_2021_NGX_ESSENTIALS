import { ModuleWithProviders, NgModule } from "@angular/core";
import { CityPipe } from "./pipes/city.pipe";



@NgModule({
    declarations: [
        CityPipe
    ],
    exports: [
        CityPipe
    ]
})
export class SharedModule {

    public static forRoot(): ModuleWithProviders<SharedModule> {

        return {
            ngModule: SharedModule,
            providers: [

            ]
        }
    }

}