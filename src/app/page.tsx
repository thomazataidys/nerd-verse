import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Games } from "@/components/games";
import { Consoles } from "@/components/consoles";
import { News } from "@/components/news";
import { Events } from "@/components/events";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <About />
      <Games />
      <Consoles />
      <News />
      <Events />
      <Contact />
    </div>
  );
}
