require("dotenv").config();

const { MongoClient, ServerApiVersion } = require("mongodb");

async function findProjects(client) {
    
    const cursor = await client.db("portfolio").collection("projects").find({});

    const results = await cursor.toArray();

    return results;

}

async function main() {
    
    const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@cluster0.l2ybok8.mongodb.net/?retryWrites=true&w=majority`;
    
    const client = new MongoClient(uri, { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverApi: ServerApiVersion.v1 
    });
       
    try{
        
        await client.connect();
        
        var results = await findProjects(client);

    }
    catch(error) {

        console.log(error);

    }
    finally {

        await client.close();

        return results;

    }

}

main()
.then((data) => {
    console.log(data)
});