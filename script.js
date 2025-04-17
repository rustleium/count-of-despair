console.log("We shall start... now");

const DespairCounterLogic = (function () {
  let despair = 0;

  function increaseDespair () {
    despair ++;
  }

  function decreaseDespair () {
    despair --;
  }

  function noDespair () {
    despair = 0;
  }

  function getDespairCount () {
    return despair;
  }

  return {
    increaseDespair,
    decreaseDespair,
    noDespair,
    getDespairCount,
  };
})();