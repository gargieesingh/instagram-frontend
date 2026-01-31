import { Button } from "@/components/ui/button";
import { MessageSquareText, Sparkles, Target, TrendingUp } from "lucide-react";

const features = [
  {
    icon: MessageSquareText,
    title: "Keyword Triggers",
    description: "Set up smart triggers that detect specific keywords in comments automatically.",
  },
  {
    icon: Sparkles,
    title: "Instant Replies",
    description: "Respond to comments in seconds with personalized automated messages.",
  },
  {
    icon: Target,
    title: "Lead Capture",
    description: "Convert engaged commenters into leads with automated follow-up sequences.",
  },
  {
    icon: TrendingUp,
    title: "Boost Engagement",
    description: "Increase comment response rates by 300% with intelligent automation.",
  },
];

const CommentAutomationSection = () => {
  return (
    <section className="py-20 gradient-teal-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Text */}
          <div className="space-y-8">
            <span className="badge-pill bg-accent text-accent-foreground">
              COMMENT AUTOMATION
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Automate Comments{" "}
              <span className="gradient-instagram-text">Intelligently.</span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-lg">
              Never miss an engagement opportunity. Our AI-powered comment
              automation responds instantly to keywords, turning comments into
              conversations and conversations into conversions.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-accent" />
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
              Automate Now
            </Button>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-float">
              <img
                src="/comment_automation_mockup.png"
                alt="Comment Automation Workflow Interface"
                className="w-full h-auto"
              />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-float p-6 max-w-[200px]">
              <p className="text-4xl font-bold gradient-instagram-text">92%</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide mt-1">
                Response Rate
              </p>
            </div>

            {/* Second Floating Card */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-float p-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-accent">+45%</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wide">
                    Engagement
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

export default CommentAutomationSection;
