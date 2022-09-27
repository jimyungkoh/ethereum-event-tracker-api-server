import { Injectable } from '@nestjs/common';
import { CreateSubscriptionsRequestDto, UpdateSubscriptionDto } from './dto';

@Injectable()
export class SubscriptionsService {
  create(createSubscriptionsRequestDto: CreateSubscriptionsRequestDto) {
    return 'This action adds a new subscription';
  }

  findAll() {
    return `This action returns all subscriptions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subscription`;
  }

  update(id: number, updateSubscriptionDto: UpdateSubscriptionDto) {
    return `This action updates a #${id} subscription`;
  }

  remove(id: number) {
    return `This action removes a #${id} subscription`;
  }
}
