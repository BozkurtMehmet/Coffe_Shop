document.addEventListener('DOMContentLoaded', (event) => {
    const firstCollapseBtn = document.getElementById('firstCollapseBtn');
    const secondCollapseBtn = document.getElementById('secondCollapseBtn');
    
    firstCollapseBtn.addEventListener('click', () => {
        firstCollapseBtn.style.display = 'none';
        secondCollapseBtn.style.display = 'block';
    });
    secondCollapseBtn.addEventListener('click', () => {
        secondCollapseBtn.style.display = 'none';
        firstCollapseBtn.style.display = 'block';
    });
});