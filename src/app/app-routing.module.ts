import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { DashboardComponent } from './dashboard/dashboard.component'
import { InventoryListComponent } from './inventory/inventory-list.component'
import { ItemDetailComponent } from './inventory/item-detail.component'
import { ScannerComponent } from './scanner/scanner.component'

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'inventory', component: InventoryListComponent },
  { path: 'item/:id', component: ItemDetailComponent },
  { path: 'scanner', component: ScannerComponent },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}