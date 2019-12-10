import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ApplyForLoanPage } from './apply-for-loan.page';

const routes: Routes = [
  {
    path: '',
    component: ApplyForLoanPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ApplyForLoanPage]
})
export class ApplyForLoanPageModule {}
