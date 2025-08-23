function booWho(argument) {
  if (argument === true || argument === false) {
    return true;
  } else {
    return false;
  }
}
//console.log to view returns
console.log(booWho(true));
console.log(booWho(false));
booWho([1, 2, 3]);
booWho([].slice);
booWho({ a: 1 });
booWho(1);
booWho(NaN);
booWho("a");
booWho("true");
booWho("false");
