import {Col, Row} from 'react-bootstrap'

export default function FentyButtaDesktop({props}) {
    const data = props[0]
    console.log(data.body_short)
    return(
        <Row>
            <h2>{data.header_long}</h2>
            <p dangerouslySetInnerHTML={{__html: data.body_copy_short}}></p>
            <p>{data.cta.title}</p>
            <p dangerouslySetInnerHTML={{__html: data.legal_long}}></p>
            <img src={data.background_image.url}></img>
            <img src={data.product_image.url}></img>
            <img src={data.seal_image.url}></img>
            {/* <p>{data}</p> */}
            {/* <TextSerializer props={data.body_copy_short.children} /> */}
        </Row>
    )
}