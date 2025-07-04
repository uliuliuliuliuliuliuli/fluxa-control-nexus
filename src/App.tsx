
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import Index from "./pages/Index";
import Climate from "./pages/Climate";
import IrrigationControl from "./pages/IrrigationControl";
import History from "./pages/History";
import Weather from "./pages/Weather";
import GpeInterface from "./pages/GpeInterface";
import ControlRoom from "./pages/ControlRoom";
import NotFound from "./pages/NotFound";
import AlarmManagement from "./pages/AlarmManagement";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/climate" element={<Layout><Climate /></Layout>} />
          <Route path="/irrigation" element={<Layout><IrrigationControl /></Layout>} />
          <Route path="/history" element={<Layout><History /></Layout>} />
          <Route path="/weather" element={<Layout><Weather /></Layout>} />
          <Route path="/gpe" element={<Layout><GpeInterface /></Layout>} />
          <Route path="/alarm-management" element={<Layout><AlarmManagement /></Layout>} />
          <Route path="/control-room" element={<Layout><ControlRoom /></Layout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
