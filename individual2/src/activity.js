// Функция для получения данных с сервера
async function fetchData() {
    const apiUrl = 'https://www.boredapi.com/api/activity/';
    
    try {
        const response = await fetch(apiUrl);
        
        if (response.status >= 200 && response.status < 300) {
            const data = await response.json();
            return data;
        } else {
            throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
        }
    } catch (error) {
        console.error(`Ошибка при запросе: ${error.message}`);
        return null;
    }
}

export { fetchData }; // Экспортируем функцию для возможного использования в других файлах
