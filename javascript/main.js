// initialize page
function initialize() {
	console.log(currentPage);
	switch (currentPage) {
		case 'bonus': {
			addCharacters();
			addWorlds();
			addRewardTypes();
			populateTable(0);
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
			addRewardTypes();
			populateTable(0);
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

// create character list
function addCharacters() {
	let select = document.getElementById('characterSelector');
	for (let i = 0; i < characterArray.length; i++) {
		let option = document.createElement('option');
		option.text = characterArray[i];
		option.value = i;
		select.add(option);
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
			let world = document.getElementById('worldSelector').value;
			let character = document.getElementById('characterSelector').value;
			let worldBonusesArray = bonusArray[character]['All Character Bonuses'][world]['World Bonuses'];
			table = document.getElementById('bonusTable');
			newTableBody = document.createElement('tbody');
			if (worldBonusesArray.length > 0) {
				for (let i = 0; i < worldBonusesArray.length; i++) {
					let row = document.createElement('tr');
					row.id = 'row' + i;
					let cell = document.createElement('input');
					cell.type = 'checkbox';
					cell.id = 'check' + i;
					row.appendChild(cell);
					bonusPropertiesArray.forEach(property => {
						let cell = document.createElement('td');
						cell.innerHTML = worldBonusesArray[i][property];
						row.appendChild(cell);
					})
					newTableBody.appendChild(row);
				}
			}
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
			table = document.getElementById('levelsTable');
			newTableBody = document.createElement('tbody');
			levelArray.forEach(level => {
				let row = document.createElement('tr');
				row.id = 'row' + (level['Level'] - 1);
				let cell = document.createElement('input');
				cell.type = 'checkbox';
				cell.id = 'check' + (level['Level'] - 1);
				row.appendChild(cell);
				levelPropertiesArray.forEach(property => {
					let cell = document.createElement('td');
					cell.innerHTML = level[property];
					row.appendChild(cell);
				})
				newTableBody.appendChild(row);
			})
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
			let rt = document.getElementById('rewardTypeSelector');
			let r = document.getElementById('rewardSelector');
			let w = document.getElementById('worldSelector');
			let c = document.getElementById('characterSelector');
			let locationArray = bonusArray[c.value]['All Character Bonuses'][w.value]['World Bonuses'];
			let reward = rewardArray[rt.value].Rewards[r.value];
			let hp = document.getElementById('hp');
			let mp = document.getElementById('mp');
			let armor = document.getElementById('armor');
			let accessory = document.getElementById('accessory');
			let item = document.getElementById('item');
			let drive = document.getElementById('drive');
			let rowCount = document.getElementById('bonusTable').rows.length;
			for (let i = 0; i < rowCount - 1; i++) {
				let checked = document.getElementById('check' + i).checked;
				if (checked) {
					locationArray[i]['Replacement Reward 1'] = reward['Reward'];
					locationArray[i]['Replacement Reward Address 1'] = reward['Reward Address'];
					// locationArray[i]['Replacement Reward 2'] = reward['Reward'];
					// locationArray[i]['Replacement Reward Address 2'] = reward['Reward Address'];
					locationArray[i]['HP Increase'] = hp.value;
					locationArray[i]['MP Increase'] = mp.value;
					locationArray[i]['Armor Slot Increase'] = armor.value;
					locationArray[i]['Accessory Slot Increase'] = accessory.value;
					locationArray[i]['Item Slot Increase'] = item.value;
					locationArray[i]['Drive Gauge Increase'] = drive.value;
				}
			}
			populateTable(0);
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
			let rt = document.getElementById('rewardTypeSelector');
			let r = document.getElementById('rewardSelector');
			let locationArray = levelArray;
			let str = document.getElementById('strength');
			let mag = document.getElementById('magic');
			let ap = document.getElementById('ap');
			let def = document.getElementById('defense');
			let exp = document.getElementById('totalEXPToNext');
			let rowCount = document.getElementById('levelsTable').rows.length;
			for (let i = 0; i < rowCount - 1; i++) {
				let checked = document.getElementById('check' + i).checked;
				if (checked) {
					locationArray[i]['EXP to Next Level'] = exp.value;
					locationArray[i]['Standard AP'] = ap.value;
					locationArray[i]['Critical AP'] = Math.floor(((ap.value - 2) * 1.5) + 50);
					locationArray[i]['Defense'] = def.value;
					locationArray[i]['Magic'] = mag.value;
					locationArray[i]['Strength'] = str.value;
					locationArray[i]['Sword Replacement Address'] = rewardArray[rt.value].Rewards[r.value]['Reward Address'];
					locationArray[i]['Shield Replacement Address'] = rewardArray[rt.value].Rewards[r.value]['Reward Address'];
					locationArray[i]['Staff Replacement Address'] = rewardArray[rt.value].Rewards[r.value]['Reward Address'];
					locationArray[i]['Sword Replacement Reward'] = rewardArray[rt.value].Rewards[r.value]['Reward'];
					locationArray[i]['Shield Replacement Reward'] = rewardArray[rt.value].Rewards[r.value]['Reward'];
					locationArray[i]['Staff Replacement Reward'] = rewardArray[rt.value].Rewards[r.value]['Reward'];
				}
			}
			populateTable(0);
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
			let w = document.getElementById('worldSelector');
			let c = document.getElementById('characterSelector');
			let locationArray = bonusArray[c.value]['All Character Bonuses'][w.value]['World Bonuses'];
			let rowCount = document.getElementById('bonusTable').rows.length;
			for (let i = 0; i < rowCount - 1; i++) {
				let checked = document.getElementById('check' + i).checked;
				if (checked) {
					locationArray[i]['Replacement Reward 1'] = locationArray[i]['Vanilla Reward 1'];
					locationArray[i]['Replacement Reward Address 1'] = '';
					// locationArray[i]['Replacement Reward 2'] = locationArray[i]['Vanilla Reward 2'];
					// locationArray[i]['Replacement Reward Address 2'] = '';
					locationArray[i]['HP Increase'] = locationArray[i]['Vanilla HP Increase'];
					locationArray[i]['MP Increase'] = locationArray[i]['Vanilla MP Increase'];
					locationArray[i]['Armor Slot Increase'] = locationArray[i]['Vanilla Armor Slot Increase'];
					locationArray[i]['Accessory Slot Increase'] = locationArray[i]['Vanilla Accessory Slot Increase'];
					locationArray[i]['Item Slot Increase'] = locationArray[i]['Vanilla Item Slot Increase'];
					locationArray[i]['Drive Gauge Increase'] = locationArray[i]['Vanilla Drive Gauge Increase'];
				}
			}
			populateTable(0);
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
			let locationArray = levelArray;
			let rowCount = document.getElementById('levelsTable').rows.length;
			for (let i = 0; i < rowCount - 1; i++) {
				let checked = document.getElementById('check' + i).checked;
				if (checked) {
					locationArray[i]['EXP to Next Level'] = 0;
					locationArray[i]['Standard AP'] = locationArray[i]['Vanilla AP']
					locationArray[i]['Critical AP'] = Math.floor(((locationArray[i]['Standard AP'] - 2) * 1.5) + 50);
					locationArray[i]['Defense'] = locationArray[i]['Vanilla Defense']
					locationArray[i]['Magic'] = locationArray[i]['Vanilla Magic']
					locationArray[i]['Strength'] = locationArray[i]['Vanilla Strength']
					locationArray[i]['Sword Replacement Address'] = '';
					locationArray[i]['Shield Replacement Address'] = '';
					locationArray[i]['Staff Replacement Address'] = '';
					locationArray[i]['Sword Replacement Reward'] = locationArray[i]['Vanilla Sword Reward'];
					locationArray[i]['Shield Replacement Reward'] = locationArray[i]['Vanilla Shield Reward'];
					locationArray[i]['Staff Replacement Reward'] = locationArray[i]['Vanilla Staff Reward'];
				}
			}
			populateTable(0);
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

	// Printing Bonus Replacements
	finalPnachStrings.push('//Bonus Level Replacements\n')
	for (let i = 0; i < characterArray.length; i++) {
		finalPnachStrings.push('// ' + characterArray[i] + '\n');
		for (let j = 0; j < worldArray.length; j++) {
			let bonusCount = 0;
			let bonusString = '';
			finalPnachStrings.push('// ' + worldArray[j] + '\n');
			bonusArray[i]['All Character Bonuses'][j]['World Bonuses'].forEach(bonus => {
				// Fight
				finalPnachStrings.push('// ' + bonus['Fight'] + '\n');
				// Stats
				bonusString += 'patch=1,EE,' + bonus['Stat Address'] + ',extended,0000';
				if (bonus['MP Increase'] !== bonus['Vanilla MP Increase'])
					bonusCount++;
				bonusString += bonus['MP Increase'].toString(16).padStart(2, '0');
				if (bonus['HP Increase'] !== bonus['Vanilla HP Increase'])
					bonusCount++;
				bonusString += bonus['HP Increase'].toString(16).padStart(2, '0');
				bonusString += ' // MP:' + bonus['MP Increase'] + ' HP:' + bonus['HP Increase'] + '\n';
				// Slots
				bonusString += 'patch=1,EE,' + bonus['Slot Address'] + ',extended,';
				if (bonus['Armor Slot Increase'] !== bonus['Vanilla Armor Slot Increase'])
					bonusCount++;
				bonusString += bonus['Armor Slot Increase'].toString(16).padStart(2, '0');
				if (bonus['Accessory Slot Increase'] !== bonus['Vanilla Accessory Slot Increase'])
					bonusCount++;
				bonusString += bonus['Accessory Slot Increase'].toString(16).padStart(2, '0');
				if (bonus['Item Slot Increase'] !== bonus['Vanilla Item Slot Increase'])
					bonusCount++;
				bonusString += bonus['Item Slot Increase'].toString(16).padStart(2, '0');
				if (bonus['Drive Gauge Increase'] !== bonus['Vanilla Drive Gauge Increase'])
					bonusCount++;
				bonusString += bonus['Drive Gauge Increase'].toString(16).padStart(2, '0');
				bonusString += ' // Armor Slot:+' + bonus['Armor Slot Increase'] + ' Accessory Slot:+' + bonus['Accessory Slot Increase'];
				bonusString += ' Item Slot:+' + bonus['Item Slot Increase'] + ' Drive Gauge:+' + bonus['Drive Gauge Increase'] + '\n';
				// Rewards
				bonusString += 'patch=1,EE,' + bonus['Reward Address'] + ',extended,';
				if (bonus['Replacement Reward Address 2'] !== '')
					bonusCount++;
				bonusString += bonus['Replacement Reward Address 2'].padStart(4, '0');
				if (bonus['Replacement Reward Address 2'] !== '')
					bonusCount++;
				bonusString += bonus['Replacement Reward Address 1'].padStart(4, '0');
				bonusString += ' // Replacement Reward #2:' + bonus['Replacement Reward 2'];
				bonusString += ' Replacement Reward #1:' + bonus['Replacement Reward 1'] + '\n';
				if (bonusCount !== 0)
					finalPnachStrings.push(bonusString);
				bonusString = '';
				bonusCount = 0;
			})

		}

	}
	finalPnachStrings.push('\n')

	// Printing Chest Replacements
	finalPnachStrings.push('//Chest Replacements\n')
	for (let i = 0; i < worldArray.length; i++) {
		finalPnachStrings.push('// ' + worldArray[i] + '\n')
		for (let j = 0; j < chestArray[i].Chests.length; j++) {
			let chest = chestArray[i].Chests[j];
			if (chest['Replacement Address'] !== '') {
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
			let word = '';
			let statCount = 0;
			let eResistCount = 0;
			let oResistCount = 0;

			// equipment name
			finalPnachStrings.push('// ' + equipment['Name'] + '\n');

			// ability replacement
			if (equipment['Replacement Ability Address'] !== '') {
				finalPnachStrings.push('patch=1,EE,' + equipment['Ability Address'] + ',extended,0000');
				finalPnachStrings.push(equipment['Replacement Ability Address'] + ' // Ability: ' + equipment['Ability'] + '\n');
			}

			// stat replacement
			if (equipment['AP'] !== equipment['Vanilla AP'])
				statCount++;
			word += equipment['AP'].toString(16).padStart(2, '0');
			if (equipment['Defense'] !== equipment['Vanilla Defense'])
				statCount++;
			word += equipment['Defense'].toString(16).padStart(2, '0');
			if (equipment['Magic'] !== equipment['Vanilla Magic'])
				statCount++;
			word += equipment['Magic'].toString(16).padStart(2, '0');
			if (equipment['Strength'] !== equipment['Vanilla Strength'])
				statCount++;
			word += equipment['Strength'].toString(16).padStart(2, '0');
			if (statCount > 0) {
				word += ' // AP:' + equipment['AP'] + ' Defense:' + equipment['Defense'] + ' Magic:' + equipment['Magic'] + ' Strength:' + equipment['Strength'] + '\n';
				finalPnachStrings.push('patch=1,EE,' + equipment['Stat Address'] + ',extended,' + word);
			}
			word = '';

			// elemental resistance replacement
			if (equipment['Thunder Resistance'] !== equipment['Vanilla Thunder Resistance'])
				eResistCount++;
			word += (100 - equipment['Thunder Resistance']).toString(16).padStart(2, '0');
			if (equipment['Blizzard Resistance'] !== equipment['Vanilla Blizzard Resistance'])
				eResistCount++;
			word += (100 - equipment['Blizzard Resistance']).toString(16).padStart(2, '0');
			if (equipment['Fire Resistance'] !== equipment['Vanilla Fire Resistance'])
				eResistCount++;
			word += (100 - equipment['Fire Resistance']).toString(16).padStart(2, '0');
			if (equipment['Physical Resistance'] !== 0)
				eResistCount++;
			word += (100 - equipment['Physical Resistance']).toString(16).padStart(2, '0');
			if (eResistCount > 0) {
				word += ' // Thunder:' + equipment['Thunder Resistance'] + '% Blizzard:' + equipment['Blizzard Resistance'];
				word += '% Fire:' + equipment['Fire Resistance'] + '% Physical:' + equipment['Physical Resistance'] + '%\n';
				finalPnachStrings.push('patch=1,EE,' + equipment['Elemental Resistance Address'] + ',extended,' + word);
			}
			word = '00';

			// other resistance replacement
			if (equipment['Universal Resistance'] !== 0)
				oResistCount++;
			word += (100 - equipment['Universal Resistance']).toString(16).padStart(2, '0');
			if (equipment['Light Resistance'] !== 0)
				oResistCount++;
			word += (100 - equipment['Light Resistance']).toString(16).padStart(2, '0');
			if (equipment['Dark Resistance'] !== equipment['Vanilla Dark Resistance'])
				oResistCount++;
			word += (100 - equipment['Dark Resistance']).toString(16).padStart(2, '0');
			if (oResistCount > 0) {
				word += ' // Universal:' + equipment['Universal Resistance'] + '% Light:' + equipment['Light Resistance'] + '% Dark:' + equipment['Dark Resistance'] + '%\n';
				finalPnachStrings.push('patch=1,EE,' + equipment['Other Resistance Address'] + ',extended,' + word);
			}
		}
	}
	finalPnachStrings.push('\n')

	// Printing Form Replacements

	// Printing Level Replacements
	finalPnachStrings.push('//Level Replacements\n')
	for (let i = 0; i < 99; i++) {
		let currentLevel = levelArray[i];
		finalPnachStrings.push('// Level: ' + currentLevel['Level'] + '\n')
		// Experience
		if (currentLevel['Level'] === 99)
			finalPnachStrings.push('// Cannot Level to 100\n');
		else {
			if (currentLevel['EXP to Next Level'] !== 0) {
				finalPnachStrings.push('patch=1,EE,' + currentLevel['EXP to Next Address'] + ',extended,' + currentLevel['EXP to Next Level'].toString(16).padStart(8, '0'));
				finalPnachStrings.push(' // Level ' + currentLevel['Level'] + ' at ' + currentLevel['EXP to Next Level'] + ' experience\n');
			}
		}
		// Stats
		let cheat = 'patch=1,EE,' + currentLevel['Stat Address'] + ',extended,';
		let changeCount = 0;

		if (currentLevel['Standard AP'] !== currentLevel['Vanilla AP']) {
			cheat += currentLevel['Standard AP'].toString(16).padStart(2, '0');
			changeCount++;
		}
		else {
			cheat += '00';
		}
		if (currentLevel['Defense'] !== currentLevel['Vanilla Defense']) {
			cheat += currentLevel['Defense'].toString(16).padStart(2, '0');
			changeCount++;
		}
		else {
			cheat += '00';
		}
		if (currentLevel['Magic'] !== currentLevel['Vanilla Magic']) {
			cheat += currentLevel['Magic'].toString(16).padStart(2, '0');
			changeCount++;
		}
		else {
			cheat += '00';
		}
		if (currentLevel['Strength'] !== currentLevel['Vanilla Strength']) {
			cheat += currentLevel['Strength'].toString(16).padStart(2, '0');
			changeCount++;
		}
		else {
			cheat += '00';
		}

		if (changeCount !== 0) {
			finalPnachStrings.push(cheat);
			finalPnachStrings.push(' // AP:' + currentLevel['Standard AP'].toString() + ' Magic:' + currentLevel['Magic'].toString());
			finalPnachStrings.push(' Defense:' + currentLevel['Defense'].toString() + ' Strength:' + currentLevel['Strength'].toString() + '\n');
		}
		// Rewards
		if (currentLevel['Level'] === 1)
			finalPnachStrings.push('// No Level 1 Dream Weapon Rewards\n');
		else {
			if (currentLevel['Sword Replacement Address'] !== '') {
				finalPnachStrings.push('patch=1,EE,' + currentLevel['Sword Address'] + ',extended,0000');
				finalPnachStrings.push(currentLevel['Sword Replacement Address'] + ' // Sword Reward: ' + currentLevel['Sword Replacement Reward'] + '\n');
			}
			if (currentLevel['Shield Replacement Address'] !== '') {
				finalPnachStrings.push('patch=1,EE,' + currentLevel['Shield Address'] + ',extended,0000');
				finalPnachStrings.push(currentLevel['Shield Replacement Address'] + ' // Shield Reward: ' + currentLevel['Shield Replacement Reward'] + '\n');
			}
			if (currentLevel['Staff Replacement Address'] !== '') {
				finalPnachStrings.push('patch=1,EE,' + currentLevel['Staff Address'] + ',extended,0000');
				finalPnachStrings.push(currentLevel['Staff Replacement Address'] + ' // Staff Reward: ' + currentLevel['Staff Replacement Reward'] + '\n');
			}
		}
	}
	finalPnachStrings.push('\n')

	// Printing Other Replacements

	// Printing Popup Replacements
	finalPnachStrings.push('//Popup Replacements\n')
	for (let i = 0; i < worldArray.length; i++) {
		finalPnachStrings.push('// ' + worldArray[i] + '\n')
		for (let j = 0; j < popupArray[i].Popups.length; j++) {
			let popup = popupArray[i].Popups[j];
			if (popup['Replacement Address'] !== '') {
				let s = 'patch=1,EE,' + popup['Original Address'] + ',extended,0000' + popup['Replacement Address'];
				s += ' // ' + popup['Location'] + ', ' + popup['Original Reward'] + ' is now ' + popup['Replacement Reward'] + '\n';
				finalPnachStrings.push(s);
			}
		}
	}

	let finalPnach = new Blob(finalPnachStrings, { type: 'text/plain;charset=utf-8' });
	saveAs(finalPnach, 'F266B00B.pnach');
}

const currentPage = window.location.pathname.split('/').pop().split('.')[0];
window.onload = function () { initialize() };