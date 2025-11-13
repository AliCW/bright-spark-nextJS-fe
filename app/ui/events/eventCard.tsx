import { formatEventAndCollaborationNames } from '../../lib/utils';
import Link from "next/link";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function EventCard( { data } : { data : object[] } ){ 

    return (
        <div>
            <Container>
                <Row>
                    {[...data].map((row: {   
                        event: string,
                        event_thumb: number,
                        image_id: number,
                        raw_link: string,
                    }, 
                        index: number
                    ) => {
                        return (
                            <Col key={index}>
                                <Link
                                    href={`/events/${row.event}`}
                                >
                                    <p>{formatEventAndCollaborationNames(row.event)}</p>
                                    <img src={row.raw_link} width="600" height="750"/>
                                </Link>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}