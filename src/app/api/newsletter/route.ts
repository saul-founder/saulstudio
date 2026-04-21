import { NextRequest, NextResponse } from "next/server";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const AUDIENCE_ID = "2075c4e7-d616-4cf6-9738-867ee375ae3a";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const res = await fetch(`https://api.resend.com/audiences/${AUDIENCE_ID}/contacts`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  if (!res.ok) {
    const data = await res.json();
    return NextResponse.json({ error: data.message || "Failed" }, { status: res.status });
  }

  return NextResponse.json({ ok: true });
}
