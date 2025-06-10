"use client";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./UseGrid.module.css";
import Card from "./Card";
import verticalLeft from "../../../assets/verticalLeft.svg";
import verticalRight from "../../../assets/verticalRight.svg";
import horizontalLeft from "../../../assets/horizontalLeft.svg";
import horizontalRight from "../../../assets/horizontalRight.svg";
import ucimg1 from "../../../assets/ucimg1.png";
import ucimg2 from "../../../assets/ucimg2.png";
import { cards as allCards } from "./GridCards";
import CheckListFilter from "./CheckListFilter";

function UseGrid() {
  const [filteredCards, setFilteredCards] = useState(allCards);
  const navigate = useNavigate();

  const handleDiscoverMore = (slug: string) => {
    navigate(`/usecasesdetails/${slug}`);
  };

  return (
    <div className={styles.useall}>
      <h1>USE CASE</h1>
      <div className={styles.GridAndFilter}>
        <CheckListFilter onFilter={setFilteredCards} />

        <div className={styles.Gridcontainer}>
          <div className={styles.topSection}>
            {filteredCards[0] && (
              <Card
                title={filteredCards[0].title}
                description={filteredCards[0].description}
                hashtags={filteredCards[0].hashtags}
                imagesrc={verticalLeft}
                variant="vertical"
                slug={filteredCards[0].slug}
                onDiscoverMore={() => handleDiscoverMore(filteredCards[0].slug)}
              />
            )}

            <div className={styles.tripleRight}>
              <div className={styles.twoSquares}>
                {filteredCards.length > 1 && (
                  <Card
                    imagesrc={ucimg1}
                    variant="square-with-image"
                    title=""
                    description=""
                    hashtags={[""]}
                    slug=""
                  />
                )}
                {filteredCards[1] && (
                  <Card
                    title={filteredCards[1].title}
                    description={filteredCards[1].description}
                    hashtags={filteredCards[1].hashtags}
                    imagesrc=""
                    variant="square-no-image"
                    slug={filteredCards[1].slug}
                    onDiscoverMore={() =>
                      handleDiscoverMore(filteredCards[1].slug)
                    }
                  />
                )}
              </div>
              {filteredCards[2] && (
                <Card
                  title={filteredCards[2].title}
                  description={filteredCards[2].description}
                  hashtags={filteredCards[2].hashtags}
                  imagesrc={horizontalRight}
                  variant="horizontal"
                  slug={filteredCards[2].slug}
                  onDiscoverMore={() =>
                    handleDiscoverMore(filteredCards[2].slug)
                  }
                />
              )}
            </div>
          </div>

          <div className={styles.bottomSection}>
            <div className={styles.tripleLeft}>
              {filteredCards[3] && (
                <Card
                  title={filteredCards[3].title}
                  description={filteredCards[3].description}
                  hashtags={filteredCards[3].hashtags}
                  imagesrc={horizontalLeft}
                  variant="horizontal"
                  slug={filteredCards[3].slug}
                  onDiscoverMore={() =>
                    handleDiscoverMore(filteredCards[3].slug)
                  }
                />
              )}
              <div className={styles.twoSquares}>
                {filteredCards.length > 4 && (
                  <Card
                    imagesrc={ucimg2}
                    variant="square-with-image"
                    title=""
                    description=""
                    hashtags={[""]}
                    slug=""
                  />
                )}
                {filteredCards[4] && (
                  <Card
                    title={filteredCards[4].title}
                    description={filteredCards[4].description}
                    hashtags={filteredCards[4].hashtags}
                    imagesrc=""
                    variant="square-no-image"
                    slug={filteredCards[4].slug}
                    onDiscoverMore={() =>
                      handleDiscoverMore(filteredCards[4].slug)
                    }
                  />
                )}
              </div>
            </div>

            {filteredCards[5] && (
              <Card
                title={filteredCards[5].title}
                description={filteredCards[5].description}
                hashtags={filteredCards[5].hashtags}
                imagesrc={verticalRight}
                variant="vertical"
                slug={filteredCards[5].slug}
                onDiscoverMore={() => handleDiscoverMore(filteredCards[5].slug)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UseGrid;
