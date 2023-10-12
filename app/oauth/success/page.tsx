"use client";
import { useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";

export default function Success() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const mallId = searchParams.get("state");
  const [accessToken, setAccessToken] = useState("");

  const fetchData = useCallback(() => {
    console.log(code, mallId);
  }, [code, mallId]);

  return (
    <div>
      <h1>인증 코드 발급 성공</h1>
      <button onClick={fetchData}>Access token 발급하기</button>
    </div>
  );
}
