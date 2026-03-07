document.getElementById("cashout-btn").addEventListener("click", function () {
  // get the agent number & validate
  const cashoutNumber = getValueFromInput("cashout-number");
  if (cashoutNumber.length != 11) {
    alert("invalid number");
    return;
  }
  //get the amount
  const cashoutAmount = getValueFromInput("cashout-amount");

  const currentBalance = getBalance();
  //calculate Balance
  const newBalance = currentBalance - Number(cashoutAmount);
  console.log(newBalance);
  if (newBalance < 0) {
    alert("invalid Amount");
    return;
  }
  const pin = getValueFromInput("cashout-pin");
  if (pin === "1323") {
    alert("Cashout Successfull");
    setBalance(newBalance);
  } else {
    alert("invalid Pin");
    return;
  }
});