import { MessageSquare, BarChart3, Film, Image, Users, Zap } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    iconBg: "bg-teal-50",
    iconColor: "text-accent",
    stat: "Unlimited",
    statLabel: "AUTOMATED DMS",
    title: "Smart DM Automation",
    description: "Set up keyword triggers on Reels. Auto-reply to comments with personalized messages.",
  },
  {
    icon: BarChart3,
    iconBg: "bg-blue-50",
    iconColor: "text-accent-blue",
    stat: "Real-time",
    statLabel: "ANALYTICS",
    title: "Deep Analytics",
    description: "Track Read, Replied & Click rates to optimize your campaigns and content.",
  },
  {
    icon: Film,
    iconBg: "bg-purple-50",
    iconColor: "text-instagram-purple",
    stat: "Viral",
    statLabel: "REELS MANAGEMENT",
    title: "Reels & Posts Hub",
    description: "Upload, schedule, and manage all your content from one powerful dashboard.",
  },
  {
    icon: Image,
    iconBg: "bg-pink-50",
    iconColor: "text-instagram-pink",
    stat: "Bulk",
    statLabel: "CONTENT UPLOAD",
    title: "Content Library",
    description: "Store and organize your posts, reels, and stories for easy access and reuse.",
  },
  {
    icon: Users,
    iconBg: "bg-orange-50",
    iconColor: "text-instagram-orange",
    stat: "Multi-User",
    statLabel: "TEAM ACCESS",
    title: "Team Collaboration",
    description: "Enable your entire team to manage DMs and content on a single account.",
  },
  {
    icon: Zap,
    iconBg: "bg-yellow-50",
    iconColor: "text-accent-yellow",
    stat: "Instant",
    statLabel: "LEAD CAPTURE",
    title: "Lead Generation",
    description: "Convert comments to leads instantly with automated DM funnels.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 gradient-teal-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
          Advanced Features
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          Drive conversions with powerful creator tools.
        </p>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-14 h-14 ${feature.iconBg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
                </div>
                <div className="text-right">
                  <p className="font-bold text-foreground">{feature.stat}</p>
                  <p className="text-[10px] text-accent uppercase tracking-wider">{feature.statLabel}</p>
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
