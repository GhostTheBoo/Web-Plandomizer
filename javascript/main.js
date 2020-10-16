function createChestTableHeader()
{
	// create chest table, chest table header, and empty table body
	let table = document.createElement('table');
	let tableBody = document.createElement('tbody');
	table.id = 'chestTable';
	let tableHead = table.createTHead();
	let headerRow = tableHead.insertRow();
	for(let key of Object.keys(chestArray[0].Chests[0]))
	{
		let th = document.createElement('th');
		let text = document.createTextNode(key);
		th.appendChild(text);
		headerRow.appendChild(th);
	}
	table.appendChild(tableBody);
	return table;
}

function populateChestTable(worldID){
	// populate Chest Table with selected world's chests
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
	if(chestArray[worldID].Chests.length > 0) {
		chestArray[worldID].Chests.forEach(chest => {
			var row = document.createElement('tr');
			chestProperties.forEach(prop =>{
				var cell = document.createElement('td');
				cell.innerHTML = chest[prop];
				row.appendChild(cell);
			})
			var replaceButton = document.createElement('button');
			replaceButton.innerHTML = 'Replace';
			row.appendChild(replaceButton);
			newTableBody.appendChild(row);
		})
	}
	table.replaceChild(newTableBody, oldTableBody);
}

function addWorlds(){
	let select = document.getElementById('worlds');
	let counter = 0;
	worldArray.forEach(world =>{
		let option = document.createElement('option');
		option.text = world;
		option.value = counter;
		select.add(option);
		counter++;
	})
	chestWorldSelectorChanged(0);
}

function chestWorldSelectorChanged(index){
	populateChestTable(index);
	//console.log(index);
}

var rewardProperties = [
	'rewardType',
	'reward',
	'rewardAddress'
]

var table = createChestTableHeader();
var body = document.body;
body.appendChild(table);
addWorlds();
//addRewards(rewardArray);