import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common'
import { ApiOkResponse, ApiProperty, ApiQuery } from '@nestjs/swagger'
import { RequestFormService } from './request-item.service'

class Request {
  @ApiProperty()
  id: number

  @ApiProperty()
  maxPrice: number
}

class RequestsResponse {
  @ApiProperty({
    isArray: true,
    type: Request,
  })
  requests: Request[]
}

class NewRequestFormRequest {
  @ApiProperty()
  maxPrice: number
}

class NewRequestFormResponse {
  @ApiProperty({
    type: Number,
  })
  newRequestId: number
}

class CompleteRequestsRequest {
  @ApiProperty({
    isArray: true,
    type: Number,
  })
  requestIds: number[]
}

@Controller('request-item')
export class AppController {
  constructor(private readonly requestFormService: RequestFormService) {}

  @ApiOkResponse({
    description: 'Request items',
    type: RequestsResponse,
  })
  @Get()
  getRequests() {
    return {
      requests: this.requestFormService.getRequests(),
    }
  }

  @Post()
  @ApiOkResponse({
    description: 'Created Request ID',
    type: NewRequestFormResponse,
  })
  addRequest(@Body() { maxPrice }: NewRequestFormRequest) {
    const { newRequestId } = this.requestFormService.addRequest(
      maxPrice,
      )

    return {
      newRequestId,
    }
  }

  @Post('complete')
  completeRequests(@Body() { requestIds = [] }: CompleteRequestsRequest) {
    requestIds.forEach((requestId) =>
      this.requestFormService.addRequest( 
       requestId,
      ),
    )
  }

  @Delete()
  @ApiQuery({
    name: 'requestId',
    type: Number,
  })
  deleteRequest(@Query('requestId') requestId: number) {
    this.requestFormService.addRequest(
     requestId
    )
  }
}
