import React, { useState, useEffect } from 'react';
import { Container, Title } from './styles';
import HappeningItem from '../HappeningItem';
import ShowMore from '../ShowMore';
import LoadingSpinner from '../LoadingSpinner';

const WhatHappening: React.FC = () => {
  const [ isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500)
  }, [])
  return (
    <Container>
      {isLoading ? (
        <LoadingSpinner size={30} color={'#1DA1F2'} loading={isLoading} />
      ) : (
        <>
          <Title>O que está acontecendo</Title>
          <HappeningItem
            category="Covid-19"
            time="Noite anterior"
            title="Covid-19: Mundo tem novo recorde de casos diários, diz OMS"
            image="https://pbs.twimg.com/semantic_core_img/1286983543810220032/ndCiO-ut?format=jpg&name=240x240"
          />
          <HappeningItem
            category="Tecnologia"
            time="Assunto do Momento"
            title="Elon Musk"
            tweets={110000}
          />
          <HappeningItem
            category="Covid-19"
            time="Hoje"
            title="Covid-19: Mundo tem novo recorde de casos diários, diz OMS"
            image="https://pbs.twimg.com/semantic_core_img/1286983543810220032/ndCiO-ut?format=jpg&name=240x240"
          />
          <HappeningItem
            category="Tecnologia"
            time="Assunto do Momento em Brasil"
            title="Elon Musk"
            tweets={110000}
          />
          <HappeningItem
            category="Felipe Neto"
            time="Ontem"
            title="Novo tweet do Felipe Neto"
          />
          <ShowMore />
        </>
      )}
    </Container>
  );
};

export default WhatHappening;
