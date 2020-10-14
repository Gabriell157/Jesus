

function combateAtaque(atacante, defensor) {
  const montante = (atacante.ataque + atacante.arma.bonus - defensor.defesa - defensor.escudo.bonus)

  if (montante < 0) {
    return 0
  }
  
  return montante
}

function verificaSeDeuCerto(cenario, resultadoEsperado, atacante, defensor,) {
  const resultado = combateAtaque(atacante, defensor)

  if (resultado === resultadoEsperado) {
    console.log(cenario + '.tomo-lhe')
  }

  else {
    console.log(cenario + '.Esquivou' + 'Esperado:' + resultadoEsperado + 'E Veio:' + resultado)
  }
}

const personagem1 = {
  ataque: 1,
  defesa: 0,
  arma: {
    bonus: null
  },
  escudo: {
    bonus: null
  }
}

const personagem2 = {
  ataque: 9,
  defesa: 1,
  arma: {
    bonus: null
  },
  escudo: {
    bonus: null
  }
}

const personagem3 = {
  ataque: 1,
  defesa: 9,
  arma: {
    bonus: null
  },
  escudo: {
    bonus: null
  }
}

const personagem4 = {
  ataque: 0,
  defesa: 0,
  arma: {
    bonus: 2
  },
  escudo: {
    bonus: null
  }
}

const personagem5 = {
  ataque: 3,
  defesa: 0,
  arma: {
    bonus: 2
  },
  escudo: {
    bonus: null
  }
}

const personagem6 = {
  ataque: 3,
  defesa: 1,
  arma: {
    bonus: 2
  },
  escudo: {
    bonus: null
  }
}

const personagem7 = {
  ataque: 3,
  defesa: 1,
  arma: {
    bonus: 2
  },
  escudo: {
    bonus: 1
  }
}

const personagem8 = {
  ataque: 3,
  defesa: 1,
  arma: {
    bonus: 2
  },
  escudo: {
    bonus: 2
  }
}

const personagem9 = {
  ataque: 3,
  defesa: 1,
  arma: {
    bonus: 2
  },
  escudo: {
    bonus: 5
  }
}

const personagem10 = {
  ataque: 9,
  defesa: 5,
  arma: {
    bonus: 9
  },
  escudo: {
    bonus: 4
  }
}

verificaSeDeuCerto('01', 0, personagem1, personagem2)
verificaSeDeuCerto('02', 9, personagem2, personagem1)
verificaSeDeuCerto('03', 1, personagem3, personagem4)
verificaSeDeuCerto('04', 0, personagem4, personagem3)
verificaSeDeuCerto('05', 4, personagem5, personagem6)
verificaSeDeuCerto('06', 5, personagem6, personagem5)
verificaSeDeuCerto('07', 2, personagem7, personagem8)
verificaSeDeuCerto('08', 3, personagem8, personagem7)
verificaSeDeuCerto('09', 0, personagem9, personagem10)
verificaSeDeuCerto('10', 12, personagem10, personagem9)