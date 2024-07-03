import { Sql } from 'postgres';

export type Meal = {
  id: number;
  userId: number;
  description: string;
  carbCount: number;
  timestamp: Date;
  createdAt: Date;
  updatedAt: Date;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE meals (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      user_id integer REFERENCES users (id) ON DELETE cascade,
      description text NOT NULL,
      carb_count float NOT NULL,
      timestamp timestamp NOT NULL,
      created_at timestamp DEFAULT CURRENT_TIMESTAMP,
      updated_at timestamp DEFAULT CURRENT_TIMESTAMP
    )
  `;
}

export async function down(sql: Sql) {
  await sql`DROP TABLE meals`;
}
