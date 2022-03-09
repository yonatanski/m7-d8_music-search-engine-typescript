import React from "react"
import { useState, useEffect } from "react"
import { Container, Row, Col, Form } from "react-bootstrap"
import FetchedMusic from "./FetchedMusic"
import MainMusic from "../types/IMusic"

function Home() {
  const [query, setquery] = useState("")
  const [music, setMusic] = useState<MainMusic[]>([])

  const getBooks = async () => {
    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`)
      if (response.ok) {
        let data = await response.json()
        console.log("jsonedbody", data)
        setMusic(data.data)
        console.log("setStated", music)
      } else {
        console.log("error fetching books")
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getBooks()
  }, [query])

  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <Form.Label>Search Your Music Here</Form.Label>
            <Form.Control type="text" placeholder="name@example.com" value={query} onChange={(e) => setquery(e.target.value)} />
          </Form>
        </Col>
        <Col>
          {/* {music.map((song) => (
            <FetchedMusic key={song.id} MainMusic={song} />
          ))} */}
        </Col>
      </Row>
    </Container>
  )
}

export default Home