import { FC } from "react";
import Link from "next/link";
import { AnimatePresence, motion as m } from "framer-motion";

import { Image } from "@/components/atoms";
import styles from "./NewsItem.module.scss";
import { NewsItemProps } from "./NewsItem.props";

export const NewsItem: FC<NewsItemProps> = ({
  title,
  url,
  date,
  score,
  authorId,
  authorKarmaScore,
  imageUrl,
  previewId,
  setPreviewId,
}) => {
  return (
    <>
      <m.div className={`newsitem-component ${styles.main}`} layoutId={title}>
        <m.div
          style={{ position: "relative", height: "100%", overflow: "hidden" }}
        >
          <m.div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              height: "100%",
              width: "100%",
            }}
            initial={{ scale: 1 }}
            whileHover={{
              scale: 1.1,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 60 }}
          >
            <Image
              link={url}
              wrapperStyle={{ position: "absolute", zIndex: 1 }}
              src={imageUrl}
              alt="test"
            />
          </m.div>
        </m.div>
        <div className={`texts-summary ${styles.textsSummary}`}>
          <div className={`background ${styles.background}`} />
          <div className={`texts ${styles.texts}`}>
            <Link href={url || ""} target="_blank" className={styles.link}>
              <h3 className={`title ${styles.title}`}>{title}</h3>
            </Link>
            <p className={`date ${styles.date}`}>{date}</p>

            <div className={`links-actions ${styles.linksActions}`}>
              <button
                onClick={() => setPreviewId(title)}
                className={`summary-button ${styles.summaryButton}`}
              >
                <span>Show summary</span>
              </button>
            </div>
          </div>
        </div>
      </m.div>
      <AnimatePresence>
        {previewId === title && (
          <m.div className={`preview ${styles.preview}`} layoutId={title}>
            <div className={`${styles.main}`}>
              <Image
                wrapperStyle={{ position: "absolute", zIndex: 1 }}
                src={imageUrl}
                alt="test"
              />

              <div className={`texts-summary ${styles.textsSummary}`}>
                <div className={`background ${styles.background}`} />
                <div className={`texts ${styles.texts}`}>
                  <h3 className={`title ${styles.title}`}>
                    {title}{" "}
                    <span className={styles.by}>
                      by{" "}
                      <strong className={styles.authorName}>{authorId}</strong>
                    </span>
                  </h3>
                  <p className={`date ${styles.date}`}>{date}</p>
                  <div
                    className={`karma-story-score ${styles.karmaStoryScore}`}
                  >
                    <div className={styles.karma}>
                      <span className={styles.karmaK}>K</span>
                      <p className={styles.karmaScore}>{authorKarmaScore}</p>
                    </div>
                    <div className={styles.story}>
                      <span className={styles.storyScoreS}>S</span>
                      <p className={styles.storyScore}>{score}</p>
                    </div>
                  </div>

                  <m.div className={`summary ${styles.summary}`}>
                    <m.p
                      // layout
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { duration: 0.6, delay: 0.3 },
                      }}
                    >
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet,
                      consectetur, adipisci velit, sed quia non numquam eius
                      modi tempora incidunt ut labore et dolore magnam aliquam
                      quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                      exercitationem ullam corporis suscipit laboriosam, nisi ut
                      aliquid ex ea commodi consequatur? Quis autem vel eum iure
                      reprehenderit qui in ea voluptate velit esse quam nihil
                      molestiae consequatur, vel illum qui dolorem eum fugiat
                      quo voluptas nulla pariatur?
                    </m.p>
                    <m.p
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { duration: 0.6, delay: 0.9 },
                      }}
                    >
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti quos dolores et quas molestias excepturi sint
                      occaecati cupiditate non provident, similique sunt in
                      culpa qui officia deserunt mollitia animi, id est laborum
                      et dolorum fuga. Et harum quidem rerum facilis est et
                      expedita distinctio. Nam libero tempore, cum soluta nobis
                      est eligendi optio cumque nihil impedit quo minus id quod
                      maxime placeat facere possimus, omnis voluptas assumenda
                      est, omnis dolor repellendus. Temporibus autem quibusdam
                      et aut officiis debitis aut rerum necessitatibus saepe
                      eveniet ut et voluptates repudiandae sint et molestiae non
                      recusandae. Itaque earum rerum hic tenetur a sapiente
                      delectus, ut aut reiciendis voluptatibus maiores alias
                      consequatur aut perferendis doloribus asperiores repellat.
                    </m.p>
                  </m.div>
                  <div className={`links-actions ${styles.linksActions}`}>
                    <m.button
                      className={styles.closeButton}
                      onClick={() => setPreviewId("")}
                    >
                      Close Preview
                    </m.button>
                  </div>
                </div>
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
};
