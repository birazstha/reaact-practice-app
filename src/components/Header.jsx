import { styled } from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;
  background-color: #ed3b59;
`;

const Logo = styled.a`
  color: white;
  font-size: 25px;
  text-decoration: none;
  font-weight: bolder;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
`;

const MenuItem = styled.li`
  margin-right: 2rem;
`;

const MenuLink = styled.a`
  text-decoration: none;
  color: white;
`;

export default function Header({ logoTitle, menuItems }) {
  return (
    <Nav>
      <Logo href="hello.html"> {logoTitle}</Logo>
      <Menu>
        {menuItems.map((item, index) => (
          <MenuItem key={index}>
            <MenuLink href={item.href}>{item.text}</MenuLink>
          </MenuItem>
        ))}
      </Menu>
    </Nav>
  );
}
