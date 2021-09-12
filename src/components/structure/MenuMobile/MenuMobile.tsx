import React, { FC, useState } from 'react';
import Logo from 'assets/images/app-logo.png';
import { history } from 'utils/routes';
import * as S from './MenuMobile.styles';

const MenuMobile: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(false);
    history.push('/analise-geral');
  };

  return (
    <>
      <S.Wrapper isOpen={isOpen}>
        <S.FixedLogo src={Logo} alt="logo" />
        <S.OpenMenu2 isOpen={isOpen} onClick={() => setIsOpen(true)}>
          <span />
          <span />
          <span />
        </S.OpenMenu2>
      </S.Wrapper>
      <S.Menu isOpen={isOpen}>
        <S.LogoWrapper>
          <S.Logo src={Logo} aria-label="Logo" />
        </S.LogoWrapper>
        <S.CloseButton isOpen={isOpen} onClick={() => setIsOpen(false)}>
          <span />
          <span />
        </S.CloseButton>
        <S.MenuNav isOpen={isOpen}>
          <S.MenuLink onClick={handleClick}>
            <span>
              Análise Geral
            </span>
          </S.MenuLink>
        </S.MenuNav>
        <S.Space />
      </S.Menu>
    </>
  );
};

export default MenuMobile;
