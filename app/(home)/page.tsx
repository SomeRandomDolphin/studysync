"use client";

import Link from "next/link";
import { useCursors } from "./cursors-provider";

export default function Home() {
  const { getCount } = useCursors();
  const count = getCount();

  return (
    <div className="w-full flex flex-col gap-8">
      <section className="bg-yellow-100 w-full p-2 rounded flex justify-center items-center text-xl">
        <p>
          <strong>{count}</strong> multiplayer cursor{count != 1 ? "s" : ""} 🎈
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h1 className="text-4xl font-medium pb-6">StudySync</h1>
        <p>
        StudySync is an innovative online live chat discussion platform designed to foster real-time, collaborative academic engagement. Users can join interactive study groups or initiate topic-specific discussions, making it an ideal space for students, educators, and enthusiasts to connect over shared academic interests.
        </p>
      </section>

      <Link href="/chat" className="underline">
        <button className="flex items-center justify-center px-10 py-6 border border-stone-200 rounded-lg shadow hover:shadow-md">
          Explore Discussion -&gt;
        </button>
      </Link>
    </div>
  );
}
