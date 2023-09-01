import React from "react";

import Section from "@styled/Section";
import Metric from "@styled/Metric";

import * as S from "./about.styled";

export default function AboutUs() {
  return (
    <Section>
      <a id="about" />
      <h2>About Us</h2>

      <S.Content>
        <S.BoxImages>
          <figure>
            <img
              src="/assets/images/about/image2.png"
              alt="Homem de boné cortando cabelo"
            />
          </figure>

          <figure>
            <img
              src="/assets/images/about/image1.png"
              alt="Homem cacheado e de chapéu cortando cabelo"
            />
          </figure>
        </S.BoxImages>

        <S.Box>
          <S.ContentText>
            <h3>
            Providing a <span id="text-primary">experience</span> in
               cut <span id="text-primary">differentiated</span> desde{" "}
              <span id="text-primary">2012</span>.
            </h3>

            <p>
              Welcome to STYLESEAT, your hub for effortless style and
              convenience. Through our innovative app, STYLESEAT, we're
              redefining the way you approach haircuts and shopping. Seamlessly
              schedule hair appointments while also indulging in curated
              shopping, all within a few taps. Discover the perfect fusion of
              grooming and fashion as we bring the future of style directly to
              your device. Elevate your experience with STYLESEAT
              today.
            </p>
          </S.ContentText>

          <S.BoxMetrics>
            <Metric sizeNumber="3">
              <span className="number">43</span>
              <span className="caption">Years of experience</span>
            </Metric>

            <Metric sizeNumber="3">
              <span className="number">+200</span>
              <span className="caption">Satisfied Customers</span>
            </Metric>
          </S.BoxMetrics>
        </S.Box>
      </S.Content>
    </Section>
  );
}
