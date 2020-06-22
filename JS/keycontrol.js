/*---------Key press----------*/
//fonction qui utiliseerla fonctionnalité keypress
function keyPressed(e) {
    var flipped = false;
    var rotated = false;
    var played = true;
    if (event.keyCode == 39) // droite
    {
        //do nothing  
    }
    else if (event.keyCode == 37)//gauche
    {
        grid = flip(grid);
        flipped = true;
    }
    else if (event.keyCode == 40)//bas
    {
        grid = rotate(grid);
        rotated = true;
    }
    else if (event.keyCode == 38)//haut
    {
        grid = rotate(grid);
        grid = flip(grid);
        flipped = true;
        rotated = true;
    }
    else {
        played = false;
    }
    if (played) {
        var past = copy(grid);
        for (i = 0; i < size; i++) {
            grid[i] = operate(grid[i]);
        }
        var changed = compare(past, grid);
        if (flipped) {
            grid = flip(grid);
        }
        if (rotated) {
            grid = rotate(grid);
            grid = rotate(grid);
            grid = rotate(grid);
        }
        if (changed) {
            randomNumber();
        }
        draw(grid);
        var gameover = GameOver();
        var win = Winner();
        if (gameover) {
            swal({
                title: 'You Loose',
                animation: false,
                customClass: 'animated tada'
            })
        }
        if (win) {
            swal({
                title: 'Congratulations, you win',
                animation: false,
                customClass: 'animated tada'
            })
        }
    }
}