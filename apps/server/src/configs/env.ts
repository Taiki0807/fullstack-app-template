export const ENVIRONMENT = !process.env.NODE_ENV ? 'development' : (process.env.NODE_ENV as Environment);
