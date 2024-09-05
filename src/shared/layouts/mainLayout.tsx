import { type ReactNode } from "react";
import Container from "../components/container";
import Header from "../components/header";
import Footer from "../components/footer";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Container>{children}</Container>
      </main>
      <Footer />
    </div>
  );
}
