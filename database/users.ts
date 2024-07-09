import { Sql } from 'postgres';

type User = {
  id: number;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};

type UserWithPasswordHash = User & {
  passwordHash: string;
};

export async function createUser(
  user: UserWithPasswordHash,
  sql: Sql,
): Promise<User> {
  const [newUser] = await sql<User[]>`
    INSERT INTO
      users ${sql(user, 'email', 'passwordHash', 'name')}
    RETURNING
      *
  `;
  return newUser;
}
