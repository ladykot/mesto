export const promiseReject = (data) => {
    if (data.ok) {
        return data.json();
      }
    return Promise.reject(`Ошибка: ${data.status}`);
}