import styled from '@emotion/styled';

export const Nav = styled.nav`
  display: flex;
  background: lightblue;
  height: 80px;
  justify-content: center;
  align-items: center;

  ul {
    display: flex;
    gap: 64px;
    list-style: none;
    justify-content: center;
  }
`;

export const NavItemLink = styled.li`
  a {
    font-size: 32px;
    color: black;
    font-weight: 700;
    cursor: pointer;
    text-decoration: none;
  }
`;
