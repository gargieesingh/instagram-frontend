import { Clock, Zap, Search, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Clock,
    iconBg: "bg-red-50",
    iconColor: "text-accent-red",
    value: "20+",
    unit: "Days",
    description: "saved on manual DMs",
    company: "NIKE",
  },
  {
    icon: Zap,
    iconBg: "bg-yellow-50",
    iconColor: "text-accent-yellow",
    value: "98%",
    unit: "",
    description: "faster response time",
    company: "Sephora",
  },
  {
    icon: Search,
    iconBg: "bg-teal-50",
    iconColor: "text-accent",
    value: "300%",
    unit: "",
    description: "increase in engagement",
    company: "GymShark",
  },
  {
    icon: TrendingUp,
    iconBg: "bg-blue-50",
    iconColor: "text-accent-blue",
    value: "6x",
    unit: "",
    description: "faster lead conversion",
    company: "Fashion Nova",
  },
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="text-center mb-8">
          <span className="badge-pill bg-accent/10 text-accent">
            <span className="w-2 h-2 rounded-full bg-accent" />
            PROVEN RESULTS
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16">
          Trusted by Top Creators
        </h2>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-lg transition-shadow duration-300"
            >
              <div className={`w-12 h-12 ${stat.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
              </div>
              <div className="mb-2">
                <span className="text-4xl font-bold text-foreground">{stat.value}</span>
                {stat.unit && <span className="text-xl font-medium text-muted-foreground ml-1">{stat.unit}</span>}
              </div>
              <p className="text-muted-foreground text-sm mb-4">{stat.description}</p>
              <p className="text-xs font-medium text-muted-foreground/60 uppercase tracking-wider">
                {stat.company}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
