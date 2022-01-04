import { Col, Row } from "react-bootstrap";


export default function FentyButtaDesktop({ props }) {
  const data = props;
  console.log(data.cta[0].title)
  return (
    <Row
      className="fenty-butta-desktop"
      style={{ backgroundImage: `url(${data.background_image ? data.background_image.url : "https://via.placeholder.com/745x184?text=BG+Image"}` }}
    >
      <Row className="fenty-butta-desktop-copy">
        <h2
          data-cslp={data.$.header_long["data-cslp"].replace(
            "undefined.en-us.entry",
            `${data.uid}.en-us`
          )}
        >
          {data.header_long ? data.header_long : ""}
        </h2>
        <p
          data-cslp={data.$.body_copy_short["data-cslp"].replace(
            "undefined.en-us.entry",
            `${data.uid}.en-us`
          )}
          dangerouslySetInnerHTML={{ __html: data.body_copy_short.replace("PROMOCODE", `<strong style="color:${data.color_for_promocode ? data.color_for_promocode: ""}">${data.promo_code}</strong>`) }}
        ></p>
        <p className="cta">{data.cta ? data.cta[0].title : ""}</p>
        <p
          data-cslp={data.$.legal_long["data-cslp"].replace(
            "undefined.en-us.entry",
            `${data.uid}.en-us`
          )}
          dangerouslySetInnerHTML={{ __html: data.legal_long }}
        ></p>
        <img
          className="fenty-butta-desktop-product"
          src={data.product_image ? data.product_image.url : `https://via.placeholder.com/300x100?text=Product+Image`}
        ></img>
        <img
          className="fenty-butta-desktop-seal"
          src={data.seal_image ? data.seal_image.url : `https://via.placeholder.com/300?text=Seal+Image`}
        ></img>
        {/* <p>{data}</p> */}
        {/* <TextSerializer props={data.body_copy_short.children} /> */}
      </Row>
    </Row>
  );
}
