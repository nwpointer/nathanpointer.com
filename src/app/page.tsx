import { ModeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import {  Roboto_Mono, Playfair_Display, Barlow, Bebas_Neue } from 'next/font/google'
const robo = Roboto_Mono({ subsets: ['latin'], weight: ['400'] })
const play = Barlow({ subsets: ['latin'], weight: ['400', '600'] })

function Logo() {
  return <div className="flex items-center gap-4">
    <img className="rounded-full h-10" src="face.png" alt="" />
    <div>
      <span className="block leading-tight">Nathan Pointer</span>
      <span className="block leading-tight text-xs text-muted-foreground opacity-70">Web developer</span>
    </div>
  </div>
}

function MainNav() {
  return (
    <div className="flex justify-between py-4 pt-8 container">
      <Logo />
      <div className="flex items-center gap-2">
        <Button variant="link">blog</Button>
        <Button variant="link">contact</Button>
        <ModeToggle />
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div>
      <div className="absolute w-full -z-10 -top-[160px]">
        <div className="upbeat border mx-auto -rotate-180 -top-0 left-48 relative"></div>
        <div className="upbeat border mx-auto rotate-6 scale-150 -top-48 -left-64 relative "></div>
        {/* <div className="upbeat border mx-auto rotate-180 -top-12  -left-64 relative"></div>
        <div className="upbeat border mx-auto rotate-180 -top-48  -right-64 relative"></div> */}
        {/* <div className="upbeat border mx-auto rotate-12 -top-12 right-40 relative opacity-0"></div>
        <div className="upbeat border mx-auto -rotate-6 opacity-0"></div> */}
        {/* <div className="rainbow border mx-auto rotate-12 scale-25 relative  -top-12 opacity-25"></div>
        <div className="rainbow border mx-auto -rotate-12 scale-150 relative  -top-38 opacity-50"></div> */}
        
      </div>
      <section>
        <MainNav />
      </section>
      <section className="md:min-h-[600px] min-h-[400px] flex items-center">
        <div className="container">
          <div className="max-w-6xl">
            <h1 className={`${play.className} md:text-5xl grad text-3xl leading-snug md:leading-normal`}>I'm an award winning <b className="opacity-100">web developer</b> from Oregon. I specialize in engineering <b className="opacity-100">event driven micro services</b> and <b className="opacity-100">react.js</b> applications.</h1>
            <br />
            <h2 className="md:text-2xl md:mt-6 text-muted-foreground">I occasionally tweet and like to blog.</h2>
          </div>
        </div>
      </section>
      <section>
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-2 max-w-md">
            <h3 className={`${robo.className} text-xl capitalize mb-2 tracking-wide font-semibold`}>about</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Im pragmatic, creative and care deeply about quality software - a passion I picked up early when I was still in Highschool.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              I love a good challenge and I find I'm often at my happiest when designing technical solutions to novel problems with an engaged and empowered team of peers.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              I live in Portand Oregon with my beautiful girlfriend and my cat named pickles
            </p>
            <br />
            {/* <h3 className={`${robo.className} text-nd capitalize mb-2 tracking-wide font-semibold`}>Interests:</h3> */}
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
              <h3 className={`${robo.className} text-xl capitalize mb-2 tracking-wide font-semibold`}>Open Source</h3>
              <span className="span text-muted-foreground">three-landscape</span>
              <br /><br />
            </div>
            <div>
              <h3 className={`${robo.className} text-xl capitalize mb-2 tracking-wide font-semibold`}>Writing</h3>
              <div className="text-xs text-muted-foreground mb-2 mt-6">August 2021</div>
              <a className="text-sm hover:underline" href="/">Rendering semi-realistic Landscapes in the browser</a>
              <div className="text-xs text-muted-foreground mb-2 mt-6">August 2021</div>
              <a className="text-sm hover:underline" href="/">Rendering semi-realistic Landscapes in the browser</a>
              <div className="text-xs text-muted-foreground mb-2 mt-6">August 2021</div>
              <a className="text-sm hover:underline" href="/">Rendering semi-realistic Landscapes in the browser</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}