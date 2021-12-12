import { Col, Row } from "react-bootstrap";

export default function FentyButtaMobile({ props }) {
  const data = props;
  return (
    <Row
      className="fenty-butta-mobile"
      style={{ backgroundImage: `url(${data.background_image.url}` }}
    >
      <Row className="fenty-butta-mobile-copy">
        <h2
                  data-cslp={data.$.header_short["data-cslp"].replace(
                    "undefined.en-us.entry",
                    `${data.uid}.en-us`
                  )}
        >{data.header_short}</h2>
        <p          data-cslp={data.$.body_copy_long["data-cslp"].replace(
            "undefined.en-us.entry",
            `${data.uid}.en-us`
          )}
          dangerouslySetInnerHTML={{ __html: data.body_copy_long.replace("PROMOCODE", `<strong>${data.promo_code}</strong>`) }}></p>
        <p>{data.cta.title}</p>
        <p 
                  data-cslp={data.$.legal_short["data-cslp"].replace(
                    "undefined.en-us.entry",
                    `${data.uid}.en-us`
                  )}
        dangerouslySetInnerHTML={{ __html: data.legal_short.replace("PROMOCODE", data.promo_code) }}></p>
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
