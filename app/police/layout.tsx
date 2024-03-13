import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Suspense } from "react";
import Loading from "../loading";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Suspense fallback={<Loading />}>
            <Navbar />
            {children}
        </Suspense >
    )
}

export default Layout;