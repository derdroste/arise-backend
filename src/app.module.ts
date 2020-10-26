import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from "@nestjs/config";
import {TypeOrmModule} from "@nestjs/typeorm";
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
      TypeOrmModule.forRoot({
        type: 'postgres',
        host: process.env.DATABASE_URL,
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
        port: 25060,
        database: process.env.DATABASE,
        ssl: {
          rejectUnauthorized: false,
        },
        autoLoadEntities: true,
        synchronize: true
      }),
      UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
