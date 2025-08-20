// ChecklistFilter.tsx
"use client";
import  { useState, useEffect } from "react";
import { cards as allCards } from "./GridCards";
import styles from "./ChecklistFilter.module.css";

const categories: { title: string; tags: string[] }[] = [
  {
    title: "TOOLS",
    tags: ["MEMS Studio", "STM32Cube.AI", "NanoEdge AI Studio"],
  },
  { title: "HARDWARE", tags: ["MEMS MLC", "STM32 AI MCU"] },
  { title: "INDUSTRY", tags: ["Agriculture", "Transportation", "Environment"] },
  { title: "SENSORS", tags: ["sensor 1", "sensor 2", "sensor 3"] },
  {
    title: "APPLICATION",
    tags: ["Biometric", "Object Detection", "Image Classification"],
  },
];

interface Props {
  onFilter: (filtered: typeof allCards) => void;
}

function ChecklistFilter({ onFilter }: Props) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  useEffect(() => {
    const filteredCards =
      selectedTags.length === 0
        ? allCards
        : allCards.filter((card) =>
            selectedTags.every((tag) => card.hashtags.includes(tag))
          );
    onFilter(filteredCards);
  }, [selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className={styles.container}>
      {categories.map((category) => (
        <div key={category.title} className={styles.category}>
          <h3 className={styles.categoryTitle}>{category.title}</h3>
          <div className={styles.checkboxLabelsContainer}>
            {category.tags.map((tag) => (
              <label key={tag} className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={selectedTags.includes(tag)}
                  onChange={() => toggleTag(tag)}
                />
                {tag}
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChecklistFilter;
