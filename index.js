var sortFunction = function(arr){
    for(var i = 0; i < arr.length; i++){ //[0, 1, 2, 3]
        let temp = arr[i];// 26 i=0, j=-1; temp=> arr[0]=52; modi-temp =arr[0]            [52,12,34,50] => [12]
//i = 1, j=0; temp => arr[1]=12; arr[0]=52>temp=12; arr[1]= arr[0] => [12, 52], arr[1]= temp = 52, [12, 52]
//i = 2, j=1; temp => arr[2]=34; arr[1] > 34? => yes it is => arr[2] = arr[1], [12,34]; j-- => j=0; arr[0]>34 => NO!
//arr[2]=temp, [12, 34, 52]
        for (var j = i - 1; j > -1 && arr[j] > temp; j--){
                arr[j + 1] = arr[j];
        }
        arr[j + 1] = temp;
    }
    return arr;
}

const list = [54, 26, 93, 17, 77, 31, 44, 55, 20];

console.log(sortFunction(list));

