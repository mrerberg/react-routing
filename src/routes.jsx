import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/main";
import { About } from "./pages/about";
import { NotFound } from "./pages/not-found";
import { Profile } from "./pages/profile";
import { Account } from "./pages/account";
import { Wallet } from "./pages/wallet";
import { ProtectedRoute } from "./components/protected-route";

export const AppRoutes = ({ user }) => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile/:id" element={<Profile />} />

      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/account" element={<Account />} />
        <Route path="/wallet" element={<Wallet />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
