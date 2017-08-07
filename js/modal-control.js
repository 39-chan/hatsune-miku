function modalSettings()
{
	document.onkeydown = function(evt)
	{
		evt = evt || window.event;
		if (evt.keyCode == 27)
		{
			var modal = document.getElementById('myModal');
			span = document.getElementsByClassName("close")[0];
			modal.style.display = "block";
			span.onclick = function()
			{
				modal.style.display = "none";
			}
		}
	}
}