import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function POST(request: NextRequest) {
  return NextResponse.json(
    {
        message: 'Thanks for subscribing!! 🎉'
    },
    {
      status: 200,
    },
  );
}