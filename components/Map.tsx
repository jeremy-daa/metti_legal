import React from "react";

const Map = () => {
  return (
    <div className="w-full h-[300px] md:h-[300px] lg:h-[400px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4423.382949142281!2d38.77952583152225!3d8.991771342787187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b84fedf4ccaa5%3A0x33e1d3c4e45a3152!2sGenete%20Limat%20PLC!5e0!3m2!1sen!2set!4v1698247423174!5m2!1sen!2set"
        width="100%"
        height="100%"
        style={{ border: "0" }}
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;
