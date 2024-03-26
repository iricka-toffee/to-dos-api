import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { ToDosService } from './to-dos.service'

@Module({
  imports: [],
  controllers: [AppController],
  providers: [ToDosService],
})
// eslint-disable-next-line prettier/prettier
export class AppModule { }
