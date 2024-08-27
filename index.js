let heroi = "André"
let xp = 4800
let liga = ""

switch (true) {
    case xp <= 1000:
        liga = "Ferro"
        console.log(`O herói de nome ${heroi} está no nível ${liga}`);
        break;

    case xp > 1000 && xp <= 2000:
        liga = 'Bronze'
        console.log(`O herói de nome ${heroi} está no nível ${liga}`);
        break;
        
    case xp > 2000 && xp <= 5000:
        liga = "Prata"
        console.log(`O herói de nome ${heroi} está no nível ${liga}`);
        break;

    case xp > 5000 && xp <= 7000:
        liga = "Ouro"
        console.log(`O herói de nome ${heroi} está no nível ${liga}`);
        break;

    case xp > 7000 && xp <= 8000:
        liga = "Platina"
        console.log(`O herói de nome ${heroi} está no nível ${liga}`);
        break;

    case xp > 8000 && xp <= 9000:
        liga = "Ascendente"
        console.log(`O herói de nome ${heroi} está no nível ${liga}`);
        break;

    case xp > 9000 && xp <= 10000:
        liga = "Imortal"
        console.log(`O herói de nome ${heroi} está no nível ${liga}`);
        break;

    case xp >= 10001: 
        liga = "Radiante"
        console.log(`O herói de nome ${heroi} está no nível ${liga}`);
        break;
}