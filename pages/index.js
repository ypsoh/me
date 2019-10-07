import React from 'react'
import Head from 'next/head'
import { withLayout } from '../components/Layout.js'
import { Card, Icon, Avatar } from 'antd';
const { Meta } = Card;

const Home = () => (
  <div>
    <Head>
      <title>Yongseok Paul Soh</title>
    </Head>
    <Card
      style={{ width: 300 }}
      cover={
        <img src="/static/IMG_5695.jpeg" alt="profile picture" />
      }
        actions={[
          <Icon type="setting" key="setting" />,
          <Icon type="edit" key="edit" />,
          <Icon type="ellipsis" key="ellipsis" />,
        ]}
      >
        <Meta
          title="Yongseok Paul Soh"
          description="Doctoral Student, UO CIS"
        />
      </Card>
        <div className='row'>
          <p className="description">
            Research interests: Dimensionality reduction, tensor decomposition, latent feature extraction
          </p>
        </div>
    </div>
)

export default withLayout(Home)
