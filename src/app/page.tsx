import { ModeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"

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
      <section>
        <MainNav />
      </section>
      <section className="min-h-[500px] flex items-center">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl leading-snug">I'm an award winning <b>web developer</b> from Oregon. I specialize in engineering <b>event driven micro services</b> and <b>react.js applications</b>.</h1>
            <br />
            <h2 className="text-2xl">I occasionally tweet and like to blog.</h2>
          </div>
        </div>
      </section>
      <section>
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-2 max-w-md">
            <h3 className="text-xl uppercase mb-2 tracking-wide font-semibold">about</h3>
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
            <h3 className="text-nd capitalize mb-2 tracking-wide font-semibold">Interests:</h3>
              <div className="bg-muted rounded-full inline-block border mr-2 mb-2 p-1 px-4 text-sm text-muted-foreground hover:-top-1 shadow-sm hover:shadow-md relative">Dungeons and Dragons</div>
              <div className="bg-muted rounded-full inline-block border mr-2 mb-2 p-1 px-4 text-sm text-muted-foreground hover:-top-1 shadow-sm hover:shadow-md relative">Personal Fitness</div>
              <div className="bg-muted rounded-full inline-block border mr-2 mb-2 p-1 px-4 text-sm text-muted-foreground hover:-top-1 shadow-sm hover:shadow-md relative">Philosophy</div>
              <div className="bg-muted rounded-full inline-block border mr-2 mb-2 p-1 px-4 text-sm text-muted-foreground hover:-top-1 shadow-sm hover:shadow-md relative">Graphic Design</div>
              <div className="bg-muted rounded-full inline-block border mr-2 mb-2 p-1 px-4 text-sm text-muted-foreground hover:-top-1 shadow-sm hover:shadow-md relative">Video games</div>
              <div className="bg-muted rounded-full inline-block border mr-2 mb-2 p-1 px-4 text-sm text-muted-foreground hover:-top-1 shadow-sm hover:shadow-md relative">Tiny Houses</div>
              <div className="bg-muted rounded-full inline-block border mr-2 mb-2 p-1 px-4 text-sm text-muted-foreground hover:-top-1 shadow-sm hover:shadow-md relative">Etymology</div>
              <div className="bg-muted rounded-full inline-block border mr-2 mb-2 p-1 px-4 text-sm text-muted-foreground hover:-top-1 shadow-sm hover:shadow-md relative">Dad jokes</div>
          </div>
          <div className="flex gap-6 flex-col">
            <div>
              <h3 className="text-xl uppercase mb-2 tracking-wide font-semibold">Open Source</h3>
              three-landscape
              <br /><br />
            </div>
            <div>
              <h3 className="text-xl uppercase mb-2 tracking-wide font-semibold">Writing</h3>
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