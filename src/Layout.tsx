import Navbar from "./components/Navbar";
import { ReactNode } from "react";
import styled from "styled-components";

const DIV = styled.div`
  margin: 0;
  padding: 0;
`;

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DIV>
      <Navbar />
      {children}
    </DIV>
  );
}
