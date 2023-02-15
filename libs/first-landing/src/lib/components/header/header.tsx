import { Link, Route, Routes } from 'react-router-dom';
import * as S from './header.styles';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <>
      <S.Nav>
        <ul>
          <S.NavItemLink>
            <Link to="/">Home</Link>
          </S.NavItemLink>
          <S.NavItemLink>
            <Link to="/first-landing">Primeira Landing</Link>
          </S.NavItemLink>
          <S.NavItemLink>
            <Link to="/about">Sobre nós</Link>
          </S.NavItemLink>
        </ul>
      </S.Nav>
      <Routes>
        <Route path="/" element={<p>home</p>} />
        <Route path="/first-landing" element={<p>FirstLanding!</p>} />
        <Route path="/about" element={<p>about</p>} />
      </Routes>
    </>
  );
}

export default Header;
