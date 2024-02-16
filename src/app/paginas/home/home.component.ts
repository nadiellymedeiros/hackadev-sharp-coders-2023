import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentHomeComponent } from "./content-home/content-home.component";
import { HeaderHomeComponent } from "./header-home/header-home.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CommonModule, ContentHomeComponent, HeaderHomeComponent]
})
export class HomeComponent {

}
