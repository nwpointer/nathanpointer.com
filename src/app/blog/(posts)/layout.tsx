import '../../globals.css'
import type { Metadata } from 'next'

import Page from '@/components/Page'

import { Topic } from '@/components/Topic';
import { Barlow } from 'next/font/google'
const barlow = Barlow({ subsets: ['latin'], weight: ['400', '600'] })
import { format } from 'date-fns'
import readingTime from 'reading-time'
import { loadPost, getPosts } from '../loadPost'
import { SubscriptionForm } from './SubscriptionForm'
import Link from 'next/link';
// import subscribe from "./actions";

export const metadata: Metadata = {
  title: 'Nathan Pointer',
  description: 'blog',
}

export default async function RootLayout({ children, ...args }: { children: React.ReactNode }) {
  // @ts-ignore
  const slug = children?.props?.childProp.segment
  const post = await loadPost(slug);
  if (!post) return null
  metadata.title = post.slug

  const posts = await getPosts();
  const relatedPosts = [posts[0], posts[1], posts[2]]

  const subscribe = async (email: string) => {
    'use server';
    console.log('hia')
  }

  return (
    <Page>
      <section >
        <div className="container my-16 post">
          {post.data.tags && post.data.tags.map((tag: any, i: any) => <Topic key={i}>{tag}</Topic>)}
          <h1 className={`${barlow.className} text-3xl md:text-5xl capitalize mb-2 font-bold -tracking-tighter mb-6`}>
            {post.data.title}
          </h1>
          {post.data.subtitle && (<h2 className={`${barlow.className} text-md md:text-xl mb-2 -mt-3  mb-6 opacity-75`}>
            {post.data.subtitle}
          </h2>)}
          <hr />
          <div className="text-muted-forground opacity-50 my-6 text-xs">
            {format(new Date(post.data.publishedDate), 'MMMM do yyyy')} | ~{readingTime(post.content).text}
          </div>
          {/* <img src="/sample.jpg" className="rounded-xl" /> */}
          <div className="content mt-8">
            {children}
          </div>
          
          <SubscriptionForm subscribe={subscribe} className="content my-12 border bg-gray-50 dark:border-blue-500 rounded-xl p-6 dark:bg-blue-500 dark:bg-opacity-20 dark:border-opacity-60" />

          {relatedPosts && (
            <div className="my-24">
              <h3 className={`${barlow.className} text-2xl md:text-4xl capitalize mb-2 font-bold -tracking-tighter mb-6`}>
                Related Posts
              </h3>
              <div className="md:grid grid-cols-3 gap-4">
                {relatedPosts.map(({ slug, data, excerpt }: any, i: any) =>
                  <div className='border p-4 rounded-xl mb-4 hover:shadow-md transition-shadow' key={i}>
                    {/* <div className="text-xs text-muted-foreground mb-2">{format(new Date(data.publishedDate), 'MMMM do yyyy')}</div> */}
                    <Link href={`/blog/${slug}`}>
                      <div className="block mb-2 text-md mt-2" >
                        {data.title}
                      </div>

                      <p className="pb-4 text-sm text-muted-foreground content">
                        {excerpt}
                      </p>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}
            
        </div>
      </section>
    </Page>
  )
} 


