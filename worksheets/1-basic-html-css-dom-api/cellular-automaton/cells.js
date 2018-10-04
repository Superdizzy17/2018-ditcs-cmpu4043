
var e = document.body;
var state = [];


for(var j = 0; j < 50; j++)
{
    var row = document.createElement("div");
    row.style.clear = "left"
    state[j] = [];

    //Create the first 101 cells in the first row
    for(i = 0; i < 101; i++)
    {

        //Create a div element called cell
        var cell = document.createElement("div");
        cell.classname = "cell";
        cell.style.width = "8px";
        cell.style.height = "8px";
        cell.style.border = "1px solid white";
        cell.style.cssFloat = "left";

        //If cell is active change colour to active colour if not change to unactive colour
        //Add if the cell is active or not to an array
        if(j < 1)
        {
            //Assign random number 1 or 0 to cell to make active or not
            cell.active = Math.round(Math.random());

            if(cell.active == 1)
            {
                state[j][i] = 1;
                cell.style.backgroundColor = "red";
            }
            else
            {
                state[j][i] = 0;
                cell.style.backgroundColor = "grey";
            }
        }
        //Rule 1
        else if(state[j-1][i] == 1 && state[j-1][i-1] == 1 && state[j-1][i+1] == 1)
        {
            state[j][i] = 0;
            cell.style.backgroundColor = "grey";
        }
        //Rule 2
        else if(state[j-1][i] == 1 && state[j-1][i-1] == 1 && state[j-1][i+1] == 0)
        {
            state[j][i] = 0;
            cell.style.backgroundColor = "grey";
        }
        //Rule 3
        else if(state[j-1][i] == 0 && state[j-1][i-1] == 1 && state[j-1][i+1] == 1)
        {
            state[j][i] = 1;
            cell.style.backgroundColor = "red";
        }
        //Rule 4
        else if(state[j-1][i] == 0 && state[j-1][i-1] == 1 && state[j-1][i+1] == 0)
        {
            state[j][i] = 1;
            cell.style.backgroundColor = "red";
        }
        //Rule 5
        else if(state[j-1][i] == 1 && state[j-1][i-1] == 0 && state[j-1][i+1] == 1)
        {
            state[j][i] = 1;
            cell.style.backgroundColor = "red";
        }
        //Rule 6
        else if(state[j-1][i] == 1 && state[j-1][i-1] == 0 && state[j-1][i+1] == 0)
        {
            state[j][i] = 1;
            cell.style.backgroundColor = "red";
        }
        //Rule 7
        else if(state[j-1][i] == 0 && state[j-1][i-1] == 0 && state[j-1][i+1] == 1)
        {
            state[j][i] = 0;
            cell.style.backgroundColor = "grey";
        }
        //Rule 8
        else if(state[j-1][i] == 0 && state[j-1][i-1] == 0 && state[j-1][i+1] == 0)
        {
            state[j][i] = 0;
            cell.style.backgroundColor = "grey";
        }

        console.log(j);

        //Add cell to body
        row.appendChild(cell);
    }
    e.appendChild(row);


}



