import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ConfigService } from '../config';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

@Injectable()
export class SqlService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): Promise<TypeOrmModuleOptions> | TypeOrmModuleOptions {
    return {
      type: this.configService.get('DB_TYPE') as any,
      host: this.configService.get('DB_HOST'),
      port: parseInt(this.configService.get('DB_PORT')) || 3306,
      username: this.configService.get('DB_USERNAME'),
      password: this.configService.get('DB_PASSWORD'),
      database: this.configService.get('DB_NAME'),
      namingStrategy: new SnakeNamingStrategy(),
      entities: [__dirname + '/../**/**/*.entity{.ts,.js}'],
      timezone: this.configService.get('DB_TIMEZONE'),
      synchronize: this.configService.isEnv('development'),
      logging: this.configService.isEnv('development'),
    };
  }
}
