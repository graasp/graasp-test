import { Actor, Item, TaskStatus, Task } from 'graasp';

type InputType = unknown;

export default class MockTask implements Task<Actor, Item> {
  get name(): string {
    return 'name';
  }
  status = 'RUNNING' as TaskStatus;
  input: InputType;
  getInput: () => InputType;
  getResult: () => unknown;
  actor: Actor;
  result = null;
  _result = null;

  constructor(result?) {
    this.result = result;
    this.getResult = () => result;
    this.getInput = () => result;
  }

  async run(): Promise<void> {
    this.status = 'OK';
  }
}
