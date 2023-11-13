import axios, { AxiosResponse } from 'axios';
import Cookie from 'js-cookie';

export async function generateAuthToken(token: string): Promise<string | null> {
  try {
    const response: AxiosResponse = await axios.post(
      `${process.env.REACT_APP_API_URL}/v1/oauth/login`,
      { idToken: token },
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (response.status !== 200) {
      throw new Error('Failed to get token: ' + response.status);
    }

    const authToken = response.headers['AUTH_TOKEN'];
    Cookie.set('AUTH_TOKEN', authToken);

    return authToken;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error('postLoginToken Error:', error.message);
    } else {
      console.error('Generic error:', error.message);
    }
    return null;
  }
}
