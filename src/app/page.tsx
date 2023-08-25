import { Flourish } from "@/components/Flourish"
import { MainNav } from "@/components/MainNav"
import Page from "@/components/Page"
import { Button } from "@/components/ui/button"
import { Roboto_Mono, Barlow } from 'next/font/google'
const robo = Roboto_Mono({ subsets: ['latin'], weight: ['300'] })
const barlow = Barlow({ subsets: ['latin'], weight: ['400', '600'] })
const fs = require('fs');
import { loadPost } from "./blog/loadPost"
import Link from "next/link"
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
    <Page>
      <section className="md:min-h-[600px] min-h-[400px] flex items-center">
        <div className="container">
          <div className="max-w-6xl">
            <h1 className={`${barlow.className} md:text-5xl text-3xl leading-snug md:leading-snug `}>I&apos;m an award winning <b className="opacity-100">web developer</b> from Oregon. I specialize in engineering <b className="opacity-100">event driven micro services</b> and <b className="opacity-100">react.js</b> applications.</h1>
            <br />
            <h2 className="md:text-2xl md:mt-6 text-muted-foreground">I occasionally <a className="text-blue-400 hover:underline" href="https://twitter.com/nwpointer">tweet</a> and like to <a className="text-blue-400 hover:underline" href="/blog">blog.</a></h2>
          </div>
        </div>
      </section>
      <section>
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-2 max-w-md">
            <h3>about</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Im pragmatic, creative and care deeply about quality software - a passion I picked up when I was still in Highschool.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              I love a good challenge and I find I&apos;m often at my happiest when designing technical solutions to novel problems with an engaged and empowered team of peers.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              I live in Portand Oregon with my beautiful girlfriend and our cat Zelda
            </p>
            <br />
            {/* <h3 className={` text-nd capitalize mb-2 tracking-wide font-semibold`}>Interests:</h3> */}
            <div className="bg-muted rounded-full cursor-pointer inline-block border mr-2 mb-2 p-1 px-4 text-sm text-muted-foreground hover:-top-1 shadow-sm hover:shadow-md relative">Dungeons and Dragons</div>
            <div className="bg-muted rounded-full cursor-pointer inline-block border mr-2 mb-2 p-1 px-4 text-sm text-muted-foreground hover:-top-1 shadow-sm hover:shadow-md relative">Personal Fitness</div>
            <div className="bg-muted rounded-full cursor-pointer inline-block border mr-2 mb-2 p-1 px-4 text-sm text-muted-foreground hover:-top-1 shadow-sm hover:shadow-md relative">Philosophy</div>
            <div className="bg-muted rounded-full cursor-pointer inline-block border mr-2 mb-2 p-1 px-4 text-sm text-muted-foreground hover:-top-1 shadow-sm hover:shadow-md relative">Graphic Design</div>
            <div className="bg-muted rounded-full cursor-pointer inline-block border mr-2 mb-2 p-1 px-4 text-sm text-muted-foreground hover:-top-1 shadow-sm hover:shadow-md relative">Video games</div>
            <div className="bg-muted rounded-full cursor-pointer inline-block border mr-2 mb-2 p-1 px-4 text-sm text-muted-foreground hover:-top-1 shadow-sm hover:shadow-md relative">Tiny Houses</div>
            <div className="bg-muted rounded-full cursor-pointer inline-block border mr-2 mb-2 p-1 px-4 text-sm text-muted-foreground hover:-top-1 shadow-sm hover:shadow-md relative">Etymology</div>
            <div className="bg-muted rounded-full cursor-pointer inline-block border mr-2 mb-2 p-1 px-4 text-sm text-muted-foreground hover:-top-1 shadow-sm hover:shadow-md relative">Dad jokes</div>
            <br /><br />
          </div>
          <div className="flex gap-6 flex-col">
            <div>
              <h3>Open Source</h3>
              <span className="span text-muted-foreground">
                <a className="text-blue-400 hover:underline" href="https://www.npmjs.com/package/three-landscape">
                three-landscape
                </a>
              </span>
              <br /><br />
            </div>
            <div>
              <h3>Writing</h3>
              {/* <div className="text-xs text-muted-foreground mb-2 mt-6">August 2021</div>
              <a className="text-sm hover:underline" href="/">Rendering semi-realistic Landscapes in the browser</a>
              <div className="text-xs text-muted-foreground mb-2 mt-6">August 2021</div>
              <a className="text-sm hover:underline" href="/">Rendering semi-realistic Landscapes in the browser</a>
              <div className="text-xs text-muted-foreground mb-2 mt-6">August 2021</div>
              <a className="text-sm hover:underline" href="/">Rendering semi-realistic Landscapes in the browser</a> */}
              {posts.map(({ slug, data, excerpt }: any, i) =>
                <div key={i}>
                  <div className="text-xs text-muted-foreground mb-2 mt-6">{format(new Date(data.publishedDate), 'MMMM do yyyy')}</div>
                  <Link className="text-sm hover:underline" href={`/blog/${slug}`}>{data.title} </Link>
                  {/* <p className="pb-8 text-sm opacity-50">
                    {excerpt}
                  </p> */}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Page>
  )
}