let userId = 'user1';  // باید از یک شناسه یکتا برای هر کاربر استفاده شود
let coins = 0;
let clickRate = 1;
let clickLimit = 5;
let clickValue = 1;
let upgradeCost = 100;
let upgradeValueCost = 100;
let clicks = 0;
let upgradeClickLevel = 1;
let upgradeValueLevel = 1;
const maxUpgradeLevel = 50;
let lastClickTime = Date.now();

document.getElementById('coins').innerText = coins;
document.getElementById('clickRate').innerText = clickRate;
document.getElementById('clickValue').innerText = clickValue;
document.getElementById('upgradeCost').innerText = upgradeCost;
document.getElementById('upgradeValueCost').innerText = upgradeValueCost;
document.getElementById('clicks').innerText = clicks;
document.getElementById('upgradeClickLevel').innerText = upgradeClickLevel;
document.getElementById('upgradeValueLevel').innerText = upgradeValueLevel;

function saveState() {
    const data = {
        coins, clickRate, clickLimit, clickValue, upgradeCost, upgradeValueCost, clicks, upgradeClickLevel, upgradeValueLevel
    };
    localStorage.setItem(userId, JSON.stringify(data));
}

function loadState() {
    const data = JSON.parse(localStorage.getItem(userId));
    if (data) {
        coins = data.coins;
        clickRate = data.clickRate;
        clickLimit = data.clickLimit;
        clickValue = data.clickValue;
        upgradeCost = data.upgradeCost;
        upgradeValueCost = data.upgradeValueCost;
        clicks = data.clicks;
        upgradeClickLevel = data.upgradeClickLevel;
        upgradeValueLevel = data.upgradeValueLevel;
        document.getElementById('coins').innerText = coins;
        document.getElementById('clickRate').innerText = clickRate;
        document.getElementById('clickValue').innerText = clickValue;
        document.getElementById('upgradeCost').innerText = upgradeCost;
        document.getElementById('upgradeValueCost').innerText = upgradeValueCost;
        document.getElementById('clicks').innerText = clicks;
        document.getElementById('upgradeClickLevel').innerText = upgradeClickLevel;
        document.getElementById('upgradeValueLevel').innerText = upgradeValueLevel;
    }
}

function upgradeClick() {
    if (upgradeClickLevel >= maxUpgradeLevel) {
        alert("شما به حداکثر سطح ارتقا رسیده‌اید.");
        return;
    }

    if (coins >= upgradeCost) {
        coins -= upgradeCost;
        clickRate++;
        clickLimit++;
        upgradeCost *= 2;
        upgradeClickLevel++;
        document.getElementById("coins").innerText = coins;
        document.getElementById("clickRate").innerText = clickRate;
        document.getElementById("upgradeCost").innerText = upgradeCost;
        document.getElementById("upgradeClickLevel").innerText = upgradeClickLevel;
        saveState();
    } else {
        alert("شما به اندازه کافی سکه برای ارتقا ندارید.");
    }
}

function upgradeClickValue() {
    if (upgradeValueLevel >= maxUpgradeLevel) {
        alert("شما به حداکثر سطح ارتقا رسیده‌اید.");
        return;
    }

    if (coins >= upgradeValueCost) {
        coins -= upgradeValueCost;
        clickValue++;
        upgradeValueCost *= 2;
        upgradeValueLevel++;
        document.getElementById("coins").innerText = coins;
        document.getElementById("clickValue").innerText = clickValue;
        document.getElementById("upgradeValueCost").innerText = upgradeValueCost;
        document.getElementById("upgradeValueLevel").innerText = upgradeValueLevel;
        saveState();
    } else {
        alert("شما به اندازه کافی سکه برای ارتقا ندارید.");