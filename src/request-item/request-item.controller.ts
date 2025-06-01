import { Controller, Post, Body } from '@nestjs/common';

@Controller('api/request-item/requests')
export class RequestItemController {
  @Post('for-manager')
  createForManager(@Body() dto: any) {
    return {
      message: 'Заявка успешно создана',
      received: dto,
    };
  }
}
