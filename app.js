document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const resultsSection = document.getElementById('resultsSection');
    const resultsContainer = document.getElementById('resultsContainer');

    // 검색 버튼 클릭
    searchBtn.addEventListener('click', performSearch);

    // Enter 키 입력
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    function performSearch() {
        const query = searchInput.value.trim();

        if (!query) {
            alert('검색어를 입력해주세요.');
            return;
        }

        // 결과 섹션 표시
        resultsSection.style.display = 'block';

        // 검색 결과 생성 (각 아이콘 소스 링크)
        const iconSources = [
            {
                name: 'Font Awesome',
                url: `https://fontawesome.com/search?q=${encodeURIComponent(query)}&o=r`,
                description: 'Font Awesome에서 검색'
            },
            {
                name: 'Flaticon',
                url: `https://www.flaticon.com/search?word=${encodeURIComponent(query)}`,
                description: 'Flaticon에서 검색'
            },
            {
                name: 'Icons8',
                url: `https://icons8.com/icons/set/${encodeURIComponent(query)}`,
                description: 'Icons8에서 검색'
            },
            {
                name: 'Iconfinder',
                url: `https://www.iconfinder.com/search?q=${encodeURIComponent(query)}`,
                description: 'Iconfinder에서 검색'
            },
            {
                name: 'Material Icons',
                url: `https://fonts.google.com/icons?icon.query=${encodeURIComponent(query)}`,
                description: 'Material Icons에서 검색'
            },
            {
                name: 'Iconmonstr',
                url: `https://iconmonstr.com/?s=${encodeURIComponent(query)}`,
                description: 'Iconmonstr에서 검색'
            },
            {
                name: 'Tabler Icons',
                url: `https://tablericons.com/?query=${encodeURIComponent(query)}`,
                description: 'Tabler Icons에서 검색'
            },
            {
                name: 'Remix Icon',
                url: `https://remixicon.com/?q=${encodeURIComponent(query)}`,
                description: 'Remix Icon에서 검색'
            }
        ];

        resultsContainer.innerHTML = '';

        iconSources.forEach(source => {
            const resultItem = document.createElement('a');
            resultItem.className = 'result-item';
            resultItem.href = source.url;
            resultItem.target = '_blank';
            resultItem.rel = 'noopener';

            resultItem.innerHTML = `
                <h3>${source.name}</h3>
                <p>${source.description}</p>
                <p style="color: #667eea; margin-top: 10px; font-weight: 500;">→ 바로가기</p>
            `;

            resultsContainer.appendChild(resultItem);
        });

        // 결과 섹션으로 스크롤
        resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // 소스 카드 클릭 시 검색창에 포커스
    const sourceCards = document.querySelectorAll('.source-card');
    sourceCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // 새 탭에서 열도록 하고, 검색창에 포커스
            setTimeout(() => {
                searchInput.focus();
            }, 100);
        });
    });
});
