import dynamic from 'next/dynamic'
import { loadPost } from '../loadPost'
import { Topic } from '@/components/Topic';
import { Barlow } from 'next/font/google'
const barlow = Barlow({ subsets: ['latin'], weight: ['400', '600'] })
import { format } from 'date-fns'
import readingTime from 'reading-time'


export default async function Page({ params }: { params: { post: string } }) {
  const post = await loadPost(params.post + ".mdx");
  const Mdx = dynamic(
    () => import(`./posts/${params.post}.mdx`)
      .catch(() => import(`./missing.mdx`))
  )
  console.log(readingTime(post.content))
  return (
    <section >
      <div className="container my-16 post">
        {post.data.tags && post.data.tags.map(tag => <Topic>{tag}</Topic>)}
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
          <Mdx />
        </div>
      </div>
    </section>
  )
}