import React from 'react'
import { Layout, Menu } from 'antd'
import Link from 'umi/link'
import styles from './index.css'

const { Header, Footer, Content } = Layout

const LayoutComp = props => {
  if (props.location.pathname === '/login') {
    return props.children
  }
  // console.log(props)
  const firstPath = props.location.pathname.split('/')[1]
  // console.log(firstPath)
  const selectedKeys = []
  if (firstPath) {
    selectedKeys.push('/' + firstPath)
  }
  return (
    <Layout>
      {/* 页头 */}
      <Header className={styles.header}>
        <img
          className={styles.logo}
          src="https://img.kaikeba.com/logo-new.png"
        />
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={selectedKeys}
          style={{ lineHeight: '64px', float: 'left' }}
        >
          <Menu.Item key="/goods">
            <Link to="/goods">商品</Link>{' '}
          </Menu.Item>
          <Menu.Item key="/users">
            <Link to="/users">用户</Link>{' '}
          </Menu.Item>
          <Menu.Item key="/books">
            <Link to="/books">书籍</Link>{' '}
          </Menu.Item>
          <Menu.Item key="/about">
            <Link to="/about">关于</Link>{' '}
          </Menu.Item>
        </Menu>
      </Header>
      <Content className={styles.content}>
        <div className={styles.box}>{props.children}</div>
      </Content>
      {/* 页脚 */}
      <Footer className={styles.footer}>开课吧</Footer>
    </Layout>
  )
}

export default LayoutComp
