import Stack, { onEntryChange } from "../utils";
import { addEditableTags } from "@contentstack/utils";
import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import FentyButtaMobile from "../components/fenty_butta/FentyButtaMobile";
import FentyButtaDesktop from "../components/fenty_butta/FentyButtaDesktop";

export default function Home() {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const Fetchdata = () => {
      fetch(
        `https://eu-api.contentstack.com/v3/content_types/campaign/entries/bltd0f5bb1c68824d57?environment=preview&include[]=creatives.creative`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            api_key: "bltbf189e64bac3487b",
            authorization: "cs9ac78758419a8c1c1336b1ff",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          addEditableTags(data, "landing_pages", true);
          setData(data);
          setLoading(false);
        });
    };
    Fetchdata();
    onEntryChange(() => {
      Fetchdata();
    });
  }, []);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  if (!data.entry) {
    return <div className="App">Loading...</div>;
  }

  return (
    <div>
      <Row className="m-5">
        <Col sm={6}>
          <h1>Desktop</h1>
          <FentyButtaDesktop props={data.entry.creatives.creative} />
        </Col>
        <Col sm={6}>
          <h1>Mobile</h1>
          <FentyButtaMobile props={data.entry.creatives.creative} />
        </Col>
      </Row>
    </div>
  );
}
