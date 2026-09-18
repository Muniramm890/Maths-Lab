document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const filterBtns = document.querySelectorAll('.filter-tag');
    const simCards = document.querySelectorAll('.card');

    // 1. Search Logic
    searchInput.addEventListener('input', (e) => {
        const searchText = e.target.value.toLowerCase();

        simCards.forEach(card => {
            const title = card.querySelector('.card-title').innerText.toLowerCase();
            if (title.includes(searchText)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // 2. Filter Logic (Categories)
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const category = btn.getAttribute('data-filter');

            simCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');

                if (category === 'all' || category === cardCategory) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});
