'use client';
import { signOut } from 'next-auth/react';

export default function page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>Admin Dashboard Page</h1>
      <button
        type="button"
        onClick={() => signOut()}
        className="btn btn-neutral w-[200px] border border-slate-400 rounded-lg my-4 hover:text-transparent focus:text-transparent"
      >
        <p className="bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
          <span className="text-xs font-bold">ログアウト</span>
        </p>
      </button>
    </div>
  );
}
