import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { FlightSearchComponent } from "./flight-search.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule
    ],
    declarations: [
        FlightSearchComponent
    ],
    exports: [
        FlightSearchComponent
    ]
})
export class FlightSearchFeatureModule {

}