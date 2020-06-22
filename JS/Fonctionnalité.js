var grid;
var size = 4;
var score = 0;

/*---------Fonctionnalité---------*/
//fonction qui crée aléatoirement l'emplacement des 2 et 4
function randomNumber() {
    var options = [];
    for (var i = 0; i < size; i++) {
        for (var j = 0; j < size; j++) {
            if (grid[i][j] === 0) {
                options.push(
                    {
                        x: i,
                        y: j
                    });
            }
        }
    }
    if (options.length > 0) {
        var spot = options[Math.floor(Math.random() * options.length)];
        var r = Math.random(1);
        grid[spot.x][spot.y] = r > 0.9 ? 4 : 2;
    }
}

//permet de slide tout les chiffres du coté gauche
function slide(row) {
    var arr = row.filter(val => val); //cela va permettre de garder tout les chiffres si ce n'est pas un 0
    var missing = 4 - arr.length;
    var zeros = Array(missing).fill(0);
    arr = zeros.concat(arr);
    return arr;
}
//fonction qui additionne les chiffre entre eux
function merge(row) {
    for (var i = 3; i >= 1; i--) {
        var a = row[i];
        var b = row[i - 1]
        if (a == b) {
            row[i] = a + b;
            row[i - 1] = 0;
            score += row[i];
        }
    }
    return row;
}
//compare deux tableaux(cela permettra d'ajouter les randomNumber)
function compare(a, b) {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (a[i][j] != b[i][j])
                return true;
        }
    }
    return false;
}
//cette copie est faite pour la comparaison(cela permettra d'ajouter les randomNumber)
function copy(grid) {
    var extra = setup();
    for (var i = 0; i < size; i++) {
        for (var j = 0; j < size; j++) {
            extra[i][j] = grid[i][j];
        }
    }
    return extra;
}
//slide + addition + new slide 
function operate(line) {
    line = slide(line)
    line = merge(line)
    line = slide(line)
    return line;
}
//reverse pour le up and down
function flip(grid) {
    for (var i = 0; i < 4; i++)
        grid[i].reverse();

    return grid;
}
//fonction qui va tourner le tableau aiguille montre
function rotate(grid) {
    var newGrid = setup();
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            newGrid[i][j] = grid[j][i];
        }
    }
    return newGrid;
}
//fonction qui permet de savoir si il n'y a plus de 0 ou d'addition
function GameOver() {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (grid[i][j] == 0)
                return false;
            if (i !== 3 && grid[i][j] === grid[i + 1][j])
                return false;
            if (j !== 3 && grid[i][j] === grid[i][j + 1])
                return false;
        }
    }
    return true;
}
//Message pop-up lorsqu'on attend 2048
function Winner() {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (grid[i][j] == 2048) {
                return true;
            }
        }
    }
    return false;
}

/*---------Lancement du progamme---------*/
//fonction qui lance le jeu 
function start() {

    score = 0;
    grid = setup();
    randomNumber();
    randomNumber();
    draw();
    // 
}

$(document).ready(function () {
    start();
    $(document).keydown(function (e) {
        keyPressed(e);
    });
})