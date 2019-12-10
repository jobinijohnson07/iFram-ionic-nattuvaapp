import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ForwardContractsPage } from './forward-contracts.page';

const routes: Routes = [
  {
    path: '',
    component: ForwardContractsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ForwardContractsPage]
})

export class ForwardContractsPageModule {}
