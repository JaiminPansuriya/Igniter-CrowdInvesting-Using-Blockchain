import React from "react";
import { Route, Routes } from "react-router-dom";
import { ProjectDetails, CreateProject, Dashboard, Profile } from "./pages";
import { Navbar, FloatingButton } from "./components";
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'

const queryClient = new QueryClient()
const App = () => {
  return (
    // <QueryClientProvider client={queryClient}>
      
    <div className="relative sm:-8 py-6 bg-[#13131a] min-h-screen px-5">
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto">
        <Navbar />
        <div class="text-white rounded-full fixed bottom-5 left-1/2 transform -translate-x-1/2 text-center my-auto z-50">
          <FloatingButton />
        </div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/create-project" element={<CreateProject />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/project-details/:id" element={<ProjectDetails />} />
        </Routes>
      </div>
    </div>
    // </QueryClientProvider>
  );
};

export default App;
