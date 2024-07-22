const API_KEY = 'dB8KH2YDjqkpvnq1eS8oJYFr4RJQ1ISr';

export async function getRequest(apiUrl: string) {
    const url = `${apiUrl}?api-key=${API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.status === 'OK') {
            return data;
        } else {
            console.error('Error: API status not OK', data);
            throw new Error('Error: API status not OK');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        throw new Error('Error fetching data');
    }
}