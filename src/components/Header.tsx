import Link from 'next/link';
import { usePathname } from 'next/navigation';


export default function Header() {
    const path = usePathname();
    return (
        <>
            <header className="px-5 py-4">

            <div className="container mx-auto flex justify-between items-center">
                <div className="text-black flex flex-col items-start">
                    <Link href="/" className="logo text-2xl">Romerio</Link>
                    <Link href="tel:+89852220108" className="text-gray-500 text-xs">8-(985)-222-01-08</Link>
                </div>

                <div className="hidden md:flex space-x-6 items-center pt-1">
                    <Link href="/" className={`${path === "/" ? "font-normal" :"font-light"}`}>ГЛАВНАЯ</Link>
                    <Link href="/catalog" className={`${path === "/catalog" ? "font-normal" :"font-light"}`}>КАТАЛОГ</Link>
                    <Link href="/cart" className={`${path === "/cart" ? "font-normal" :"font-light"}`}>КОРЗИНА</Link>
                </div>


                <button id="menu-btn" className="focus:outline-none md:hidden">
                    <svg width="42" height="42" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                            d="M6.25 1.5H18.75C21.6495 1.5 24 3.85051 24 6.75V19.25C24 22.1495 21.6495 24.5 18.75 24.5H6.25C3.35051 24.5 1 22.1495 1 19.25V6.75C1 3.85051 3.35051 1.5 6.25 1.5ZM0 6.75C0 3.29822 2.79822 0.5 6.25 0.5H18.75C22.2018 0.5 25 3.29822 25 6.75V19.25C25 22.7018 22.2018 25.5 18.75 25.5H6.25C2.79822 25.5 0 22.7018 0 19.25V6.75ZM6 10H19V8.7H6V10ZM6 13.7918H19V12.4918H6V13.7918ZM19 17.5832H6V16.2832H19V17.5832Z"
                            fill="black" />
                    </svg>

                </button>

            </div>

            <div id="mobile-menu" className="md:hidden   overflow-hidden max-h-0 transition-all duration-1000 ease-in-out">
                <Link href="#" className="block  pb-1 pt-4 px-1">ГЛАВНАЯ</Link>
                <hr className="border-t-1 border-black"/>
                <Link href="/catalog" className="block  py-1 px-1">КАТАЛОГ</Link>
                <hr className="border-t-1 border-black"/>
                <Link href="/cart" className="block   py-1 px-1">КОРЗИНА</Link>
            </div>
            
            </header>
            <hr className="border-t-2 border-black"/>
        </>
    )
}
