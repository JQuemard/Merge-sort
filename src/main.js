var canvas = document.getElementById("canvas"); //linking script to the html canvas element
var ctx = canvas.getContext("2d"); //sets the renderer context

let dt, pt; ///time the frame takes to render

let list1 = [6,3,2,5,4,1,7,8,9,9,3];



function mergeSort(input){    ///initial function
    if (input.length <= 1){   ///BASE CASE. 
        return input;         ///when enough stacks are called each splitting the input list, 
    }                         ///it will eventually narrow down to 1 object in the input list in which the base case is true.
                              ///

    ///left list will contain the left split of each input recursion.
    let left = []; 
    let right = [];
    ///right list will contain the right split of each input recursion.
    /// (think of the tree)
    
    let i = 1; for (const object of input){   ///loops through every object in input list alongside index i which increments.
        if (i < Math.floor(input.length+1)/2){///the input list gets split in the mid point floored to the nearest integer.
            left.push(object)                 ///the i of object came before the mid, the left side split goes to the left list.
        }
        else{                                   
            right.push(object)                ///the i of object came after the mid, the right side split goes to the right list.
        }
        i++                                   ///increment i for next loop
    }
    left = mergeSort(left);  ///recursively sort the sublists.
    right = mergeSort(right);

    return merge(left, right)///this will merge the now sorted sublists.
}

function merge(left, right){ ///secondary vital function, does the merging of sub lists once the basecase has been reached
    let result = []; ///this will be the final output of program onec all the sublists have merged

    while ((left.length > 0) && (right.length > 0)){
        if(left[0] <= right[0]){
            result.push(left[0]);
            left.shift();
        }
        else{
            result.push(right[0]);
            right.shift();
        }
    }
    while (left.length > 0){
        result.push(left[0]);
        left.shift();
    }
    while (right.length > 0){
        result.push(right[0]);
        right.shift();
    }

    return result;
}



console.log(list1);

console.log(mergeSort(list1));

function mainLoop(timestamp){

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0,0,canvas.width,canvas.height)

    


    dt = timestamp - pt;
    pt = timestamp;


    requestAnimationFrame(mainLoop);
}

mainLoop(); //initial run of loop