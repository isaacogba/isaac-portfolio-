import { NextResponse } from "next/server";

export const runtime = "nodejs"; // safer with env + fetch

export async function POST(request) {
  try {
    const body = await request.json();
    const { firstName = "", lastName = "", email = "", phone = "", service = "", message = "" } = body;

    // ---- Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }

    // ---- Validate env
    const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;
    if (!RESEND_API_KEY) return NextResponse.json({ ok: false, error: "Missing RESEND_API_KEY" }, { status: 500 });

    // Optional dry run for testing without sending
    if (process.env.DRY_RUN === "1") {
      console.log("DRY_RUN contact:", { firstName, lastName, email, phone, service, message });
      return NextResponse.json({ ok: true, dryRun: true });
    }

    const subject = `New contact from ${firstName} ${lastName}${service ? ` – ${service}` : ""}`;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL || "onboarding@resend.dev",
        to: [CONTACT_TO_EMAIL || email],
        reply_to: email,
        subject,
        html: `
          <h2>${subject}</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space:pre-line">${message}</p>
        `,
      }),
    });

    if (!res.ok) {
      const text = await res.text(); // capture exact reason from Resend
      console.error("Resend error:", res.status, text);
      // Common causes: invalid API key (401), unverified From domain (422)
      return NextResponse.json(
        { ok: false, error: `Resend failed (${res.status})` },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ ok: false, error: "Failed to send message" }, { status: 500 });
  }
}
