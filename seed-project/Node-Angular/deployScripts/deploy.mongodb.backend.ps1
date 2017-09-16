$MongoDbPath = "$PSScriptRoot\..\seed-project\MongoDb"
$Mongod = "$MongoDbPath\mongod.exe "
$Data = "--dbpath $MongoDbPath\data"
#$Invocation = "cd $MongoDbPath"

#$MongoDexePath = "C:\Users\sun\Desktop\DevTest\MeanExplorer\seed-project\MongoDb\bin\mongod.exe "
#$MongoDatabasePath = "--dbpath C:\Users\sun\Desktop\DevTest\MeanExplorer\seed-project\MongoDb\data"

#$FullMongoDeployCommand = $MongoDexePath + $MongoDatabasePath
$FullMongoDeployCommand = $Mongod + $Data

Invoke-Expression $FullMongoDeployCommand