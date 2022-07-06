import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BirdsModule } from './birds/birds.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/'), BirdsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
