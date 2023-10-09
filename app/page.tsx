import {
  Application,
  Footer,
  Hero,
  HowWeWork,
  OurProduct,
  OurWorks,
  StartCreating,
  Testimony,
} from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <OurProduct />
      <Testimony />
      <OurWorks />
      <HowWeWork />
      <Application />
      <StartCreating />
      <Footer />
    </main>
  );
}
