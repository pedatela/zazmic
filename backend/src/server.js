import 'dotenv/config' 
import app from './app';

app.listen(process.env.PORT || 3333, () => { console.log(`Up and running on a port: ${process.env.PORT || 3333}`); })