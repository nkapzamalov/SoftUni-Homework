function solve() {
  let btnElement = document.querySelector("button");
  btnElement.addEventListener("click", function (e) {
    let inputElement = document.querySelector("textarea");
    let products = JSON.parse(inputElement.value);

    for (let product of products) {
      let { name, img, price, decFactor } = product;
      let newProdcutString = `<tr>
                                        <td>
                                            <img
                                                ${img}>
                                        </td>
                                        <td>
                                            <p>${name}</p>
                                        <td>
                                            <p>${price}</p>
                                        </td>
                                        <td>
                                            <p>${decFactor}</p>
                                        </td>
                                        <td>
                                            <input type="checkbox" disabled />
                                        </td>
                                    </tr>`;
      let tbodyElement = document.querySelectorAll("tbody")[0];
      tbodyElement.insertAdjacentHTML("beforeend", newProdcutString);
    }
  });
}
