import 'dotenv/config';
import Parse = require('parse/node');
import { User } from '@omnichat/omnichat-model';


async function run() {
  Parse.initialize(
    String(process.env.PARSE_APP_ID),
    String(process.env.PARSE_JAVASCRIPT_KEY),
    String(process.env.PARSE_MASTER_KEY)
  )

  Parse.serverURL = String(process.env.PARSE_SERVER_URL);

  const query = new Parse.Query(User)

  query.select("email");
  query.startsWith("email", "marcos");

  const users = await query.find({ useMasterKey: true });

  console.log(users.map(user => user.toJSON()));
}

run();