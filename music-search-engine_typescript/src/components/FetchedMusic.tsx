import React from "react"
import MainMusic from "../types/iMusic"
import { Card, Button } from "react-bootstrap"

interface FetchedMusicProps {
  mainMusic: MainMusic
}
function FetchedMusic({ mainMusic }: FetchedMusicProps) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="https://via.placeholder.com/150" />
      <Card.Body>
        <Card.Title className="text-dark">{mainMusic.title}</Card.Title>
        <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}
export default FetchedMusic
