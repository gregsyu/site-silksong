document.addEventListener("DOMContentLoaded", function() {
    const possiblePaths = [
        'footer.html',
        'pages/footer.html',
        '../footer.html'
    ];

    const loadFooter = (index = 0) => {
        if (index >= possiblePaths.length) {
            console.warn('Footer not found');
            return;
        }
        const path = possiblePaths[index];

        fetch(path)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Not found: ${path}`);
                }
                return response.text();
            })
            .then(data => {
                document.body.insertAdjacentHTML('beforeend', data);
            })
            .catch(error => {
                loadFooter(index + 1);
            });
    }

    loadFooter();
});