window.onload = start

function start() {
	if(localStorage.getItem("logs") === null) {
		localStorage.setItem("logs", "[]")
	}
	logs = JSON.parse(localStorage.getItem("logs"))
	updateLogs()
}

function updateLogs() {
	logsTable = document.getElementById("logstable")
	currentHTML = "<thead><td>Train Number</td><td>Operator</td><td>Date</td><td>Notes</td></thead>"
	logs.forEach(element => {
		currentHTML += "<tr><td>" + element.trainID + "</td><td>" + element.operator + "</td><td>" + element.dateTime + "</td><td>" + element.notes + "</td></tr>"
	});
	logsTable.innerHTML = currentHTML	
}

function eraseAllData() {
	if (confirm("Are you sure that you want to erase all data? This action is irreversible.")) {
		localStorage.setItem("logs", "[]")
	}
}

function addLog(e) {
	if (document.getElementById("trainidinput").value == "") {
		alert("No train ID given")
		return
	}
	logs.push({operator: document.getElementById("operatorinput").value, trainID: document.getElementById("trainidinput").value, dateTime: new Date(Date.now()).toLocaleString(), notes: document.getElementById("notesinput").value})
	localStorage.setItem("logs", JSON.stringify(logs));
	updateLogs()
	document.getElementById("savebtn").innerHTML = "Done ✅"
	document.getElementById("operatorinput").value = ""
	document.getElementById("trainidinput").value = ""
	document.getElementById("notesinput").value = ""
	setTimeout(function(){ document.getElementById("savebtn").innerHTML = "Save" }, 1500)
}