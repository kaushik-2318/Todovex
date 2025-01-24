"use client";

import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Home() {
  const tasks = useQuery(api.tasks.get);
  return (
    <main className="flex min-h-screen flex-col">
      {tasks?.map((task, _id ) => <p key={_id}>{JSON.stringify(task)}</p>)}
    </main>
  );
}