const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export interface AuthResponse {
  token: string;
  userId: string;
}

export async function authenticateService(username: string, password: string): Promise<AuthResponse> {
  try {
    const response = await fetch(`${apiUrl}/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error('Usuário ou senha incorretos');
    }

    const data: AuthResponse = await response.json();
    return data;
  } catch (error) {
    throw new Error('Falha na autenticação, tente novamente');
  }
}
