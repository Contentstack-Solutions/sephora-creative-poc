import Stack, { onEntryChange } from "../../utils";
import { addEditableTags } from "@contentstack/utils";
import { useState, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { useRouter } from "next/router";
import FentyButtaMobile from "../../components/fenty_butta/FentyButtaMobile";
import FentyButtaDesktop from "../../components/fenty_butta/FentyButtaDesktop";

export const getStaticPaths = async () => {
  const res = await fetch(
    `https://eu-api.contentstack.com/v3/content_types/creative/entries?locale=en-us&include_fallback=true`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        api_key: "bltbf189e64bac3487b",
        authorization: "cs9ac78758419a8c1c1336b1ff",
      },
    }
  );

  const data = await res.json();
  const paths = data.entries.map((creative) => {
    return {
      params: { id: creative.url.replace("/creative/", "") },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async () => {
  return {
    props: { article_data: "data" },
  };
};

const Creative = (params) => {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);

  const router = useRouter();

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

  if (!data.entries) {
    return <div className="App">Loading...</div>;
  }

  const current_data = data.entries.filter(
    (item) => item.url === `/creative/${router.query.id}`
  );

  console.log(current_data)
  return (
    <div>
      <Container className="m-5">
        <h1>Desktop</h1>
        <FentyButtaDesktop props={current_data[0]} />

        <h1>Email</h1>
        <FentyButtaMobile props={current_data[0]} />
      </Container>
    </div>
  );
};

export default Creative;