function rotateImage(a) {
  // pattern:
  // [0,i] -> [i,n-i], [i,n-i] -> [n-1,n-(i+1)], [n-1,n-(i+1)] -> [n-(i+1),0], and [n-(i+1),0] to [0,i]
          var n=a.length;
          for (var i=0; i<n/2; i++) {
              for (var j=i; j<n-i-1; j++) {
                  var tmp=a[i][j];
                  a[i][j]=a[n-j-1][i];
                  a[n-j-1][i]=a[n-i-1][n-j-1];
                  a[n-i-1][n-j-1]=a[j][n-i-1];
                  a[j][n-i-1]=tmp;
              }
          }
          return a;
      // let n = a.length;
      // // while i is less than half the length of the array
      // for (let i = 0; i < n/2; i++) {
      //     // inner loop while j is less than half the length of the array, minus i, minus 1
      //     for (let j = 1; j < n - i - 1; j++) {
      //         // first loop, temp will be the first array at second position
      //         let temp = a[i][j]
      //         // in first example, a.length is 3, moves a[i][j](a[0][1]) to a a[3-1-1][0]
      //         a[i][j] = a[n-j-1][i]
      //         // continues to move values into next position
      //         a[n-j-1][i]=a[n-i-1][n-j-1]
      //         a[n-i-1][n-j-1]=a[j][n-i-1];
      //         a[j][n-i-1]=tmp;
      //     }
      // }
      // return a;
  }
  