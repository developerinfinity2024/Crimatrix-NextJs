import React from 'react'
import RecentHotel from "../../components/RecentHotel";
import RecentLogs from "../../components/RecentLogs";
import Button from "../../components/Button";
import ProtectedRoute from '@/app/middleware/protectedRoute';

const page = () => {
    return (
        <>
            <ProtectedRoute>
            <section className="containerMargin mt-[176px] flex flex-col gap-2">
                {/* Recent Hotels */}
                <article className="my-6">
                    <header className="flex mb-[24px] justify-between items-center py-2">
                        <h2 className="font-semibold text-[22px]">Recent Hotels</h2>
                        <Button link="">View All</Button>
                    </header>
                    <RecentHotel />
                </article >

                {/* Recent Logs */}
                <article className="my-6">
                    <header className="flex justify-between items-center py-2">
                        <h2 className="font-semibold text-[22px]">Recent Logs</h2>
                        <Button link="">View All</Button>
                    </header>
                    <RecentLogs />
                </article>
                </section>
                </ProtectedRoute>
        </>
    )
}

export default page