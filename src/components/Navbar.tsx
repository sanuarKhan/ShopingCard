import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const glitchAnimation = keyframes`
    0% {
        transform: translate(0);
    }
    20% {
        transform: translate(-2px, 2px);
    }
    40% {
        transform: translate(-2px, -2px);
    }
    60% {
        transform: translate(2px, 2px);
    }
    80% {
        transform: translate(2px, -2px);
    }
    100% {
        transform: translate(0);
    }
`;

const Nav = styled.nav`
  background: linear-gradient(135deg, #a8e6cf 0%, #88d8c0 100%);
  padding: 1rem;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: bold;
  color: #1a472a;
  text-decoration: none;
  position: relative;

  &:hover {
    animation: ${glitchAnimation} 0.3s infinite;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  color: #1a472a;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: #1a472a;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #0a1f12;
    transform: translateY(-2px);

    &:before {
      width: 100%;
    }
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
        <Logo to="/">ShopCart</Logo>
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/cart">Cart</NavLink>
          <NavLink to="/who">Who I Am</NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
