import { NextResponse } from "next/server";

const NEWS_API_KEY = process.env.NEWS_API_KEY;
const NEWS_API_URL = 'https://newsapi.org/v2/top-headlines';

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category');
    const q = searchParams.get('q');
    const sources = searchParams.get('sources');

    const params = new URLSearchParams({
        apiKey: NEWS_API_KEY || '',
        country: 'us',
    });
    if (category && category !== 'All') {
        params.append('category', category);
    }
    if (q) {
        params.append('q', q);
    }
    if (sources && sources !== 'All') {
        params.append('sources', sources);
    }
    try {
        const response = await fetch(`${NEWS_API_URL}?${params.toString()}`);
        const data = await response.json();
        if (response.ok) {
            return NextResponse.json(data, { status: 200 });
        } else {
            return NextResponse.json({ message: data.message || 'Error fetching news' }, { status: response.status });
        }
    } catch (error) {
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}