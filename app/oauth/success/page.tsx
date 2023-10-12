"use client";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";

export default function Success() {
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
    <div>
      <h1>인증 코드 발급 성공</h1>
      <button onClick={fetchData}>Access token 발급하기</button>
    </div>
  );
}
