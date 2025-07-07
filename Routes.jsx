import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
// Add your imports here
import SalesPerformanceOverviewDashboard from "pages/sales-performance-overview-dashboard";
import ChatInterface from "pages/chat-interface";
import EnhancedChatInterface from "pages/enhanced-chat-interface-with-navigation-and-transaction-directory";
import NotFound from "pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your routes here */}
        <Route path="/" element={<EnhancedChatInterface />} />
        <Route path="/sales-performance-overview-dashboard" element={<SalesPerformanceOverviewDashboard />} />
        <Route path="/chat-interface" element={<ChatInterface />} />
        <Route path="/enhanced-chat-interface-with-navigation-and-transaction-directory" element={<EnhancedChatInterface />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;