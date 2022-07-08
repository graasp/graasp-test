import { Actor, Item, Task, TaskStatus } from '@graasp/sdk';

type InputType = unknown;

export default class MockTask implements Task<Actor, Item> {
  get name(): string {
    return 'name';
  }
  status = TaskStatus.RUNNING;
  input: InputType;
  getInput: () => InputType;
  getResult: () => unknown;
  actor: Actor;
  result;
  _result;

  constructor(result?) {
    this.result = result;
    this.getResult = () => result;
    this.getInput = () => result;
  }

  async run(): Promise<void> {
    this.status = TaskStatus.OK;
  }
}
