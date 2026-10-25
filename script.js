const userProfile = {
  name: "Ayan",
  birthYear: 2007,
  isDeveloper: true,
  hobbies: ["Coding", "boxing", "Music"]
};

const profileName = document.getElementById("profileName");
const profileAge = document.getElementById("profileAge");
const developerStatus = document.getElementById("developerStatus");
const hobbyCount = document.getElementById("hobbyCount");
const hobbyList = document.getElementById("hobbyList");

function renderProfile() {
  const age = new Date().getFullYear() - userProfile.birthYear;
  profileName.textContent = "Name: " + userProfile.name;
  profileAge.textContent = "Age: " + age;
  developerStatus.textContent = "Developer: " + (userProfile.isDeveloper ? "Yes" : "No");
  hobbyCount.textContent = "Hobbies: " + userProfile.hobbies.length;
  hobbyList.replaceChildren();
  userProfile.hobbies.forEach(function(hobby) {
    const item = document.createElement("li");
    item.textContent = hobby;
    hobbyList.appendChild(item);
  });
}

console.log("User profile:", userProfile);
console.log("Age:", new Date().getFullYear() - userProfile.birthYear);
console.log("Total hobbies:", userProfile.hobbies.length);

 document.getElementById("profileForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const name = document.getElementById("username").value.trim();
  const year = Number(document.getElementById("birthYear").value);
  const currentYear = new Date().getFullYear();
  if (!name || !Number.isInteger(year) || year < 1900 || year > currentYear) {
    document.getElementById("message").textContent = "Please enter valid information.";
    return;
  }
  userProfile.name = name;
  userProfile.birthYear = year;
  renderProfile();
  document.getElementById("message").textContent = "Profile updated successfully!";
});

document.getElementById("addButton").addEventListener("click", function() {
  const input = document.getElementById("newHobby");
  const hobby = input.value.trim();
  if (!hobby) {
    input.focus();
    return;
  }
  userProfile.hobbies.push(hobby);
  input.value = "";
  renderProfile();
});

document.getElementById("removeButton").addEventListener("click", function() {
  if (userProfile.hobbies.length > 0) {
    userProfile.hobbies.pop();
    renderProfile();
  }
});

renderProfile();