$SeedProjectPath = "$PSScriptRoot"
$NodeJSPath = $SeedProjectPath + '\deploy.node.backend.ps1'
$AngularPath = $SeedProjectPath + '\deploy.angular.frontend.ps1'
Write-Host $MongoDbPath
Write-Host $NodeJSPath
Write-Host $AngularPath
Set-Location -Path "$PSScriptRoot"
Write-Host "Deploying NodeJS" -foregroundcolor Magenta
Invoke-Expression 'cmd /c start powershell.exe -nologo -noexit -command { Invoke-Expression C:\Users\sun\Desktop\DevTest\MeanExplorer\seed-project\Node-Angular\deployScripts\deploy.node.backend.ps1 }'
Write-Host "Deploying Angular" -foregroundcolor Magenta
Invoke-Expression 'cmd /c start powershell.exe -nologo -noexit -command { Invoke-Expression C:\Users\sun\Desktop\DevTest\MeanExplorer\seed-project\Node-Angular\deployScripts\deploy.angular.frontend.ps1 }'
$url = "http://localhost:3000"
Start-Sleep -s 20
Start-Process "chrome.exe" $url