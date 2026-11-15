import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Hero } from "./sections/Hero/Hero";
import { About } from "./sections/About/About";
import { Crew } from "./sections/Members/Crew";
import { Song } from "./sections/Song/Song";
import { Support } from "./sections/Support/Support";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Crew />
        <Song />
        <Support />
      </main>
      <Footer />
    </div>
  );
}