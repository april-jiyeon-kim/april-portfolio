"use client";
import axios from "axios";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Redirect({}: {}) {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const mallId = searchParams.get("state");
  const [accessToken, setAccessToken] = useState();
  const fetchData = async () => {
    try {
      const response = await axios.post(
        `https://${mallId}.cafe24api.com/api/v2/oauth/token`,
        `grant_type=authorization_code&code=${code}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}`,
        {
          headers: {
            Authorization: `Basic ${process.env.NEXT_PUBLIC_AUTHORIZATION_TOKEN}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      console.log(response.data);
      setAccessToken(response.data.accessToken);
    } catch (error) {
      console.error("API 호출 중 에러 발생:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col">
      <h1>API 인증키 확인</h1>
      <b>{accessToken}</b>
    </div>
  );
}
