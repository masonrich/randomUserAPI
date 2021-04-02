/*
    This function takes in a new Date() object and converts
    it to the following format: DD/MMM/YYYY 
*/
function formatDate(t) {
  let formatText = [
    { day: "numeric" },
    { month: "short" },
    { year: "numeric" },
  ];
  function format(m) {
    let f = new Intl.DateTimeFormat("en", m);
    return f.format(t);
  }
  return formatText.map(format).join("/");
}

export { formatDate };
