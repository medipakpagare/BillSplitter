const billCalculator = () => {
  var radioBtn = document.getElementById("tip_radio");
  var secondRadioBtn = document.getElementById("tip_radio_2");

  var calcBtn = document.getElementById("calc_btn");
  var rightPara = document.getElementById("right_para");

  var mealAmount = document.getElementById("billId");
  var People = document.getElementById("peopleId");
  var Tip = document.getElementById("tipId");

  //Hidden container
  var container = document.getElementById("containerId");
  container.style.display = "none";

  //code for input section
  //Including tip
  var tipYes = radioBtn;
  var tipNo = secondRadioBtn;

  tipYes.addEventListener("click", function () {
    container.style.display = "";

    Tip.addEventListener("change", function () {
      calcBtn.addEventListener("click", function () {
        var calc = parseFloat(mealAmount.value) / parseFloat(People.value);

        rightPara.innerHTML = `Your share will be ₹${(
          calc + parseFloat(Tip.value)
        ).toFixed(0)} of each.`;
      });
    });
  });

  //Excluding tip
  tipNo.addEventListener("click", function () {
    document.getElementById("tip_section_Id").style.display = "none";
    container.style.display = "block";

    //calculation
    People.addEventListener("change", function () {
      calcBtn.addEventListener("click", function () {
        rightPara.innerHTML = `Your share will be ₹ ${(
          parseFloat(mealAmount.value) / parseFloat(People.value)
        ).toFixed(0)} of each.`;
      });
    });
  });
};
billCalculator();
