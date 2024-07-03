import { Sql } from 'postgres';

export type InsulinLog = {
  id: number;
  userId: number;
  type: string;
  amount: number;
  timestamp: Date;
  createdAt: Date;
  updatedAt: Date;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE insulin_logs (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      user_id integer REFERENCES users (id) ON DELETE cascade,
      type varchar(255) NOT NULL,
      amount float NOT NULL,
      timestamp timestamp NOT NULL,
      created_at timestamp DEFAULT CURRENT_TIMESTAMP,
      updated_at timestamp DEFAULT CURRENT_TIMESTAMP
    )
  `;
}

export async function down(sql: Sql) {
  await sql`DROP TABLE insulin_logs`;
}
