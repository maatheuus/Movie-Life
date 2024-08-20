import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProtectedRouter from "./ui/ProtectedRouter";
import Spinner from "./ui/Spinner";
import { Toaster } from "react-hot-toast";

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
const FavoritePage = lazy(() => import("./pages/FavoritePage"));

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
        path: "/favorite",
        element: (
          <ProtectedRouter>
            <FavoritePage />
          </ProtectedRouter>
        ),
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
    path: "/new_password",
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

      <Toaster
        position="top-right"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 6000,
          },
          style: {
            fontSize: "18px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "bg-zinc-100",
            color: "text-stone-900",
            zIndex: "9999",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
