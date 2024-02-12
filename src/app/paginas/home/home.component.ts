import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentHomeComponent } from "./content-home/content-home.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CommonModule, ContentHomeComponent]
})
export class HomeComponent {

}
