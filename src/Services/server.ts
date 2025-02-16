const server = (Boolean(process.env.isProduction) == true) || process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_EXTERNAL_API_URL : 'http://localhost:8080'

export default server