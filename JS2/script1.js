let arr1 = [1, 2, 3, 4, 5];
let arr2 = [];
arr1.forEach(element => {
    arr2.unshift(element);
});
arr1 = arr2;