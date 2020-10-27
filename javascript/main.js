// initialize page
function initialize() {
	console.log(currentPage);
	switch (currentPage) {
		case 'bonus': {
			break;
		}
		case 'chests': {
			addWorlds();
			addRewardTypes();
			populateTable(0);
			break;
		}
		case 'equipment': {
			addEquipmentTypes();
			addRewardTypes();
			populateTable(0);
			break;
		}
		case 'forms': {
			break;
		}
		case 'levels': {
			break;
		}
		case 'other': {
			break;
		}
		case 'popups': {
			addWorlds();
			addRewardTypes();
			populateTable(0);
			break;
		}
		case 'index': {
			break;
		}
		default: {
			break;
		}
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

// populate table with selected collection's locations
function populateTable(ID) {
	let table;
	let newTableBody;
	switch (currentPage) {
		case 'bonus': {
			break;
		}
		case 'chests': {
			table = document.getElementById('chestsTable');
			newTableBody = document.createElement('tbody');
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
		}
		case 'equipment': {
			table = document.getElementById('equipmentTable');
			newTableBody = document.createElement('tbody');
			table = document.getElementById(currentPage + 'Table');
			if (equipmentArray[ID].Equipments.length > 0) {
				for (let i = 0; i < equipmentArray[ID].Equipments.length; i++) {
					let row = document.createElement('tr');
					row.id = 'row' + i;
					let cell = document.createElement('input');
					cell.type = 'checkbox';
					cell.id = 'check' + i;
					row.appendChild(cell);
					equipmentPropertiesArray.forEach(property => {
						let cell = document.createElement('td');
						cell.innerHTML = equipmentArray[ID].Equipments[i][property];
						row.appendChild(cell);
					})
					newTableBody.appendChild(row);
				}
			}
			break;
		}
		case 'forms': {
			break;
		}
		case 'levels': {
			break;
		}
		case 'other': {
			break;
		}
		case 'popups': {
			table = document.getElementById('popupsTable');
			newTableBody = document.createElement('tbody');
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
		}
		default: {
			break;
		}
	}
	let oldTableBody = table.lastElementChild;
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
	switch (currentPage) {
		case 'bonus': {
			break;
		}
		case 'chests': {
			let rt = document.getElementById('rewardTypeSelector');
			let r = document.getElementById('rewardSelector');
			let w = document.getElementById('worldSelector');
			let rowCount = document.getElementById('chestsTable').rows.length;
			let locationArray = chestArray[w.value].Chests;
			for (let i = 0; i < rowCount - 1; i++) {
				let checked = document.getElementById('check' + i).checked;
				if (checked) {
					locationArray[i]['Replacement Reward'] = rewardArray[rt.value].Rewards[r.value]['Reward'];
					locationArray[i]['Replacement Address'] = rewardArray[rt.value].Rewards[r.value]['Reward Address'];
				}
			}
			populateTable(w.value);
			break;
		}
		case 'equipment': {
			let rt = document.getElementById('rewardTypeSelector');
			let r = document.getElementById('rewardSelector');
			let et = document.getElementById('equipmentTypeSelector');
			let locationArray = equipmentArray[et.value].Equipments;
			let str = document.getElementById('strength');
			let mag = document.getElementById('magic');
			let ap = document.getElementById('ap');
			let def = document.getElementById('defense');
			let physical = document.getElementById('physicalResistance');
			let fire = document.getElementById('fireResistance');
			let blizzard = document.getElementById('blizzardResistance');
			let thunder = document.getElementById('thunderResistance');
			let dark = document.getElementById('darkResistance');
			let light = document.getElementById('lightResistance');
			let universal = document.getElementById('universalResistance');
			let rowCount = document.getElementById('equipmentTable').rows.length;
			for (let i = 0; i < rowCount - 1; i++) {
				let checked = document.getElementById('check' + i).checked;
				if (checked) {
					locationArray[i]['Ability'] = rewardArray[rt.value].Rewards[r.value]['Reward'];
					locationArray[i]['Replacement Ability Address'] = rewardArray[rt.value].Rewards[r.value]['Reward Address'];
					locationArray[i]['Strength'] = str.value;
					locationArray[i]['Magic'] = mag.value;
					locationArray[i]['AP'] = ap.value;
					locationArray[i]['Defense'] = def.value;
					locationArray[i]['Physical Resistance'] = physical.value;
					locationArray[i]['Fire Resistance'] = fire.value;
					locationArray[i]['Blizzard Resistance'] = blizzard.value;
					locationArray[i]['Thunder Resistance'] = thunder.value;
					locationArray[i]['Dark Resistance'] = dark.value;
					locationArray[i]['Light Resistance'] = light.value;
					locationArray[i]['Universal Resistance'] = universal.value;
				}
			}
			populateTable(et.value);
			break;
		}
		case 'forms': {
			break;
		}
		case 'levels': {
			break;
		}
		case 'other': {
			break;
		}
		case 'popups': {
			let rt = document.getElementById('rewardTypeSelector');
			let r = document.getElementById('rewardSelector');
			let w = document.getElementById('worldSelector');
			let rowCount = document.getElementById('popupsTable').rows.length;
			let locationArray = popupArray[w.value].Popups;
			for (let i = 0; i < rowCount - 1; i++) {
				let checked = document.getElementById('check' + i).checked;
				if (checked) {
					locationArray[i]['Replacement Reward'] = rewardArray[rt.value].Rewards[r.value]['Reward'];
					locationArray[i]['Replacement Address'] = rewardArray[rt.value].Rewards[r.value]['Reward Address'];
				}
			}
			populateTable(w.value);
			break;
		}
		default: {
			break;
		}
	}
}

// set replaced rewards to null
function goldExperienceRequiem() {
	switch (currentPage) {
		case 'bonus': {
			break;
		}
		case 'chests': {
			let w = document.getElementById('worldSelector');
			let rowCount = document.getElementById('chestsTable').rows.length;
			let locationArray = chestArray[w.value].Chests;
			for (let i = 0; i < rowCount - 1; i++) {
				let checked = document.getElementById('check' + i).checked;
				if (checked) {
					locationArray[i]['Replacement Reward'] = '';
					locationArray[i]['Replacement Address'] = '';
				}
			}
			populateTable(w.value);
			break;
		}
		case 'equipment': {
			let et = document.getElementById('equipmentTypeSelector');
			let locationArray = equipmentArray[et.value].Equipments;
			let rowCount = document.getElementById('equipmentTable').rows.length;
			for (let i = 0; i < rowCount - 1; i++) {
				let checked = document.getElementById('check' + i).checked;
				if (checked) {
					locationArray[i]['Ability'] = locationArray[i]['Vanilla Ability'];
					locationArray[i]['Replacement Ability Address'] = '';
					locationArray[i]['Strength'] = locationArray[i]['Vanilla Strength'];
					locationArray[i]['Magic'] = locationArray[i]['Vanilla Magic'];
					locationArray[i]['AP'] = locationArray[i]['Vanilla AP'];
					locationArray[i]['Defense'] = locationArray[i]['Vanilla Defense'];
					locationArray[i]['Physical Resistance'] = 0;
					locationArray[i]['Fire Resistance'] = locationArray[i]['Vanilla Fire Resistance'];
					locationArray[i]['Blizzard Resistance'] = locationArray[i]['Vanilla Blizzard Resistance'];
					locationArray[i]['Thunder Resistance'] = locationArray[i]['Vanilla Thunder Resistance'];
					locationArray[i]['Dark Resistance'] = locationArray[i]['Vanilla Dark Resistance'];
					locationArray[i]['Light Resistance'] = 0;
					locationArray[i]['Universal Resistance'] = 0;
				}
			}
			populateTable(et.value);
			break;
		}
		case 'forms': {
			break;
		}
		case 'levels': {
			break;
		}
		case 'other': {
			break;
		}
		case 'popups': {
			let w = document.getElementById('worldSelector');
			let rowCount = document.getElementById('popupsTable').rows.length;
			let locationArray = popupArray[w.value].Popups;
			for (let i = 0; i < rowCount - 1; i++) {
				let checked = document.getElementById('check' + i).checked;
				if (checked) {
					locationArray[i]['Replacement Reward'] = '';
					locationArray[i]['Replacement Address'] = '';
				}
			}
			populateTable(w.value);
			break;
		}
		default: {
			break;
		}
	}
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
	finalPnachStrings.push('\n')

	// Printing Equipment Replacements
	finalPnachStrings.push('//Equipment Replacements\n')
	for (let i = 0; i < equipmentTypeArray.length; i++) {
		finalPnachStrings.push('// ' + equipmentTypeArray[i] + '\n')
		for (let j = 0; j < equipmentArray[i].Equipments.length; j++) {
			let equipment = equipmentArray[i].Equipments[j];
			// ability replacement
			// stat replacement
			// elemental resistance replacement
			// other resistance replacement
		}
	}
	finalPnachStrings.push('\n')

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