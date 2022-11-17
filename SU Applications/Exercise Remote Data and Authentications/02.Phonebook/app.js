let phoneBookElement = document.getElementById("phonebook");
let personInput = document.getElementById("person");
let phoneInput = document.getElementById("phone");
let createBtnElement = document.getElementById("btnCreate");

function attachEvents() {
  document.getElementById("btnLoad").addEventListener("click", () => {
    phoneBookElement.innerHTML = "";
    getAllPhoneBookEntries();
  });
  phoneBookElement.addEventListener("click", async (e) => {
    if (e.target.id === "btnDelete") {
      let id = e.target.parentNode.id;
      deleteEntrie(id);
    }
  });
  createBtnElement.addEventListener("click", async () => {
    let person = personInput.value;
    let phone = phoneInput.value;
    await createEntrie({ person, phone });
    personInput.value = "";
    phoneInput.value = "";
  });
}

attachEvents();

async function getAllPhoneBookEntries() {
  let url = "http://localhost:3030/jsonstore/phonebook";

  let response = await fetch(url);
  let data = await response.json();

  let result = Object.entries(data)
    .map(([id, v]) =>
      e(
        "li",
        { id: id },
        `${v.person}: ${v.phone}`,
        e("button", { id: "btnDelete" }, "Delete")
      )
    )
    .forEach((v) => phoneBookElement.appendChild(v));

  return result;
}

function e(type, attributes, ...content) {
  const result = document.createElement(type);

  for (let [attr, value] of Object.entries(attributes || {})) {
    if (attr.substring(0, 2) == "on") {
      result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
    } else {
      result[attr] = value;
    }
  }

  content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

  content.forEach((e) => {
    if (typeof e == "string" || typeof e == "number") {
      const node = document.createTextNode(e);
      result.appendChild(node);
    } else {
      result.appendChild(e);
    }
  });

  return result;
}

async function deleteEntrie(id) {
  let response = await fetch(
    "http://localhost:3030/jsonstore/phonebook/" + id,
    {
      method: "delete",
    }
  );
  let data = response.json();
  return data;
}

async function createEntrie({ person, phone }) {
  let response = await fetch("http://localhost:3030/jsonstore/phonebook", {
    method: "post",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ person, phone }),
  });

  let data = await response.json();

  return data;
}
