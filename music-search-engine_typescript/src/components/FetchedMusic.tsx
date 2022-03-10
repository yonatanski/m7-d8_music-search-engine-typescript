import React from "react"
import { Track } from "../types/IMusic"
import { Card, Button, Row, Col, Container } from "react-bootstrap"
import { Link } from "react-router-dom"

interface FetchedMusicProps {
  mainMusic: Track
}
function FetchedMusic({ mainMusic }: FetchedMusicProps) {
  return (
    <Link to={`details/${mainMusic.id}`}>
      <Card>
        <Card.Img variant="top" src={mainMusic.album.cover_medium} />
        <Card.Body>
          <Card.Title className="text-dark">{mainMusic.title}</Card.Title>
          <Card.Text></Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Link>
  )
}
export default FetchedMusic
