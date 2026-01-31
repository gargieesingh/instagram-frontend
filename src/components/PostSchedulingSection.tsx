import { Button } from "@/components/ui/button";
import { Calendar, Clock, TrendingUp, Zap } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Visual Content Calendar",
    description: "Plan your entire month at a glance with drag-and-drop scheduling.",
  },
  {
    icon: Clock,
    title: "Optimal Timing",
    description: "Auto-schedule posts when your audience is most active for maximum reach.",
  },
  {
    icon: TrendingUp,
    title: "Batch Upload",
    description: "Upload multiple posts at once and schedule them across weeks.",
  },
  {
    icon: Zap,
    title: "Auto-Publish",
    description: "Set it and forget it. Posts go live automatically at scheduled times.",
  },
];

const PostSchedulingSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-float">
              <img
                src="/post_scheduling_mockup.png"
                alt="Post Scheduling Calendar Interface"
                className="w-full h-auto"
              />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-float p-6 max-w-[200px]">
              <p className="text-4xl font-bold gradient-instagram-text">10x</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide mt-1">
                Faster Scheduling
              </p>
            </div>
          </div>

          {/* Right Content - Text */}
          <div className="space-y-8 order-1 lg:order-2">
            <span className="badge-pill bg-purple-50 text-purple-600">
              POST SCHEDULING
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Schedule Posts{" "}
              <span className="gradient-instagram-text">Effortlessly.</span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-lg">
              Plan your content weeks in advance. Our intelligent scheduling
              system ensures your posts go live at the perfect time for maximum
              engagement.
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
              Start Scheduling
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostSchedulingSection;
