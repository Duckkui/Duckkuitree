document.addEventListener('DOMContentLoaded', function() {
    const links = [
        { name: 'YouTube', url: 'https://youtube.com/@Duckkui' },
        { name: 'TikTok', url: 'https://www.tiktok.com/@duckkui' },
        // Agrega más enlaces según tus necesidades    asi del ejemplo      { name: 'Instagram', url: '#' },
    ];

    const list = document.getElementById('links');

    links.forEach(link => {
        const listItem = document.createElement('li');
        const anchor = document.createElement('a');
        anchor.textContent = link.name;
        anchor.href = link.url;
        listItem.appendChild(anchor);
        list.appendChild(listItem);
    });
});
