
// import db from "@/lib/mysql";
export async function GET() {
  return new Response(
    JSON.stringify({ message: '🚀 Live API route is working!' }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    }
  );
}
  