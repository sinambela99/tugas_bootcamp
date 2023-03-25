// inisialisasi variabel

const nilai_random = [];
const bil_genap = [];
const bil_ganjil = [];

// 100 nilai random (1 sampai 50) pada 1 array
for (x = 0; x < 100; x++) {
  nilai_random.push(Math.floor(Math.random() * 50 + 1));
}

console.log(nilai_random);
console.log("---------------------------------------");

// 2 array berdasarkan indexnya, yakni array pada index genap dan array pada index ganjil
for (var i = 0; i < nilai_random.length; i++) {
  if (nilai_random[i] % 2 == 0) {
    bil_genap.push(nilai_random[i]);
  } else {
    bil_ganjil.push(nilai_random[i]);
  }
}

// Fungsi Nilai minimum
function nilai_minimum(arguments) {
  min = Infinity;
  for (let minx = 0; minx < arguments.length; minx++) {
    if (arguments[minx] < min) {
      min = arguments[minx];
    }
  }
  return min;
}

// Fungsi Nilai maximum
function nilai_maximum(arguments) {
  max = -Infinity;
  for (let maxy = 0; maxy < arguments.length; maxy++) {
    if (arguments[maxy] > max) {
      max = arguments[maxy];
    }
  }
  return max;
}

// Fungsi  Total
function jumlah_total(arguments) {
  let sum = 0;
  for (let q = 0; q < arguments.length; q++) {
    sum += arguments[q];
  }
  return sum;
}

// Rata Rata Genap Ganjil
let rata_rata_genap = jumlah_total(bil_genap) / bil_genap.length;
let rata_rata_ganjil = jumlah_total(bil_ganjil) / bil_ganjil.length;

console.log(bil_ganjil);
console.log("Total = " + jumlah_total(bil_ganjil));
console.log("Rata-rata = " + rata_rata_ganjil);
console.log("Nilai Minimum = " + nilai_minimum(bil_ganjil));
console.log("Nilai Maximum = " + nilai_maximum(bil_ganjil));

console.log(bil_genap);
console.log("Total = " + jumlah_total(bil_genap));
console.log("Rata-rata = " + rata_rata_genap);
console.log("Nilai Minimum = " + nilai_minimum(bil_genap));
console.log("Nilai Maximum = " + nilai_maximum(bil_genap));

//Perbandingan
if (jumlah_total(bil_genap) < jumlah_total(bil_ganjil)) {
  console.log("Perbandingan total array ganjil yang lebih besar");
} else {
  console.log("Perbandingan total array genap yang lebih besar");
}
if (rata_rata_genap < rata_rata_ganjil) {
  console.log("Perbandingan rata-rata array ganjil yang lebih besar");
} else {
  console.log("Perbandingan rata-rata array genap yang lebih besar");
}
if (nilai_minimum(bil_genap) < nilai_minimum(bil_ganjil)) {
  console.log("Perbandingan minimum array ganjil yang lebih besar");
} else {
  console.log("Perbandingan minimum array genap yang lebih besar");
}
if (nilai_maximum(bil_genap) < nilai_maximum(bil_ganjil)) {
  console.log("Perbandingan maximum array ganjil yang lebih besar");
} else {
  console.log("Perbandingan maximum array genap yang lebih besar");
}
