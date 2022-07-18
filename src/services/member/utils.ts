import { v4 as uuidv4 } from 'uuid';

import { Member, MemberType, UnknownExtra } from '@graasp/sdk';

export const buildMember = (options: {
  id?: string;
  name?: string;
  email?: string;
  extra?: UnknownExtra;
}): Member => ({
  id: options.id ?? uuidv4(),
  name: options.name,
  email: options.email ?? `${options.name}@email.com`,
  createdAt: '2021-03-29T08:46:52.939Z',
  updatedAt: '2021-03-29T08:46:52.939Z',
  extra: options.extra ?? {},
  type: 'individual' as MemberType,
});

export const GRAASP_ACTOR = buildMember({
  name: 'graasp-actor',
});
