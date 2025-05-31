import { Injectable } from '@nestjs/common'

@Injectable()
export class RequestItemService {
  private descriptions: { id: number; type: string }[] = []
  private nextId = 1

  createItem(type: string) {
    const description = {
      id: this.nextId++,
      type,
    }

    this.descriptions.push(description)

    return {
      newItemId: description.id,
    }
  }

  getItems() {
    return this.descriptions
  }
}