export const objectLoader = async () => {
  const res = await fetch('http://127.0.0.1:8000/object');
  if (!res.ok) throw new Error('Ошибка сети');
  return res.json();
};