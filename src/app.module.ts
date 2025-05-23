import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { ToDosService } from './to-dos.service'
import { ItemsController } from './ITEMS.controller'
import { CreateItemService } from './create-item.service'

@Module({
  imports: [],
  controllers: [AppController, ItemsController],
  providers: [ToDosService, CreateItemService],
})
// eslint-disable-next-line prettier/prettier
export class AppModule { }
