// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = ""                -> domain name = cnet"

const getUrl = (url) => {
  const indx = url.indexOf(".") + 1;
  const serch = url.search("/") + 1;

  let lastIndx = 0;
  let intermedeatStr;
  let resultStr;
  if (indx <= 12) {
    intermedeatStr = url.slice(indx);
    lastIndx = intermedeatStr.indexOf(".");
    return (resultStr = intermedeatStr.slice(0, lastIndx));
  } else {
    intermedeatStr = url.slice(serch + 1);
    lastIndx = intermedeatStr.indexOf(".");
    return (resultStr = intermedeatStr.slice(0, lastIndx));
  }
};

console.log(getUrl("http://www.zombie-bites.com"));
console.log(getUrl("g80n04sy3k71w7xnrwwq0laow43.it/default.html"));
console.log(getUrl("http://github.com/carbonfive/raygun"));
console.log(getUrl("www.xakep.ru"));
console.log(getUrl("http://google.co.jp"));
