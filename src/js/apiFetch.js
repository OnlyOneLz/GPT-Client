const apiFetch = async (messageHistory) => {
  try {
    const response = await fetch(`${process.env.BACKEND_URL}/Api-fetch`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messageHistory: messageHistory,
      }),
    });
    const data = await response.json();
    return { data: data, response: response };
  } catch (error) {
    console.error("Error adding message", error);
  }
};

export default apiFetch;
