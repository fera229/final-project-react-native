import { Sql } from 'postgres';

export type User = {
  id: number;
  email: string;
  password_hash: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE users (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      email varchar(80) UNIQUE NOT NULL,
      password_hash varchar(80) NOT NULL,
      name varchar(80) NOT NULL,
      created_at timestamp DEFAULT CURRENT_TIMESTAMP,
      updated_at timestamp DEFAULT CURRENT_TIMESTAMP
    )
  `;
}

export async function down(sql: Sql) {
  await sql`DROP TABLE users`;
}
