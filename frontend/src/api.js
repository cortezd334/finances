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

export async function addBill(data) {
    const resp = await fetch(`${API}/bills`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    })
    return await resp.json()
}