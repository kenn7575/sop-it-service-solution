import "./App.css";
import Layout from "./layout/layout";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Login from "@/pages/login/login";
import UdlånPage from "./pages/udlån/udlån";

export function Themes({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {children}
    </ThemeProvider>
  );
}
export default function App() {
  return (
    <Themes
      children={
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<h1>hello</h1>} />
            <Route path="/indstillinger" element={<h1>hello</h1>} />
            <Route path="/udlaan" element={<UdlånPage />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      }
    />
  );
}
