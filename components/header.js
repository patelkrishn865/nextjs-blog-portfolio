import Counter from "./counter";
import Link from "next/link";
import Navigation from "./navigation";
import DarkMode from "./dark-mode";

export default function Header() {
    return (
        <header className="flex justify-between md:items-center mt-4">
            <div className="flex items-center md:space-x-12">
                <div className="hidden md:block">
                    <Link href="/" className="text-xl font-mono">Krishn Patel</Link>
                </div>
            <Navigation />
            </div>
            <div>
                <DarkMode />
            </div>
        </header>

    )
}