import { Col, Row } from "react-bootstrap";

export default function FentyButtaMobile({ props }) {
  const data = props;

  return (
    <Row
      className="fenty-butta-mobile"
      style={{ backgroundImage: `url(${data.background_image ? data.background_image.url : "https://via.placeholder.com/600x300?text=BG+Image"}` }}
    >
      <Row className="fenty-butta-mobile-copy">
        <h2
          data-cslp={data.$.header_short["data-cslp"].replace(
            "undefined.en-us.entry",
            `${data.uid}.en-us`
          )}
        >
          {data.header_short ? data.header_short : ""}
        </h2>
        <p
          data-cslp={data.$.body_copy_short["data-cslp"].replace(
            "undefined.en-us.entry",
            `${data.uid}.en-us`
          )}
          dangerouslySetInnerHTML={{
            __html: data.body_copy_short.replace(
              "PROMOCODE",
              `<strong style="color:${data.color_for_promo ? data.color_for_promo : "black"}">${data.promo_code ? data.promo_code : ""}</strong>`
            ),
          }}
        ></p>
         <p className="cta">{data.cta ? data.cta[0].title : ""}</p>
        <p
          data-cslp={data.$.legal_short["data-cslp"].replace(
            "undefined.en-us.entry",
            `${data.uid}.en-us`
          )}
          dangerouslySetInnerHTML={{
            __html: data.legal_short.replace("PROMOCODE", data.promo_code),
          }}
        ></p>
        <img
          className="fenty-butta-mobile-seal"
          src={data.seal_image ? data.seal_image.url : `https://via.placeholder.com/300?text=Seal+Image`}
        ></img>
        <img
          className="fenty-butta-mobile-product"
          src={data.product_image ? data.product_image.url : `https://via.placeholder.com/300x100?text=Product+Image`}
        ></img>
      </Row>

      {/* <p>{data}</p> */}
      {/* <TextSerializer props={data.body_copy_short.children} /> */}
    </Row>
  );
}
