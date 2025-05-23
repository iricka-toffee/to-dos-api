import { Injectable } from '@nestjs/common'

@Injectable()
export class CreateItemService {
  private items: { id: number; type: string }[] = []
  private nextId = 1

  createItem(type: string) {
    const item = {
      id: this.nextId++,
      type,
    }

    this.items.push(item)

    return {
      newItemId: item.id,
    }
  }

  getItems() {
    return this.items
  }
}
