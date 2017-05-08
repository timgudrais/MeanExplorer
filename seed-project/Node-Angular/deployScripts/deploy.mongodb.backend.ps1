$MongoDexePath = "C:\Users\Tim\Documents\GitProjects\MeanExplorer\seed-project\MongoDb\bin\mongod.exe "
$MongoDatabasePath = "--dbpath C:\Users\Tim\Documents\GitProjects\MeanExplorer\seed-project\MongoDb\data"
$FullMongoDeployCommand = $MongoDexePath + $MongoDatabasePath

Invoke-Expression $FullMongoDeployCommand