import { Body, Controller, Get, Post } from '@nestjs/common'
import { ApiOkResponse, ApiProperty } from '@nestjs/swagger'
import { CreateItemService } from './create-item.service'

class CreateItemRequest {
  @ApiProperty()
  type: string
}

class CreateItemResponse {
  @ApiProperty()
  newItemId: number
}

@Controller('create-item')
export class ItemController {
  constructor(private readonly createItemService: CreateItemService) { }

  @Post()
  @ApiOkResponse({ type: CreateItemResponse })
  create(@Body() { type }: CreateItemRequest) {
    return this.createItemService.createItem(type)
  }

  @Get()
  getAll() {
    return this.createItemService.getItems()
  }
}
