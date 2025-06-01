import { Body, Controller, Post } from '@nestjs/common'

class NewRequestDto {
  maxPrice: number
}

@Controller('inventory-api/requests')
export class RequestsController {
  @Post('for-manager')
  create(@Body() body: NewRequestDto) {
    console.log('BODY:', body)
    if (!body || !body.maxPrice) {
      return { message: 'type is required' }
    }
    return {
      newRequestId: 1,
      message: 'success',
    }
  }
}