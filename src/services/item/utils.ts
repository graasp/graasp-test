import { v4 as uuidv4 } from 'uuid';

import { Item, ItemSettings, UnknownExtra } from '@graasp/sdk';

import { GRAASP_ACTOR } from '../member/utils';

export const buildItem = (
  options: {
    name?: string;
    type?: string;
    path?: string;
    description?: string;
    id?: string;
    creator?: string;
    extra?: UnknownExtra;
    parentPath?: string;
    settings?: ItemSettings;
  } = {},
): Item<UnknownExtra> => {
  const {
    type,
    parentPath,
    id,
    description,
    path,
    creator = GRAASP_ACTOR.id,
    extra,
    name,
    settings = {} as ItemSettings,
  } = options;
  const buildId = id ?? uuidv4();
  let buildPath = path ?? buildId.replace(/-/, '_');

  if (parentPath) buildPath = `${parentPath}.${buildPath}`;

  return {
    id: buildId,
    name: name ?? buildId,
    description: description ?? 'some description',
    type: type || 'folder',
    path: buildPath,
    extra: extra || {},
    creator: creator,
    createdAt: '2021-03-29T08:46:52.939Z',
    updatedAt: '2021-03-29T08:46:52.939Z',
    settings,
  };
};
