const { BadRequestError } = require("../utils/errors.js");

class GiftExchange {
  static getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  static pairs(names) {
    if (!names) {
      throw new BadRequestError("Cannt make pairs without names");
    }
    if (names.length % 2 == 1) {
      throw new BadRequestError("Cannot pair an odd number of names");
    }
    const pairs = [];
    const namesUsed = [...names];

    while (namesUsed.length > 0) {
      const firstDude = namesUsed.pop();
      const randomInd = GiftExchange.getRandomInt(0, namesUsed.length);
      const secondDude = namesUsed[randomInd];
      namesUsed.splice(randomInd, 1);
      if (firstDude && secondDude) {
        pairs.push([firstDude, secondDude]);
      } else {
        throw new BadRequestError("Unexpected error pairing an even number");
      }
    }
    return pairs;
  }
  static traditional(names) {
    if (!names) {
      throw new BadRequestError("Cannt make traditional without names");
    }
    const exchange = [];
    const namesUsed = [...names];
    let currentPerson = namesUsed.pop();
    const firstDude = currentPerson;
    while (namesUsed.length > 0) {
      const randomInd = GiftExchange.getRandomInt(0, namesUsed.length);
      const recipient = namesUsed[randomInd];
      namesUsed.splice(randomInd, 1);
      const newLine = `${currentPerson} is giving a gift to ${recipient}`;
      currentPerson = recipient;
      exchange.push(newLine);
    }
    const lastLine = `${currentPerson} is giving a gift to ${recipient}`;
    exchange.push(lastLine);
    return exchange;
  }
}

module.exports = GiftExchange;
