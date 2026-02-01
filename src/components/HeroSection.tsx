import { ArrowRight, Play, TrendingUp, Send, Users, Heart, MessageCircle, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-0 lg:pt-40 overflow-hidden bg-white">
      {/* Background Blobs */}
      <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-3xl -z-10 animate-blob" />
      <div className="absolute bottom-40 left-10 w-[400px] h-[400px] bg-pink-100/40 rounded-full blur-3xl -z-10 animate-blob" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8 max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-purple-600 animate-pulse" />
              <span className="text-sm font-semibold text-purple-700">#1 Instagram Growth Platform</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-slate-900">
              Grow Your
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Instagram</span>
              <br />
              On Autopilot
            </h1>

            {/* Description */}
            <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
              Automate DMs, schedule posts, and convert comments into customers with AI-powered Instagram marketing tools.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all shadow-lg shadow-purple-200 hover:shadow-purple-300 hover:-translate-y-1"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 font-semibold text-lg text-slate-700 px-8 py-4 rounded-xl transition-all hover:border-slate-300 hover:shadow-md"
              >
                <Play className="w-5 h-5 fill-slate-700" />
                Watch Demo
              </button>
            </div>
            
            {/* Social Proof */}
            <div className="flex items-center gap-5 pt-6">
              <div className="flex -space-x-3">
                {[
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
                  'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop',
                  'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop',
                ].map((src, i) => (
                  <img 
                    key={i}
                    src={src}
                    alt={`User ${i + 1}`}
                    className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-md"
                  />
                ))}
              </div>
              <div className="border-l border-slate-200 pl-5">
                <p className="text-base font-bold text-slate-900">2,500+ Creators</p>
                <div className="flex items-center gap-1">
                   <div className="flex text-yellow-400">★★★★★</div>
                   <span className="text-sm font-medium text-slate-500 ml-1">4.9/5</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Rich Visual Composition */}
          <div className="relative h-[600px] flex items-center justify-center hidden lg:flex">
            
            {/* Colorful Gradient Rings */}
            <div className="absolute w-[500px] h-[500px] rounded-full border-2 border-dashed border-purple-200/50" />
            <div className="absolute w-[400px] h-[400px] rounded-full border border-pink-200/60" />
            <div className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-br from-purple-50 to-pink-50" />
            
            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 600" fill="none">
              <path d="M300 300 L150 150" stroke="url(#gradient1)" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
              <path d="M300 300 L450 180" stroke="url(#gradient1)" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
              <path d="M300 300 L480 380" stroke="url(#gradient1)" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
              <path d="M300 300 L420 480" stroke="url(#gradient1)" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
              <path d="M300 300 L120 400" stroke="url(#gradient1)" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
            </svg>

            {/* Central Icon */}
            <div className="relative z-20 w-28 h-28 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-3xl flex items-center justify-center shadow-2xl shadow-purple-400/40 animate-glow">
              <svg 
                className="w-14 h-14 text-white" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </div>

            {/* Floating Card 1 - Top Left */}
            <div className="absolute top-16 left-8 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-float z-10">
              <div className="w-11 h-11 bg-green-100 rounded-xl flex items-center justify-center">
                <Send className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Broadcast Sent</p>
                <p className="text-xs text-slate-500">Just now to 5k users</p>
              </div>
            </div>

            {/* Floating Card 2 - Top Right */}
            <div className="absolute top-24 right-0 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-float z-10" style={{ animationDelay: '1s' }}>
              <div className="w-11 h-11 bg-purple-100 rounded-xl flex items-center justify-center">
                <Users className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-lg font-bold text-slate-900">24.5K</p>
                <p className="text-xs text-slate-500 uppercase tracking-wider">Followers</p>
              </div>
            </div>

            {/* Floating Card 3 - Right */}
            <div className="absolute top-1/2 -translate-y-1/2 right-0 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-float-delayed z-10">
              <div className="w-11 h-11 bg-blue-100 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-lg font-bold text-slate-900">98%</p>
                <p className="text-xs text-slate-500 uppercase tracking-wider">Open Rate</p>
              </div>
            </div>

            {/* Floating Card 4 - Bottom Right */}
            <div className="absolute bottom-24 right-12 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-float z-10" style={{ animationDelay: '2s' }}>
              <div className="w-11 h-11 bg-red-100 rounded-xl flex items-center justify-center">
                <Heart className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <p className="text-lg font-bold text-slate-900">+247%</p>
                <p className="text-xs text-slate-500 uppercase tracking-wider">Engagement</p>
              </div>
            </div>

            {/* Floating Card 5 - Bottom Left */}
            <div className="absolute bottom-32 left-4 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-float-delayed z-10">
              <div className="w-11 h-11 bg-orange-100 rounded-xl flex items-center justify-center">
                <Zap className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <p className="text-lg font-bold text-slate-900">5 min</p>
                <p className="text-xs text-slate-500 uppercase tracking-wider">Setup</p>
              </div>
            </div>

            {/* Floating Card 6 - Left */}
            <div className="absolute top-1/3 left-0 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-float z-10" style={{ animationDelay: '3s' }}>
              <div className="w-11 h-11 bg-pink-100 rounded-xl flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-pink-600" />
              </div>
              <div>
                <p className="text-lg font-bold text-slate-900">15.2K</p>
                <p className="text-xs text-slate-500 uppercase tracking-wider">DMs Sent</p>
              </div>
            </div>

            {/* Decorative Dots */}
            <div className="absolute top-10 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-pulse" />
            <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/3 right-10 w-2 h-2 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
          </div>
        </div>

        {/* Video Demo Section */}
        <div className="relative mx-auto max-w-5xl mt-16 lg:mt-20">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/60 bg-slate-900 group cursor-pointer">
            {/* Video Thumbnail */}
            <div className="relative aspect-video">
              {/* Browser Chrome Header */}
              <div className="absolute top-0 left-0 right-0 flex items-center gap-2 px-4 py-3 bg-slate-800/90 backdrop-blur-sm z-10">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="ml-3 px-3 py-1 bg-slate-700/50 rounded text-xs text-slate-400 font-medium">
                  app.instagrow.com/dashboard
                </div>
              </div>
              
              {/* Dashboard Screenshot/Thumbnail */}
              <div className="w-full h-full bg-gradient-to-br from-slate-800 via-slate-900 to-purple-900 pt-12">
                <div className="p-6 h-full">
                  <div className="grid grid-cols-12 gap-4 h-full opacity-60">
                    {/* Sidebar */}
                    <div className="col-span-2 bg-slate-800/50 rounded-xl p-3 space-y-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500" />
                      <div className="h-2 w-full bg-slate-700 rounded" />
                      <div className="h-2 w-3/4 bg-slate-700 rounded" />
                      <div className="h-2 w-5/6 bg-slate-700 rounded" />
                    </div>
                    {/* Main Content */}
                    <div className="col-span-10 space-y-4">
                      <div className="flex justify-between">
                        <div className="h-6 w-40 bg-slate-700 rounded" />
                        <div className="h-8 w-24 bg-purple-600 rounded" />
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="h-24 bg-slate-800/50 rounded-xl" />
                        <div className="h-24 bg-slate-800/50 rounded-xl" />
                        <div className="h-24 bg-slate-800/50 rounded-xl" />
                      </div>
                      <div className="h-32 bg-slate-800/50 rounded-xl" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors duration-300">
                <div className="w-20 h-20 lg:w-24 lg:h-24 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 lg:w-10 lg:h-10 text-purple-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* Video Caption */}
          <p className="text-center text-sm text-slate-500 mt-4">See how InstaGrow helps you automate your Instagram growth in minutes</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
