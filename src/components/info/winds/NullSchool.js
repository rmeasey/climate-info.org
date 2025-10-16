import { CardHeader, CardBody, CardFooter, Button } from 'reactstrap'

import Reference from '../../Reference'
const title = "Atmospheric Winds from Earth.NullSchool.Net"
const NullSchool = () => {
    return (
        <>
            <CardHeader>
                <h3>{title}</h3>
                <Reference style={{top:"60px"}} title={title}/>
            </CardHeader>
            <CardBody>
                <iframe className='nullschool-frame' title="earth.nullschool.net" src='https://earth.nullschool.net/#current/wind/isobaric/10hPa/orthographic=3.51,58.26,383'/>
            </CardBody>
            <CardFooter>
                <Button color="grey">Click on the "earth" menu to open in a new window</Button>
            </CardFooter>
        </>
    )
}
export default NullSchool;
