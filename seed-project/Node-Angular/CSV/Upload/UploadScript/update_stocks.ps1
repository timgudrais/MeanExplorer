Set-Location '..\..\..\..\MongoDb\bin'
Invoke-Expression '.\mongo.exe "mongodb://meanexplorer-shard-00-00-vqvsb.mongodb.net:27017/test?replicaSet=MeanExplorer-shard-0" --authenticationDatabase admin --ssl --username MeanExplorer --password f4rs1ght'
Read-Host 'Wait;'

# <-- EXAMPLE FOR UPDATING DATABASE "node-angular", COLLECTION "stocks" BY IMPORTING A CSV WITH HEADERS -->

            # <-- Step 1: Navigate to MongoDB bin folder in PowerShell -->
            # cd "..\MeanExplorer\seed-project\MongoDb\bin"

            # <-- Step 2: Connect to Atlas DB via Mongo Shell and drop stocks collection -->
            # .\mongo.exe "mongodb://meanexplorer-shard-00-00-vqvsb.mongodb.net:27017/test?replicaSet=MeanExplorer-shard-0" --authenticationDatabase admin --ssl --username MeanExplorer --password f4rs1ght
            # use MeanExplorer
            # db.getCollection('stocks').drop()

            # <-- Step 3: Convert CSV encoded in ANSI to UTF-8 -->
            # cd "..\MeanExplorer\seed-project\Node-Angular\CSV\Upload"
            # Get-Content .\DB_Stocks_Original.csv | Set-Content -Encoding utf8 .\DB_Stocks_UTF8.csv


            # <-- Step 4: Import new data to Atlas DB from CSV -->
            # cd "..\MeanExplorer\seed-project\MongoDb\bin"
            # .\mongoimport.exe --host meanexplorer-shard-00-00-vqvsb.mongodb.net:27017 -d MeanExplorer -c stocks --type csv --file C:\Users\Tim\Documents\GitProjects\MeanExplorer\seed-project\Node-Angular\CSV\Upload\DB_Stocks_UTF8.csv --headerline --authenticationDatabase admin --ssl --username MeanExplorer --password f4rs1ght