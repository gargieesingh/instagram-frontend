import { Button } from "@/components/ui/button";
import { Sparkles, Wand2, Lightbulb, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Wand2,
    title: "AI Caption Generator",
    description: "Generate engaging captions instantly with AI. Multiple tone options for every brand voice.",
  },
  {
    icon: Sparkles,
    title: "Smart Hashtag Optimizer",
    description: "Get trending hashtag suggestions optimized for maximum reach and engagement.",
  },
  {
    icon: Lightbulb,
    title: "Content Ideas",
    description: "Never run out of ideas. AI suggests creative post concepts tailored to your niche.",
  },
  {
    icon: TrendingUp,
    title: "Engagement Prediction",
    description: "AI predicts post performance and suggests optimal posting times for your audience.",
  },
];

const AIPostCreationSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Text */}
          <div className="space-y-8">
            <span className="badge-pill bg-purple-50 text-purple-600">
              AI-POWERED CREATION
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Create Posts with{" "}
              <span className="gradient-instagram-text">AI Magic.</span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-lg">
              Let AI handle the creative heavy lifting. Generate captions,
              hashtags, and content ideas in seconds. Our intelligent system
              learns your brand voice and creates posts that resonate.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="default" size="lg">
              Try AI Creator
            </Button>
          </div>

          {/* Right Content - Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-float">
              <img
                src="/ai_post_creation_mockup.png"
                alt="AI Post Creation Interface"
                className="w-full h-auto"
              />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-float p-6 max-w-[200px]">
              <p className="text-4xl font-bold gradient-instagram-text">85%</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide mt-1">
                Engagement Boost
              </p>
            </div>

            {/* Second Floating Card */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-float p-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-purple-600">AI</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wide">
                    Powered
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIPostCreationSection;
