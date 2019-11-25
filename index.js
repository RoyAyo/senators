const container = document.getElementById('container');
var box = document.getElementById('box');
container.appendChild(box);


const render = (state,name,no,mail,box) => {
	const senate = document.createElement('div');

	const nameDiv = document.createElement('h2');
	const noDiv = document.createElement('p');
	const mailDiv = document.createElement('p');
	const stateDiv = document.createElement('p');

	nameDiv.appendChild(document.createTextNode(name));
	noDiv.appendChild(document.createTextNode(no));
	mailDiv.appendChild(document.createTextNode(mail));
	stateDiv.appendChild(document.createTextNode(state));

	senate.appendChild(nameDiv);
	senate.appendChild(noDiv);
	senate.appendChild(mailDiv);
	senate.appendChild(stateDiv);
	box.appendChild(senate);
}


const workflow = (list,box) => {
	list.forEach(l => {
		var state = l.state;
		l.senators.forEach(detail => {
			var name = detail.name;
			var no = detail.phone;
			var mail = detail.email;

			render(state,name,no,mail,box);
		});
	});
}

const search = () => {
	const v =document.getElementById("searchbox").value.toLowerCase();
	var box = document.getElementById('box');
	container.removeChild(box);
	box = document.createElement('div');
	box.id = 'box';
	container.appendChild(box);

	var s = new RegExp(v);

	const result = [];
	
	list.forEach( f => {
		var stateSearch = f.state.toLowerCase();
		
		// if (stateSearch.search(s) != -1) {
		// 	return true;
		// }
		const check = f.senators.filter(n => {
			var nameSearch = n.name.toLowerCase();
			if (nameSearch.search(s) != -1 || stateSearch.search(s) != -1) {
				return true;
			}
			return false;
		});
		
		if (check.length == 0) {
			return false;
		}
		const o = {
			state:f.state,
			senators : check
		}
		result.push(o);
		return true;
	});

	workflow(result,box);

}

workflow(list,box);