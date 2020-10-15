var chestArray = [{
	world: 'Agrabah',
	room: 'Agrabah',
	originalReward: 'Dark Shard',
	originalAddress: '11CDF826'
},{
	world: 'Agrabah',
	room: 'Agrabah',
	originalReward: 'Mythril Shard',
	originalAddress: '11CDF832'
}]

function displayTable(chests){
	var table = document.getElementById('chests');
	for(var i = 0; i < chests.length; i++){
		var chest = chests[i];
		var row = document.createElement('tr');
		var properties = [
			'world',
			'room',
			'originalReward',
			'originalAddress'
		]
		for(var j = 0; j < properties.length; j++) {
			var cell = document.createElement('td');
			cell.innerHTML = chest[properties[j]];
			row.appendChild(cell);
		}
		table.appendChild(row);
	}
}

displayTable(chestArray);