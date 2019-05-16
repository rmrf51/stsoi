//var canvas = document.getElementById("myCanvas"), 
//    ctx = canvas.getContext("2d");

//var img = new Image();
//img.src = "sample.png";




window.onload = function() {
    //var Complex = require('complex.js');

    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");


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
    var x = [1, 2, 3, 4, 5];
    var N = x.length;
    var G = [0, 0, 0, 0, 0];

    console.log(N);

    for (var u = 0; u < N; u++) {
        for (var n = 0; n < N; n++) {
            var w = -2 * 3.1415 * u * n / N;
            var c = math.complex(Math.sin(w), Math.cos(w))
                //console.log(typeof(c.im * x[n] / N));
                //const c = new Complex(Math.sin(w), Math.cos(w)); //Math.complex(Math.sin(w), Math.cos(w)) //new Complex(sin(w), cos(w));
                //G[u] = parseInt(G[u]) + (parseInt(c.re) * c.im * parseInt(x[n] / N));
                //G[u] += math.multiply(c, (x[n] / N))
            G[u] += (c.re * x[n] / N); // c.im 
            //console.log('x[n]= ', x[n]);
            //console.log('N= ', N);
            //console.log('G[u]= ', G[u]);
        }
    }
    console.log(G);

    ctx.putImageData(imgData, 0, 0);

}