import { FC } from "react";
import { motion as m } from "framer-motion";

import { MainLayout } from "@/components/layouts";
import { NewsItem } from "@/components/molecules";
import { HomeViewProps } from "./Home.props";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: "60px" },
  show: { opacity: 1, y: 0 },
};

const HomeView: FC<HomeViewProps> = ({ previewId, setPreviewId, newsList }) => {
  return (
    <MainLayout>
      <m.ul
        className="newslist-component"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "45px",
          padding: "0 300px",
          justifyContent: "center",
        }}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {newsList.map((news, key) => (
          <m.li key={key} variants={item} style={{ listStyle: "none" }}>
            <NewsItem
              key={news.title}
              title={news.title}
              url={news.url}
              date={news.date}
              score={news.score}
              authorId={news.authorId}
              authorKarmaScore={news.authorKarmaScore}
              previewId={previewId}
              setPreviewId={setPreviewId}
              imageUrl={news.imageUrl}
            />
          </m.li>
        ))}
      </m.ul>
    </MainLayout>
  );
};

export default HomeView;
