import { Suspense, createContext, useState } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

import Error404 from '@components/Error404';
import Loading from '@components/Loading';
import Nav from '@components/Nav';
import Breadcrumbs from '@components/breadcrumbs';
import { Toaster } from '@components/ui/sonner';

import Home from '@pages/Home';
import Login from '@pages/Login';
import loanReturn from '@pages/udlaan/return';

import { getPages } from '@helpers/routeHelpers';

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
              <Suspense fallback={<Loading />}>
                <Outlet />
              </Suspense>
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

        {getPages().map(({ path, element }, i) => (
          <Route key={i} path={path} Component={element} />
        ))}

        <Route path="udlaan/:id/returner" Component={loanReturn} />
      </Route>
    </Routes>
  );
}
