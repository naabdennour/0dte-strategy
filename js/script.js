// Example: Calculate progress
const target = 100000;
const achieved = 30000;
const progress = (achieved / target) * 100;

document.querySelector('.progress').style.width = `${progress}%`;
document.querySelector('.progress').textContent = `${progress.toFixed(2)}%`;
