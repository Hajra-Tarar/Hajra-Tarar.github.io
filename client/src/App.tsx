import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Hero from "@/components/sections/Hero";
import Perspective from "@/components/sections/Perspective";
import Projects from "@/components/sections/Projects";
import Reflection from "@/components/sections/Reflection";
import Citations from "@/components/sections/Citations";
import ProjectDetail from "@/pages/ProjectDetail";
import ProjectColoursOfSelf from "@/pages/ProjectColoursOfSelf";

function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-white">
      <Hero />
      <Perspective />
      <Projects />
      <Reflection />
      <Citations />
      
      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border/40">
        <p>© 2025 Vibe Coding.</p>
      </footer>
    </main>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/project/bennys-adventure" component={ProjectDetail} />
      <Route path="/project/colours-of-self" component={ProjectColoursOfSelf} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
