document.addEventListener('DOMContentLoaded', function() {
    const policyHeaders = document.querySelectorAll('.policy-header');

    policyHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const policyItem = this.parentElement;
            policyItem.classList.toggle('active');
        });
    });
});
