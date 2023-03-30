import Script from "next/script"
import React from "react"
import { MainFooter } from "../sections/MainFooter"
import { MainHeader } from "../sections/MainHeader"

export const AppTemplate = ({ children }: { children: React.ReactNode }) => {
    return <div>
        <MainHeader />
        {children}
        <Script src="/scripts/tiny.slider.js" />
        <MainFooter />
    </div>
}