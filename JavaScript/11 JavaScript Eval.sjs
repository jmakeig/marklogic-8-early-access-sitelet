xdmp:javascript-eval("var result = []; for(var p in param) {result.push(p); result.push(param[p]);} result;",
  (xs:QName("param"), object-node { "a": "A", "b": "B"})
)
