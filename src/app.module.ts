import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [SubscriptionsModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
