export const getJSON = async function (url) {
  try {
    const res = await fetch(`${url}/${id}`);
    const data = await res.json();
    if (!res.ok) throw new console.error(`${data.message}`);
    return data;
  } catch (er) {
    console.log(er);
  }
};
