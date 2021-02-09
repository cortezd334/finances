const API = 'http://localhost:3000';

const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
}

// User Calls

// Bill Calls

export async function fetchBills() {
    const resp = await fetch(`${API}/bills`, {
    })
    return await resp.json()
}