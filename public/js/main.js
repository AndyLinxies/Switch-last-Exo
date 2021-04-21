let nbr1 = parseInt( prompt('Saisissez une valeur'));
let operateur = prompt('Saisissez un Operateur');
let nbr2 = parseInt( prompt('Saisissez encore une valeur pour le calcul'));

switch (operateur) {
    case "+":
        alert(nbr1+nbr2)
        break;
    case "-":
        alert(nbr1-nbr2)
        break;
    case "*":
        alert(nbr1*nbr2)
        break;
    case "/":
        alert(nbr1/nbr2)
        break;

    default:
        alert('Veuillez taper un opérateur correct')
        break;
}

//possibilité de mettre: parseInt( prompt('Saisissez une valeur')) pour que ce qu'on tape soit considéré comme un Integer et non un String