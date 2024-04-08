import { SideBar } from './SideBar'

interface Props {
    children: any
}
export const BaseLayout = ({ children }: Props) => {
    return (
        <main className='flex flex-row gap-6 bg-primary w-full h-full text-textPrimary'>
            <SideBar/>
            <article className='w-full md:w-3/4 p-4 md:p-12 h-full m-auto'>
                {children}
            </article>
        </main>
    )
}
