// Layout.tsx
import type { ReactNode } from "react";
import { Sidebar } from "./Sidebar.tsx";

type LayoutProps = {
    children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div>
            <Sidebar />
            <main className="ml-[250px] min-h-screen bg-[#f2f2f2]">
                {children}
            </main>
        </div>
    );
};
