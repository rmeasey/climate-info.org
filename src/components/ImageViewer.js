import { useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Col, Modal, ModalHeader, ModalBody, ModalFooter, Button  } from 'reactstrap'
import Reference from './Reference'
   
export default function ImageViewer({src, title}) {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <>            
            <Modal  isOpen={modal} toggle={toggle} fullscreen>
                <ModalHeader>{title}</ModalHeader>
                <ModalBody>
                    <img className='fullscreen'
                        src={src}
                    />  
                </ModalBody>
                <ModalFooter>
                    <Button color="grey" onClick={toggle}>Close</Button>
                </ModalFooter>
            </Modal>
            <Col>
                <Card>
                    <CardHeader>
                        <h3>{title}</h3>
                        <Reference title={title}/>
                    </CardHeader>
                    <CardBody>
                        <img src={src} className='cardimage' />                        
                    </CardBody>
                    <CardFooter>
                        <Button color="grey" onClick={toggle}>Open Full Screen</Button>
                    </CardFooter>
                </Card>
            </Col>
        </>
    )
}