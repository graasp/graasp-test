import { Actor, ItemMembershipTaskManager, ItemMembership, Task } from 'graasp';

export default class TaskManager implements ItemMembershipTaskManager {
  getCreateTaskName(): string {
    return 'CreateTaskName';
  }
  getGetTaskName(): string {
    return 'GetTaskName';
  }
  getUpdateTaskName(): string {
    return 'UpdateTaskName';
  }
  getDeleteTaskName(): string {
    return 'DeleteTaskName';
  }
  getGetOfItemTaskName(): string {
    return 'GetOfItemTaskName';
  }

  createCreateTask(
    actor: Actor,
    data: Partial<ItemMembership>,
  ): Task<Actor, ItemMembership> {
    throw new Error('Method createCreateTask not implemented.');
  }
  createCreateTaskSequence(
    actor: Actor,
    object: Partial<ItemMembership>,
    extra?: unknown,
  ): Task<Actor, unknown>[] {
    throw new Error('Method createCreateTaskSequence not implemented.');
  }
  createGetTask(actor: Actor, objectId: string): Task<Actor, ItemMembership> {
    throw new Error('Method createGetTask not implemented.');
  }
  createUpdateTaskSequence(
    actor: Actor,
    objectId: string,
    object: Partial<ItemMembership>,
  ): Task<Actor, unknown>[] {
    throw new Error('Method createUpdateTaskSequence not implemented.');
  }
  createDeleteTaskSequence(
    actor: Actor,
    objectId: string,
    extra?: unknown,
  ): Task<Actor, unknown>[] {
    throw new Error('Method createDeleteTaskSequence not implemented.');
  }

  createGetOfItemTaskSequence(
    actor: Actor,
    itemId: string,
  ): Task<Actor, unknown>[] {
    throw new Error('Method createGetOfItemTaskSequence not implemented.');
  }
  createDeleteAllOnAndBelowItemTaskSequence(
    actor: Actor,
    itemId: string,
  ): Task<Actor, unknown>[] {
    throw new Error(
      'Method createDeleteAllOnAndBelowItemTaskSequence not implemented.',
    );
  }
  createGetMemberItemMembershipTask(actor: Actor): Task<Actor, ItemMembership> {
    throw new Error(
      'Method createGetMemberItemMembershipTask not implemented.',
    );
  }
}
