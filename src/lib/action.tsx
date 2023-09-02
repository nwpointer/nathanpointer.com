'use client';
export function action<T>(actionName: string): (formData: FormData) => Promise<T> {
  return async (formData: FormData) => {
    var data = {};
    // @ts-ignore
    formData.forEach((value, key) => data[key] = value);
    const response = await fetch(`/api/${actionName}`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
    return await response.json();
  };
}
