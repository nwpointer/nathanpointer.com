import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import subscribe from '../../blog/(posts)/actions';

export async function POST(request: NextRequest) {
    const data = await request.json();
    const { error, message } = await subscribe({
        get: (key: string) => data[key],
    });
    return NextResponse.json(
        {
            error,
            message,
        },
        {
            status: 200,
        },
    );
}