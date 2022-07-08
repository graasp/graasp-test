import {
  Actor,
  Item,
  ItemMembership,
  ItemMembershipTaskManager,
  Task,
} from '@graasp/sdk';

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
    _actor: Actor,
    _data: Partial<ItemMembership>,
  ): Task<Actor, ItemMembership> {
    throw new Error('Method createCreateTask not implemented.');
  }
  createCreateTaskSequence(
    _actor: Actor,
    _object: Partial<ItemMembership>,
    _extra?: unknown,
  ): Task<Actor, unknown>[] {
    throw new Error('Method createCreateTaskSequence not implemented.');
  }
  createGetTask(_actor: Actor, _objectId: string): Task<Actor, ItemMembership> {
    throw new Error('Method createGetTask not implemented.');
  }
  createUpdateTaskSequence(
    _actor: Actor,
    _objectId: string,
    _object: Partial<ItemMembership>,
  ): Task<Actor, unknown>[] {
    throw new Error('Method createUpdateTaskSequence not implemented.');
  }
  createDeleteTaskSequence(
    __actor: Actor,
    _objectId: string,
    _extra?: unknown,
  ): Task<Actor, unknown>[] {
    throw new Error('Method createDeleteTaskSequence not implemented.');
  }
  createGetOfItemTask(_member: Actor, _item?: Item): Task<Actor, unknown> {
    throw new Error('Method createGetOfItemTask not implemented.');
  }
  createGetOfManyItemsTask(
    _member: Actor,
    _items?: Item[],
    _shouldValidatePermission?: boolean,
  ): Task<Actor, unknown> {
    throw new Error('Method createGetOfManyItemsTask not implemented.');
  }
  createGetOfItemTaskSequence(
    _actor: Actor,
    _itemId: string,
  ): Task<Actor, unknown>[] {
    throw new Error('Method createGetOfItemTaskSequence not implemented.');
  }
  createDeleteAllOnAndBelowItemTaskSequence(
    _actor: Actor,
    _itemId: string,
  ): Task<Actor, unknown>[] {
    throw new Error(
      'Method createDeleteAllOnAndBelowItemTaskSequence not implemented.',
    );
  }
  createGetMemberItemMembershipTask(
    _actor: Actor,
  ): Task<Actor, ItemMembership> {
    throw new Error(
      'Method createGetMemberItemMembershipTask not implemented.',
    );
  }
}
