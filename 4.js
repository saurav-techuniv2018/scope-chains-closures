function foo() {
  var bar;
  quux = 3;
  function zip() {
    var quux = 4;
    bar = true;
  }
  return zip;
}
