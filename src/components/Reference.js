import { useEffect, useState } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'
import referenceData from '../data/referenceData.json'

export default function Reference({title, style}) {
    const [reference, setReference]= useState(null)
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)
    useEffect(() => {
        const ref = referenceData.find(ref => ref.title === title)
        setReference(ref)
    })

    return (
        <>
            <Modal isOpen={modal} toggle={toggle} fullscreen>
                <ModalHeader>{title}</ModalHeader>
                <ModalBody style={{height: "calc(100vh - 135px)"}}>
                     <h4><a target="_blank" href={reference && reference.sourceUrl} title={reference && reference.sourceName}>{reference && reference.sourceName}</a></h4><br/>
                     <p>{reference && reference.description}</p><br/>
                     <p>{reference && reference.details}</p><br/>
                     <p>{reference && reference.history}</p><br/><br/>
                     
                </ModalBody>
                <ModalFooter>
                    <Button color="grey" onClick={toggle}>Close</Button>
                </ModalFooter>
            </Modal>
            
            <div className="reference-container" style={style} onClick={toggle}>
                <i 
                    className="bi bi-info-circle-fill"
                    title={"Click to see reference for: " + title}/>
            </div>
        </>
    )
};