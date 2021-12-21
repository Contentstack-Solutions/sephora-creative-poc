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
        `https://eu-api.contentstack.com/v3/content_types/creative/entries?environment=preview${
          Stack.live_preview.hash
            ? `&live_preview=${Stack.live_preview.hash}`
            : ""
        }`,
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
          addEditableTags(data, "creative", true);
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

  if (!data) {
    return <div className="App">Loading...</div>;
  }

  return (
    <div>
      <Container className="m-5">
        <h2>Creative</h2>
        <ul>
          {data.entries.map((item) => {
            return (
              <li key={item.uid}>
                <a href={item.url}>{item.title}</a>
              </li>
            );
          })}
        </ul>
      </Container>
    </div>
  );
}
