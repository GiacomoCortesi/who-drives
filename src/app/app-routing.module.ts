import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayComponent } from './play/play.component';
import { StatisticsComponent } from './statistics/statistics.component';

const routes: Routes = [
    {'path': 'play', 'component': PlayComponent}, 
    {'path': 'statistics', 'component': StatisticsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
