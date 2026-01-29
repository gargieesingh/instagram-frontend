import { Heart, Users, MousePointerClick, TrendingUp } from "lucide-react";

const metrics = [
  {
    icon: Heart,
    iconBg: "bg-pink-50",
    iconColor: "text-instagram-pink",
    value: "98%",
    label: "DM OPEN RATES",
    comparison: "vs 20% in Email",
  },
  {
    icon: MousePointerClick,
    iconBg: "bg-purple-50",
    iconColor: "text-instagram-purple",
    value: "45-60%",
    label: "CLICK RATES",
    comparison: "vs 2-5% in Email",
  },
  {
    icon: Users,
    iconBg: "bg-orange-50",
    iconColor: "text-instagram-orange",
    value: "2Bn+",
    label: "ACTIVE USERS",
    comparison: "Largest Reach",
  },
  {
    icon: TrendingUp,
    iconBg: "bg-blue-50",
    iconColor: "text-accent-blue",
    value: "Top Tier",
    label: "ENGAGEMENT",
    comparison: "Instant Responses",
  },
];

const WhyInstagramSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="text-center mb-8">
          <span className="badge-pill bg-instagram-pink/10 text-instagram-pink">
            UNMATCHED PERFORMANCE
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
          Why Instagram?
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          The definitive channel for modern creator engagement.
        </p>

        {/* Metrics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-lg transition-all duration-300 text-center group hover:-translate-y-1"
            >
              <div className={`w-14 h-14 ${metric.iconBg} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                <metric.icon className={`w-7 h-7 ${metric.iconColor}`} />
              </div>
              <p className="text-4xl font-bold text-foreground mb-2">{metric.value}</p>
              <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-4">
                {metric.label}
              </p>
              <span className="inline-block px-3 py-1 bg-secondary rounded-full text-xs text-muted-foreground">
                {metric.comparison}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyInstagramSection;
