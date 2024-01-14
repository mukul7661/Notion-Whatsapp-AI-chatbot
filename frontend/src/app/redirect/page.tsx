"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function Redirect() {
  const clientId = process.env.OAUTH_CLIENT_ID;
  const clientSecret = process.env.OAUTH_CLIENT_SECRET;
  const redirectUri = process.env.OAUTH_REDIRECT_URI;
  const searchParams = useSearchParams();

  const search = searchParams.get("code");

  console.log(search);
  //   const { code } = router.query;

  //   const encoded = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  //   const fetchToken = async () => {
  //     const response = await fetch("https://api.notion.com/v1/oauth/token", {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //         Authorization: `Basic ${encoded}`,
  //       },
  //       body: JSON.stringify({
  //         grant_type: "authorization_code",
  //         code: code,
  //         redirect_uri: redirectUri,
  //       }),
  //     });

  //     console.log(response);
  //   };

  //   useEffect(() => {
  //     fetchToken();
  //   }, []);
}
