import type { RouteObject } from 'react-router-dom'
import { Navigate, useRoutes } from 'react-router-dom'
import ZLayout from '@/layout'
import { lazy } from 'react'
import SuspenseComponent from '@/components/SuspenseComponent/SuspenseComponent'

import AnalysisPage from '@/pages/Analysis'
const DiagnosePage = SuspenseComponent(lazy(() => import('@/pages/Diagnose')))
const RecordPage = SuspenseComponent(lazy(() => import('@/pages/Record')))
const DevicePage = SuspenseComponent(lazy(() => import('@/pages/Device')))
const UserManagementPage = SuspenseComponent(lazy(() => import('@/pages/Management/User')))
const PermissionManagementPage = SuspenseComponent(
  lazy(() => import('@/pages/Management/Permission'))
)
const LogManagementPage = SuspenseComponent(lazy(() => import('@/pages/Management/Log')))
const LoginPage = SuspenseComponent(lazy(() => import('@/pages/Login')))

const routeTitleMap = {
  '/diagnose': '病情诊断',
  '/record': '诊断记录',
  '/device': '设备管理',
  '/analysis': '数据概况',
  '/management/user': '系统管理 / 用户管理',
  '/management/permission': '系统管理 / 权限管理',
  '/management/log': '系统管理 / 日志管理'
} as const

export const getRouteTitle = (route: string) => {
  // @ts-ignore
  return routeTitleMap[route]
}

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
        element: <AnalysisPage />
      },

      {
        path: '/',
        element: <Navigate to="/analysis" replace />
      }
    ]
  },
  {
    path: '/login',
    element: <LoginPage />
  }
]

export default function useAppRoutes() {
  return useRoutes(routes)
}
