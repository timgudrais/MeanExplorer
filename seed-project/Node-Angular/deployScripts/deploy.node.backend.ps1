$SeedProjectPath = "$PSScriptRoot\..\..\Node-Angular"
$Invocation = "cd $SeedProjectPath"
#$SeedProjectPath = "cd 'C:\Users\sun\Desktop\DevTest\MeanExplorer\seed-project\Node-Angular'"
#$SeedProjectPath = "cd 'C:\Users\sun\Desktop\DevTest\MeanExplorer\seed-project\Node-Angular'"
$RunNodeBackEnd = "npm start"

Write-Host "Running Node Server" -foregroundcolor Magenta
Invoke-Expression $Invocation
Invoke-Expression $RunNodeBackEnd