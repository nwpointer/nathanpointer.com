import { Flourish } from "@/components/Flourish"
import { MainNav } from "@/components/MainNav"

export default function Page({ children, ...args }: any) {
    return (
        <div {...args} >
            <Flourish />
            <Flourish />
            <section>
                <MainNav />
            </section>
            <section >
                {children}
            </section>
            <div className="fixed w-full max-w-screen -z-10 bottom-3">
                <div className="bottom-fade w-full border"></div>
            </div>
        </div >
    )
}