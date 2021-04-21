import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import useSWR from "swr";
import format from "comma-number";
import fetcher from "@utils/Fetcher";

import Dude from "@components/svg/Dude";
import Panther from "@components/svg/Panther";

export default function Home() {
  // const [hasUpdated, setHasUpdated] = useState(false);
  const { data } = useSWR("/api/youtube", fetcher);

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

  //todo
  //social + website links

  return (
    <>
      <Head>
        <title>whitep4nth3r vs Stefan Judis</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container">
          <div className="container__panther">
            <div className="container__svgHolder">
              <Panther />
            </div>
            <h2 className="container__pantherTitle">whitep4nth3r</h2>
            <h3 className="container__pantherStat">{format(data?.whitep4nth3r.subscriberCount)}</h3>
            <div className="container__buttonContainer">
              <a
                href="https://youtube.com/whitep4nth3r"
                className="container__button"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View whitep4nth3r's YouTube channel"
              >
                View channel
              </a>
            </div>
          </div>
          <div className="container__vs"></div>
          <div className="container__stefan">
            <div className="container__svgHolder">
              <Dude />
            </div>
            <h2 className="container__stefanTitle">Stefan Judis</h2>
            <h3 className="container__stefanStat">{format(data?.stefanJudis.subscriberCount)}</h3>
            <div className="container__buttonContainer">
              <a
                href="https://youtube.com/stefanjudis"
                className="container__button"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Stefan Judis' YouTube channel"
              >
                View channel
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
