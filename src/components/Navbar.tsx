import { Button } from "@/components/ui/button";
import { Instagram, ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 gradient-instagram rounded-lg flex items-center justify-center">
              <Instagram className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">InstaGrow</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Pricing
            </a>
            <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Product <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Features <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Resources <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="hidden sm:inline-flex">
              Login
            </Button>
            <Button variant="default" size="default">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
