
"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export function Appbar() {
    const session = useSession();

    return (
        <header className="bg-gray-800 text-white">
            <div className="container mx-auto flex justify-between items-center p-4">
                <div className="text-lg font-bold">
                    Muzical
                </div>
                <nav className="flex items-center space-x-4">
                    {session.data?.user ? (
                        <>
                            <span className="text-sm">Welcome, {session.data?.user.name}</span>
                            <button
                                className="m-2 p-2 bg-red-500 hover:bg-red-600 rounded transition"
                                onClick={() => signOut()}
                            >
                                Sign Out
                            </button>
                        </>
                    ) : (
                        <button
                            className="m-2 p-2 bg-blue-500 hover:bg-blue-600 rounded transition"
                            onClick={() => signIn()}
                        >
                            Sign In
                        </button>
                    )}
                </nav>
            </div>
        </header>
    );
}