import React from "react"
export const Section = ({title, children}:{title: string, children: React.ReactNode}) => <section>
    <h2>{title}</h2>
    <div>{children}</div>
</section>
