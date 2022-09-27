import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { SubscriptionsService } from './subscriptions.service';
import { CreateSubscriptionsRequestDto } from './dto';

@Controller('subscriptions')
export class SubscriptionsController {
  constructor(private readonly subscriptionsService: SubscriptionsService) {}

  /**
   * @description 구독 추가
   * @returns {string}
   * @param createSubscriptionsRequestDto
   */
  @Post()
  create(@Body() createSubscriptionsRequestDto: CreateSubscriptionsRequestDto) {
    return this.subscriptionsService.create(createSubscriptionsRequestDto);
  }

  /**
   * @description 구독 목록 조회
   * @returns {string}
   */
  @Get()
  findAll() {
    return this.subscriptionsService.findAll();
  }

  /**
   * @description 구독 정보 조회
   * @returns {string}
   * @param subscriptionId
   */
  @Get(':subscription-id')
  findOne(@Param('subscription-id') subscriptionId: string) {
    return this.subscriptionsService.findOne(+subscriptionId);
  }

  /**
   * @description 구독한 이벤트 로그 조회 API
   * pagination 구현
   * /subscriptions/:subscription-id/logs?sort=desc&start=1660060510323&end=&offset=0&limit=2
   * /subscriptions/:subscription-id/log
   * @param {string} subscriptionId
   * @returns {string}
   */
  @Get(':subscription-id/')
  findOnesEventLogs(@Param('subscription-id') subscriptionId: string) {
    return this.subscriptionsService.findOne(+subscriptionId);
  }

  /**
   * @description 구독 삭제
   * @returns {string}
   * @param subscriptionId
   */
  @Delete(':subscription-id')
  remove(@Param('subscription-id') subscriptionId: string) {
    return this.subscriptionsService.remove(+subscriptionId);
  }
}
