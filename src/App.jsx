import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/app_layout";
import Landing from "./pages/landing";
import Onboarding from "./pages/onboarding";
import JobListing from "./pages/job_listing";
import Job from "./pages/job";
import PostJob from "./pages/post_job";
import SavedJobs from "./pages/saved_job";
import MyJobs from "./pages/my_jobs";
import "./App.css";
import { ThemeProvider } from "./components/ui/theme-provider";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/onboarding",
        element: <Onboarding />,
      },
      {
        path: "/jobs",
        element: <JobListing />,
      },
      {
        path: "/jobs:/:id",
        element: <Job />,
      },
      {
        path: "/post-job",
        element: <PostJob />,
      },
      {
        path: "/saved-job",
        element: <SavedJobs />,
      },
      {
        path: "/my-jobs",
        element: <MyJobs />,
      },
    ],
  },
]);
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
