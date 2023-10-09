import {
  Application,
  Footer,
  Hero,
  HowWeWork,
  OurProduct,
  StartCreating,
} from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <OurProduct />
      <HowWeWork />
      <Application />
      <StartCreating />
      <Footer />
    </main>
  );
}
