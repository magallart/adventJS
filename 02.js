const carta = 'bici coche balón _playstation bici coche peluche';

export default function listGifts(letter) {
  const giftCount = {};

  const giftsFiltered = letter
    .trim()
    .split(' ')
    .filter((gift) => !gift.startsWith('_'));

  giftsFiltered.forEach((gift) => {
    if (giftCount[gift]) {
      giftCount[gift]++;
      return;
    }
    giftCount[gift] = 1;
  });

  return giftCount;
}

const regalos = listGifts(carta);
console.log(regalos);
