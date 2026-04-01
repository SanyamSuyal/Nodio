import { NextResponse } from "next/server";
import getMongoClient from "@/lib/mongodb";

type WaitlistEntry = {
	email: string;
	createdAt: string;
};

const DATABASE_NAME = process.env.MONGODB_DB_NAME || "nodio";
const COLLECTION_NAME = "waitlist";

function isValidEmail(email: string): boolean {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
	try {
		const body = (await request.json()) as { email?: string };
		const email = body.email?.trim().toLowerCase() ?? "";

		if (!email || !isValidEmail(email)) {
			return NextResponse.json({ message: "Please enter a valid email." }, { status: 400 });
		}

		const client = await getMongoClient();
		const db = client.db(DATABASE_NAME);
		const collection = db.collection<WaitlistEntry>(COLLECTION_NAME);

		const existing = await collection.findOne({ email });

		if (existing) {
			return NextResponse.json({ message: "Email already on waitlist." }, { status: 409 });
		}

		await collection.insertOne({
			email,
			createdAt: new Date().toISOString(),
		});

		return NextResponse.json({ message: "Saved" }, { status: 201 });
	} catch {
		return NextResponse.json({ message: "Unable to save email right now." }, { status: 500 });
	}
}
