import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Subscription {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * 구독할 이벤트의 토픽
   * @type {string[]}
   */
  @Column()
  topics: string[];

  /**
   * 이벤트를 구독할 스마트 컨트렉트의 주소
   * @type {string}
   */
  @Column()
  contractAddress: string;

  /**
   * @description 구독 생성일시
   * - 서버에서는 Date 객체로 다루지만 응답은 string 으로 내려준다
   * @type {Date}
   */
  @CreateDateColumn()
  createdAt: Date;

  /**
   * @description 구독 최종 수정일시
   * - 서버에서는 Date 객체로 다루지만 응답은 string 으로 내려준다
   * @type {Date}
   */
  @UpdateDateColumn()
  updatedAt: Date;
}
