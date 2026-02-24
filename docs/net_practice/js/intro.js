


function save_login()
{
	var e = document.getElementById('input_login');
    var login = e.value.trim();
    if (login == '')
        login = 'user';
    localStorage.setItem("g_saved_login", login);
    localStorage.setItem("g_my_login", login);
    setTimeout(()=>{ window.location = 'net_practice/level1.html'; }, 100);
}

function start_eval()
{
	var lvl = Math.round(6 + 4*Math.random());
    localStorage.setItem("g_my_login", '');
	localStorage.setItem("g_my_eval", JSON.stringify([lvl]));
	setTimeout(()=>{ window.location = 'net_practice/level'+lvl+'.html'; }, 100);
}


function load_login()
{
    var login;
    if (!(login = localStorage.getItem("g_saved_login")))
        login = ''; // will means full random during sim.
    return (login);
}


function showTab(nb)
{
	for (let i = 0; i < 3; i++)
	{
		if (i == nb)
		{
			document.getElementById("tab_"+i).style.display = "flex";
			e = document.getElementById("button_"+i);
			e.style.color = "#171b2b";
			e.style.backgroundColor = "#a1f800";
			e.style.fontSize = "120%";
			e.style.borderTopWidth = "4px";
			e.style.borderTopColor = "#a1f800";
			e.style.marginTop = "0px";
			e.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.5)";
		}
		else
		{
			document.getElementById("tab_"+i).style.display = "none";
			e = document.getElementById("button_"+i);
			e.style.color = "#A9ADCE";
			e.style.backgroundColor = "#2C303F";
			e.style.fontSize = "100%";
			e.style.borderTopWidth = "0px";
			e.style.marginTop = "4px";
			e.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.3)";
		}
	}
}