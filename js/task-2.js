const getUserWithFriend = (users, friendName) => {
  return users.filter((user) => user.friends.includes(friendName));
};

const allUsers = [
  {
    name: "Moore Hensley",
    friends: ["Sharron Pace"],
  },
  {
    name: "Sharlene Bush",
    friends: ["Briana Decker", "Sharron Pace"],
  },
  {
    name: "Ross Vazquez",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
  },
  {
    name: "Elma Head",
    friends: ["Goldie Gentry", "Aisha Tran"],
  },
  {
    name: "Carey Barr",
    friends: ["Jordan Sampson", "Eddie Strong"],
  },
  {
    name: "Blackburn Dotson",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
  },
  {
    name: "Sheree Anthony",
    friends: ["Goldie Gentry", "Briana Decker"],
  },
];

console.log(getUserWithFriend(allUsers, "Briana Decker")); // Sharlene Bush, Sheree Anthony
console.log(getUserWithFriend(allUsers, "Goldie Gentry")); // Elma Head, Sheree Anthony
console.log(getUserWithFriend(allUsers, "Adrian Cross")); // [] boş dizi
