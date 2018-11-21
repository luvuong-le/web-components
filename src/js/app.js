// Main Web Component Helper Library
import { Register } from './@webcomponents/webcomponents.js';

// Individual Components
import Navbar from './components/layout/Navigation/Navbar.js';
import NavbarItem from './components/layout/Navigation/NavbarItem.js';
import NavbarBrand from './components/layout/Navigation/NavbarBrand.js';
import NavbarList from './components/layout/Navigation/NavbarList.js';
import NavbarMBars from './components/layout/Navigation/NavbarMBars.js';
import Card from './components/layout/Cards/Card.js';
import Sidebar from './components/layout/Sidebar/Sidebar.js';
import SidebarList from './components/layout/Sidebar/SidebarList.js';

// Register Components
Register('nav-bar', Navbar);
Register('nav-item', NavbarItem);
Register('nav-brand', NavbarBrand);
Register('nav-list', NavbarList);
Register('nav-mbars', NavbarMBars);
Register('x-card', Card);
Register('side-nav', Sidebar);
Register('side-navlist', SidebarList);