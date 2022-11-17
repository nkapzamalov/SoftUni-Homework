function attachEvents() {
  let submitBtnElement = document.getElementById("submit");
  submitBtnElement.addEventListener("click", async () => {
    const author = document.getElementById("author").value;
    const content = document.getElementById("content").value;

    await createMessage({ author, content });
    document.getElementById("author").value = "";
    document.getElementById("content").value = "";

    getMessage();
  });

  getMessage();
}

attachEvents();

async function getMessage() {
  let url = "http://localhost:3030/jsonstore/messenger";

  let response = await fetch(url);
  let data = await response.json();

  let result = Object.values(data).map(formatMessage).join("\n");

  let textAreaElement = document.getElementById("messages");
  textAreaElement.value = result;
}

async function createMessage(message) {
  let response = await fetch("http://localhost:3030/jsonstore/messenger", {
    method: "post",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(message),
  });
  let data = await response.json();

  return data;
}

function formatMessage(info) {
  return `${info.author}:${info.content}`;
}
