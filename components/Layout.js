import React from 'react';
import { Layout, Menu, Breadcrumb, Row, Col } from 'antd';
import 'antd/dist/antd.css'
import Link from 'next/link';


const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

const DefaultLayout = ({ children }) => {
  return (
    <Layout>
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link href="/">
            Yongseok Paul Soh
          </Link>
        </Menu.Item>
        <Menu.Item key="reading_list">
          <Link href="/reading_list">
            Reading List
          </Link>
        </Menu.Item>
        <Menu.Item key="calendar">
          <Link href="/calendar">
            Calendar
          </Link>
        </Menu.Item>
      </Menu>
      {children}
    </Layout>
  )
}

export const withLayout = Page => {
  return () => (
    <DefaultLayout>
      <Page />
    </DefaultLayout>
  )
}
