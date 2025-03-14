let userAge = '';
let selectedMuscleGroup = '';

// Данные о тренажерах (можно заменить на запросы к API)
const equipmentData = {
    'Грудь': ['Жим лежа', 'Бабочка'],
    'Спина': ['Тяга верхнего блока', 'Гиперэкстензия'],
    'Ноги': ['Присед со штангой', 'Разгибание ног'],
    'Руки': ['Бицепс-машина', 'Трицепс-машина'],
    'Плечи': ['Армейский жим', 'Махи гантелями'],
    'Пресс': ['Скручивания на скамье', 'Подъем ног']
};

// Рекомендации по времени
const timeRecommendations = {
    '18-30': '30 минут',
    '30-50': '20 минут',
    '50+': '15 минут'
};

function selectAge(age) {
    userAge = age;
    document.getElementById('step1').style.display = 'none';
    document.getElementById('step2').style.display = 'block';
}

function selectMuscleGroup(muscleGroup) {
    selectedMuscleGroup = muscleGroup;
    document.getElementById('step2').style.display = 'none';
    document.getElementById('step3').style.display = 'block';
    showEquipmentList();
}

function showEquipmentList() {
    const equipmentList = document.getElementById('equipmentList');
    equipmentList.innerHTML = '';
    equipmentData[selectedMuscleGroup].forEach(equipment => {
        const button = document.createElement('button');
        button.textContent = equipment;
        button.onclick = () => showEquipmentInfo(equipment);
        equipmentList.appendChild(button);
    });
}

function showEquipmentInfo(equipment) {
    document.getElementById('step3').style.display = 'none';
    document.getElementById('step4').style.display = 'block';
    document.getElementById('equipmentDescription').textContent = `Тренажер: ${equipment}`;
    document.getElementById('recommendedTime').textContent = `Рекомендуемое время: ${timeRecommendations[userAge]}`;
}