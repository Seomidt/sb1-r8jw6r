import { Component } from '@angular/core';
import { BarcodeScanner } from '@nativescript/barcodescanner';
import { InventoryService } from '../inventory/inventory.service';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'ns-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css']
})
export class ScannerComponent {
  constructor(
    private barcodeScanner: BarcodeScanner,
    private inventoryService: InventoryService,
    private routerExtensions: RouterExtensions
  ) {}

  onScan() {
    this.barcodeScanner.scan({
      formats: "QR_CODE, EAN_13",
      showFlipCameraButton: true,
      preferFrontCamera: false,
      showTorchButton: true,
      beepOnScan: true,
      torchOn: false,
      resultDisplayDuration: 500,
    }).then((result) => {
      console.log("Scanner result: " + result.text + " (format: " + result.format + ")");
      this.processScannedItem(result.text);
    }, (errorMessage) => {
      console.log("Error when scanning: " + errorMessage);
    });
  }

  private processScannedItem(barcode: string) {
    const item = this.inventoryService.getItem(barcode);
    if (item) {
      this.inventoryService.toggleItemStatus(barcode);
      alert(`Item "${item.name}" status changed to ${item.status}`);
    } else {
      alert("Item not found in inventory. Please add it manually.");
    }
  }

  onBack() {
    this.routerExtensions.back();
  }
}