function drawTree(param) {
  
        for (var i = 1; i <= param; i++) {
        var star = '';
          for (var j = 1; j <= i; j++) {
          star += '*';
          }
          console.log(star);
          star = "";
        }
  
      }
  
  drawTree(5);
  