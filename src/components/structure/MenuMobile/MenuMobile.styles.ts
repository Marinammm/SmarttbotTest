import styled, { css } from 'styled-components';
import media from 'styled-media-query';

type WrapperProps = {
  isOpen: boolean;
}

const menuModifiers = {
  open: () => css`
    transform: translateY(0);
    opacity: 1;
    pointer-events: all;
  `,
};

export const FixedLogo = styled.img`
  max-width: 53px;
  max-height: 53px;
`;

export const Wrapper = styled.div<WrapperProps>`
  ${({ isOpen }) => css`
    position: fixed;
    top: 0;
    left: 0;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    z-index: 30;
    width: 100%;
    height: 73px;
    background-color: white;
    display: ${isOpen ? 'none' : 'flex'};

    animation: fade 1s ease-in-out;
    transition: transform 1s;

    @keyframes fade {
      0% {
        opacity: 0;
      }
    }

    ${media.greaterThan('medium')`
      display: none;
    `}
  `}
`;

export const Menu = styled.div<WrapperProps>`
  ${({ isOpen, theme }) => css`
    background-color: ${theme.colors.main.green};
    border-radius: 16px 16px 0px 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: calc(100% - 8px);
    width: 100vw;
    transform: translateY(100%);
    transition: all 0.5s ease;
    opacity: 0;
    pointer-events: none;
    z-index: 50;

    ${isOpen && menuModifiers.open()};
  `}
`;

export const LogoWrapper = styled.div`
  position: relative;
  top: 30px;
  left: 30px;
`;

export const Logo = styled.img`
  max-width: 50px;
  max-height: 50px;
`;

export const Space = styled.span`
  flex-basis: 20%;
`;

export const MenuNav = styled.nav<WrapperProps>`
  ${({ isOpen }) => css`
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-right: 32px;

    a {
      transform: ${isOpen ? 'scaleX(1)' : 'scaleX(0)'};
      transition: transform 0.7s cubic-bezier(0.5, 0, 0, 1);
      transform-origin: 100%;

      &:first-child {
        transition-delay: 0.2s;
      }

      &:nth-child(2) {
        transition-delay: 0.3s;
      }

      &:nth-child(3) {
        transition-delay: 0.4s;
      }
    }

    div > a {
      transform: ${isOpen ? 'scaleX(1)' : 'scaleX(0)'};
      transition: transform 0.7s cubic-bezier(0.5, 0, 0, 1);
      transform-origin: 100%;
      outline: none;

      &:first-child {
        transition-delay: 0.5s;
      }
    }
  `}
`;

export const MenuLink = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: ${({ theme }) => theme.colors.neutral.white};
  font-size: 18px;
  line-height: 24px;
  align-items: center;
  opacity: 0.8;
  text-decoration: none;
  cursor: pointer;
`;

export const CloseButton = styled.button<WrapperProps>`
  ${({ isOpen }) => css`
    position: absolute;
    right: 20px;
    top: 40px;
    width: 14.14px;
    height: 14.21px;
    z-index: 1;
    white-space: nowrap;
    background: none;
    border: none;

    span {
      background-color: ${({ theme }) => theme.colors.neutral.white};
      position: absolute;
      top: 0;
      width: 20px;
      height: 2px;
      transition: transform 0.7s cubic-bezier(0.5, 0, 0, 1),
        color 0.7s cubic-bezier(0.5, 0, 0, 1);

      &:first-child {
        left: 0;
        top: 1px;
        transform-origin: 0 50%;
        transform: ${isOpen ? 'rotate(45deg) scaleX(1)' : 'rotate(45deg) scaleX(0)'};
        transition-delay: 0.3s;
      }

      &:nth-child(2) {
        right: 1px;
        top: 1px;
        transform-origin: 100% 50%;
        transform: ${isOpen ? 'rotate(-45deg) scaleX(1)' : 'rotate(-45deg) scaleX(0)'};
        transition-delay: 0.4s;
      }
    }
  `}
`;

export const OpenMenu = styled.button`
  ${({ theme }) => css`
    color: ${theme.colors.main.green};
  `}
`;

export const OpenMenu2 = styled.a<WrapperProps>`
  ${({ theme, isOpen = false }) => css`
    position: relative;
    width: 20px;
    height: 100%;
    z-index: 1;
    white-space: nowrap;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      background-color: ${theme.colors.main.green};
      position: absolute;
      top: 28px;
      right: 50px;
      width: 20px;
      height: 2px;
      transition: transform 0.7s cubic-bezier(0.5, 0, 0, 1),
        color 0.7s cubic-bezier(0.5, 0, 0, 1);

      &:first-child {
        margin-top: 0;
        transform-origin: 100% 0;
        transform: ${isOpen ? 'scaleX(0)' : 'scaleX(1)'};
        transition-delay: 0.3s;
      }

      &:nth-child(2) {
        height: 2px;
        margin-top: 6px;
        transform-origin: 100% 0;
        transform: ${isOpen ? 'scaleX(0)' : 'scaleX(1)'};
        transition-delay: 0.4s;
      }

      &:nth-child(3) {
        margin-top: 12px;
        transform-origin: 100% 0;
        transform: ${isOpen ? 'scaleX(0)' : 'scaleX(1)'};
        transition-delay: 0.5s;
      }
    }
  `}
`;

export const Icon = styled.img`
  width: auto;
`;
