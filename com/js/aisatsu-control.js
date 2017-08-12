var aisatsu;

if(new Date().getHours() < 11) 
{
	aisatsu = "Good morning"; // おはようございます
}
else if(new Date().getHours() < 17)
{
	aisatsu = "Good afternoon"; // こんにちは
}
else　if(new Date().getHours() < 21)
{
	aisatsu = "Good evening"; // こんばんは
}
else
{
	aisatsu = "Good night"; // おやすみなさい
}

document.write('<h1 style="cursor: default;">' + aisatsu + ', <span class="name-highlight" style="cursor: pointer;" onclick="Miku_Master()">Master~ ♥</span></h1>');