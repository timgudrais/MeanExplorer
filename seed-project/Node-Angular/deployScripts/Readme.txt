Prerequisites
	- H�gerklicka p� deploy.all.fullstack.ps1
	- Editera med notepad el. liknande
	- �ndra rad 12, 15 och 18 till ditt projekts motsvarande adress
		- Ex. 12 - C:\Users\sun\Desktop\DevTest\seed-project\deployScripts\deploy.mongodb.backend.ps1
		- Ex. 15 - C:\Users\sun\Desktop\DevTest\seed-project\deployScripts\deploy.node.backend.ps1
		- Ex. 18 - C:\Users\sun\Desktop\DevTest\seed-project\deployScripts\deploy.angular.frontend.ps1
	- G� sedan in i de tre skripten och �ndra f�rsta raden i respektive skript till ditt projekts motsvarande adress:
		- Ex. deploy.mongodb.backend.ps1 - C:\Program Files\MongoDB\Server\3.4\bin
		- Ex. deploy.node.backend.ps1 - C:\Users\sun\Desktop\DevTest\seed-project
		- Ex. deploy.angular.frontend.ps1 - C:\Users\sun\Desktop\DevTest\seed-project
	
	
Deployinstruktioner
	- H�gerklicka p� deploy.all.fullstack.ps1
	- V�lj 'Run with powershell' eller motsvarande p� svenska
	- Tre powershell-f�nster kommer �ppnas upp, de k�r:
		- MongoDB (Databas)
		- NodeJS (Backend)
		- Angular (Frontend)
	- Alla tre beh�ver vara ig�ng i bakgrunden
	- G� in p� localhost:3000 och b�rja anv�nda sidan