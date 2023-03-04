import Home from '~/Pages/Home';
import Infor from '~/Pages/Infor';
import Login from '~/Pages/Login';
import Account from '~/Pages/Account';
const publicRoutes = [{ path: '/', component: Login }];

const privateRoutes = [
    { path: '/', component: Home },
    { path: '/infor', component: Infor },
    { path: '/account', component: Account },
];
export { publicRoutes, privateRoutes };
