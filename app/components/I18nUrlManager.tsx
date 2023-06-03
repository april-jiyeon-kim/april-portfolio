"use client";

import { setCookie } from "cookies-next";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

// Cleaning up the URL to remove ?language query parameter so that the user can share the URL,
// and the visitors to that URL have the page displayed in their preferred language
export const I18nUrlManager: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const language = searchParams.get("language");

    if (language !== null && navigator.cookieEnabled) {
      const url = new URL(window.location.href);
      url.searchParams.delete("language");
      const target = `${url.pathname}${url.search}${url.hash}`;
      document.cookie = `language=${language}; max-age=${365 * 24 * 60 * 60}`;
      setCookie("language", language, { maxAge: 365 * 24 * 60 * 60 });
      router.replace(target);
    }
  }, [router, searchParams]);

  return <></>;
};
