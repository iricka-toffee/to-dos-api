import { NestFactory } from '@nestjs/core'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from './app.module'
import { version } from '../package.json'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.enableCors()
  app.setGlobalPrefix('api')

  const config = new DocumentBuilder()
    .setTitle('ToDos API')
    .setDescription('API to manage your ToDo items')
    .setVersion(version)
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api/to-dos-api/api', app, document)

  await app.listen(3000, '0.0.0.0') // <-- убедись, что тут порт 3000 и host 0.0.0.0
}

bootstrap()
