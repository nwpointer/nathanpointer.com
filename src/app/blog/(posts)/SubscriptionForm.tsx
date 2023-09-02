'use client'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from 'react';

function getCookie(name:string) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  // @ts-ignore
  if (parts && parts.length === 2) return parts.pop().split(';').shift();
}

export function SubscriptionForm({subscribe, ...props}: {subscribe?: Function} & React.HTMLAttributes<HTMLDivElement>) {
  const [message, setMessage] = useState<string | undefined>('')
  const [error, setError] = useState<string | undefined>('')
  const [subscribed, setSubscribed] = useState<boolean>(false)

  useEffect(() => {
    if(getCookie('subscriberId')) {
      setSubscribed(true)
    }
  }, [])

  const onSubmit = async (formData: FormData) => {
    if(subscribe){
      const {error, message} = await subscribe(formData);
      if (error) setMessage(error)
      if (message) setMessage(message)
    }
  }

  // if(subscribed) return null

  return (<div {...props}>
    <h4>like what you read?</h4>
    <p className="text-sm">subscribe to my newsletter to get notified when I post new content!</p>
    <form action={onSubmit}>
      <div  className="flex w-full max-w-sm items-center space-x-2 mt-6">
        <Input required id="name" name="email" type="email" placeholder="Email" />
        <SubmitButton />
      </div>
      <Resolved>
        { message && <div className='text-sm mt-3 text-muted-foreground'>{message}</div>}
        { error && <div className='text-sm text-red-400 mt-3'>{error}</div>}
      </Resolved>
    </form>
  </div>);
}

function Resolved({ children }: any) {
  const { pending } = useFormStatus()
  return (<>
    {!pending && children}
  </>)
}

function SubmitButton() {
  const { pending } = useFormStatus()
  return (<>
    <Button disabled={pending} type="submit">{pending ? 'Submitting...' : 'Subscribe'}</Button>
  </>)
}