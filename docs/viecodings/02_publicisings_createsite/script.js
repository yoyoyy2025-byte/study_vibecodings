// 1. 초기 데이터 (LocalStorage가 비어있을 경우 사용)
const initialData = [
    { id: 1, name: "사자", category: "mammals", description: "동물의 왕, 아프리카 초원에 서식합니다." },
    { id: 2, name: "청개구리", category: "amphibians", description: "비가 오면 우는 작고 귀여운 개구리입니다." },
    { id: 3, name: "독수리", category: "birds", description: "하늘의 제왕, 뛰어난 시력을 가졌습니다." }
];

// 2. 데이터 가져오기
function getAnimals() {
    const data = localStorage.getItem('animals');
    return data ? JSON.parse(data) : initialData;
}

// 3. 데이터 저장하기
function saveAnimals(animals) {
    localStorage.setItem('animals', JSON.stringify(animals));
}

// 4. 사이드바 메뉴 렌더링
function loadSidebar() {
    const menuItems = [
        { name: "홈으로", link: "index.html" },
        { name: "포유류", link: "category.html?type=mammals" },
        { name: "양서류", link: "category.html?type=amphibians" },
        { name: "파충류", link: "category.html?type=reptiles" },
        { name: "조류", link: "category.html?type=birds" },
        { name: "어류", link: "category.html?type=fish" },
        { name: "관리자 페이지", link: "admin.html" }
    ];

    const sidebar = document.getElementById('sidebar-nav');
    if(sidebar) {
        sidebar.innerHTML = menuItems.map(item => 
            `<a href="${item.link}" class="list-group-item list-group-item-action bg-light">${item.name}</a>`
        ).join('');
    }
}

// 5. 사이드바 토글 기능
window.addEventListener('DOMContentLoaded', event => {
    loadSidebar();
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
        });
    }
});

// 6. 카테고리 페이지 렌더링
function loadCategoryData(type) {
    const titleMap = {
        'mammals': '포유류', 'amphibians': '양서류', 'reptiles': '파충류',
        'birds': '조류', 'fish': '어류'
    };
    
    document.getElementById('category-title').innerText = titleMap[type] || '전체 동물';
    
    const animals = getAnimals();
    const filtered = animals.filter(a => a.category === type);
    const container = document.getElementById('animal-list');
    
    if(filtered.length === 0) {
        container.innerHTML = '<div class="col-12"><p>등록된 동물이 없습니다.</p></div>';
        return;
    }

    container.innerHTML = filtered.map(animal => `
        <div class="col-md-4 mb-4">
            <div class="card animal-card h-100">
                <div class="card-body">
                    <h5 class="card-title text-primary fw-bold">${animal.name}</h5>
                    <p class="card-text">${animal.description}</p>
                </div>
                <div class="card-footer bg-transparent border-top-0">
                    <span class="badge bg-secondary">${titleMap[animal.category]}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// 7. [관리자] 테이블 렌더링 및 CRUD 로직
function renderAdminTable() {
    const animals = getAnimals();
    const tbody = document.getElementById('admin-animal-table');
    tbody.innerHTML = animals.map(animal => `
        <tr>
            <td>${animal.name}</td>
            <td>${animal.category}</td>
            <td>${animal.description}</td>
            <td>
                <button class="btn btn-sm btn-warning" onclick="editAnimal(${animal.id})">수정</button>
                <button class="btn btn-sm btn-danger" onclick="deleteAnimal(${animal.id})">삭제</button>
            </td>
        </tr>
    `).join('');
}

function handleFormSubmit(e) {
    e.preventDefault();
    const id = document.getElementById('animalId').value;
    const name = document.getElementById('name').value;
    const category = document.getElementById('category').value;
    const description = document.getElementById('description').value;
    
    let animals = getAnimals();

    if (id) {
        // 수정 (Update)
        const index = animals.findIndex(a => a.id == id);
        animals[index] = { id: Number(id), name, category, description };
    } else {
        // 생성 (Create)
        const newId = animals.length > 0 ? Math.max(...animals.map(a => a.id)) + 1 : 1;
        animals.push({ id: newId, name, category, description });
    }

    saveAnimals(animals);
    renderAdminTable();
    resetForm();
    alert('저장되었습니다!');
}

function deleteAnimal(id) {
    if(confirm('정말 삭제하시겠습니까?')) {
        let animals = getAnimals();
        animals = animals.filter(a => a.id !== id);
        saveAnimals(animals);
        renderAdminTable();
    }
}

function editAnimal(id) {
    const animals = getAnimals();
    const target = animals.find(a => a.id === id);
    document.getElementById('animalId').value = target.id;
    document.getElementById('name').value = target.name;
    document.getElementById('category').value = target.category;
    document.getElementById('description').value = target.description;
    window.scrollTo(0,0);
}

function resetForm() {
    document.getElementById('animalForm').reset();
    document.getElementById('animalId').value = '';
}