$SeedProjectPath = "$PSScriptRoot\..\..\Node-Angular"
$Invocation = "cd $SeedProjectPath"
#$SeedProjectPath = "cd 'C:\Users\sun\Desktop\DevTest\MeanExplorer\seed-project\Node-Angular'"
$RunAngularFrontEnd = "npm run build"

Write-Host "Running Angular Server" -foregroundcolor Magenta
Invoke-Expression $Invocation
Invoke-Expression $RunAngularFrontEnd