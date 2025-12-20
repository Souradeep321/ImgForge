import { connectToDatabase } from "@/lib/database/mongoose";

export async function POST(req: Request) {
    connectToDatabase();
    return new Response("Hello, Next.js!");
}