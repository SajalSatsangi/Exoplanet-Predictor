'use client'

import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: black;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`

const Logo = styled.div`
  font-weight: bold;
`

const Nav = styled.nav`
  a {
    margin-left: 1rem;
    text-decoration: none;
    color: inherit;
  }
`

const Main = styled.main`
  max-width: 64rem;
  margin: 2rem auto;
  padding: 0 1rem;

  h1 {
    font-size: 1.875rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 2rem;
  }
`

const ResultCard = styled.article`
  background-color: grey;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const ExoplanetImage = styled.figure`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`

const ResultContent = styled.div`
  padding: 2rem;

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  dl {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 0.5rem 1rem;
  }

  dt {
    font-weight: 600;
  }
`

const AnalysisButton = styled.button`
  margin-top: 1.5rem;
  background-color: #2563eb;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #1d4ed8;
  }
`

const Footer = styled.footer`
  margin-top: auto;
  background-color: #4a6fa5;
  color: white;
  text-align: center;
  padding: 1rem;
`

export default function PredictionResults() {
  return (
    <Container>
      <Header>
        <Logo>🚀 ExoPlanetPredictor</Logo>
        <Nav>
          <Link href="/prediction">Predictor</Link>
        </Nav>
      </Header>

      <Main>
        <h1>Prediction Results</h1>
        
        <ResultCard>
          <ExoplanetImage>
            <Image
              src="/exoplanet-image.jpg"
              alt="Exoplanet visualization"
              width={300}
              height={300}
            />
          </ExoplanetImage>
          <ResultContent>
            <h2>Exoplanet Name: Kepler-452b</h2>
            <dl>
              <dt>Distance from Earth:</dt>
              <dd>1,400 light-years</dd>
              <dt>Radius:</dt>
              <dd>1.6 Earth radii</dd>
              <dt>Mass:</dt>
              <dd>5 Earth masses</dd>
              <dt>Orbital Period:</dt>
              <dd>385 days</dd>
            </dl>
            <AnalysisButton>
              View Detailed Analysis
            </AnalysisButton>
          </ResultContent>
        </ResultCard>
      </Main>

      <Footer>
        <p>© 2023 ExoPlanetPredictor. All rights reserved.</p>
      </Footer>
    </Container>
  )
}