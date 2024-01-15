import Image from "next/image";

export default function Home() {
  console.log(process.env.OAUTH_CLIENT_ID, "process.env.OAUTH_CLIENT_ID");
  const notionUrl = `https://api.notion.com/v1/oauth/authorize?owner=user&client_id=${process.env.OAUTH_CLIENT_ID}&redirect_uri=${process.env.NOTION_AUTH_URL}&response_type=code`;
  return <a href={process.env.NOTION_AUTH_URL}>Add to Notion</a>;

  // <a href="https://api.notion.com/v1/oauth/authorize?owner=user&client_id=463558a3-725e-4f37-b6d3-0889894f68de&redirect_uri=https%3A%2F%2Fexample.com%2Fauth%2Fnotion%2Fcallback&response_type=code">Add to Notion</a>
}
