import dotenv from 'dotenv';
dotenv.config();

export const API_KEY = process.env.API_KEY;

export const GH_HEADER = {
    Authorization: `Token ${process.env.GH_TOKEN}`        
}