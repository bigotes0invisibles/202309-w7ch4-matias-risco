const urlBase = import.meta.env.VITE_API_URL_Perezosos;
const urlSloths = `${urlBase}/sloths`;

export const GetApiPerezosos = async (id: number = NaN) => {
  const response = await fetch(`${urlSloths}${isNaN(id) ? `/${id}/` : ""}`);
  return await response.json();
};

export const PostApiPerezosos = async (peresozo: PerezososStructure) => {
  return await fetch(urlSloths, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(peresozo),
  });
};
