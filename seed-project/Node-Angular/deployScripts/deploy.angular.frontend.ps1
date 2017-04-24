$SeedProjectPath = "cd 'C:\Users\sun\Desktop\DevTest\MeanExplorer\seed-project\Node-Angular'"
$RunAngularFrontEnd = "npm run build"

Invoke-Expression $SeedProjectPath
Invoke-Expression $RunAngularFrontEnd