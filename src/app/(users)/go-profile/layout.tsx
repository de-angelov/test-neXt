import type { ReactNode } from "react";

export const metadata = {
  title: "Go-Profile",
  description: "Page to go to user profiles",
};

export default function UserProfileLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}