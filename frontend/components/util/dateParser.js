const dateParser = (dateStr) => {
  let dateObj = new Date(dateStr.concat("T00:00:00"));
  return dateObj.toLocaleString(
    "en-US",
    {
      month: "short",
      day: "numeric",
      year: "numeric",
    },
    { timeZone: "America/New_York" }
  );
};

export default dateParser;
