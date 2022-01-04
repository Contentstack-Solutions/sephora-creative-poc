import Stack, { onEntryChange } from "../../utils";
import { addEditableTags } from "@contentstack/utils";
import { useState, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { useRouter } from "next/router";
import FentyButtaMobile from "../../components/fenty_butta/FentyButtaMobile";
import FentyButtaDesktop from "../../components/fenty_butta/FentyButtaDesktop";

var temp = 0
export const getStaticPaths = async () => {
  const res = await fetch(
    `https://eu-api.contentstack.com/v3/content_types/creative/entries?locale=en-us&include_fallback=true${
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
  );

  const data = await res.json();
  const paths = data.entries.map((creative) => {
    return {
      params: { id: creative.url.replace("/creative/", "") },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async () => {
  const res = await fetch(
    `https://eu-api.contentstack.com/v3/content_types/creative/entries?locale=en-us&include_fallback=true${
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
  );

  const data = await res.json();
  return {
    props: { data },
  };
};



const Creative = (params) => {
  const router = useRouter();
  const uid = params.data.entries.filter((item) => (item.url == `/creative/${router.query.id}`))
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const Fetchdata = () => {
      fetch(
        `https://eu-api.contentstack.com/v3/content_types/creative/entries/${uid[0].uid}?include_fallback=true${
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
    return <div className="App">Loading... is loading</div>;
  }

  if (!data) {
    return <div className="App">Loading...</div>;
  }

  if (!data.entry) {
    return <div className="App">Loading...</div>;
  }

  return (
    <div>
      <Container className="m-5">
        <h1>Desktop</h1>
        <FentyButtaDesktop props={data.entry} />

        <h1>Email</h1>
        <FentyButtaMobile props={data.entry} />
      </Container>
    </div>
  );
};

export default Creative;