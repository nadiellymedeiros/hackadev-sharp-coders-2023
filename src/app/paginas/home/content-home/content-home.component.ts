import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content-home',
  standalone: true,
  imports: [],
  templateUrl: './content-home.component.html',
  styleUrl: './content-home.component.css'
})
export class ContentHomeComponent {

  constructor(private router:Router){}

}
