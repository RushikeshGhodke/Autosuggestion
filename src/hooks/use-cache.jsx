// import { createClient } from 'redis';

const useCache = () => {
  // redis 

  // const client = createClient({
  //   socket: {
  //     reconnectStrategy: function(retries) {
  //         if (retries > 20) {
  //             console.log("Too many attempts to reconnect. Redis connection was terminated");
  //             return new Error("Too many retries.");
  //         } else {
  //             return retries * 500;
  //         }
  //     }
  //   }
  // });
  // client.on('error', error => console.error('Redis client error:', error));

  // await client.connect();

};

export default useCache;
