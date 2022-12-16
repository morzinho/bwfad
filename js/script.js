const Frases = [
  'Quero voltar o tempo e parar em todos os momentos que você esteve ao meu lado.',
  'Um dia sem seu amor é um dia sem vida. Eu amo estar com você.',
  'Sinto-me com sorte porque você é minha namorada! Eu te amo muito!',
  'Seu sorriso é minha coisa favorita no mundo! Eu te amo Morzi!',
  'Palavras são incapazes de expressar todo sentimento que tenho por você. Te amo muito.',
  'Eu te amo para amar-te e não para ser amado, pois nada me dá tanta felicidade como te ver feliz.',
  'Eu te amo tanto que cada amanhecer é um novo encanto, lírio puro e santo, que planto por querer.',
  'Amar não é olhar um para o outro, é olhar juntos na mesma direção.'
]

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const $frase = document.getElementById('phrase');
const $num = getRandomIntInclusive(0, 7)

$frase.innerText = Frases[$num]
