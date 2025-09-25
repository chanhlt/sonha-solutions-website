
function submit(form) {
    const formData = new FormData(form);
    return fetch('/api/submit', {
        method: 'POST',
        body: formData
    });
}