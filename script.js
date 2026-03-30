// DOM Elements
const roadmapContainer = document.getElementById('roadmapContainer');
const weekFilter = document.getElementById('weekFilter');
const completedCount = document.getElementById('completedCount');

// Local Storage key
const STORAGE_KEY = 'dsa-roadmap-progress';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    renderRoadmap();
    setupEventListeners();
    updateCompletedCount();
});

// Initialize the week filter dropdown
function initializeApp() {
    const weeks = roadmapData.map(item => item.week);
    const uniqueWeeks = [...new Set(weeks)];
    
    uniqueWeeks.forEach(week => {
        const option = document.createElement('option');
        option.value = week;
        option.textContent = `Week ${week}`;
        weekFilter.appendChild(option);
    });
}

// Setup event listeners
function setupEventListeners() {
    weekFilter.addEventListener('change', renderRoadmap);
}

// Render the roadmap
function renderRoadmap() {
    roadmapContainer.innerHTML = '';
    const selectedWeek = weekFilter.value;

    const filteredData = selectedWeek === 'all' 
        ? roadmapData 
        : roadmapData.filter(w => w.week == selectedWeek);

    filteredData.forEach(week => {
        const weekSection = createWeekSection(week);
        roadmapContainer.appendChild(weekSection);
    });
}

// Create week section element
function createWeekSection(week) {
    const section = document.createElement('div');
    section.className = 'week-section';

    // Week header
    const weekHeader = document.createElement('div');
    weekHeader.className = 'week-header';
    
    const titleDiv = document.createElement('div');
    titleDiv.textContent = week.title;
    
    const progressDiv = document.createElement('div');
    progressDiv.className = 'week-progress';
    const completedDays = week.days.filter(d => isTopicCompleted(week.week, d.day)).length;
    progressDiv.textContent = `${completedDays}/${week.days.length} days completed`;
    
    weekHeader.appendChild(titleDiv);
    weekHeader.appendChild(progressDiv);
    section.appendChild(weekHeader);

    // Create table
    const table = document.createElement('table');
    table.className = 'days-table';

    // Table header
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const headers = ['Day', 'Topics', 'Difficulty', 'Resources'];
    
    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });
    
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Table body
    const tbody = document.createElement('tbody');
    
    week.days.forEach(day => {
        const row = document.createElement('tr');
        
        // Day cell
        const dayCell = document.createElement('td');
        dayCell.className = 'day-cell';
        dayCell.textContent = `Day ${day.day}`;
        row.appendChild(dayCell);

        // Topics cell
        const topicsCell = document.createElement('td');
        topicsCell.className = 'topics-cell';
        
        day.topics.forEach(topic => {
            const tag = document.createElement('span');
            tag.className = 'topic-tag';
            tag.textContent = topic;
            
            const isCompleted = isTopicCompleted(week.week, day.day, topic);
            if (isCompleted) {
                tag.classList.add('completed');
            }
            
            tag.addEventListener('click', () => toggleTopicCompletion(week.week, day.day, topic, tag));
            topicsCell.appendChild(tag);
        });
        
        row.appendChild(topicsCell);

        // Difficulty cell
        const difficultyCell = document.createElement('td');
        difficultyCell.className = `difficulty ${day.difficulty}`;
        difficultyCell.textContent = day.difficulty.charAt(0).toUpperCase() + day.difficulty.slice(1);
        row.appendChild(difficultyCell);

        // Resources cell
        const resourceCell = document.createElement('td');
        resourceCell.className = 'resource-cell';
        
        if (day.resources) {
            const resourceBtn = document.createElement('button');
            resourceBtn.className = 'resource-btn';
            resourceBtn.textContent = 'Learn →';
            resourceBtn.addEventListener('click', () => window.open(day.resources, '_blank'));
            resourceCell.appendChild(resourceBtn);
        }
        
        row.appendChild(resourceCell);
        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    section.appendChild(table);

    return section;
}

// Get completion data from localStorage
function getCompletionData() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
}

// Save completion data to localStorage
function saveCompletionData(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// Check if a topic is completed
function isTopicCompleted(week, day, topic = null) {
    const data = getCompletionData();
    const key = `week-${week}-day-${day}`;
    
    if (!data[key]) {
        return false;
    }

    if (topic === null) {
        // Check if any topic is completed for this day
        return data[key].length > 0;
    }

    return data[key].includes(topic);
}

// Toggle topic completion
function toggleTopicCompletion(week, day, topic, element) {
    const data = getCompletionData();
    const key = `week-${week}-day-${day}`;

    if (!data[key]) {
        data[key] = [];
    }

    const index = data[key].indexOf(topic);

    if (index > -1) {
        // Topic is completed, so uncomplete it
        data[key].splice(index, 1);
        element.classList.remove('completed');
    } else {
        // Topic is not completed, so complete it
        data[key].push(topic);
        element.classList.add('completed');
    }

    saveCompletionData(data);
    updateCompletedCount();
}

// Update the total completed count
function updateCompletedCount() {
    const data = getCompletionData();
    let totalCompleted = 0;

    Object.values(data).forEach(topics => {
        totalCompleted += topics.length;
    });

    completedCount.textContent = totalCompleted;
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + Shift + R to reset progress
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'R') {
        if (confirm('Are you sure you want to reset all progress?')) {
            localStorage.removeItem(STORAGE_KEY);
            renderRoadmap();
            updateCompletedCount();
        }
    }
});
