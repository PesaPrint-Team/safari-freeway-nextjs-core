export async function POST(request: Request) {
  try {
    const payload = await request.json();
    console.log('Incoming Safari Freeway lead', payload);
    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false, error: 'Failed to capture lead.' }, { status: 500 });
  }
}
