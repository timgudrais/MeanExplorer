$SeedProjectPath = "cd 'C:\Users\Tim\Documents\GitProjects\MeanExplorer\seed-project\Node-Angular'"
$RunAngularFrontEnd = "npm run build"

Invoke-Expression $SeedProjectPath
Invoke-Expression $RunAngularFrontEnd