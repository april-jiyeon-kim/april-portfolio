"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Oauth({}: {}) {
  const searchParams = useSearchParams();
  const mallId = searchParams.get("mall_id");
  const scope = "mall.read_application mall.read_store";
  const API_URL = `https://${mallId}.cafe24api.com/api/v2/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_CAFE24_CLIENT_ID}&state=${mallId}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}&scope=${scope}`;

  return (
    <div className="flex flex-col">
      <button onClick={() => console.log(mallId)}>Mall 이름</button>
      <Link href={API_URL}>카페24 연동하기</Link>
    </div>
  );
}
