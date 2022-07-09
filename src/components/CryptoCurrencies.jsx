import React, { useState } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { useEffect } from 'react';
import { Row, Col, Card } from 'antd';
const CryptoCurrencies = () => {
  const { data: cryptosList, isFetching } = useGetCryptosQuery();
  console.log(cryptosList?.data?.coins);
  const [cryptos, setcryptos] = useState([]);
  useEffect(() => {
    setcryptos(cryptosList?.data?.coins);
    console.log(cryptos);
  }, [cryptosList]);
  console.log(cryptos);
  if (isFetching) return <div>Loading...</div>;
  return (
    <>
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
            <Link to={`/crypto/${currency}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className="crypto-image" src={currency.iconUrl} />}
                hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {millify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default CryptoCurrencies;
