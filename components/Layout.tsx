import { FC, ReactNode, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Onboarding from "./onboarding/Onboarding";

interface Props {
    children: ReactNode;
}
const Layout: FC<Props> = ({ children }) => {
    const [onboarded, setOnboarded] = useState(false)
    return (
        <>
        {!onboarded && <Onboarding onboarded={onboarded} setOnboarded={setOnboarded} />}
            {onboarded && <div className="bg-gypsum overflow-hidden flex flex-col min-h-screen">
                <Header />
                <div className="py-16 max-w-7xl mx-auto space-y-8 sm:px-6 lg:px-8">
                    {children}
                </div>
                <Footer />
            </div>}
        </>
    );
};

export default Layout;
