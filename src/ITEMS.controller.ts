import { Body, Controller, Get, Post } from '@nestjs/common'
import { ApiOkResponse, ApiProperty } from '@nestjs/swagger'
import { CreateItemService } from './create-item.service'

class Item {
  @ApiProperty()
  id: number

  @ApiProperty()
  type: string
}

class ItemsResponse {
  @ApiProperty({
    isArray: true,
    type: Item,
  })
  items: Item[]
}

class CreateItemRequest {
  @ApiProperty()
  type: string
}

class CreateItemResponse {
  @ApiProperty()
  newItemId: number
}

@Controller('items')
export class ItemController {
  constructor(private readonly createItemService: CreateItemService) { }

  @Post()
  @ApiOkResponse({
    description: 'Created Item ID',
    type: CreateItemResponse,
  })
  create(@Body() { type }: CreateItemRequest) {
    return this.createItemService.createItem(type)
  }

  @Get()
  @ApiOkResponse({
    description: 'All created items',
    type: ItemsResponse,
  })
  getAll(): ItemsResponse {
    return {
      items: this.createItemService.getItems(),
    }
  }
}
