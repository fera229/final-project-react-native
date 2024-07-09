import bcrypt from 'bcrypt';
import { sql } from '../../../database/connect';
import { createUser } from '../../../database/users';

export async function POST(request: Request): Promise<Response> {
  const body = await request.json();
  console.log('Received body:', body);
  if (!body.name || !body.email || !body.password) {
    return new Response(
      JSON.stringify({ error: 'Request body missing name, email or password property' }),
      { status: 400 },
    );
  }

  if (Object.keys(body).length > 3) {
    return new Response(
      JSON.stringify({ error: 'Request body contains more than name, email, password properties' }),
      { status: 400 },
    );
  }

  const hashedPassword = await bcrypt.hash(body.password, 10);

  try {
    const newUser = await createUser(
      {
        email: body.email,
        passwordHash: hashedPassword,
        name: body.name,
      },
      sql,
    );
    return new Response(JSON.stringify({ message: 'User added successfully', user: newUser }), {
      status: 201,
    });
  } catch (error) {
    console.error('Error creating user:', error); // Debug log for errors
    return new Response(JSON.stringify({ error: 'User registration failed' }), {
      status: 500 },
    });
  }
}
