import { Injectable } from '@angular/core';
import { InventoryItem } from './inventory.model';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  private items: InventoryItem[] = [
    { id: '1', name: 'Wrench Set', description: 'Metric wrench set', status: 'in-car', quantity: 1 },
    { id: '2', name: 'Screwdriver Set', description: 'Phillips and flathead', status: 'in-car', quantity: 1 },
    { id: '3', name: 'Jack', description: 'Hydraulic floor jack', status: 'out-of-car', quantity: 1 },
    { id: '4', name: 'Oil Filter', description: 'For oil changes', status: 'in-car', quantity: 5 },
    { id: '5', name: 'Brake Pads', description: 'Front brake pads', status: 'out-of-car', quantity: 2 },
  ];

  getItems(): InventoryItem[] {
    return this.items;
  }

  getItem(id: string): InventoryItem | undefined {
    return this.items.find(item => item.id === id);
  }

  addItem(item: InventoryItem): void {
    this.items.push(item);
  }

  updateItem(updatedItem: InventoryItem): void {
    const index = this.items.findIndex(item => item.id === updatedItem.id);
    if (index !== -1) {
      this.items[index] = updatedItem;
    }
  }

  removeItem(id: string): void {
    this.items = this.items.filter(item => item.id !== id);
  }

  toggleItemStatus(id: string): void {
    const item = this.getItem(id);
    if (item) {
      item.status = item.status === 'in-car' ? 'out-of-car' : 'in-car';
    }
  }
}