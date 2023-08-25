import { Flourish } from "@/components/Flourish"
import { MainNav } from "@/components/MainNav"
import Link from "next/link"
import { Barlow } from 'next/font/google'
const barlow = Barlow({ subsets: ['latin'], weight: ['400', '600'] })
const fs = require('fs');
import { log } from "console"
import { loadPost } from "./loadPost"
import { format } from 'date-fns'
export default async function Home() {
  const root = "src/app/blog/[post]/posts"
  const posts = (await Promise.all(
    fs.readdirSync(`${root}`)
      .map(loadPost)
  )).sort((a, b) => {
    // sorts post by data.publishedDate
    if (a.data.publishedDate < b.data.publishedDate) return -1;
    else if (b.data.publishedDate < a.data.publishedDate) return -1;
    return 0;
  })

  return (
    <div>
      <Flourish />
      <section>
        <MainNav />
      </section>
      <div className="container my-16">
        <h1 className={`${barlow.className} text-3xl md:text-4xl capitalize mb-2 font-bold -tracking-tighter mb-6`}>
          POSTS:
        </h1>
        <div className="md:grid grid-cols-2 gap-12">
          {posts.map(({ slug, data, excerpt }: any) =>
            <div>
              <div className="text-xs text-muted-foreground mb-2 mt-6">{format(new Date(data.publishedDate), 'MMMM do yyyy')}</div>
              <Link href={`/blog/${slug}`}>
                <div className="block mb-2 text-xl" >
                  {data.title}
                </div>

                <p className="pb-8 text-sm opacity-50 content">
                  {excerpt}
                </p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}