import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl gradient-teal-bg p-8 sm:p-12 lg:p-16 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full translate-x-1/3 translate-y-1/3" />
          
          <div className="relative text-center max-w-3xl mx-auto">
            {/* Badge */}
            <div className="mb-8">
              <span className="badge-pill bg-white shadow-sm text-foreground">
                <span className="w-2 h-2 rounded-full bg-accent" />
                START GROWING TODAY
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to <span className="gradient-instagram-text">Scale?</span>
            </h2>

            {/* Description */}
            <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
              Join 500+ creators using InstaGrow to automate DMs, grow engagement, 
              and sell on Instagram. Get your official account in minutes.
            </p>

            {/* CTA Button */}
            <Button variant="default" size="xl" className="mb-8">
              Get Started for FREE
              <ArrowRight className="w-5 h-5" />
            </Button>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                No Credit Card
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                14-Day Free Trial
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                Cancel Anytime
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
