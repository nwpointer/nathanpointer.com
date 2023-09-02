'use client';
export function getCookie(name: string) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  // @ts-ignore
  if (parts && parts.length === 2) return parts.pop().split(';').shift();
}
