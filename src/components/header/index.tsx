import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import useOnClickOutside from 'use-onclickoutside';
import Logo from '../../../assets/icons/logo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { RootState } from '../../../store/index';
import { Button, Text } from '@mantine/core';
import {
  IconMenu2,
  IconSearch,
  IconShoppingCart,
  IconUser,
} from '@tabler/icons-react';

type HeaderType = {
  isErrorPage?: Boolean;
};

const Header = ({ isErrorPage }: HeaderType) => {
  const router = useRouter();
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const arrayPaths = ['/'];

  const [onTop, setOnTop] = useState(
    !arrayPaths.includes(router.pathname) || isErrorPage ? false : true
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navRef = useRef(null);
  const searchRef = useRef(null);

  const headerClass = () => {
    console.log('Console');
    if (window.pageYOffset === 0) {
      setOnTop(true);
    } else {
      setOnTop(false);
    }
  };

  console.log(onTop);

  useEffect(() => {
    if (!arrayPaths.includes(router.pathname) || isErrorPage) {
      return;
    }

    headerClass();
    window.addEventListener('scroll', headerClass);

    return window.removeEventListener('scroll', headerClass);
  }, [arrayPaths, isErrorPage, router.pathname]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const closeSearch = () => {
    setSearchOpen(false);
  };

  // on click outside
  useOnClickOutside(navRef, closeMenu);
  useOnClickOutside(searchRef, closeSearch);

  return (
    <header className={`site-header ${!onTop ? 'site-header--fixed' : ''}`}>
      <div className="container">
        <Link href="/">
          <h1 className="site-logo">
            <Logo />
            <Text className="text-black" style={{ color: 'black' }}>
              E-Shop
            </Text>
          </h1>
        </Link>
        <nav
          ref={navRef}
          className={`site-nav ${menuOpen ? 'site-nav--open' : ''}`}
          style={{ color: 'black' }}
        >
          <Link href="/products" style={{ color: 'black' }}>
            Products
          </Link>
          <a href="#" style={{ color: 'black' }}>
            Inspiration
          </a>
          <a href="#" style={{ color: 'black' }}>
            Rooms
          </a>
          <button className="site-nav__btn">
            <p>Account</p>
          </button>
        </nav>

        <div className="site-header__actions">
          <button
            ref={searchRef}
            className={`search-form-wrapper ${
              searchOpen ? 'search-form--active' : ''
            }`}
          >
            <form className={`search-form`}>
              <i
                className="icon-cancel"
                onClick={() => setSearchOpen(!searchOpen)}
              ></i>
              <input
                type="text"
                name="search"
                placeholder="Enter the product you are looking for"
              />
            </form>
            <IconSearch />
          </button>
          <Link href="/cart">
            <Button className="btn-cart">
              <IconShoppingCart />
              {cartItems.length > 0 && (
                <span className="btn-cart__count">{cartItems.length}</span>
              )}
            </Button>
          </Link>
          <Link href="/login">
            <button className="site-header__btn-avatar">
              <IconUser />
            </button>
          </Link>
          <button
            onClick={() => setMenuOpen(true)}
            className="site-header__btn-menu"
          >
            <IconMenu2 />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
