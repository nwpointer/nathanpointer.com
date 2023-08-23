import { Flourish } from "@/components/Flourish"
import { MainNav } from "@/components/MainNav"
import { Topic } from '@/components/Topic'
import { Barlow } from 'next/font/google'
const barlow = Barlow({ subsets: ['latin'], weight: ['400', '600'] })

export default function Home() {
  return (
    <div>
      <Flourish />
      <section>
        <MainNav />
      </section>
      <section >
        <div className="container my-16">
          <Topic>Tutorial</Topic>
          <h1 className={`${barlow.className} text-3xl md:text-5xl capitalize mb-2 font-bold -tracking-tighter mb-6`}>
            Rendering semi-realistic Landscapes in the browser
          </h1>
          <h2 className={`${barlow.className} text-md md:text-xl mb-2 -mt-3  mb-6 opacity-75`}>
            How to use custom shaders in three.js to improve visual fidelity dramatically
          </h2>
          <hr />
          <div className="text-muted-forground opacity-50 my-6 text-xs">
            August 1st 2021 | ~12 min read
          </div>
          <img src="/sample.jpg" className="rounded-xl" />
          {/* <img src="https://worldgenie.io/_next/image?url=%2Fscene_wd.png&w=1920&q=75" alt="sdf" className="rounded-xl" /> */}
          <div className="content mt-8">
            <p>Inspired by some awesome three.js demos, covid related travel bans and maybe just a little too much time on pinterest looking at beautiful travel photos - I set out to see if I could render a convincing landscape scene in the browser using three.js and r3f.</p>
            <p>I've spent the last month or so trying different methods and scavenging the internet for tips on how to render semi-realistic landscapes with browser technologies. I found it rewarding but also a lot harder than I anticipated.</p>
            <p>I've put together a short guide to summarize what tips and techniques I used to go from A to B:</p>
          </div>
        </div>
      </section>
    </div>
  )
}