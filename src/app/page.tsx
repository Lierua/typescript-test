import Image from "next/image";
import Button from "./Components/Button/Button";
import { Color } from "./Components/Button/Button.typed";

export default function Home() {
  const greeting: string = "Hello World!";
  return (
    <div className="flex flex-col gap-2 min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main
        className="text-3xl font-semibold
      hover:scale-[1-1] transition-all duration-200 ease-in"
      >
        {greeting}
      </main>
      <Button text="Test" type="submit" color={Color.red}></Button>
    </div>
  );
}
