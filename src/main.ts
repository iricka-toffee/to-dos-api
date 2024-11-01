import { NestFactory } from '@nestjs/core'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from './app.module'
import { version } from '../package.json'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.enableCors()

  const config = new DocumentBuilder()
    .setTitle('ToDos API')
    .setDescription('API to manage your ToDo items')
    .setVersion(version)
    .build()

  app.setGlobalPrefix('api/to-dos-api')

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api/to-dos-api/api', app, document)

  await app.listen(process.env.PORT || 5005)
}

bootstrap()
