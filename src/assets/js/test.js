const log = console.log;

let numArr = [1, 5, 798687, 6, 45, 24, 4, 424, 9876];


function find_max(nums) {
    let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
    for (let num of nums) {
        if (num > max_num) {
            max_num = num;
        }
    }
    return max_num;
}

log(find_max(numArr)) ;
