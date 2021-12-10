import {Col, Row} from 'react-bootstrap'

export default function FentyButtaDesktop({props}) {
    const data = props
    return(
        <Row className="fenty-butta-desktop" style={{backgroundImage: `url(${data.background_image.url}` }}>
            <Row className="fenty-butta-desktop-copy">
            <h2>{data.header_long}</h2>
            <p dangerouslySetInnerHTML={{__html: data.body_copy_short}}></p>
            <p>{data.cta.title}</p>
            <p dangerouslySetInnerHTML={{__html: data.legal_long}}></p>
            <img className="fenty-butta-desktop-product" src={data.product_image.url}></img>
            <img className="fenty-butta-desktop-seal" src={data.seal_image.url}></img>
            {/* <p>{data}</p> */}
            {/* <TextSerializer props={data.body_copy_short.children} /> */}
            </Row>

        </Row>
    )
}