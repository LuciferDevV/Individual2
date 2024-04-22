import { fetchData } from './activity.js';

// Функция для обновления активности на странице
function updateActivity(activity) {
    const activityElement = document.getElementById('activity');
    activityElement.textContent = activity;
}

// Функция для обновления данных каждую минуту
async function updateDataPeriodically() {
    try {
        const data = await fetchData();
        if (data) {
            updateActivity(data.activity);
        } else {
            updateActivity('К сожалению, произошла ошибка');
        }
    } catch (error) {
        console.error('Error updating data:', error);
        updateActivity('К сожалению, произошла ошибка');
    } finally {
        setTimeout(updateDataPeriodically, 60000); // Обновление каждую минуту (60000 миллисекунд)
    }
}

// Запуск обновления данных при загрузке страницы
updateDataPeriodically();