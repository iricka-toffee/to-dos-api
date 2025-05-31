import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { ToDosService } from './to-dos.service'
import { ItemController } from './ITEMS.controller'
import { RequestItemService } from './request-item.service'


@Module({
  imports: [],
  controllers: [AppController, ItemController],
  providers: [ToDosService, RequestItemService],
})
// eslint-disable-next-line prettier/prettier
export class AppModule { }
