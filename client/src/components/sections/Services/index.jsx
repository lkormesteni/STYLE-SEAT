import React, { useState, useEffect } from "react";
import { useTheme } from "styled-components";
import axios from 'axios'
import ServiceDetails from "./ServiceDetails.jsx";
import Button from "@components/Button";
import Section from "@styled/Section";
import * as S from "./services.styled";

export default function Services() {
  const theme = useTheme();
  const [data, setData] = useState([]);

  const fetchData = async () => {
    console.log('Fetching data...',data);
    try {
      const response = await axios.get('http://127.0.0.1:5000/service');
      setData(response.data);
      console.log('Data fetched:', response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Section background={theme.colors.dark} color={theme.colors.main}>
      <a id="services" />
      <h2>Services</h2>
      <S.CardsServices>
        {data.map((element, key) => (
          <ServiceDetails key={key} element={element} />
        ))}
      </S.CardsServices>
      <Button title="Schedule Now!" />
    </Section>
  );
}
