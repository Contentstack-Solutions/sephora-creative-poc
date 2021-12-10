import Stack, { onEntryChange } from "../utils";
import { addEditableTags } from "@contentstack/utils";
import { useState, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import FentyButtaMobile from "../components/fenty_butta/FentyButtaMobile";
import FentyButtaDesktop from "../components/fenty_butta/FentyButtaDesktop";

export default function Home() {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const Fetchdata = () => {
      fetch(
        `https://eu-api.contentstack.com/v3/content_types/creative/entries/bltc87cf736e7e84ce1?environment=preview${Stack.live_preview.hash ? `&live_preview=${Stack.live_preview.hash}`: ''}`,
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
          addEditableTags(data, "campaign", true);
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

  console.log(data)

  if (!data) {
    return <div className="App">Loading...</div>;
  }

  return (
    <div>
      <Container className="m-5">
          <h1>Desktop</h1>
          <FentyButtaDesktop props={data.entry} />

          
          <h1>Mobile</h1>
          <FentyButtaMobile props={data.entry} />
      </Container>
    </div>
  );
}
