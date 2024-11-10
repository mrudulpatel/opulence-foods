import About from "@/components/About";
import ContactUs from "@/components/ContactUs";
import Hero from "@/components/Hero";
import HomeMenu from "@/components/HomeMenu";

export default function Home() {
  return (
    <>
      <Hero />

      <HomeMenu />
      <About />
      <ContactUs />
    </>
  );
}
