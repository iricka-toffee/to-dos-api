import { Module } from '@nestjs/common';
import { RequestItemController } from './request-item.controller';

@Module({
  controllers: [RequestItemController],
})
export class RequestItemModule {}