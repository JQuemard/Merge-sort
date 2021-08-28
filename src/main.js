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
        if(left[0] >= right[0]){  ///this comparitive handles the sorting. it choses to either push left or right to the result list.
            result.push(left[0]); ///if left is greater or equal to the right it gets pushed to the result list.
            left.shift();         ///the left is shifted so that only the rest of the list aside of [0] remain. 
        }
        else{
            result.push(right[0]);///alternatively the right will get added to the results if it is bigger
            right.shift();///the right is shifted so that only the rest of the list aside of [0] remain. 
        }///THIS COMPARITIVE DICTATES THE SORT ORDER. <= ascending >= descending
    }
    while (left.length > 0){ ///consumes the rest of the left list which remains for odd lists
        result.push(left[0]);
        left.shift();
    }
    while (right.length > 0){///same for the right list which remains
        result.push(right[0]);
        right.shift();
    } 
    
    return result; ///returns result of the merge back to mergesort.
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
