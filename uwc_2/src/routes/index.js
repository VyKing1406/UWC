import Home from '~/Pages/Home';
import Infor from '~/Pages/Infor';
import Login from '~/Pages/Login';
import Account from '~/Pages/Account';
import Employee from '~/Pages/Employee';
import WorkCalendar from '~/Pages/WorkCalendar';
import McpMap from '~/Pages/McpMap/McpMap';
import Chat from '~/Pages/Chat';
const publicRoutes = [{ path: '/', component: Login }];

const privateRoutes = [
    { path: '/', component: Home },
    { path: '/infor', component: Infor },
    { path: '/account', component: Account },
    { path: '/employee', component: Employee },
    { path: '/workCalendar', component: WorkCalendar },
    { path: '/mcpMap', component: McpMap },
    { path: '/chat', component: Chat },
];
export { publicRoutes, privateRoutes };
