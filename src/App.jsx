import SharedLayout from "./components/layout/sharedlayout";
import Homepage from "./pages/homepage/homepage";
import About from "./pages/aboutpage/aboutpage";
import Build from "./pages/buildpage/build";
import Sandbox from "./pages/sandbox/sandbox";
import Contact from "./pages/contact/Contact";
import Services from "./pages/services/Services";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

// Create a new instance of QueryClient
const queryClient = new QueryClient();

const App = () => {
  return (
    <BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Homepage />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="build" element={<Build />} />
            <Route path="sandbox" element={<Sandbox />} />
            <Route path="services/:id" element={<Services />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
