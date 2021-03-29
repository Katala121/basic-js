class VigenereCipheringMachine {
  constructor(value){
    this.direct = arguments.length ? value : true
    this.letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  }
  encrypt(message, key) {
    if (!(message && key)) throw Error()
    return message.split('').map((item, i) => {
      if (!item.match(/[a-zA-Z]/)) return item
      // let a = i
      if (i > key.length) while (a >= key.length) a - key.length
      const x = this.letters.indexOf(item.toUpperCase()) + this.letters.indexOf(key[a])
      return x > 26 ? this.letters[x - 26] : this.letters[x] 
    }).join('')
  }    
  decrypt(message, key) {
    if (!(message && key)) throw Error()
  }
}

module.exports = VigenereCipheringMachine;
