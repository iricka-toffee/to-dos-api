import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { RequestFormService } from './request-item.service'
import { RequestItemModule } from './request-item/request-item.module'

@Module({
  imports: [RequestItemModule],
  controllers: [AppController],
  providers: [RequestFormService],
})
export class AppModule {}
