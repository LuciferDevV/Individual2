import { fetchData } from './activity.js';

// Функция для отображения активности на странице
function displayActivity(activity) {
    const activityContainer = document.getElementById('activity');
    activityContainer.innerText = activity;
}

// Функция для получения и обновления данных с заданной периодичностью
async function refreshData() {
    try {
        const result = await fetchData();
        if (result && result.activity) {
            displayActivity(result.activity);
        } else {
            displayActivity('К сожалению, произошла ошибка');
        }
    } catch (err) {
        console.error('Ошибка при обновлении данных:', err);
        displayActivity('К сожалению, произошла ошибка');
    } finally {
        // Повторный вызов функции через минуту (60000 миллисекунд)
        setTimeout(refreshData, 60000);
    }
}

// Запуск периодического обновления данных при загрузке страницы
refreshData();
