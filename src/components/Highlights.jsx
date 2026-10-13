import React from "react";

const highlights = [
  {
    
    title: "Comfortable Rooms",
    description: "Relax and feel at home.",
  },
  {
    
    title: "Convenient Location",
    description: "Opposite Aditya Hospital, NH16.",
  },

];

function Highlights() {
  return (
    <section className="highlights">
      {highlights.map((item) => (
        <div key={item.title}>
          <span className="highlight-icon">{item.icon}</span>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Highlights;