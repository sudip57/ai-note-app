import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {
  const { userId } = auth();
  if (userId) redirect("/notes");
  return (
    <main className="flex flex-col h-screen items-center justify-center gap-5">
      <div className="flex items-center gap-4">
        <Image src={logo} alt="FlowBrain logo" width={100} height={100} />
        <span className="font-extrabold tracking-tight text-4xl lg:text-5xl">
          Flow Brain
        </span>
      </div>
      <p className="text-center max-w-prose">
        An intelligent note taking app with AI interation, built with OpenAI,
        Pinacone, Next.js, Shadcn Ui, Clerk and more.
      </p>
      <Button asChild size="lg">
        <Link href="/notes">Open</Link>
      </Button>
    </main>
  );
}
