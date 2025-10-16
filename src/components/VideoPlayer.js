import {Col, Card, CardHeader, CardBody, CardFooter} from 'reactstrap'
import Reference from './Reference'

export default function VideoPlayer({src, title}) {
  return (
    <Col>
        <Card>
            <CardHeader>
                <h3>{title}</h3>
                <Reference title={title}/>
            </CardHeader>
            <CardBody>
                <video
                    controls
                    // ref={videoRef}
                    src={src}
                    style={{ width: "100%" }}
                />                     
            </CardBody>
            <CardFooter>Use the square icon on the video for full screen</CardFooter>
        </Card>
    </Col>
  );
}