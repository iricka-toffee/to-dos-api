import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { ToDosService } from './to-dos.service'
import { ItemController } from './ITEMS.controller'
import { CreateItemService } from './create-item.service'

@Module({
  imports: [],
  controllers: [AppController, ItemController],
  providers: [ToDosService, CreateItemService],
})
// eslint-disable-next-line prettier/prettier
export class AppModule { }
