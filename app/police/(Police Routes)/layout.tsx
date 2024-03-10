import Card from "../../components/Card"

const Layout = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <>
            <section className="bg-[#1a2033] relative">
                <header className="pb-[136px] pt-10 px-7 containerMargin">
                    <h1 className="font-semibold text-white text-[24px] mb-4">
                        Welcome back, Sarfaraz
                    </h1>
                    <p className="text-textDark text-[14px]">Dashboard</p>
                </header>
                <section className="grid grid-cols-3 gap-6 absolute top-[162px] lg:bottom-[-114px] left-0 right-0 containerMargin">
                    <Card>Test Card</Card>
                    <Card>Test Card</Card>
                    <Card>Test Card</Card>
                </section>
            </section>
            {children}
        </>
    )
}

export default Layout;