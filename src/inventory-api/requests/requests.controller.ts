import { Body, Controller, Post } from '@nestjs/common'

class NewRequestDto {
  type: string
}

@Controller('inventory-api/requests')
export class RequestsController {
  @Post('for-employee')
  create(@Body() body: NewRequestDto) {
    console.log('BODY:', body)
    if (!body || !body.type) {
      return { message: 'type is required' }
    }
    return {
      newRequestId: 1,
      message: 'success',
    }
  }
}
