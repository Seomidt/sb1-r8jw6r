import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { InventoryService } from '../inventory/inventory.service';

@Component({
  selector: 'ns-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  totalItems: number;
  inCarItems: number;
  outOfCarItems: number;

  constructor(
    private inventoryService: InventoryService,
    private routerExtensions: RouterExtensions
  ) {}

  ngOnInit() {
    this.updateDashboard();
  }

  updateDashboard() {
    const items = this.inventoryService.getItems();
    this.totalItems = items.length;
    this.inCarItems = items.filter(item => item.status === 'in-car').length;
    this.outOfCarItems = items.filter(item => item.status === 'out-of-car').length;
  }

  goToInventory() {
    this.routerExtensions.navigate(['/inventory']);
  }

  goToScanner() {
    this.routerExtensions.navigate(['/scanner']);
  }
}