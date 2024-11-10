import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { InventoryService } from './inventory.service';
import { InventoryItem } from './inventory.model';

@Component({
  selector: 'ns-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit {
  items: InventoryItem[];
  searchTerm: string = '';

  constructor(
    private inventoryService: InventoryService,
    public routerExtensions: RouterExtensions
  ) {}

  ngOnInit() {
    this.items = this.inventoryService.getItems();
  }

  onItemTap(item: InventoryItem) {
    this.routerExtensions.navigate(['/item', item.id]);
  }

  onSearch() {
    this.items = this.inventoryService.getItems().filter(item =>
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  getStatusColor(status: string): string {
    return status === 'in-car' ? 'text-green-500' : 'text-yellow-500';
  }
}