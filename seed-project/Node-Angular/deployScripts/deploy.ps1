$SeedProjectPath = "$PSScriptRoot"
$NodeJSPath = $SeedProjectPath + '\deploy.node.backend.ps1'
$AngularPath = $SeedProjectPath + '\deploy.angular.frontend.ps1'
Write-Host $MongoDbPath
Write-Host $NodeJSPath
Write-Host $AngularPath
Set-Location -Path "$PSScriptRoot"
Write-Host "Deploying NodeJS" -foregroundcolor Magenta
#$invocation = "Invoke-Expression C:\Users\sun\Desktop\DevTest\MeanExplorer\seed-project\Node-Angular\deployScripts\deploy.node.backend.ps1"
$invocation1 = "Invoke-Expression $NodeJSPath"
$invocation2 = "Invoke-Expression $AngularPath"
Invoke-Expression "cmd /c start powershell.exe -nologo -noexit -command { $invocation1 }"
#"[console]::WindowWidth=100; [console]::WindowHeight=50; [console]::BufferWidth=[console]::WindowWidth"
Write-Host "Deploying Angular" -foregroundcolor Magenta
#Invoke-Expression "cmd /c start powershell.exe -nologo -noexit -command { Invoke-Expression C:\Users\sun\Desktop\DevTest\MeanExplorer\seed-project\Node-Angular\deployScripts\deploy.angular.frontend.ps1 }"
Invoke-Expression "cmd /c start powershell.exe -nologo -noexit -command { $invocation2 }"
$url = "http://localhost:3000"
Start-Sleep -s 20
Start-Process "chrome.exe" $url