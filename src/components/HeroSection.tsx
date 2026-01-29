import { Button } from "@/components/ui/button";
import { ArrowRight, Send, TrendingUp, Play, Heart, MessageCircle, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero-bg" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-accent/5 via-transparent to-transparent rounded-full -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-instagram-pink/5 via-transparent to-transparent rounded-full translate-y-1/2 -translate-x-1/4" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-card border border-border">
              <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-muted-foreground">The #1 Instagram Growth Platform</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight">
              Scale Your Brand{" "}
              <br className="hidden sm:block" />
              <span className="gradient-instagram-text">with Instagram</span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              The smartest Instagram Marketing Platform to Automate DMs based on comments, 
              grow engagement, and convert followers into paying customers.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <Button variant="instagram" size="xl" className="group">
                Try InstaGrow for FREE
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="gap-2 bg-white hover:bg-white/80">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <Play className="w-3 h-3 text-primary-foreground fill-primary-foreground ml-0.5" />
                </div>
                Watch Demo
              </Button>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div 
                    key={i} 
                    className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-xs font-semibold text-slate-600"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <p className="font-semibold text-foreground">500+ Creators</p>
                <p className="text-muted-foreground">already growing</p>
              </div>
            </div>
          </div>

          {/* Right Content - Floating Cards */}
          <div className="relative hidden lg:flex items-center justify-center min-h-[500px]">
            {/* Main phone mockup */}
            <div className="relative z-10">
              <div className="w-64 bg-slate-900 rounded-[2.5rem] p-2 shadow-float">
                <div className="bg-white rounded-[2rem] overflow-hidden">
                  {/* Phone header */}
                  <div className="bg-white px-4 py-2 flex justify-between items-center text-[10px]">
                    <span className="font-semibold">9:41</span>
                    <div className="w-16 h-5 bg-slate-900 rounded-full" />
                    <div className="flex gap-1 items-center">
                      <div className="w-4 h-2.5 bg-slate-400 rounded-sm" />
                    </div>
                  </div>
                  
                  {/* Instagram header */}
                  <div className="px-4 py-3 border-b flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 gradient-instagram rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">C</span>
                      </div>
                      <div>
                        <p className="text-xs font-semibold flex items-center gap-1">
                          creator_pro
                          <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </p>
                        <p className="text-[10px] text-muted-foreground">Reel • 2h ago</p>
                      </div>
                    </div>
                    <div className="text-muted-foreground">•••</div>
                  </div>

                  {/* Reel content */}
                  <div className="aspect-[4/5] bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 flex items-center justify-center relative">
                    <div className="text-center">
                      <div className="text-6xl mb-2">🎬</div>
                      <p className="text-sm font-medium text-slate-600">Your Reel</p>
                    </div>
                    {/* Engagement icons on right */}
                    <div className="absolute right-3 bottom-4 flex flex-col gap-4 items-center">
                      <div className="flex flex-col items-center">
                        <Heart className="w-6 h-6 text-white drop-shadow-lg" />
                        <span className="text-[10px] text-white drop-shadow font-medium">12.4K</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <MessageCircle className="w-6 h-6 text-white drop-shadow-lg" />
                        <span className="text-[10px] text-white drop-shadow font-medium">847</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <Send className="w-6 h-6 text-white drop-shadow-lg" />
                        <span className="text-[10px] text-white drop-shadow font-medium">Share</span>
                      </div>
                    </div>
                  </div>

                  {/* Comment trigger */}
                  <div className="p-3 border-t">
                    <div className="flex items-start gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-teal-400 to-teal-600" />
                      <div className="flex-1">
                        <p className="text-[10px]">
                          <span className="font-semibold">user_fan</span>{" "}
                          <span className="text-muted-foreground">commented:</span>
                        </p>
                        <p className="text-xs font-medium text-accent mt-0.5">"LINK" 🔥</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating notification card - top right */}
            <div className="absolute top-4 right-0 bg-white rounded-2xl shadow-float p-4 animate-float z-20 border border-border/50">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 gradient-instagram rounded-xl flex items-center justify-center">
                  <Send className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Auto DM Sent!</p>
                  <p className="text-xs text-accent font-medium">Just now to @user_fan</p>
                </div>
              </div>
            </div>

            {/* Stats card - bottom left */}
            <div className="absolute bottom-8 -left-4 bg-white rounded-2xl shadow-float p-4 animate-float z-20 border border-border/50" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-accent-blue" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">98%</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium">Reply Rate</p>
                </div>
              </div>
            </div>

            {/* Users card - top left */}
            <div className="absolute top-16 -left-8 bg-white rounded-2xl shadow-float p-4 animate-float z-20 border border-border/50" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-accent rounded-xl flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">5.2K</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium">DMs Today</p>
                </div>
              </div>
            </div>

            {/* Keyword trigger badge - middle right */}
            <div className="absolute top-1/2 -right-6 bg-primary text-primary-foreground rounded-full px-4 py-2 shadow-lg animate-float z-20 flex items-center gap-2" style={{ animationDelay: '1.5s' }}>
              <span className="text-xs font-semibold">Trigger: "LINK"</span>
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            </div>

            {/* Decorative gradient blobs */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-accent/20 via-transparent to-instagram-pink/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>

      {/* Dashboard Preview Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20 lg:mt-28 relative">
        <div className="text-center mb-8">
          <p className="text-sm text-muted-foreground font-medium">Powerful Dashboard to Manage Everything</p>
        </div>
        <div className="relative rounded-2xl overflow-hidden shadow-float bg-gradient-to-b from-slate-200 to-slate-300 p-1.5 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl overflow-hidden">
            {/* Browser chrome */}
            <div className="bg-slate-100 border-b border-slate-200 h-10 flex items-center gap-2 px-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-white rounded-md px-4 py-1 text-xs text-muted-foreground border border-slate-200 flex items-center gap-2">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  app.instagrow.io/dashboard
                </div>
              </div>
            </div>
            
            {/* Dashboard content */}
            <div className="aspect-[16/9] bg-slate-50 p-4 lg:p-6 grid grid-cols-12 gap-4">
              {/* Sidebar */}
              <div className="col-span-2 bg-slate-800 rounded-xl p-3 flex flex-col gap-2">
                <div className="w-8 h-8 gradient-instagram rounded-lg mb-4" />
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className={`h-8 rounded-lg ${i === 2 ? 'bg-slate-700' : 'bg-slate-800 hover:bg-slate-700'} transition-colors`} />
                ))}
              </div>
              
              {/* Main content */}
              <div className="col-span-7 space-y-4">
                {/* Stats row */}
                <div className="grid grid-cols-5 gap-3">
                  {[
                    { color: '#ef4444', value: '19', label: 'Sent' },
                    { color: '#3b82f6', value: '149', label: 'Opened' },
                    { color: '#14b8a6', value: '213', label: 'Replied' },
                    { color: '#f97316', value: '12', label: 'Clicked' },
                    { color: '#a855f7', value: '34', label: 'Converted' },
                  ].map((stat, i) => (
                    <div key={i} className="bg-white rounded-lg p-3 shadow-sm border border-slate-100">
                      <div className="h-12 rounded-md mb-2" style={{ backgroundColor: stat.color }} />
                      <p className="text-lg font-bold text-center">{stat.value}</p>
                      <p className="text-[10px] text-muted-foreground text-center uppercase">{stat.label}</p>
                    </div>
                  ))}
                </div>
                
                {/* Chart area */}
                <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 h-32 flex items-end gap-2 pb-2">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 95, 50].map((h, i) => (
                    <div 
                      key={i} 
                      className="flex-1 bg-gradient-to-t from-accent to-accent/60 rounded-t-sm transition-all hover:from-accent/80"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>

                {/* Automation rules */}
                <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
                  <p className="text-xs font-semibold mb-3">Active Automations</p>
                  <div className="space-y-2">
                    {[
                      { trigger: 'LINK', response: 'Send product link DM' },
                      { trigger: 'INFO', response: 'Send info carousel' },
                    ].map((rule, i) => (
                      <div key={i} className="flex items-center gap-3 p-2 bg-slate-50 rounded-lg">
                        <span className="px-2 py-1 bg-accent/10 text-accent text-[10px] font-bold rounded">"{rule.trigger}"</span>
                        <span className="text-[10px] text-muted-foreground">→</span>
                        <span className="text-[10px] text-foreground font-medium">{rule.response}</span>
                        <div className="ml-auto w-8 h-4 bg-accent rounded-full relative">
                          <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Right panel */}
              <div className="col-span-3 space-y-4">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
                  <p className="text-xs font-semibold mb-3">Recent DMs</p>
                  <div className="space-y-3">
                    {[
                      { name: 'Sarah M.', msg: 'Thanks for the link! 🙌', time: '2m' },
                      { name: 'Alex K.', msg: 'Just ordered!', time: '5m' },
                      { name: 'Mike R.', msg: 'This is amazing', time: '8m' },
                      { name: 'Emma T.', msg: 'Love your content', time: '12m' },
                    ].map((dm, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-[10px] font-semibold text-slate-600">
                          {dm.name[0]}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] font-semibold truncate">{dm.name}</p>
                          <p className="text-[9px] text-muted-foreground truncate">{dm.msg}</p>
                        </div>
                        <span className="text-[9px] text-muted-foreground">{dm.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
                  <p className="text-xs font-semibold mb-2">Performance</p>
                  <div className="flex items-center gap-2">
                    <div className="text-2xl font-bold text-accent">+247%</div>
                    <div className="text-[10px] text-muted-foreground">vs last week</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/5 transition-colors cursor-pointer group">
            <div className="w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform opacity-90 group-hover:opacity-100">
              <Play className="w-6 h-6 text-accent fill-accent ml-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
