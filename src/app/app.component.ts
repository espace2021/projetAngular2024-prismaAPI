import { Component, afterNextRender, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgChartsModule } from 'ng2-charts';
import {NavComponent} from './nav/nav.component';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgChartsModule,NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'myproj';

  constructor(@Inject(PLATFORM_ID) platformId: Object){

  console.log(this.title);
  
  afterNextRender(() => {
    console.log('Browser');
  });

   console.log(isPlatformBrowser(platformId));
  }
}
