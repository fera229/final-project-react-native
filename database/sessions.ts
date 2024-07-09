import { Sql } from 'postgres';

type Session = {
  id: number | null;
  userId: number | null;
  token: string | null;
  createdAt: Date | null;
};

export async function createSession(
  userId: number,
  token: string,
  sql: Sql,
): Promise<Session> {
  const [newSession] = await sql<Session[]>`
    INSERT INTO
      sessions (user_id, token)
    VALUES
      (
        ${userId},
        ${token}
      )
    RETURNING
      *
  `;
  return newSession;
}

export async function findSessionByToken(
  token: string,
  sql: Sql,
): Promise<Session | null> {
  const sessions = await sql<Session[]>`
    SELECT
      *
    FROM
      sessions
    WHERE
      token = ${token}
  `;
  return sessions.length ? sessions[0] : null;
}

export async function deleteSession(token: string, sql: Sql): Promise<void> {
  await sql`
    DELETE FROM sessions
    WHERE
      token = ${token}
  `;
}
