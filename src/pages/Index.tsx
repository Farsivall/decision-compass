import Navbar from "@/components/Navbar";
import GradientBlobs from "@/components/GradientBlobs";
import HeroSection from "@/components/HeroSection";
import { WhyNowSection, ProblemSection, CostSection, ToolsFailSection } from "@/components/ProblemSections";
import { IntroducingSection, HowItWorksSection, FeaturesSection } from "@/components/ProductSections";
import { ExampleSection, WhoSection, VisionSection, CTASection, Footer } from "@/components/BottomSections";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <GradientBlobs />
      <Navbar />
      <HeroSection />
      <WhyNowSection />
      <ProblemSection />
      <CostSection />
      <ToolsFailSection />
      <IntroducingSection />
      <HowItWorksSection />
      <FeaturesSection />
      <ExampleSection />
      <WhoSection />
      <VisionSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
