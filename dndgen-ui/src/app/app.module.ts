import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MonsterComponent } from './monster/monster.component';
import { AppRoutingModule } from './app.routing.module';
import { MonsterService } from './monster-service/monster.service';
import { HttpClientModule } from "@angular/common/http";
import { AddMonsterComponent } from './add-monster/add-monster.component';
import { MonsterViewComponent } from './monster-view/monster-view.component';
import { BattleSceneComponent } from './battle-scene/battle-scene.component';
import { SceneService } from './scene-service/scene-service.service';

@NgModule({
  declarations: [
    AppComponent,
    MonsterComponent,
    AddMonsterComponent,
    MonsterViewComponent,
    BattleSceneComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MonsterService, SceneService],
  bootstrap: [AppComponent]
})
export class AppModule { }