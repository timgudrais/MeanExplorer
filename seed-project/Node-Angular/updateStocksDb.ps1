Set-Location $PSScriptRoot

Invoke-Expression "cd '..\MongoDb\bin'"


& ".\mongo.exe 'mongodb://meanexplorer-shard-00-00-vqvsb.mongodb.net:27017/test?replicaSet=MeanExplorer-shard-0' --authenticationDatabase admin --ssl --username MeanExplorer --password f4rs1ght"
Invoke-Expression "use MeanExplorer"
Invoke-Expression "db.getCollection('stocks').drop()"            
& ".\mongoimport.exe --host meanexplorer-shard-00-00-vqvsb.mongodb.net:27017 -d MeanExplorer -c stocks --type csv --file C:\Users\Tim\Documents\GitProjects\MeanExplorer\seed-project\Node-Angular\CSV\Borsdata_2017-05-18_new2_utf8.csv --headerline --authenticationDatabase admin --ssl --username MeanExplorer --password f4rs1ght"
