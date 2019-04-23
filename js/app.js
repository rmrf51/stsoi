//var canvas = document.getElementById("myCanvas"), 
//    ctx = canvas.getContext("2d");
                 
//var img = new Image();
//img.src = "sample.png";


var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

window.onload = function (){
    //var img = document.getElementById("scream");
var img = new Image();
img.src = "sample.png";
ctx.drawImage(img, 0, 0, 300, 400);
var imgData = ctx.getImageData(0, 0, c.width, c.height);

arr = [-1, -1, -1, -1, 9, -1, -1, -1, -1]
console.log(imgData.width)
var del = 6;

// invert colors
var i;

for (i = 0; i <= imgData.data.length; i += 1) {
    // if(i % imgData.width == 0) i+=8;
    //if(i >= imgData.data.length - imgData.width ) break;
    
  imgData.data[i] = (imgData.data[i - imgData.width - 4] * arr[0] + imgData.data[i - imgData.width] * arr[1] + imgData.data[i - imgData.width + 4] * arr[2] + imgData.data[i - 4] * arr[3] + imgData.data[i] * arr[4] + imgData.data[i + 4] * arr[5] + imgData.data[i + imgData.width - 4] * arr[6] + imgData.data[i + imgData.width] * arr[7] + imgData.data[i + imgData.width + 4] * arr[8]) / del;
  i++;
  imgData.data[i] = (imgData.data[i - imgData.width - 4] * arr[0] + imgData.data[i - imgData.width] * arr[1] + imgData.data[i - imgData.width + 4] * arr[2] + imgData.data[i - 4] * arr[3] + imgData.data[i] * arr[4] + imgData.data[i + 4] * arr[5] + imgData.data[i + imgData.width - 4] * arr[6] + imgData.data[i + imgData.width] * arr[7] + imgData.data[i + imgData.width + 4] * arr[8]) / del;
  i++;
  imgData.data[i] = (imgData.data[i - imgData.width - 4] * arr[0] + imgData.data[i - imgData.width] * arr[1] + imgData.data[i - imgData.width + 4] * arr[2] + imgData.data[i - 4] * arr[3] + imgData.data[i] * arr[4] + imgData.data[i + 4] * arr[5] + imgData.data[i + imgData.width - 4] * arr[6] + imgData.data[i + imgData.width] * arr[7] + imgData.data[i + imgData.width + 4] * arr[8]) / del;
  i++;
  imgData.data[i] = 255;
}

// var arr = Array[9];

// for(var i = 0; i < arr.length; i++){
//     arr[i] = i;
// }

// for(var j = 0; j < arr.length; j++){
//     for (var i = 0; i < imgData.data.length; i += 4) {
//         if(arr[])
//         imgData.data[i] = imgData.data[i] * arr[j];
//         imgData.data[i + 1] = imgData.data[i + 1]* arr[j];
//         imgData.data[i + 2] = imgData.data[i + 2]* arr[j];
//         imgData.data[i + 3] = 255-imgData.data[i + 3]* arr[j];
//     }
// }

ctx.putImageData(imgData, 0, 0);

}
