"use client";
import { Button } from "@/components/ui/button";
import { signInAction } from "@/actions/auth-action";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-24">
      <h1 >Login</h1>
      <form action={signInAction}>
        <Button>Login</Button>
      </form>
    </main>
  );
}