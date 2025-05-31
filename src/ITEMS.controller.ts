import { Body, Controller, Get, Post } from '@nestjs/common'
import { ApiOkResponse, ApiProperty } from '@nestjs/swagger'
import { RequestItemService } from './request-item.service'

class RequestItemRequest {
  @ApiProperty()
  description: string
}

class RequestItemResponse {
  @ApiProperty()
  newDescriptionId: number
}

@Controller('/api/request-item/requests/me')
export class ItemController {
  constructor(private readonly requestItemService: RequestItemService) { }

  @Post()
  @ApiOkResponse({ type: RequestItemResponse })
  create(@Body() { description }: RequestItemRequest) {
    return this.requestItemService.createItem(description)
  }

  @Get()
  getAll() {
    return this.requestItemService.getItems()
  }
}