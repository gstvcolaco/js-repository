var bt = window.document.getElementById('bt')
bt.addEventListener('click', verificacao)
function verificacao() {

	var tpaís = document.getElementById("txtp");
	var país = tpaís.value.trim().toUpperCase();
	var res = document.getElementById("res");

	res.innerHTML = `<p>Vivendo em ${país}</p>`;

	if (país == "BRASIL") {
		res.innerHTML = `<p>Você é Brasileiro</p>`;
	} else if (país == "ALEMANHA") {
		res.innerHTML = `<p>Você é Alemão</p>`;
	} else {
		res.innerHTML = `<p>Você é Extrangeiro </p>`;
	}
}
