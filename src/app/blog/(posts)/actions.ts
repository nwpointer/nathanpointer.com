// 'use server';
import { sql } from "@vercel/postgres";
import { v4 as uuid } from 'uuid';
import { cookies } from 'next/headers'

export default async function subscribe(formData: any) : Promise<{error?: string, message?: string}> {
  try {
    const email = formData.get("email");
    const subscriberId = uuid();
    await sql`INSERT INTO emails (email,subscriber_id) VALUES (${email}, ${subscriberId})`;
    cookies().set('subscriberId', subscriberId)
    return { message: 'Thanks for subscribing! 🎉'}
  } catch (e: any) {
    if (e.message!.includes('duplicate key')) {
      await setExistingSubscriberId(formData.get("email"))
      return { message: 'Thanks for subscribing! 🎉'}
    }
    console.error(e)
    return { error: 'Something went wrong. Please try again later.'}
  }
}

async function setExistingSubscriberId(email: string) {
  const { rows } = await sql`SELECT subscriber_id FROM emails WHERE email = ${email}`;
  if (rows && rows[0]) {
    cookies().set('subscriberId', rows[0].subscriber_id)
  }
}
