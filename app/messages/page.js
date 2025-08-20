import Messages from "@/components/messages";
import { getMessages } from "@/lib/messages";
// import { unstable_noStore } from "next/cache"; // In the Next.js versions 15, prefer using import { connection } from "next/server"; to prevent caching
// export const revalidate = 1; // Revalidate every 1 seconds
// export const dynamic = "force-dynamic"; // Always re-render, more preferred using unstable_noStore
// export const dynamic = 'force-static'; // Always render statically 그렇게 많이 사용되지는 않음

export default async function MessagesPage() {
  // const response = await fetch("http://localhost:8080/messages", {
  //   next: { tag: ["msg"] },
  // });
  // const messages = await response.json();

  const messages = await getMessages();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
