import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import useSWR from "swr";
import format from "comma-number";
import fetcher from "@utils/Fetcher";

export default function Home() {
  // const [hasUpdated, setHasUpdated] = useState(false);
  const { data } = useSWR("/api/youtube", fetcher);
  const { stefanJudis, whitep4nth3r } = data;

  // const dataCache = useRef(data?.subscriberCount);

  // useEffect(() => {
  //   if (data?.followers !== dataCache.current) {
  //     dataCache.current = data?.followers;
  //     setHasUpdated(true);

  //     setTimeout(() => {
  //       setHasUpdated(false);
  //     }, 3000);
  //   }
  //   return () => {
  //     setHasUpdated(false);
  //   };
  // }, [data]);

  return (
    <>
      <Head>
        <title>whitpe4nth3r vs Stefan Judis</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>whitep4nth3r subs {format(whitep4nth3r.subscriberCount)}</h1>
        <h1>whitep4nth3r views {format(whitep4nth3r.viewCount)}</h1>
        <h1>stefan judis subs {format(stefanJudis.subscriberCount)}</h1>
        <h1>stefan judis views {format(stefanJudis.viewCount)}</h1>
      </main>
    </>
  );
}
