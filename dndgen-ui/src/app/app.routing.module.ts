import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MonsterComponent } from './monster/monster.component';
import { AddMonsterComponent } from './add-monster/add-monster.component';

const routes: Routes = [
  { path: 'monsters', component: MonsterComponent },
  { path: 'addMonster', component: AddMonsterComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }