export const logIn = async (data) => {
  try {
    const dataFet = await fetch("http://localhost:9090/api/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    });

    const resp = await dataFet.json();
    return resp;
  } catch (e) {
    console.log(e);
  }
};
