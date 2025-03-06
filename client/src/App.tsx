import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Sidebar from "@/components/layout/sidebar";
import Home from "@/pages/home";
import SchoolPage from "@/pages/school";
import TeamPage from "@/pages/team";
import NotFound from "@/pages/not-found";
import LoginPage from "@/pages/login"; // Import LoginPage
import { Amplify } from "aws-amplify";
import awsExports from "../../src/aws-exports";
import { useAuth } from "./hooks/useAuth"; // Import custom hook

Amplify.configure(awsExports);

function Router() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <Switch>
          <Route path="/" component={SchoolPage} />
          <Route path="/schools/:id" component={SchoolPage} />
          <Route path="/teams/:id" component={TeamPage} />
          <Route path="/login" component={LoginPage} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </div>
  );
}

function App() {
  const { isAuthenticated } = useAuth();

  // Always render Router, let useAuth handle initial redirect
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;