export const sendRequest = async (
  endpoint: "/components" | "/users",
  payload?: any
) => {
  let resultReturn: { data: any; ok: boolean } = {
    data: null,
    ok: false,
  };
  try {
    const response = await fetch("http://localhost:6060" + endpoint, {
      method: "GET",
      body: payload ? payload : null,
    });
    if (response.ok) {
      try {
        const json = await response.json();
        resultReturn.data = json;
      } catch (e) {
        console.error({ e });
      }
    }
    resultReturn.ok = response.ok;
  } catch (e) {
    console.log({ e });
  } finally {
    return resultReturn;
  }
};
