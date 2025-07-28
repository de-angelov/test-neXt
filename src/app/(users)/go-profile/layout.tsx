import type { ReactNode } from "react";

export const metadata = {
  title: "Go-Profile",
  description: "Page to go to user profiles",
};
// needed to set meta info

export default function UserProfileLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}