// create world list
function addWorlds() {
	let select = document.getElementById('worldSelector');
	for (let i = 0; i < worldArray.length; i++) {
		let option = document.createElement('option');
		option.text = worldArray[i];
		option.value = i;
		select.add(option);
	}
	populateChestTable(0);
}

// populate Chest Table with selected world's chests
function populateChestTable(worldID) {
	let table = document.getElementById('chestTable');
	let oldTableBody = table.lastElementChild;
	let newTableBody = document.createElement('tbody');
	if (chestArray[worldID].Chests.length > 0) {
		for (let i = 0; i < chestArray[worldID].Chests.length; i++) {
			let row = document.createElement('tr');
			row.id = 'row' + i;
			let cell = document.createElement('input');
			cell.type = 'checkbox';
			cell.id = 'check' + i;
			row.appendChild(cell);
			chestPropertiesArray.forEach(property => {
				let cell = document.createElement('td');
				cell.innerHTML = chestArray[worldID].Chests[i][property];
				row.appendChild(cell);
			})
			newTableBody.appendChild(row);
			// console.log(row);
		}
	}
	table.replaceChild(newTableBody, oldTableBody);
}

// add types of rewards to reward type dropdown
function addRewardTypes() {
	let select = document.getElementById('rewardTypeSelector');
	for (let i = 0; i < rewardTypeArray.length; i++) {
		let option = document.createElement('option');
		option.text = rewardTypeArray[i];
		option.value = i;
		select.add(option);
	}
	populateRewardTypeSelector(0);
}

// populate reward selector with selected reward type index
function populateRewardTypeSelector(rewardTypeID) {
	let select = document.getElementById('rewardSelector');
	removeOptions(select);
	for (let i = 0; i < rewardArray[rewardTypeID].Rewards.length; i++) {
		let option = document.createElement('option');
		option.text = rewardArray[rewardTypeID].Rewards[i].Reward;
		option.value = i;
		select.add(option);
	}
}

// clear all options in select
function removeOptions(selectElement) {
	let L = selectElement.options.length - 1;
	for (let i = L; i >= 0; i--) {
		selectElement.remove(i);
	}
}

function replace() {
	let rt = document.getElementById('rewardTypeSelector');
	let r = document.getElementById('rewardSelector');
	let w = document.getElementById('worldSelector');
	let rowCount = document.getElementById('chestTable').rows.length;

	for (let i = 0; i < rowCount - 1; i++) {
		let checked = document.getElementById('check' + i).checked;
		if (checked) {
			chestArray[w.value].Chests[i]['Replacement Reward'] = rewardArray[rt.value].Rewards[r.value]['Reward'];
			chestArray[w.value].Chests[i]['Replacement Address'] = rewardArray[rt.value].Rewards[r.value]['Reward Address'];
		}
	}
	populateChestTable(w.value);
}

addWorlds();
addRewardTypes();