let userKey = {
  id: "ID",
  email: "Email",
  first_name: "First Name",
  last_name: "Last Name",
};
let usersArray = [];

let optionValue = "";

//For Select Options
for (let key in userKey) {
  optionValue += `<option value="${key}">${userKey[key]}</option>`;
}

document.getElementById("userSortKey").innerHTML = optionValue;
document.getElementById("userSearchKey").innerHTML = optionValue;

//To load data of users
const getUsers = async (url) => {
  let users = await loadData(url);

  let li = tableData(usersArray);

  document.getElementById("table").innerHTML = li;
};

const loadData = async (url) => {
  let users = await fetch(url);
  return new Promise((res, rej) => {
    users
      .json()
      .then((user) => {
        if (!user) {
          console.log("User not found");
        }
        usersArray = user.data;
        res(user);
      })
      .catch((err) => rej(err));
  });
};

//Common table to display the array of users data
const tableData = (resData) => {
  let li = ` 
         <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Email</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
            </tr>
        </thead>`;

  resData.forEach(
    (ele) =>
      (li += `
      <tr>
        <th scope="row">${ele.id}</th>
        <td>${ele.email}</td>
        <td>${ele.first_name}</td>
        <td>${ele.last_name}</td>
      </tr>`)
  );

  return li;
};

//Function for sorting users
const sortUsers = () => {
  let users = usersArray;
  let sortkey = document.getElementById("userSortKey").value;

  let sortedUsers = users.sort((a, b) => (a[sortkey] > b[sortkey] ? 1 : -1));

  document.getElementById("table").innerHTML = tableData(sortedUsers);
  document.getElementById("searchBox").value = "";
};

//Function for getting specific user
const getUserSpecific = () => {
  let reqUser = document.getElementById("searchBox").value;
  let searchkey = document.getElementById("userSearchKey").value;
  let users = usersArray;

  let inputUser = users.filter((user) => {
    return JSON.stringify(user[searchkey])
      .toLowerCase()
      .includes(reqUser.toLowerCase());
  });

  let emptyObj = {
    email: "-",
    first_name: "-",
    id: "-",
    last_name: "-",
  };

  document.getElementById("table").innerHTML = tableData(
    inputUser.length === 0 ? [emptyObj] : inputUser
  );
};
