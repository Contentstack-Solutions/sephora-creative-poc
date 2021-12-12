import { Col, Row } from "react-bootstrap";

export default function FentyButtaDesktop({ props }) {
  const data = props;
  console.log(data);
  return (
    <Row
      className="fenty-butta-desktop"
      style={{ backgroundImage: `url(${data.background_image.url}` }}
    >
      <Row className="fenty-butta-desktop-copy">
        <h2
          data-cslp={data.$.header_long["data-cslp"].replace(
            "undefined.en-us.entry",
            `${data.uid}.en-us`
          )}
        >
          {data.header_long}
        </h2>
        <p
          data-cslp={data.$.body_copy_short["data-cslp"].replace(
            "undefined.en-us.entry",
            `${data.uid}.en-us`
          )}
          dangerouslySetInnerHTML={{ __html: data.body_copy_short.replace("PROMOCODE", `<strong>${data.promo_code}</strong>`) }}
        ></p>
        <p>{data.cta.title}</p>
        <p
          data-cslp={data.$.legal_long["data-cslp"].replace(
            "undefined.en-us.entry",
            `${data.uid}.en-us`
          )}
          dangerouslySetInnerHTML={{ __html: data.legal_long }}
        ></p>
        <img
          className="fenty-butta-desktop-product"
          src={data.product_image.url}
        ></img>
        <img
          className="fenty-butta-desktop-seal"
          src={data.seal_image.url}
        ></img>
        {/* <p>{data}</p> */}
        {/* <TextSerializer props={data.body_copy_short.children} /> */}
      </Row>
    </Row>
  );
}
