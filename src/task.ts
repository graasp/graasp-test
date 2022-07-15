import { Actor, Task, TaskStatus } from '@graasp/sdk';

type InputType = unknown;

export default class MockTask<E = unknown> implements Task<Actor, E> {
  get name(): string {
    return 'name';
  }
  status = TaskStatus.RUNNING;
  input: InputType;
  getInput: () => InputType;
  getResult: () => E;
  actor: Actor;
  result: E = null;
  _result: E = null;

  constructor(result?) {
    this.result = result;
    this.getResult = () => result;
    this.getInput = () => result;
  }

  async run(): Promise<void> {
    this.status = TaskStatus.OK;
  }
}
