const board = document.getElementById('board');
const tagDialog = document.getElementById('tagDialog');
const tagList = document.getElementById('tagList');
let tags = []; 
let targetCard = null; 


function addColumn() {
    const columnInput = document.getElementById('columnInput');
    const columnName = columnInput.value.trim();

    if (columnName) {
        const column = document.createElement('div');
        column.classList.add('column');

        column.innerHTML = `
            <h2>${columnName}</h2>
            <div class="cards"></div>
            <div class="add-card">
                <input type="text" style="padding: 5px; border: 1px solid #ddd;" placeholder="Přidat kartu...">
                <button class="btn-primary" onclick="addCard(this)">+</button>
            </div>
        `;

        board.appendChild(column);
        columnInput.value = '';
    }
}


function addCard(button) {
    const addCardDiv = button.parentElement;
    const cardsContainer = addCardDiv.previousElementSibling;
    const input = addCardDiv.querySelector('input');
    const cardText = input.value.trim();

    if (cardText) {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <div class="card-text">${cardText}</div>
            <div class="card-tags"></div>
            <button class="add-tag-button" onclick="openTagDialog(this)" style="margin-top: 5px;">+</button>
        `;

        cardsContainer.appendChild(card);
        input.value = '';
    }
}

function openTagDialog(button) {
    tagDialog.style.display = 'flex';
    targetCard = button.parentElement; 
    renderTags();
}

function createTag() {
    const tagName = document.getElementById('tagName').value.trim();
    const tagColor = document.getElementById('tagColor').value;

    if (tagName && !tags.some(tag => tag.name === tagName)) {
        tags.push({ name: tagName, color: tagColor });
        renderTags();
    }
}

function renderTags() {
    tagList.innerHTML = '';
    tags.forEach(tag => {
        const tagElement = document.createElement('div');
        tagElement.classList.add('tag');
        tagElement.textContent = tag.name;
        tagElement.style.backgroundColor = tag.color;

        tagElement.onclick = () => {
            if (targetCard) {
                const cardTags = targetCard.querySelector('.card-tags');
                const newTag = document.createElement('div');
                newTag.classList.add('tag');
                newTag.textContent = tag.name;
                newTag.style.backgroundColor = tag.color;
                cardTags.appendChild(newTag);
            }
            closeTagDialog();
        };

        tagList.appendChild(tagElement);
    });
}

function closeTagDialog() {
    tagDialog.style.display = 'none';
    targetCard = null; 
}
