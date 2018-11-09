const dynamicTitle = document.getElementById('dynamicTextTitle');
const dynamicDescription = document.getElementById('dynamicTextDescription');
const textConfigArray = [
  { title: 'brands', desc: 'Join 600+ brands in streamlining your sales, orders and client relationships all in one platform' },
  { title: 'retailers', desc: 'Join 2000+ retailers in saving up to 8 hours a week ordering from licensed brands on LeafLink' }
];

let toggleHelper = 0;

(function setTimelyTexts() {
  toggleHelper = +!toggleHelper;
  dynamicTitle.innerHTML = textConfigArray[toggleHelper].title;
  dynamicDescription.innerHTML = textConfigArray[toggleHelper].desc;
  setTimeout(setTimelyTexts, 2000);
})();