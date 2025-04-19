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

const increaseBtn = document.querySelector('.increaseBtn');
const decreaseBtn = document.querySelector('.decreaseBtn');
const resetBtn = document.querySelector('.resetBtn');
const visualCount = document.querySelector('.visualCount');

increaseBtn.addEventListener('click', () => {
  DespairCounterLogic.increaseDespair();
  console.log(DespairCounterLogic.getDespairCount());
  visualCount.textContent = DespairCounterLogic.getDespairCount();
});

decreaseBtn.addEventListener('click', () => {
  DespairCounterLogic.decreaseDespair();
  console.log(DespairCounterLogic.getDespairCount());
  visualCount.textContent = DespairCounterLogic.getDespairCount();
});

resetBtn.addEventListener('click', () => {
  DespairCounterLogic.noDespair();
  console.log(DespairCounterLogic.getDespairCount());
  visualCount.textContent = DespairCounterLogic.getDespairCount();
});