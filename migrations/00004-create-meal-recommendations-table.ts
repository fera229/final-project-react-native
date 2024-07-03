import { Sql } from 'postgres';

export type MealRecommendation = {
  id: number;
  name: string;
  description: string;
  carbCount: number;
  createdAt: Date;
  updatedAt: Date;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE meal_recommendations (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      name varchar(255) NOT NULL,
      description text NOT NULL,
      carb_count float NOT NULL,
      created_at timestamp DEFAULT CURRENT_TIMESTAMP,
      updated_at timestamp DEFAULT CURRENT_TIMESTAMP
    )
  `;
}

export async function down(sql: Sql) {
  await sql`DROP TABLE meal_recommendations`;
}
