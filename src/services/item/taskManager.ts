import { Actor, Item, ItemTaskManager, Task, UnknownExtra } from '@graasp/sdk';

export default class TaskManager implements ItemTaskManager {
  createCreateTaskSequence(
    _actor: Actor,
    _object: Partial<Item<UnknownExtra>>,
    _extra?: unknown,
  ): Task<Actor, unknown>[] {
    throw new Error('Method createCreateTaskSequence not implemented.');
  }
  createGetTaskSequence(
    _actor: Actor,
    _objectId: string,
  ): Task<Actor, unknown>[] {
    throw new Error('Method createGetTaskSequence not implemented.');
  }
  createUpdateTaskSequence(
    _actor: Actor,
    _objectId: string,
    _object: Partial<Item<UnknownExtra>>,
  ): Task<Actor, unknown>[] {
    throw new Error('Method createUpdateTaskSequence not implemented.');
  }
  createDeleteTaskSequence(
    _actor: Actor,
    _objectId: string,
    _extra?: unknown,
  ): Task<Actor, unknown>[] {
    throw new Error('Method createDeleteTaskSequence not implemented.');
  }
  createMoveTaskSequence(
    _actor: Actor,
    _itemId: string,
    _parentId?: string,
  ): Task<Actor, unknown>[] {
    throw new Error('Method createMoveTaskSequence not implemented.');
  }
  createCopyTaskSequence(
    _actor: Actor,
    _itemId: string,
    _options: { parentId?: string; shouldCopyTags?: boolean },
  ): Task<Actor, unknown>[] {
    throw new Error('Method createCopyTaskSequence not implemented.');
  }
  createCopySubTaskSequence(
    _actor: Actor,
    _itemTask: Task<Actor, Item>,
    _options: { parentId?: string; shouldCopyTags?: boolean },
  ): Task<Actor, unknown>[] {
    throw new Error('Method createCopySubTaskSequence not implemented.');
  }
  createGetChildrenTaskSequence(
    _actor: Actor,
    _itemId: string,
    _ordered?: boolean,
  ): Task<Actor, unknown>[] {
    throw new Error('Method createGetChildrenTaskSequence not implemented.');
  }

  getCreateTaskName(): string {
    return 'CreateTaskName';
  }
  getGetTaskName(): string {
    return 'GetTaskName';
  }
  getGetManyTaskName(): string {
    return 'GetManyTaskName';
  }
  getUpdateTaskName(): string {
    return 'GetTaskName';
  }
  getDeleteTaskName(): string {
    return 'DeleteTaskName';
  }
  getMoveTaskName(): string {
    return 'MoveTaskName';
  }
  getCopyTaskName(): string {
    return 'CopyTaskName';
  }
  getGetChildrenTaskName(): string {
    return 'GetChildrenTaskName';
  }
  getGetOwnTaskName(): string {
    return 'GetOwnTaskName';
  }
  getGetSharedWithTaskName(): string {
    return 'GetSharedWithTaskName';
  }
  getGetDescendantsTaskName(): string {
    return 'GetDescendantsTaskName';
  }
  createCreateTask<E extends UnknownExtra>(
    _actor: Actor,
    _object: Partial<Item<E>>,
    _extra?: unknown,
  ): Task<Actor, Item<E>> {
    throw new Error('Method createCreateTask not implemented.');
  }
  createGetTask<E extends UnknownExtra>(
    _actor: Actor,
    _objectId: string,
  ): Task<Actor, Item<E>> {
    throw new Error('Method createGetTask not implemented.');
  }
  createGetManyTask<E extends UnknownExtra>(
    _actor: Actor,
    _itemIds?: string[],
  ): Task<Actor, unknown> {
    throw new Error('Method createGetManyTask not implemented.');
  }
  createUpdateTask<E extends UnknownExtra>(
    _actor: Actor,
    _objectId: string,
    _object: Partial<Item<E>>,
  ): Task<Actor, Item<E>> {
    throw new Error('Method createUpdateTask not implemented.');
  }
  createDeleteTask(_actor: Actor, _item?: Item): Task<Actor, unknown> {
    throw new Error('Method createDeleteTask not implemented.');
  }
  createMoveTask(
    _actor: Actor,
    _itemId: string,
    _parentId?: string,
  ): Task<Actor, Item<UnknownExtra>> {
    throw new Error('Method createMoveTask not implemented.');
  }
  createCopyTask(
    _actor: Actor,
    _itemId: string,
    _options: { parentId?: string; shouldCopyTags?: boolean },
  ): Task<Actor, Item<UnknownExtra>> {
    throw new Error('Method createCopyTask not implemented.');
  }
  createGetChildrenTask(
    _actor: Actor,
    _input?: {
      item?: Item;
      ordered?: boolean;
    },
  ): Task<Actor, Item<UnknownExtra>[]> {
    throw new Error('Method createGetChildrenTask not implemented.');
  }
  createGetOwnTask(_actor: Actor): Task<Actor, Item<UnknownExtra>[]> {
    throw new Error('Method createGetOwnTask not implemented.');
  }
  createGetSharedWithTask(_actor: Actor): Task<Actor, Item<UnknownExtra>[]> {
    throw new Error('Method createGetSharedWithTask not implemented.');
  }
  createGetDescendantsTask(
    _actor: Actor,
    _input?: { item: Item },
  ): Task<Actor, Item<UnknownExtra>[]> {
    throw new Error('Method createGetDescendantsTask not implemented.');
  }
  createGetDescendantsTaskSequence(
    _actor: Actor,
    _itemId: string,
  ): Task<Actor, unknown>[] {
    throw new Error('Method createGetDescendantsTaskSequence not implemented.');
  }
}
