const pending = document.querySelector("#pending");
const approved = document.querySelector("#approved");
const remove = document.querySelector("#remove");
const tabPen = document.querySelector("#table-pending");
const tabApp = document.querySelector("#table-create");
const tabRem = document.querySelector("#table-remove");
const submit = document.querySelector("#submit");
const penColor = document.querySelector(".pending");
const apprColor = document.querySelector(".approved");
const remColor = document.querySelector(".remove");

let pendingclick = false;
let approvedClick = false;
let removeClick = false;

pending.addEventListener("click", pendingFun);
function pendingFun() {
  pendingclick = true;
  approvedClick = false;
  removeClick = false;
  penColor.style.backgroundColor = "black";
  apprColor.style.backgroundColor = "";
  remColor.style.backgroundColor = "";
}

approved.addEventListener("click", approvedFun);
function approvedFun() {
  approvedClick = true;
  removeClick = false;
  pendingclick = false;
  apprColor.style.backgroundColor = "black";
  penColor.style.backgroundColor = "";
  remColor.style.backgroundColor = "";

}

remove.addEventListener("click", removeFun);
function removeFun() {
  removeClick = true;
  pendingclick = false;
  approvedClick = false;
  remColor.style.backgroundColor = "black";
  penColor.style.backgroundColor = "";
  apprColor.style.backgroundColor = "";
}

submit.addEventListener("click", (e) => {
  if (pendingclick || approvedClick || removeClick) {
    e.preventDefault();

    const Name1 = document.querySelector("#name");
    const Number1 = document.querySelector("#number");
    const Email1 = document.querySelector("#email");

    let penRow = document.createElement("tr");
    let penD1 = document.createElement("td");
    let penD2 = document.createElement("td");
    let penD3 = document.createElement("td");
    let penD4 = document.createElement("td");

    penD1.innerHTML = Name1.value;
    penD2.innerHTML = Number1.value;
    penD3.innerHTML = Email1.value;
    penD4.innerHTML = ` <select class="selectOption">
    <option value="none">Select Opt</option>
    <option value="pending">Pending</option>
    <option value="approved">Approved</option>
    <option value="remove">Remove</option>
  </select>`;

    penRow.append(penD1, penD2, penD3, penD4);

    if (pendingclick) {
      tabPen.append(penRow);
    } else if (approvedClick) {
      tabApp.append(penRow);
    } else if (removeClick) {
      tabRem.append(penRow);
    }

    const selectOption = penRow.querySelector(".selectOption");
    selectOption.addEventListener("change", selectOptionFun);
  } else {
    alert("Click one of the above");
  }
});

function selectOptionFun(e) {
  let selectvalue = e.target.value;
  console.dir(selectvalue);
  if (selectvalue == "none") {
    console.log("Nothing");
  } else if (selectvalue == "pending") {
    pendingclick = true;
    approvedClick = false;
    removeClick = false;
    pendingFun();
  } else if (selectvalue == "approved") {
    pendingclick = false;
    approvedClick = true;
    removeClick = false;
    approvedFun();
  } else if (selectvalue == "remove") {
    pendingclick = false;
    approvedClick = false;
    removeClick = true;
    removeFun();
  } else {
    console.log("Nothing else");
  }
}
