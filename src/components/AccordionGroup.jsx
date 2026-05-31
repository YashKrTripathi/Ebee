import React, { useState } from "react";

export function AccordionGroup({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div className="accordion-item" key={item.title}>
          <button
            className={openIndex === index ? "is-open" : ""}
            type="button"
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
          >
            {item.title}
            <span>+</span>
          </button>
          <p>{item.copy}</p>
        </div>
      ))}
    </div>
  );
}
