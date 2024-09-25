import { createContext, useState } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

import Nav from '@components/Nav';
import Breadcrumbs from '@components/breadcrumbs';
import { Toaster } from '@components/ui/sonner';

import Dashboard from '@pages/Dashboard';
import Error404 from '@pages/Error404';
import Feedback from '@pages/Feedback';
import Home from '@pages/Home';
import Login from '@pages/Login';
import Chat from '@pages/chat';
import loanReturn from '@pages/loans/return';
import Notifications from '@pages/notifications';

import brands from '@pages/brands/index';
import buildings from '@pages/buildings/index';
import categories from '@pages/categories/index';
import loans from '@pages/loans/index';
import productStatus from '@pages/productStatus/index';
import productTypes from '@pages/productTypes/index';
import products from '@pages/products/index';
import zones from '@pages/zones/index';

import brandsEdit from '@pages/brands/edit';
import buildingsEdit from '@pages/buildings/edit';
import categoriesEdit from '@pages/categories/edit';
import loansEdit from '@pages/loans/edit';
import productStatusEdit from '@pages/productStatus/edit';
import productTypesEdit from '@pages/productTypes/edit';
import productsEdit from '@pages/products/edit';
import zonesEdit from '@pages/zones/edit';

import brandsNew from '@pages/brands/new';
import buildingsNew from '@pages/buildings/new';
import categoriesNew from '@pages/categories/new';
import loansNew from '@pages/loans/new';
import productStatusNew from '@pages/productStatus/new';
import productTypesNew from '@pages/productTypes/new';
import productsNew from '@pages/products/new';
import zonesNew from '@pages/zones/new';

import './axios.config';

export const CurrentUserContext = createContext<CurrentUserContextType>({
  currentUser: undefined,
} as CurrentUserContextType);

function Layout() {
  const [currentUser, setCurrentUser] = useState<userState>();

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
      }}
    >
      <Toaster theme="dark" closeButton position="bottom-center" />
      {currentUser ? (
        <div className="grid h-screen grid-cols-[auto_1fr] bg-base-100">
          <header className="h-screen w-nav bg-nav">
            <Nav />
          </header>
          <main className="relative grid h-screen grid-rows-[50px_1fr] overflow-y-auto">
            <Breadcrumbs />

            <div className="h-full overflow-y-hidden">
              <Outlet />
            </div>
          </main>
        </div>
      ) : (
        <Login />
      )}
    </CurrentUserContext.Provider>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route Component={Error404} />
        <Route path="/" Component={Home} />
        <Route path="hjem" Component={Home} />

        <Route path="dashboard" Component={Dashboard} />
        <Route path="notifikationer" Component={Notifications} />
        <Route path="chat" Component={Chat} />
        <Route path="feedback" Component={Feedback} />

        <Route path="brands" Component={brands} />
        <Route path="kategorier" Component={categories} />
        <Route path="udlaan" Component={loans} />
        <Route path="produktstatusser" Component={productStatus} />
        <Route path="produkttyper" Component={productTypes} />
        <Route path="produkter" Component={products} />
        <Route path="zoner" Component={zones} />
        <Route path="bygninger" Component={buildings} />

        <Route path="brands/:id" Component={brandsEdit} />
        <Route path="kategorier/:id" Component={categoriesEdit} />
        <Route path="produkter/:id" Component={productsEdit} />
        <Route path="produkttyper/:id" Component={productTypesEdit} />
        <Route path="udlaan/:id" Component={loansEdit} />
        <Route path="produktstatusser/:id" Component={productStatusEdit} />
        <Route path="zoner/:id" Component={zonesEdit} />
        <Route path="bygninger/:id" Component={buildingsEdit} />

        <Route path="produkter/new" Component={productsNew} />
        <Route path="brands/new" Component={brandsNew} />
        <Route path="kategorier/new" Component={categoriesNew} />
        <Route path="produkttyper/new" Component={productTypesNew} />
        <Route path="udlaan/new" Component={loansNew} />
        <Route path="produktstatusser/new" Component={productStatusNew} />
        <Route path="zoner/new" Component={zonesNew} />
        <Route path="bygninger/new" Component={buildingsNew} />

        <Route path="udlaan/:id/returner" Component={loanReturn} />
      </Route>
    </Routes>
  );
}
