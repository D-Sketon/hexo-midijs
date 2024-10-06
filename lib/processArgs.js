const processArgs = (args) => {
  const parsedArgs = [args[0], null, []];
  if (args[1] && (args[1].endsWith("%") || args[1].endsWith("px"))) {
    parsedArgs[1] = args[1];
    parsedArgs[2] = args.slice(2);
  } else {
    parsedArgs[2] = args.slice(1);
  }
  return {
    id: "midijs" + ((Math.random() * 9999) | 0),
    url: parsedArgs[0],
    width: parsedArgs[1] || "85%",
    args: parsedArgs[2],
  };
};

module.exports = processArgs;
