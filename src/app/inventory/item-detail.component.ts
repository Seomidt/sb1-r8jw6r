import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';
import { InventoryService } from './inventory.service';
import { InventoryItem } from './inventory.model';

@Component({
  selector: 'ns-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  item: InventoryItem;

  constructor(
    private inventoryService: InventoryService,
    private route: ActivatedRoute,
    public routerExtensions: RouterExtensions
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.item = this.inventoryService.getItem(id);
  }

  onToggleStatus(): void {
    this.inventoryService.toggleItemStatus(this.item.id);
    this.item = this.inventoryService.getItem(this.item.id);
  }

  onSave(): void {
    this.inventoryService.updateItem(this.item);
    this.routerExtensions.back();
  }

  onDelete(): void {
    this.inventoryService.removeItem(this.item.id);
    this.routerExtensions.back();
  }
}