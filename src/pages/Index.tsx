import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import DMAutomationSection from "@/components/DMAutomationSection";
import PostSchedulingSection from "@/components/PostSchedulingSection";
import CommentAutomationSection from "@/components/CommentAutomationSection";
import WhyInstagramSection from "@/components/WhyInstagramSection";
import FeaturesSection from "@/components/FeaturesSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <DMAutomationSection />
        <PostSchedulingSection />
        <CommentAutomationSection />
        <WhyInstagramSection />
        <FeaturesSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
