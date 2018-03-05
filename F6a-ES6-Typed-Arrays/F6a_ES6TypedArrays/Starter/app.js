var buffer =new ArrayBuffer(8); // 8 bytes eg. 64 bits of data

var view = new Int32Array(buffer); // way to deal with binary dat in buffer

view[0] = 5;
view[1] = 15; 
console.log(view);