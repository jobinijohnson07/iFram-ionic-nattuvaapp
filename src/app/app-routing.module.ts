import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'mycart',
    loadChildren: () => import('./pages/list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'wishlist',
    loadChildren: () => import('./pages/wishlist/wishlist.module').then(m => m.WishlistPageModule)
  },
  {
    path: 'forward-contracts',
    loadChildren: () => import('./pages/forward-contracts/forward-contracts.module').then(m => m.ForwardContractsPageModule)
  },
  {
    path: 'my-ratings',
    loadChildren: () => import('./pages/my-ratings/my-ratings.module').then(m => m.MyRatingsPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./pages/history/history.module').then(m => m.HistoryPageModule)
  },
  {
    path: 'sell',
    loadChildren: () => import('./pages/sell/sell.module').then(m => m.SellPageModule)
  },
  {
    path: 'apply-for-loan',
    loadChildren: () => import('./pages/apply-for-loan/apply-for-loan.module').then(m => m.ApplyForLoanPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsPageModule)
  },
  {
    path: 'preview-farm',
    loadChildren: () => import('./pages/preview-farm/preview-farm.module').then(m => m.PreviewFarmPageModule)
  },
  {
    path: 'preview-wheat',
    loadChildren: () => import('./pages/preview-wheat/preview-wheat.module').then(m => m.PreviewWheatPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./pages/notifications/notifications.module').then(m => m.NotificationsPageModule)
  },
  // s
  { path: 'order',
   loadChildren: () => import('./pages/order-product/order-product.module').then(m=> m.OrderProductPageModule)
   },
  { path: 'preview-delight',
   loadChildren: () => import('./pages/preview-delight/preview-delight.module').then(m=>m.PreviewDelightPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
