export class CreateSubscriptionsRequestDto {
  /**
   * 구독 id (:subscription-id)
   * @type {number}
   */
  id: number;

  /**
   * 구독한 이벤트의 토픽
   * @type {string[]}
   */
  topics: string[];

  /**
   * 이벤트를 구독한 스마트 컨트랙트의 주소
   * @type {string}
   */
  contractAddress: string;

  /**
   * 구독 생성일시. 서버에서는 Date 객체로 다루지만 응답은 string 으로 내려준다
   * @type {Date}
   */
  createdAt: Date;

  /**
   * 구독 최종 수정일시. 서버에서는 Date 객체로 다루지만 응답은 string 으로 내려준다
   * @type {Date}
   */
  updatedAt: Date;
}
