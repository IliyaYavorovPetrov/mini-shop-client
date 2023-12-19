import axios, { AxiosResponse } from "axios";
import Cookie from "js-cookie";


export async function signUp(
  token: string,
  authProvider: string
): Promise<string | null> {
  try {
    const response: AxiosResponse = await axios.post(
      `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_VERSION_PREFIX}/sign-up`,
      {
        token: token,
        authProvider: authProvider,
      },
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status !== 200) {
      throw new Error("Failed to get token: " + response.status);
    }

    const authToken = response.headers["AUTH_TOKEN"];
    Cookie.set("AUTH_TOKEN", authToken);

    return authToken;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error("postSignInToken Error:", error.message);
    } else {
      console.error("Generic error:", error.message);
    }
    return null;
  }
}

export async function signIn(
  token: string,
  authProvider: string
): Promise<string | null> {
  try {
    const response: AxiosResponse = await axios.post(
      `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_VERSION_PREFIX}/sign-in`,
      {
        token: token,
        authProvider: authProvider,
      },
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status !== 200) {
      throw new Error("Failed to get token: " + response.status);
    }

    const authToken = response.headers["AUTH_TOKEN"];
    Cookie.set("AUTH_TOKEN", authToken);

    return authToken;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error("postSignInToken Error:", error.message);
    } else {
      console.error("Generic error:", error.message);
    }
    return null;
  }
}
