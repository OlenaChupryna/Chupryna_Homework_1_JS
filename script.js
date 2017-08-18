function outer(){
   var arr = [];
   arr = [15, 14, 9, 191, 111, 15, 124, 119];
   
   function inner(arr) {
      console.log (arr);
      var n = arr.length;
      var k = n - 1;
      var putAfterMe = k; // Нужно, когда есть равные значения сортируемых переменных
      var isValueEqual = true;
      var isValueIncreasing = true;
      
      for (var s = 0; s < k; s++) {
         isValueEqual = ((arr[s] == arr[s+1]) && isValueEqual);
         isValueIncreasing = ((arr[s] < arr[s+1]) && isValueIncreasing);
      }
            
      if (isValueEqual || isValueIncreasing || n <= 1) {
         return arr;
      } else {            
         var i = 0
         while (i < k) {
           
             if (arr[i] >= arr[k]) {
               var reserve = arr[i];                        
               arr[i] = arr[k-1];                       
               arr[k-1] = arr[putAfterMe];                       
               arr[putAfterMe] = reserve;
               if (arr[k-1] < arr[putAfterMe]) {
               putAfterMe--;  
               }
               
               k--;
               i = -1;
            }
            ++i;
         }
         
         var arrLow = [];
         var arrHigh = [];
         for (var jLow=0; jLow < (k); jLow++) {
            arrLow[jLow] = arr[jLow];      
         }
         
         for (var jHigh=0; jHigh < (n-k); jHigh++) {
            arrHigh[jHigh] = arr[jHigh+k];
         }
         
         arrLow = inner(arrLow);
         arrHigh = inner(arrHigh);
         arr = arrLow.concat(arrHigh);
         return arr; 
      }     
   }
   return inner(arr);  
}
console.log(outer());