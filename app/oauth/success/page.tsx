"use client";
import { useSearchParams } from "next/navigation";

export default function Success() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const mallId = searchParams.get("state");
  return (
    <div>
      <h1>인증 코드 발급 성공</h1>
      <button onClick={() => console.log(code, mallId)}>
        Access token 발급하기
      </button>
    </div>
  );
}
