function downloadCV() {
    var link = document.createElement('a');
    link.href = 'LR.pdf';
    link.download = 'LR.pdf';
    link.dispatchEvent(new MouseEvent('click'));
}

function showCertificates() {
    window.open('certificates.html', '_blank');
}