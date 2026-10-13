
import React from "react";

function Rooms() {
  return (
    <section id="rooms" className="rooms-section">
      <h2>Our Luxury Rooms</h2>
      <p>Experience comfort and elegance at V Residency.</p>

      <div className="room-grid">
        <div className="room-card">
          <h3>Standard A/C Room</h3>
          <p>Comfortable room with air conditioning.</p>
          <p>Price: Contact for Price</p>
        </div>

        <div className="room-card">
          <h3>Deluxe Room</h3>
          <p>Relax in a spacious and elegant room.</p>
          <p>Price: Contact for Price</p>
        </div>

        <div className="room-card">
          <h3>Premium Room</h3>
          <p>Enjoy a comfortable premium stay.</p>
          <p>Price: Contact for Price</p>
        </div>
      </div>
    </section>
  );
}

export default Rooms;