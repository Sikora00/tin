import { EntitySchema } from 'typeorm';
import { User } from '@tin/auth/server/domain';

export const UserSchema = new EntitySchema<User>({
  name: 'User',
  target: User,
  columns: {
    login: {
      type: String,
    },
    id: {
      primary: true,
      generated: true,
      type: 'int',
    },
    passwordHash: {
      type: String,
    },
    salt: { type: String },
  },
});
