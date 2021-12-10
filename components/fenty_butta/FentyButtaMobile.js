import { Col, Row } from "react-bootstrap";

export default function FentyButtaMobile({ props }) {
  const data = props;
  return (
    <Row
      className="fenty-butta-mobile"
      style={{ backgroundImage: `url(${data.background_image.url}` }}
    >
      <Row className="fenty-butta-mobile-copy">
        <h2>{data.header_short}</h2>
        <p dangerouslySetInnerHTML={{ __html: data.body_copy_long }}></p>
        <p>{data.cta.title}</p>
        <p dangerouslySetInnerHTML={{ __html: data.legal_short }}></p>
        <img
          className="fenty-butta-mobile-seal"
          src={data.seal_image.url}
        ></img>
        <img
          className="fenty-butta-mobile-product"
          src={data.product_image.url}
        ></img>
      </Row>

      {/* <p>{data}</p> */}
      {/* <TextSerializer props={data.body_copy_short.children} /> */}
    </Row>
  );
}
