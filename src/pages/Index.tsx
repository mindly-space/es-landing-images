import { Header } from "@/components/layout";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Categories } from "@/components/sections/Categories";
import { FAQ } from "@/components/sections/FAQ";
import { UserReviews } from "@/components/sections/UserReviews";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { AppDownload } from "@/components/sections/AppDownload";
import { TherapistHelp } from "@/components/sections/TherapistHelp";
import { SocialProof } from "@/components/sections/SocialProof";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { TherapistShowcase } from "@/components/sections/TherapistShowcase";
import { MapSection } from "@/components/sections/MapSection";
import { AboutUs } from "@/components/sections/AboutUs";
import { HowWeChooseSpecialist } from "@/components/sections/HowWeChooseSpecialist";
import { PressAboutUs } from "@/components/sections/PressAboutUs";

const Index = () => {
  return (
    <div className="bg-white flex flex-col overflow-hidden items-center pb-7">
      <Header />
      <main className="w-full max-w-[1400px] px-4 pt-24 xl:max-w-none xl:px-8">
        <div className="flex flex-col items-center">
          <Hero />
          <div className="max-w-[1400px] w-full flex flex-col items-center">
            <section id="about">
              <AboutUs />
            </section>
            <SocialProof />
            <MapSection />
            <UserReviews />
            <ComparisonTable />
            <Categories />
            <section id="how-it-works">
              <HowItWorks />
            </section>
            <HowWeChooseSpecialist />
            <section id="therapist-showcase" className="py-[32px]">
              <TherapistShowcase />
            </section>
            <TherapistHelp />
            <AppDownload />
            <FAQ />
            <PressAboutUs />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default Index;
