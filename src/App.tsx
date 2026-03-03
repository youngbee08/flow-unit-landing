import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./components/layouts/MainLayout";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Signup from "./pages/Signup";
import VerifyEmail from "./pages/VerifyEmail";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <Routes>
        <Route path="/get-started" element={<Signup />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/legal/privacy-policy" element={<Privacy />} />
          <Route path="/legal/terms-of-service" element={<Terms />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
