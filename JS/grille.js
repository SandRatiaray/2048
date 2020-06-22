/*-----------Grille---------*/
//il s'agit de la création du gird avec rien dedans
function setup(){
    return [
        [0,0,0,0,],
        [0,0,0,0,],
        [0,0,0,0,],
        [0,0,0,0,],
    ];
}    
//fonction qui permet d'afficher le grid sur le HTML
function draw()
{
    $('#grid').empty();
    for(var i = 0; i< size; i++)
    {
        for(var j = 0; j <size;j++)
        {
            if (grid[i][j] != 0)
            {
                var newDiv= "<div class='cell'>"+grid[i][j]+"</div>";
                $("#grid").append(newDiv).show();
                Background($('#grid div:last-child'));
            }
            else
				$("#grid").append("<div class='cell'></div>");
        }
    }
    $("#score").empty().append(score);
}