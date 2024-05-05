import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ENodeEnv } from './core/enum';

async function start() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  const config = new DocumentBuilder().setTitle('NESTJS COURSE').build();

  const NODE_ENV = configService.get('NODE_ENV');

  if (NODE_ENV === ENodeEnv.DEVELOPMENT) {
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/docs', app, document);
  }

  const PORT = configService.get('PORT') ?? 5000;

  app.setGlobalPrefix('/api');

  await app.listen(PORT, () => console.log(`Server started on ${PORT} port`));
}

start();
