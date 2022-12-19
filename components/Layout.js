import Head from 'next/head';
import Link from 'next/link';
import React, { useContext } from 'react';
import { Store } from '../utils/Store';

export default function Layout({ title, children }) {
    const { state, dispatch } = useContext(Store);
    const { cart } = state;
    return (
        <>
            <Head>
                <title>{title ? title + ' - Amazona' : 'Amazona'}</title>
                <meta name="description" content="Ecomerce website" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex min-h-screen flex-col justify-between">
                <header>
                    <nav className="flex h-12 justify-between shadow-md items-center px-4">
                        <Link className="text-lg font-bold" href="/">
                            amazona
                        </Link>
                        <div>
                            <Link href="/cart" className="px-2">
                                Cart
                                {cart.cartItems.length > 0 && (
                                    <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-sm font-bold text-white">{cart.cartItems.reduce((a, c) => a + c.quantity, 0)}</span>
                                )}
                            </Link>
                            <Link href="/login" className="p-2">
                                Login
                            </Link>
                        </div>
                    </nav>
                </header>

                <main className="container m-auto mt-4 px-4">{children}</main>

                <footer className="flex justify-center items-center h-10 shadow-inner">
                    <p>Copyright © 2022 Amazona</p>
                </footer>
            </div>
        </>
    );
}
