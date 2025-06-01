import { Body, Controller, Get, Post } from '@nestjs/common'
import { ApiOkResponse, ApiProperty } from '@nestjs/swagger'
import { RequestFormService } from './request-item.service'

class RequestFormRequest {
  @ApiProperty()
  type: string

  @ApiProperty()
  maxPrice: number
}

class RequestFormResponse {
  @ApiProperty()
  newRequestId: number
}

@Controller('/api/request-item/requests/for-manager')
export class AppController {
  constructor(private readonly requestFormService: RequestFormService) {}

  @Post()
  @ApiOkResponse({ type: RequestFormResponse })
  create(@Body() { maxPrice }: RequestFormRequest) {
    return this.requestFormService.addRequest(maxPrice)
  }

  @Get()
  getAll() {
    return this.requestFormService.getRequests()
  }
}
