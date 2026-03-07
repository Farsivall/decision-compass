import { ArrowRight } from "lucide-react";

const navLinks = [
  { href: "#problem", label: "Problem" },
  { href: "#introducing", label: "Introducing Aql" },
  { href: "#who", label: "Who it's for" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#features", label: "Features" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 opacity-0 animate-nav-in">
      <div className="flex h-14 items-center justify-between rounded-2xl border border-border bg-background/70 px-4 shadow-lg shadow-black/5 backdrop-blur-xl md:px-6 w-full max-w-5xl min-w-0 md:min-w-[640px]">
        <a href="#" className="flex items-center gap-2 rounded-lg outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring">
          <div className="h-8 w-8 rounded-xl bg-primary flex items-center justify-center shadow-md">
            <span className="text-primary-foreground font-bold text-sm">A</span>
          </div>
          <span className="text-lg font-semibold text-foreground">Aql</span>
        </a>
        <div className="hidden md:flex items-center gap-8 md:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 px-1"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#cta"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200"
        >
          Sign up for the waitlist <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
