module.exports = function reverse (n) {

    if (n < 0) {
        n = Math.abs(n)
      }
    
      let str = n.toString()
      n = Array.from(str);
      let numReverse = n.reverse()
    
      return +numReverse.join('')
}
