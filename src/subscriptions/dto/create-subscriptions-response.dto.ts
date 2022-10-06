export class CreateSubscriptionsRequestDto {
  /**
   * 구독할 이벤트의 토픽
   * @type {string[]}
   */
  topics: string[];

  /**
   * 이벤트를 구독할 스마트 컨트랙트의 주소
   * @type {string}
   */
  contractAddress: string;
}
