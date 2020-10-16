// create world list
function addWorlds() {
	let select = document.getElementById('worlds');
	let counter = 0;
	worldArray.forEach(world => {
		let option = document.createElement('option');
		option.text = world;
		option.value = counter;
		select.add(option);
		counter++;
	})
	populateChestTable(0);
}

// create chest table, chest table header, and empty table body
function createChestTableHeader() {
	let table = document.createElement('table');
	let tableBody = document.createElement('tbody');
	table.id = 'chestTable';
	let tableHead = table.createTHead();
	let headerRow = tableHead.insertRow();
	for (let key of Object.keys(chestArray[0].Chests[0])) {
		let th = document.createElement('th');
		let text = document.createTextNode(key);
		th.appendChild(text);
		headerRow.appendChild(th);
	}
	table.appendChild(tableBody);
	return table;
}

// populate Chest Table with selected world's chests
function populateChestTable(worldID) {
	let table = document.getElementById('chestTable');
	let oldTableBody = table.lastElementChild;
	let newTableBody = document.createElement('tbody');
	let chestProperties = [
		'Room',
		'Original Reward',
		'Original Address',
		'Replacement Reward',
		'Replacement Address'
	]
	let counter = 0;
	if (chestArray[worldID].Chests.length > 0) {
		chestArray[worldID].Chests.forEach(chest => {
			let row = document.createElement('tr');
			chestProperties.forEach(prop => {
				let cell = document.createElement('td');
				cell.innerHTML = chest[prop];
				row.appendChild(cell);
			})
			let replaceButton = document.createElement('button');
			replaceButton.innerHTML = 'Replace';
			replaceButton.value = counter;
			replaceButton.onclick = function () {
				let body = document.body;
				let p = document.createElement('p');
				let rt = document.getElementById('rewardTypes');
				let r = document.getElementById('rewards');
				let address = rewardArray[rt.value].Rewards[r.value]['Reward Address'];



				p.innerHTML = 'patch=1,EE,' + chest['Original Address'] + ',extended,0000' + address;
				body.appendChild(p);
				//console.log(this.value);
			}
			row.appendChild(replaceButton);
			newTableBody.appendChild(row);
			counter++;
		})
	}
	table.replaceChild(newTableBody, oldTableBody);
}

// add types of rewards to reward type dropdown
function addRewardTypes() {
	let select = document.getElementById('rewardTypes');
	let counter = 0;
	rewardTypeArray.forEach(rewardType => {
		let option = document.createElement('option');
		option.text = rewardType;
		option.value = counter;
		select.add(option);
		counter++;
	})
	populateRewardTypeSelector(0);
}

// populate reward selector with selected reward type index
function populateRewardTypeSelector(rewardTypeID) {
	let select = document.getElementById('rewards');
	let counter = 0;
	removeOptions(select);
	//let arr = rewardArray[rewardTypeID].Rewards;
	rewardArray[rewardTypeID].Rewards.forEach(reward => {
		let option = document.createElement('option');
		option.text = reward.Reward;
		option.value = counter;
		select.add(option);
		counter++;
	})
}

// clear all options in select
function removeOptions(selectElement) {
	let L = selectElement.options.length - 1;
	for (let i = L; i >= 0; i--) {
		selectElement.remove(i);
	}
}

function replace() {
	console.log('yo');
}

var table = createChestTableHeader();
var body = document.body;
body.appendChild(table);
addWorlds();
addRewardTypes();