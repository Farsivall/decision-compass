import Navbar from "@/components/Navbar";
import GradientBlobs from "@/components/GradientBlobs";
import BackgroundCards from "@/components/BackgroundCards";
import HeroSection from "@/components/HeroSection";
import { WhyNowSection, ProblemSection, CostSection, ToolsFailSection } from "@/components/ProblemSections";
import { IntroducingSection, HowItWorksSection, FeaturesSection } from "@/components/ProductSections";
import { WhoSection, VisionSection, CTASection, Footer } from "@/components/BottomSections";
import StatsSection from "@/components/StatsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <GradientBlobs />
      <BackgroundCards />
      <div className="relative z-10">
        <Navbar />
      <HeroSection />
      <CTASection />
      <WhyNowSection />
      <ProblemSection />
      <WhoSection />
      <CostSection />
      <ToolsFailSection />
      <IntroducingSection />
      <StatsSection />
      <HowItWorksSection />
      <FeaturesSection />
      <VisionSection />
      <Footer />
      </div>
    </div>
  );
};

export default Index;
