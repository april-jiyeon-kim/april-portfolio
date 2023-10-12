import { AxiosError } from "axios";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { code, mallId } = await request.json();
  try {
    const response = await fetch(
      `https://${mallId}.cafe24api.com/api/v2/oauth/token`,
      {
        method: "POST",
        body: `grant_type=authorization_code&code=${code}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}`,
        headers: {
          Authorization: `Basic ${process.env.NEXT_PUBLIC_AUTHORIZATION_TOKEN}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: true, message: errorData.message || errorData },
        { status: response.status }
      );
    }
    return response;
  } catch (error) {
    console.log(error);
    const axiosError = error as AxiosError;
    console.error("API 호출 중 에러 발생:", axiosError);
  }
}
