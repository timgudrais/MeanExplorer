$MongoDexePath = "C:\Users\sun\Desktop\DevTest\MeanExplorer\seed-project\MongoDb\bin\mongod.exe "
$MongoDatabasePath = "--dbpath C:\Users\sun\Desktop\DevTest\MeanExplorer\seed-project\MongoDb\data"
$FullMongoDeployCommand = $MongoDexePath + $MongoDatabasePath

Invoke-Expression $FullMongoDeployCommand