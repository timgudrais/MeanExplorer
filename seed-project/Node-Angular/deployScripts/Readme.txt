Prerequisites
	- Högerklicka på deploy.all.fullstack.ps1
	- Editera med notepad el. liknande
	- Ändra rad 12, 15 och 18 till ditt projekts motsvarande adress
		- Ex. 12 - C:\Users\sun\Desktop\DevTest\seed-project\deployScripts\deploy.mongodb.backend.ps1
		- Ex. 15 - C:\Users\sun\Desktop\DevTest\seed-project\deployScripts\deploy.node.backend.ps1
		- Ex. 18 - C:\Users\sun\Desktop\DevTest\seed-project\deployScripts\deploy.angular.frontend.ps1
	- Gå sedan in i de tre skripten och ändra första raden i respektive skript till ditt projekts motsvarande adress:
		- Ex. deploy.mongodb.backend.ps1 - C:\Program Files\MongoDB\Server\3.4\bin
		- Ex. deploy.node.backend.ps1 - C:\Users\sun\Desktop\DevTest\seed-project
		- Ex. deploy.angular.frontend.ps1 - C:\Users\sun\Desktop\DevTest\seed-project
	
	
Deployinstruktioner
	- Högerklicka på deploy.all.fullstack.ps1
	- Välj 'Run with powershell' eller motsvarande på svenska
	- Tre powershell-fönster kommer öppnas upp, de kör:
		- MongoDB (Databas)
		- NodeJS (Backend)
		- Angular (Frontend)
	- Alla tre behöver vara igång i bakgrunden
	- Gå in på localhost:3000 och börja använda sidan