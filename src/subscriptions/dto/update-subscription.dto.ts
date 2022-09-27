import { PartialType } from '@nestjs/mapped-types';
import { CreateSubscriptionsRequestDto } from './create-subscription.dto';

export class UpdateSubscriptionDto extends PartialType(CreateSubscriptionsRequestDto) {}
