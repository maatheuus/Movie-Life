import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProtectedRouter from "./ui/ProtectedRouter";
import Spinner from "./ui/Spinner";

const PageNotFound = lazy(() => import("./ui/PageNotFound"));
const Home = lazy(() => import("./pages/Home"));
const Explore = lazy(() => import("./pages/Explore"));
const DetailsPage = lazy(() => import("./pages/DetailsPage"));
const SearchPage = lazy(() => import("./pages/SearchPage"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const AccountPage = lazy(() => import("./pages/AccountPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const ForgotPasswordPage = lazy(() => import("./pages/ForgotPasswordPage"));
const ResetPasswordPage = lazy(() => import("./pages/ResetPasswordPage"));
const NewPasswordPage = lazy(() => import("./pages/NewPasswordPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: ":explore",
        element: <Explore />,
      },
      {
        path: ":explore/:id",
        element: <DetailsPage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/account",
        element: (
          <ProtectedRouter>
            <AccountPage />
          </ProtectedRouter>
        ),
      },
    ],
  },

  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignUpPage /> },
  { path: "/forgot", element: <ForgotPasswordPage /> },
  {
    path: "/reset",
    element: <ResetPasswordPage />,
  },
  {
    path: "newPassword",
    element: <NewPasswordPage />,
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <Suspense fallback={<Spinner />}>
        <RouterProvider router={router} />
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
