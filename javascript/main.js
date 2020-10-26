// initialize page
function initialize() {
	console.log(currentPage);
	switch (currentPage) {
		case 'bonus':
			break;
		case 'chests':
			addWorlds();
			addRewardTypes();
			populateTable(0);
			break;
		case 'equipment':
			addEquipmentTypes();
			addRewardTypes();
			populateTable(0);
			break;
		case 'forms':
			break;
		case 'levels':
			break;
		case 'other':
			break;
		case 'popups':
			addWorlds();
			addRewardTypes();
			populateTable(0);
			break;
		case 'index':
			break;
		default:
			break;
	}
}

// create world list
function addWorlds() {
	let select = document.getElementById('worldSelector');
	for (let i = 0; i < worldArray.length; i++) {
		let option = document.createElement('option');
		option.text = worldArray[i];
		option.value = i;
		select.add(option);
	}
}

// create equipment type list
function addEquipmentTypes() {
	let select = document.getElementById('equipmentTypeSelector');
	for (let i = 0; i < equipmentTypeArray.length; i++) {
		let option = document.createElement('option');
		option.text = equipmentTypeArray[i];
		option.value = i;
		select.add(option);
	}
}

// populate table with selected world's reward locations
function populateTable(ID) {
	let table = document.getElementById(currentPage + 'Table');
	let oldTableBody = table.lastElementChild;
	let newTableBody = document.createElement('tbody');
	switch (currentPage) {
		case 'chests':
			if (chestArray[ID].Chests.length > 0) {
				for (let i = 0; i < chestArray[ID].Chests.length; i++) {
					let row = document.createElement('tr');
					row.id = 'row' + i;
					let cell = document.createElement('input');
					cell.type = 'checkbox';
					cell.id = 'check' + i;
					row.appendChild(cell);
					chestPropertiesArray.forEach(property => {
						let cell = document.createElement('td');
						cell.innerHTML = chestArray[ID].Chests[i][property];
						row.appendChild(cell);
					})
					newTableBody.appendChild(row);
				}
			}
			break;
		case 'popups':
			if (popupArray[ID].Popups.length > 0) {
				for (let i = 0; i < popupArray[ID].Popups.length; i++) {
					let row = document.createElement('tr');
					row.id = 'row' + i;
					let cell = document.createElement('input');
					cell.type = 'checkbox';
					cell.id = 'check' + i;
					row.appendChild(cell);
					popupPropertiesArray.forEach(property => {
						let cell = document.createElement('td');
						cell.innerHTML = popupArray[ID].Popups[i][property];
						row.appendChild(cell);
					})
					newTableBody.appendChild(row);
				}
			}
			break;
		case 'equipment':
			table = document.getElementById(currentPage + 'Table');
			if (equipmentArray[ID].Equipments.length > 0) {
				for (let i = 0; i < equipmentArray[ID].Equipments.length; i++) {
					let row = document.createElement('tr');
					row.id = 'row' + i;
					equipmentPropertiesArray.forEach(property=>{
						let cell = document.createElement('td');
						cell.innerHTML = equipmentArray[ID].Equipments[i][property];
						row.appendChild(cell);
					})
					newTableBody.appendChild(row);
				}
			}
			break;
		default:
			break;
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

// add reward and reward address to location
function replace() {
	let rt = document.getElementById('rewardTypeSelector');
	let r = document.getElementById('rewardSelector');
	let w = document.getElementById('worldSelector');
	let rowCount = document.getElementById(currentPage + 'Table').rows.length;
	let locationArray;

	switch (currentPage) {
		case 'bonus':
			break;
		case 'chests':
			locationArray = chestArray[w.value].Chests;
			break;
		case 'equipment':
			break;
		case 'forms':
			break;
		case 'levels':
			break;
		case 'other':
			break;
		case 'popups':
			locationArray = popupArray[w.value].Popups;
			break;
		default:
			break;
	}

	for (let i = 0; i < rowCount - 1; i++) {
		let checked = document.getElementById('check' + i).checked;
		if (checked) {
			locationArray[i]['Replacement Reward'] = rewardArray[rt.value].Rewards[r.value]['Reward'];
			locationArray[i]['Replacement Address'] = rewardArray[rt.value].Rewards[r.value]['Reward Address'];
		}
	}
	populateTable(w.value);
}

// set replaced rewards to null
function goldExperienceRequiem() {
	let w = document.getElementById('worldSelector');
	let rowCount = document.getElementById(currentPage + 'Table').rows.length;
	let locationArray;

	switch (currentPage) {
		case 'bonus':
			break;
		case 'chests':
			locationArray = chestArray[w.value].Chests;
			break;
		case 'equipment':
			break;
		case 'forms':
			break;
		case 'levels':
			break;
		case 'other':
			break;
		case 'popups':
			locationArray = popupArray[w.value].Popups;
			break;
		default:
			break;
	}
	for (let i = 0; i < rowCount - 1; i++) {
		let checked = document.getElementById('check' + i).checked;
		if (checked) {
			locationArray[i]['Replacement Reward'] = '';
			locationArray[i]['Replacement Address'] = '';
		}
	}
	populateTable(w.value);
}

// save replacement patch codes to pnach file
function save() {
	let finalPnachStrings = [];

	// Printing Chest Replacements
	finalPnachStrings.push('//Chest Replacements\n')
	for (let i = 0; i < worldArray.length; i++) {
		finalPnachStrings.push('// ' + worldArray[i] + '\n')
		for (let j = 0; j < chestArray[i].Chests.length; j++) {
			let chest = chestArray[i].Chests[j];
			if (chest["Replacement Address"] !== '') {
				let s = 'patch=1,EE,' + chest['Original Address'] + ',extended,0000' + chest['Replacement Address'];
				s += ' // ' + chest['Room'] + ', ' + chest['Original Reward'] + ' is now ' + chest['Replacement Reward'] + '\n';
				finalPnachStrings.push(s);
			}
		}
	}
	//finalPnachStrings.push('\n')

	// Printing Popup Replacements
	finalPnachStrings.push('//Popup Replacements\n')
	for (let i = 0; i < worldArray.length; i++) {
		finalPnachStrings.push('// ' + worldArray[i] + '\n')
		for (let j = 0; j < popupArray[i].Popups.length; j++) {
			let popup = popupArray[i].Popups[j];
			if (popup["Replacement Address"] !== '') {
				let s = 'patch=1,EE,' + popup['Original Address'] + ',extended,0000' + popup['Replacement Address'];
				s += ' // ' + popup['Location'] + ', ' + popup['Original Reward'] + ' is now ' + popup['Replacement Reward'] + '\n';
				finalPnachStrings.push(s);
			}
		}
	}

	let finalPnach = new Blob(finalPnachStrings, { type: "text/plain;charset=utf-8" });
	saveAs(finalPnach, 'F266B00B.pnach');
}

const currentPage = window.location.pathname.split('/').pop().split('.')[0];
window.onload = function () { initialize() };