import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { Link } from 'react-router-dom';
import CryptoCurrencies from './CryptoCurrencies';
import News from './News';
const { Title } = Typography;
const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery();
  const globalStats = data?.data?.stats;
  console.log(globalStats);
  return (
    <>
      <Title level={2} className="heading">
        Global crypto
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrency" value={globalStats?.total} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Cryptocurrency"
            value={millify(globalStats?.totalExchanges || 0)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Cryptocurrency"
            value={millify(globalStats?.totalMarketCap || 0)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Cryptocurrency"
            value={millify(globalStats?.total24hVolume || 0)}
          />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies in the world
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">show more</Link>
        </Title>
      </div>
      <CryptoCurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">show more</Link>
        </Title>
      </div>
      <News simplified />
    </>
  );
};

export default HomePage;
