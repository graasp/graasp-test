// @ts-nocheck
// this mock task allows us to create a fake test to be created
// this is usually never run
// we disable the check because actor (and other props) is never defined
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
  result: E;
  _result: E;

  constructor(result?) {
    this.result = result;
    this.getResult = () => result;
    this.getInput = () => result;
  }

  async run(): Promise<void> {
    this.status = TaskStatus.OK;
  }
}
