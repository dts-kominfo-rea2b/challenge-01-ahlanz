// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const userMonica = {
  name: "Monica",
  age: 17,
  gender: "Female",
  email: "monica@dingdong.com",
  favoritColor: Array(new Set(["Yellow", "Pink", "white", "Purple"])),
  isHavePet: "Yes",
  education: [
    {
      Name: "SD 01",
      City: "Jakarta",
      Graduated: 2016,
    },
    {
      Name: "SMP 02",
      City: "Jakarta",
      Graduated: 2019,
    },
    {
      Name: "SMA 03",
      City: "Tangerang",
      Graduated: null,
    },
  ],
  favoritRestaurant: Array(
    new Set([
      "Bento",
      "Sushi",
      "Pancake",
      "Eggy",
      "Tempura",
      "Bento",
      "Eggy",
      "Padang",
      "Tteok",
      "sushi",
      "sushi",
    ])
  ),
};
const userWendy = {
  name: "Wendy",
  age: 23,
  gender: "Male",
  email: "wendy@dingdong.com",
  favoritColor: Array(new Set(["Blue, Black, Grey"])),
  isHavePet: "No",
  education: [
    {
      Name: "SD 02",
      City: "Jakarta",
      Graduated: 2010,
    },
    {
      Name: "SMP 03",
      City: "bogor",
      Graduated: 2013,
    },
    {
      Name: "SMA 01",
      City: "Surabaya",
      Graduated: 2016,
    },
    {
      Name: "Universitas Maju",
      City: "Tangerang",
      Graduated: null,
    },
  ],
  favoritRestaurant: Array(
    new Set([
      "Tempura",
      "Bento",
      "Sushi",
      "Pancake",
      "Padang",
      "Katsu",
      "Geprek",
      "Pancake",
      "Eggy",
    ])
  ),
};
// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [userMonica, userWendy];
// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
  console.log(users.length || users.size);
  console.log(users);
}

main();

module.exports = {
  users,
};
