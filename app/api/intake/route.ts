import { type NextRequest, NextResponse } from "next/server";

interface IntakePayload {
  firstName:    string;
  lastName:     string;
  email:        string;
  organization?: string;
  role?:         string;
  inquiryType:  string;
  message:      string;
  referral?:    string;
}

export async function POST(req: NextRequest) {
  try {
    const body: IntakePayload = await req.json();

    // Validate required fields
    const required: (keyof IntakePayload)[] = [
      "firstName", "lastName", "email", "inquiryType", "message",
    ];
    for (const field of required) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // --- Production integration points ---
    // 1. Forward to CRM / email system (e.g. SendGrid, Mailgun)
    // 2. Log to encrypted database (e.g. Supabase RLS-protected table)
    // 3. Trigger Slack/Teams notification to intake team
    // 4. Auto-respond to submitter with confirmation
    //
    // Example (SendGrid):
    // await sgMail.send({
    //   to: process.env.INTAKE_EMAIL,
    //   from: process.env.SENDER_EMAIL,
    //   subject: `[I2A INTAKE] ${body.inquiryType} — ${body.firstName} ${body.lastName}`,
    //   text: JSON.stringify(body, null, 2),
    // });

    console.log("[I2A INTAKE RECEIVED]", {
      timestamp: new Date().toISOString(),
      submitter: `${body.firstName} ${body.lastName} <${body.email}>`,
      org:       body.organization || "Not provided",
      type:      body.inquiryType,
    });

    return NextResponse.json(
      { success: true, message: "Intake received. Expect contact within 48 hours." },
      { status: 200 }
    );
  } catch (err) {
    console.error("[I2A INTAKE ERROR]", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
