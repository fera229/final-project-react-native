import { Sql } from 'postgres';

export type BloodSugarLog = {
  id: number;
  userId: number;
  reading: number;
  timestamp: Date;
  createdAt: Date;
  updatedAt: Date;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE blood_sugar_logs (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      user_id integer REFERENCES users (id) ON DELETE cascade,
      reading float NOT NULL,
      timestamp timestamp NOT NULL,
      created_at timestamp DEFAULT CURRENT_TIMESTAMP,
      updated_at timestamp DEFAULT CURRENT_TIMESTAMP
    )
  `;
}

export async function down(sql: Sql) {
  await sql`DROP TABLE blood_sugar_logs`;
}
