import { Actor, Item, ItemTaskManager, Task, UnknownExtra } from 'graasp';

export default class TaskManager implements ItemTaskManager {
  createCreateTaskSequence(
    actor: Actor,
    object: Partial<Item<UnknownExtra>>,
    extra?: unknown,
  ): Task<Actor, unknown>[] {
    throw new Error('Method createCreateTaskSequence not implemented.');
  }
  createGetTaskSequence(
    actor: Actor,
    objectId: string,
  ): Task<Actor, unknown>[] {
    throw new Error('Method createGetTaskSequence not implemented.');
  }
  createUpdateTaskSequence(
    actor: Actor,
    objectId: string,
    object: Partial<Item<UnknownExtra>>,
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
  createMoveTaskSequence(
    actor: Actor,
    itemId: string,
    parentId?: string,
  ): Task<Actor, unknown>[] {
    throw new Error('Method createMoveTaskSequence not implemented.');
  }
  createCopyTaskSequence(
    actor: Actor,
    itemId: string,
    parentId?: string,
  ): Task<Actor, unknown>[] {
    throw new Error('Method createCopyTaskSequence not implemented.');
  }
  createCopySubTaskSequence(
    actor: Actor,
    itemTask: Task<Actor, Item>,
    parentId?: string,
  ): Task<Actor, unknown>[] {
    throw new Error('Method createCopySubTaskSequence not implemented.');
  }
  createGetChildrenTaskSequence(
    actor: Actor,
    itemId: string,
    ordered?: boolean,
  ): Task<Actor, unknown>[] {
    throw new Error('Method createGetChildrenTaskSequence not implemented.');
  }

  getCreateTaskName(): string {
    return 'CreateTaskName';
  }
  getGetTaskName(): string {
    return 'GetTaskName';
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
  createCreateTask<E extends UnknownExtra>(
    actor: Actor,
    object: Partial<Item<E>>,
    extra?: unknown,
  ): Task<Actor, Item<E>> {
    throw new Error('Method createCreateTask not implemented.');
  }
  createGetTask<E extends UnknownExtra>(
    actor: Actor,
    objectId: string,
  ): Task<Actor, Item<E>> {
    throw new Error('Method createGetTask not implemented.');
  }
  createUpdateTask<E extends UnknownExtra>(
    actor: Actor,
    objectId: string,
    object: Partial<Item<E>>,
  ): Task<Actor, Item<E>> {
    throw new Error('Method createUpdateTask not implemented.');
  }
  createDeleteTask(
    actor: Actor,
    item?: Item,
  ): Task<Actor, Item<UnknownExtra>> {
    throw new Error('Method createDeleteTask not implemented.');
  }
  createMoveTask(
    actor: Actor,
    itemId: string,
    parentId?: string,
  ): Task<Actor, Item<UnknownExtra>> {
    throw new Error('Method createMoveTask not implemented.');
  }
  createCopyTask(
    actor: Actor,
    itemId: string,
    parentId?: string,
  ): Task<Actor, Item<UnknownExtra>> {
    throw new Error('Method createCopyTask not implemented.');
  }
  createGetChildrenTask(
    actor: Actor,
    input?: {
      itemId: string;
      ordered?: boolean;
    },
  ): Task<Actor, Item<UnknownExtra>[]> {
    throw new Error('Method createGetChildrenTask not implemented.');
  }
  createGetOwnTask(actor: Actor): Task<Actor, Item<UnknownExtra>[]> {
    throw new Error('Method createGetOwnTask not implemented.');
  }
  createGetSharedWithTask(actor: Actor): Task<Actor, Item<UnknownExtra>[]> {
    throw new Error('Method createGetSharedWithTask not implemented.');
  }
}
