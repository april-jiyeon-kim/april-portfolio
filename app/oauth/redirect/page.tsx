"use client";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";

export default async function Redirect({}: {}) {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const mallId = searchParams.get("state");
  const [accessToken, setAccessToken] = useState("");

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.post("../../api/token", { code, mallId });
      console.log(response);
      const { access_token } = response.data;
      setAccessToken(access_token);
      console.log(accessToken);
    } catch (error) {
      console.error("API 호출 중 에러 발생:", error);
    }
  }, [accessToken, code, mallId]);

  return (
    <div className="flex flex-col">
      <h1>API 인증키 확인</h1>
      <button onClick={fetchData}>get access_token</button>
    </div>
  );
}
