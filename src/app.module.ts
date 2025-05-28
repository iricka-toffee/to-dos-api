import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { ToDosService } from './to-dos.service'
import { InventoryApiModule } from './inventory-api/inventory-api.module'

@Module({
  imports: [
    InventoryApiModule,
  ],
  controllers: [AppController],
  providers: [ToDosService],
})
// eslint-disable-next-line prettier/prettier
export class AppModule { }
