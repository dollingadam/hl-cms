import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';
import { Link } from "gatsby";
import Header from './header';
import { Helmet } from 'react-helmet';

const Layout = ({ children }) => (

  <>
    <Helmet>
      <meta name="author" />
    </Helmet>
    <header><Link to="/"></Link></header>
    <Header />
    <main className="min-wh-100">{children}</main>

    <footer>Footer</footer>

  </>
)


export default Layout
