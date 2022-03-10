import { useEffect, useState } from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { TrackDetail } from "../types/IMusic"

function DetailMusicPage() {
  const { id } = useParams()
  const [trackDetails, setTrackDetails] = useState<TrackDetail | null>(null)

  const getSpecificMusic = async () => {
    let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/track/${id}`)
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      setTrackDetails(data)
    }
  }

  useEffect(() => {
    getSpecificMusic()
  }, [])

  return (
    <>
      {trackDetails ? (
        <Container>
          <Row>
            <Col xs={10}>
              <Image fluid src={trackDetails.album.cover_big} />
              <h4>{trackDetails.title}</h4>
              <h6>{trackDetails.artist.name}</h6>
            </Col>
          </Row>
        </Container>
      ) : null}
    </>
  )
}

export default DetailMusicPage
