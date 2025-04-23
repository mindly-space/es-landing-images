import * as React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { IntercomLauncher } from "./components/intercom/IntercomLauncher";
import { LanguageProvider } from "./contexts/LanguageContext";
import { useAnalytics } from "./hooks/useAnalytics";
import { EventName } from "./lib/mixpanel";

const queryClient = new QueryClient();

const App = () => {
  const { track } = useAnalytics();

  React.useEffect(() => {
    track(EventName.MAIN_SCREEN_VIEWED);
  }, []);

  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <LanguageProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
            <Toaster />
            <Sonner />
            <IntercomLauncher />
          </LanguageProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
