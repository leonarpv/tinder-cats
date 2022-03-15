import Uid from '../interfaces/uid';

export class Entity implements Uid {
  internalId: number;
  constructor() {
    this.internalId = this.generateId();
  }
  generateId(): number {
    return Math.floor(Math.random() * 1000000);
  }
}
