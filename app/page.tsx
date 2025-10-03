import ExplorePlans from "@/components/ExplorePlans";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MeetAnhelina from "@/components/MeetAnhelina";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <MeetAnhelina />
      <ExplorePlans />
      <FAQ />
      <Footer />
    </div>
  );
}
