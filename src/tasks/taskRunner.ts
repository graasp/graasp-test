import { FastifyLoggerInstance } from 'fastify';
import {
  Actor,
  Task,
  TaskRunner,
  PostHookHandlerType,
  PreHookHandlerType,
} from 'graasp';

export default class Runner implements TaskRunner<Actor> {
  runSingle<T>(
    _task: Task<Actor, T>,
    _log?: FastifyLoggerInstance,
  ): Promise<T> {
    throw new Error('Method runSingle not implemented.');
  }
  runMultiple(
    _tasks: Task<Actor, unknown>[],
    _log?: FastifyLoggerInstance,
  ): Promise<unknown[]> {
    throw new Error('Method runMultiple not implemented.');
  }
  runSingleSequence(
    _tasks: Task<Actor, unknown>[],
    _log?: FastifyLoggerInstance,
  ): Promise<unknown> {
    throw new Error('Method runSingleSequence not implemented.');
  }
  runMultipleSequences(
    _tasks: Task<Actor, unknown>[][],
    _log?: FastifyLoggerInstance,
  ): Promise<unknown> {
    throw new Error('Method runMultipleSequences not implemented.');
  }
  setTaskPreHookHandler<T>(
    _taskName: string,
    _handler: PreHookHandlerType<T, unknown>,
  ): void {
    throw new Error('Method setTaskPreHookHandler not implemented.');
  }
  setTaskPostHookHandler<T>(
    _taskName: string,
    _handler: PostHookHandlerType<T, unknown>,
  ): void {
    throw new Error('Method setTaskPostHookHandler not implemented.');
  }
  unsetTaskPreHookHandler<T>(
    _taskName: string,
    _handler: PreHookHandlerType<T, unknown>,
  ): void {
    throw new Error('Method unsetTaskPreHookHandler not implemented.');
  }
  unsetTaskPostHookHandler<T>(
    _taskName: string,
    _handler: PostHookHandlerType<T, unknown>,
  ): void {
    throw new Error('Method unsetTaskPostHookHandler not implemented.');
  }
}
