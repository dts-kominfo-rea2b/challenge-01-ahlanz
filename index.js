// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {};
const secondUser = {};
// TODO: Masukkan hasil akhir dari kedua user di sini
const users = ["userMonica", "userWendy"];
users[1] = new Object();
users[1].name = "Monica";
users[1].age = 17;
users[1].Gender = "Female";
users[1].email = new Set();
users[1].email.add("monica@dingdong.com");
users[1].favoritColor = new Set();
users[1].favoritColor.add("Yellow");
users[1].favoritColor.add("Pink");
users[1].favoritColor.add("White");
users[1].favoritColor.add("Purple");
users[1].isHavePet = [];
users[1].isHavePet = "yes";
users[1].education = [];
users[1].education[0] = new Object();
users[1].education[0].name = "SD 01";
users[1].education[0].city = "Jakarta";
users[1].education[0].graduate = "2016";
users[1].education[1] = new Object();
users[1].education[1].name = "SMP 02";
users[1].education[1].city = "Jakarta";
users[1].education[1].graduate = "2019";
users[1].education[2] = new Object();
users[1].education[2].name = "SMA 03";
users[1].education[2].city = "Tangerang";
users[1].favoritRestaurant = new Set();
users[1].favoritRestaurant.add("Bento");
users[1].favoritRestaurant.add("Sushi");
users[1].favoritRestaurant.add("Pancake");
users[1].favoritRestaurant.add("Eggy");
users[1].favoritRestaurant.add("Tempura");
users[1].favoritRestaurant.add("Bento");
users[1].favoritRestaurant.add("Eggy");
users[1].favoritRestaurant.add("Padang");
users[1].favoritRestaurant.add("Tteok");
users[1].favoritRestaurant.add("Sushi");
users[1].favoritRestaurant.add("Sushi");

users[2] = new Object();
users[2].name = "Wendy";
users[2].age = 23;
users[2].Gender = "Male";
users[2].email = new Set();
users[2].email.add("wendy@dingdong.com");
users[2].favoritColor = new Set();
users[2].favoritColor.add("Blue");
users[2].favoritColor.add("Balck");
users[2].favoritColor.add("Grey");
users[2].isHavePet = [];
users[2].isHavePet = "No";
users[2].education = [];
users[2].education[0] = new Object();
users[2].education[0].name = "SD 02";
users[2].education[0].city = "Jakarta";
users[2].education[0].graduate = "2010";
users[2].education[1] = new Object();
users[2].education[1].name = "SMP 03";
users[2].education[1].city = "Bogor";
users[2].education[1].graduate = "2013";
users[2].education[2] = new Object();
users[2].education[2].name = "SMA 01";
users[2].education[2].city = "Surabaya";
users[2].education[2].graduate = "2016";
users[2].education[3] = new Object();
users[2].education[3].name = "Universitas Maju";
users[2].education[3].city = "Tangerang";
users[2].favoritRestaurant = new Set();
users[2].favoritRestaurant.add("Tempura");
users[2].favoritRestaurant.add("Bento");
users[2].favoritRestaurant.add("Sushi");
users[2].favoritRestaurant.add("Pancake");
users[2].favoritRestaurant.add("Padang");
users[2].favoritRestaurant.add("Katsu");
users[2].favoritRestaurant.add("Geprek");
users[2].favoritRestaurant.add("Pancake");
users[2].favoritRestaurant.add("Eggy");
// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
  console.log(users.length || users.size);
  console.log(users);
}

main();

module.exports = {
  users,
};
