import React from "react"
import { useState, useEffect } from "react"
import { Container, Row, Col, Form } from "react-bootstrap"
import { Track } from "../types/IMusic"
import FetchedMusic from "./FetchedMusic"

function Home() {
  const [query, setQuery] = useState("")
  const [musicResult, setMusicResult] = useState<Track[]>([])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`)
      if (response.ok) {
        let { data } = await response.json()
        console.log("jsonedbody", data)
        setMusicResult(data)
        console.log("setStated", setMusicResult)
      } else {
        console.log("error fetching books")
      }
    } catch (error) {
      console.log(error)
    }
  }

  // useEffect(() => {
  //   getBooks()
  // }, [query])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  return (
    <Container>
      <Row>
        <Col xs={10} md={8} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Label>Search Your Music Here</Form.Label>
            <Form.Control type="text" placeholder="name@example.com" value={query} onChange={handleChange} />
          </Form>
        </Col>
        <Col xs={10} md={8} className="my-3">
          <Row>
            {musicResult.map((song) => (
              <Col xs={10} md={4}>
                <FetchedMusic key={song.id} mainMusic={song} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Home
