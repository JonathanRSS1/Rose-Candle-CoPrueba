const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// 👇 función genérica GET
export async function apiGet(endpoint) {
  const res = await fetch(`${API_BASE_URL}/${endpoint}`, {
    credentials: "include" // si usas cookies/sesiones
  });
  if (!res.ok) throw new Error(`Error: ${res.status}`);
  return res.json();
}

// 👇 función genérica POST
export async function apiPost(endpoint, data) {
  const res = await fetch(`${API_BASE_URL}/${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
    credentials: "include"
  });
  if (!res.ok) throw new Error(`Error: ${res.status}`);
  return res.json();
}

// 👇 funciones específicas (opcional)
export const fetchProducts = () => apiGet("products");
export const fetchCustomers = () => apiGet("customers");
export const fetchEmployees = () => apiGet("employees");
// ...y así con todos tus endpoints
