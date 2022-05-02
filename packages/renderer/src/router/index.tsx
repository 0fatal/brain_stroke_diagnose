import { Navigate, RouteObject, useRoutes } from 'react-router-dom';
import ZLayout from '@/layout';
import DiagnosePage from '@/pages/Diagnose';
import RecordPage from '@/pages/Record';
import DevicePage from '@/pages/Device';
import AnalysisPage from '@/pages/Analysis';
import UserManagementPage from '@/pages/Management/User';
import PermissionManagementPage from '@/pages/Management/Permission';
import LogManagementPage from '@/pages/Management/Log';

const routeTitleMap = {
  '/diagnose': '病情诊断',
  '/record': '诊断记录',
  '/device': '设备管理',
  '/analysis': '数据概况',
  '/management/user': '系统管理 / 用户管理',
  '/management/permission': '系统管理 / 权限管理',
  '/management/log': '系统管理 / 日志管理'
} as const;

export const getRouteTitle = (route: string) => {
  // @ts-ignore
  return routeTitleMap[route];
};

const routes: RouteObject[] = [
  {
    path: '/',
    element: <ZLayout />,
    children: [
      { path: '/diagnose', element: <DiagnosePage /> },
      {
        path: '/record',
        element: <RecordPage />
      },
      {
        path: '/management',
        children: [
          {
            path: '/management/user',
            element: <UserManagementPage />,
            index: true
          },
          {
            path: '/management/permission',
            element: <PermissionManagementPage />
          },
          {
            path: '/management/log',
            element: <LogManagementPage />
          }
        ]
      },
      {
        path: '/device',
        element: <DevicePage />
      },
      {
        path: '/analysis',
        element: <AnalysisPage />,
        index: true
      },
      {
        path: '/',
        element: <Navigate to="/analysis" replace />
      }
    ]
  }
];

export default function useAppRoutes() {
  return useRoutes(routes);
}
