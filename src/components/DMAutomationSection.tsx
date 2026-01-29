import { Button } from "@/components/ui/button";
import { Zap, CheckCircle2, MessageCircle } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Comment-to-DM Automation",
    description: "Auto-send DMs when users comment specific keywords on your Reels.",
  },
  {
    icon: CheckCircle2,
    title: "Verified Creator Badge",
    description: "Build trust with official verification and premium features.",
  },
];

const DMAutomationSection = () => {
  return (
    <section className="py-20 gradient-teal-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <span className="badge-pill bg-accent text-accent-foreground">
              DM AUTOMATION
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Automate DMs{" "}
              <span className="gradient-instagram-text">Instantly.</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-lg">
              Set up keyword triggers on your Reels and Posts. When followers 
              comment, automatically send personalized DMs with 98% open rates.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="default" size="lg">
              Get Started Now
            </Button>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative">
            <div className="relative mx-auto w-72 lg:w-80">
              {/* Phone Frame */}
              <div className="bg-slate-900 rounded-[3rem] p-2 shadow-float">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-white px-6 py-3 flex justify-between items-center text-xs">
                    <span className="font-medium">3:35</span>
                    <div className="flex gap-1 items-center">
                      <div className="w-4 h-4 rounded-full bg-slate-200" />
                      <span className="text-[10px]">5G</span>
                      <div className="flex gap-0.5">
                        <div className="w-1 h-2 bg-slate-400 rounded-sm" />
                        <div className="w-1 h-3 bg-slate-400 rounded-sm" />
                        <div className="w-1 h-4 bg-slate-400 rounded-sm" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Chat Header */}
                  <div className="px-4 py-3 border-b flex items-center gap-3">
                    <div className="w-8 h-8 gradient-instagram rounded-full" />
                    <div>
                      <p className="text-sm font-semibold flex items-center gap-1">
                        Creator Inc. 
                        <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </p>
                      <p className="text-xs text-muted-foreground">Online</p>
                    </div>
                  </div>

                  {/* Chat Content */}
                  <div className="p-4 space-y-4 h-80 bg-slate-50">
                    {/* Product Message */}
                    <div className="bg-white rounded-2xl p-3 shadow-sm max-w-[80%]">
                      <div className="w-full aspect-square bg-gradient-to-br from-teal-100 to-teal-50 rounded-xl mb-2 flex items-center justify-center">
                        <span className="text-4xl">🎧</span>
                      </div>
                      <p className="text-sm">
                        Your exclusive <span className="font-bold">PRO Bundle</span> is ready! 
                        Use code <span className="font-bold">SAVE20</span> for 20% off!
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">Offer expires in 24hrs</p>
                    </div>

                    {/* User Reply */}
                    <div className="flex justify-end">
                      <div className="gradient-instagram text-white rounded-2xl px-4 py-2 text-sm max-w-[70%]">
                        Thanks! Just ordered! 🙌
                        <div className="flex justify-end mt-1">
                          <svg className="w-4 h-4 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating decorative arrow */}
              <div className="absolute -top-4 -right-8 text-accent">
                <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
                  <path d="M10 50 Q 40 45 50 15" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" fill="none"/>
                  <polygon points="48,10 55,18 46,20" fill="currentColor"/>
                </svg>
              </div>
            </div>

            {/* Stats Card */}
            <div className="absolute bottom-4 left-0 lg:-left-8 bg-white rounded-2xl shadow-float p-4">
              <p className="text-3xl font-bold gradient-instagram-text">98%</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Open Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DMAutomationSection;
