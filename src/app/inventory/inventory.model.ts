export interface InventoryItem {
  id: string;
  name: string;
  description: string;
  status: 'in-car' | 'out-of-car';
  quantity: number;
}