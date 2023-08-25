import { Flourish } from "@/components/Flourish"
import { MainNav } from "@/components/MainNav"

export default function Page({ children, ...args }: any) {
    return (
        <div {...args} >
            <Flourish />
            <section>
                <MainNav />
            </section>
            <section >
                {children}
            </section>
        </div >
    )
}