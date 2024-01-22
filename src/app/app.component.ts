import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgChartsModule } from 'ng2-charts';
import {NavComponent} from './nav/nav.component'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgChartsModule,NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'myproj';
}
