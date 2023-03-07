import Home from '~/Pages/Home';
import Infor from '~/Pages/Infor';
import Login from '~/Pages/Login';
import Account from '~/Pages/Account';
import Employee from '~/Pages/Employee';
import WorkCalendar from '~/Pages/WorkCalendar';
const publicRoutes = [
    { path: '/', component: Login },
    { path: '/employee', component: Employee },
    { path: '/workCalendar', component: WorkCalendar },
];

const privateRoutes = [
    { path: '/', component: Home },
    { path: '/infor', component: Infor },
    { path: '/account', component: Account },
    { path: '/employee', component: Employee },
    { path: '/workCalendar', component: WorkCalendar },
];
export { publicRoutes, privateRoutes };
