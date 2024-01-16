import { Component } from '@angular/core';
import { SliderComponent } from "../slider/slider.component";

@Component({
    selector: 'app-contact',
    standalone: true,
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css',
    imports: [SliderComponent]
})
export class ContactComponent {

}
