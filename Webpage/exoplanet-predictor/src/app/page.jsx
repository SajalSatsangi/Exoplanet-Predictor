'use client'

import Image from 'next/image'
import styled from 'styled-components'
import Link from 'next/link'

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
`

const BannerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 20rem;
`

const ContentWrapper = styled.section`
  text-align: center;
  margin-top: 5rem;
`

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`

const Description = styled.p`
  margin-bottom: 2rem;
`

const Button = styled.a`
  background-color: #3b82f6;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
`

export default function Home() {
  return (
    <>
      <StyledMain>
        <BannerWrapper>
          <Image
            src="/bg.jpg"
            alt="Planets"
            layout="fill"
            objectFit="cover"
          />
        </BannerWrapper>

        <ContentWrapper>
          <Title>Welcome to ExoPlanetPredictor</Title>
          <Description>
            Predict the discovery of new exoplanets using advanced algorithms and data analysis.
          </Description>
          <Button  as={Link} href="/prediction">Access the Predictor</Button>
        </ContentWrapper>
      </StyledMain>
    </>
  )
}