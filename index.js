// TODO: Buatlah data dari kedua user di sini
const userMonica = new Object();
userMonica.name = "Monica";
userMonica.gender = "Female";
userMonica.Age = 17;

userMonica.email = new Set();

userMonica.email.add("monica@dingdong.com");
userMonica.favoritColor = ["Yellow", "pink", "Purple"];
userMonica.isHavePet = "yes";

userMonica.education = new Map();

userMonica.education.set("name", "SD 01", "SMP 02", "SMA 03");
userMonica.education.set("city", "Jakarta", "Tangerang");
userMonica.education.set("graduate", "2016", "2019");

userMonica.favoritRestaurant = new Set();

userMonica.favoritRestaurant.add("Bento");
userMonica.favoritRestaurant.add("Sushi");
userMonica.favoritRestaurant.add("Pancake");
userMonica.favoritRestaurant.add("Eggy");
userMonica.favoritRestaurant.add("Tempura");
userMonica.favoritRestaurant.add("Bento");
userMonica.favoritRestaurant.add("Eggy");
userMonica.favoritRestaurant.add("Padang");
userMonica.favoritRestaurant.add("Tteok");
userMonica.favoritRestaurant.add("Sushi");
userMonica.favoritRestaurant.add("Sushi");

const userWendy = new Object();
userWendy.name = "Wendy";
userWendy.gender = "male";
userMonica.Age = 23;

userWendy.email = new Set();

userWendy.email.add("wendy@dingdong.com");
userWendy.favoritColor = ["Blue", "Black", "Grey"];
userWendy.isHavePet = "No";

userWendy.education = new Map();

userWendy.education.set(
  "name",
  "SD 02",
  "SMP 03",
  "SMA 01",
  "Universitas Maju"
);
userWendy.education.set("city", "Jakarta", "Bogor", "Surabaya", "Tangerang");
userWendy.education.set("graduate", "2010", "2013", "2016");

userWendy.favoritRestaurant = new Set();

userWendy.favoritRestaurant.add("Tempura");
userWendy.favoritRestaurant.add("Bento");
userWendy.favoritRestaurant.add("Sushi");
userWendy.favoritRestaurant.add("Pancake");
userWendy.favoritRestaurant.add("Padang");
userWendy.favoritRestaurant.add("Katsu");
userWendy.favoritRestaurant.add("Geprek");
userWendy.favoritRestaurant.add("Pancake");
userWendy.favoritRestaurant.add("Eggy");
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {};
const secondUser = {};
// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(userMonica);
users.push(userWendy);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
  console.log(users.length || users.size);
  console.log(users);
}

main();

module.exports = {
  users,
};
