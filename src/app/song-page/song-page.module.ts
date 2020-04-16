import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SongPagePageRoutingModule } from './song-page-routing.module';

import { SongPagePage } from './song-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SongPagePageRoutingModule
  ],
  declarations: [SongPagePage]
})
export class SongPagePageModule {}
