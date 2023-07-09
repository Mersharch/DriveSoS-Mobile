
const Logger = {
    log: (args: any) => Logger.info(args),
    info: (args: any) => console.log(`[${new Date().toLocaleString()}] [INFO]  `, args),
    warn: (args: any) => console.log(`[${new Date().toLocaleString()}] [WARN]  `, args),
    error: (args: any) => console.log(`[${new Date().toLocaleString()}] [ERROR]  `, args),

};
export default Logger;
