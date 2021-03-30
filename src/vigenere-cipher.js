class VigenereCipheringMachine {
  constructor(value){
    this.direct = arguments.length ? value : true
    this.letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  }
  encrypt(message, key) {
    if (!(message && key)) throw Error()
    let a = 0
    return message.split('').map((item, i) => {
      if (!item.match(/[a-zA-Z]/)) return item
      if (a > key.length - 1){
        a -= key.length
      }
      const x = this.letters.indexOf(item.toUpperCase()) + this.letters.indexOf(key[a].toUpperCase())
      a++
      return x >= 26 ? this.letters[x - 26] : this.letters[x] 
    }).join('')
  }    
  decrypt(message, key) {
    if (!(message && key)) throw Error()
    let a = 0
    return message.split('').map((item, i) => {
      if (!item.match(/[a-zA-Z]/)) return item
      if (a > key.length - 1){
        a -= key.length
      }
      const x = this.letters.indexOf(item.toUpperCase()) - this.letters.indexOf(key[a].toUpperCase())
      a++
      return x < 0 ? this.letters[x + 26] : this.letters[x]
    }).join('')
  }
}

module.exports = VigenereCipheringMachine;
