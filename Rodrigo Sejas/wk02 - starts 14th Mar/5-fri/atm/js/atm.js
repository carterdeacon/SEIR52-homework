// Balances

const checking = [];
const savings = [];

/**
 * Checking account deposit functionality
 */

$("#checking-deposit").click(function () {
  const value = $("#checking-amount").val();
  checking.push(Number(value));
  let totalChecking = checking.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  }, 0);

  if (totalChecking === 0) {
    $("#checking-balance").addClass("zero");
  } else {
    $("#checking-balance").removeClass("zero");
  }

  if (totalChecking < 0) {
    checking.pop();
    totalChecking = checking.reduce((previousValue, currentValue) => {
      return previousValue + currentValue;
    }, 0);
  }
  $("#checking-balance").text("$" + totalChecking);
  $("#checking-amount").val("");
});

/**
 * Savings account deposit functionality
 */

$("#savings-deposit").click(function () {
  const value = $("#savings-amount").val();
  savings.push(Number(value));
  let totalSavings = savings.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  }, 0);

  if (totalSavings === 0) {
    $("#savings-balance").addClass("zero");
  } else {
    $("#savings-balance").removeClass("zero");
  }

  if (totalSavings < 0) {
    savings.pop();
    totalSavings = savings.reduce((previousValue, currentValue) => {
      return previousValue + currentValue;
    }, 0);
  }

  $("#savings-balance").text("$" + totalSavings);
  $("#savings-amount").val("");
});

/**
 * Checking withdrawal functionality
 */

$("#checking-withdraw").click(function () {
  const posValue = Number($("#checking-amount").val());
  const negValue = -posValue;

  let totalCheckingBefore = checking.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  }, 0);

  let totalCheckingAfter;
  let totalSavingsAfter;

  let totalSavingsBefore = savings.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  }, 0);

  let sumOfBothAccountsBefore = totalCheckingBefore + totalSavingsBefore;

  if (posValue <= totalCheckingBefore) {
    checking.push(negValue);
    totalCheckingAfter = checking.reduce((previousValue, currentValue) => {
      return previousValue + currentValue;
    }, 0);
    totalSavingsAfter = savings.reduce((previousValue, currentValue) => {
      return previousValue + currentValue;
    }, 0);
  } else {
    if (posValue <= sumOfBothAccountsBefore) {
      let overdraftRemainder = Math.abs(posValue - totalCheckingBefore);
      let depleteSavingsAmt = -totalCheckingBefore;
      checking.push(depleteSavingsAmt);
      let negOverdraftRemainder = -overdraftRemainder;
      savings.push(negOverdraftRemainder);
      totalCheckingAfter = checking.reduce((previousValue, currentValue) => {
        return previousValue + currentValue;
      }, 0);
      totalSavingsAfter = savings.reduce((previousValue, currentValue) => {
        return previousValue + currentValue;
      }, 0);
    } else {
      return;
    }
  }

  if (totalCheckingAfter === 0) {
    $("#checking-balance").addClass("zero");
  } else {
    $("#checking-balance").removeClass("zero");
  }

  if (totalSavingsAfter === 0) {
    $("#savings-balance").addClass("zero");
  } else {
    $("#savings-balance").removeClass("zero");
  }

  $("#checking-balance").text("$" + totalCheckingAfter);
  $("#checking-amount").val("");
  $("#savings-balance").text("$" + totalSavingsAfter);
  $("#savings-amount").val("");
});

/**
 * Savings withdrawal functionality
 */

$("#savings-withdraw").click(function () {
  const posValue = Number($("#savings-amount").val());
  const negValue = -posValue;

  let totalCheckingBefore = checking.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  }, 0);

  let totalCheckingAfter;
  let totalSavingsAfter;

  let totalSavingsBefore = savings.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  }, 0);

  let sumOfBothAccountsBefore = totalCheckingBefore + totalSavingsBefore;

  if (posValue <= totalSavingsBefore) {
    savings.push(negValue);
    totalSavingsAfter = savings.reduce((previousValue, currentValue) => {
      return previousValue + currentValue;
    }, 0);
    totalCheckingAfter = checking.reduce((previousValue, currentValue) => {
      return previousValue + currentValue;
    }, 0);
  } else {
    if (posValue <= sumOfBothAccountsBefore) {
      let overdraftRemainder = Math.abs(posValue - totalSavingsBefore);
      let depleteSavingsAmt = -totalSavingsBefore;
      savings.push(depleteSavingsAmt);
      let negOverdraftRemainder = -overdraftRemainder;
      checking.push(negOverdraftRemainder);
      totalCheckingAfter = checking.reduce((previousValue, currentValue) => {
        return previousValue + currentValue;
      }, 0);
      totalSavingsAfter = savings.reduce((previousValue, currentValue) => {
        return previousValue + currentValue;
      }, 0);
    } else {
      return;
    }
  }

  if (totalCheckingAfter === 0) {
    $("#checking-balance").addClass("zero");
  } else {
    $("#checking-balance").removeClass("zero");
  }

  if (totalSavingsAfter === 0) {
    $("#savings-balance").addClass("zero");
  } else {
    $("#savings-balance").removeClass("zero");
  }

  $("#checking-balance").text("$" + totalCheckingAfter);
  $("#checking-amount").val("");
  $("#savings-balance").text("$" + totalSavingsAfter);
  $("#savings-amount").val("");
});
