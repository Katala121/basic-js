const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.lenth
  },
  addLink(value) {
    this.chain.push(String(value))
    return this
  },
  removeLink(position) {
    if ( position <= 0 || position > this.chain.length || typeof position != 'number'){
      this.chain = []
      throw Error()
    } 
    this.chain.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    const finishChain = `( ${this.chain.join(' )~~( ')} )`
    this.chain = []
    return finishChain
  }
};

module.exports = chainMaker;
