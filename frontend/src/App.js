import React from "react"
import { Container } from "react-bootstrap"
import Footer from "./components/Footer"
import Header from "./components/Header"

function App() {
  return (
    <div className='App'>
      <Header />

      <main>
        <Container>
          <h1>Welcome to MyShop</h1>
        </Container>
      </main>

      <Footer />
    </div>
  )
}

export default App
