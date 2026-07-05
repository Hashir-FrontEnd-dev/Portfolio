import React from "react";

function Meteor() {
  const meteors = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 2.5 + Math.random() * 2,
    size: 1 + Math.random() * 2,
  }));

  return (
    <div className="meteor-shower">
      {meteors.map((m) => (
        <div
          key={m.id}
          className="meteor"
          style={{
            left: `${m.left}%`,
            animationDelay: `-${m.delay}s`,
            animationDuration: `${m.duration}s`,
            "--meteor-size": `${m.size}px`,
          }}
        />
      ))}
    </div>
  );
}

export default Meteor;
