'use client'

import styled from 'styled-components'
import Link from 'next/link'

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
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
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const PredictorCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 100%;
  max-width: 500px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`

const Button = styled.button`
  background-color: #4a6fa5;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
`

const Footer = styled.footer`
  background-color: #4a6fa5;
  color: white;
  text-align: center;
  padding: 1rem;
`

export default function Predictor() {
  return (
    <Layout>
      <Header>
        <Logo>🚀 ExoPlanetPredictor</Logo>
        <Nav>
          <Link href="/">Home</Link>
        </Nav>
      </Header>
      <Main>
        <PredictorCard>
          <h2>Predict Exoplanets</h2>
          <Form>
            <Input type="text" placeholder="Enter Star Name" />
            <Input type="number" placeholder="138" />
            <Input type="number" placeholder="138" />
            <Input type="number" placeholder="138" />
            <Button  as={Link} href="/result">Run Prediction</Button>
          </Form>
        </PredictorCard>
      </Main>
      <Footer>
        © 2023 ExoPlanetPredictor. All rights reserved.
      </Footer>
    </Layout>
  )
}