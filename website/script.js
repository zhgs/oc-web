// 弹窗功能
function showAddGuide() {
    document.getElementById('guideModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('guideModal').style.display = 'none';
}

// 点击弹窗外部关闭
window.onclick = function(event) {
    const modal = document.getElementById('guideModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// ESC 键关闭弹窗
document.onkeydown = function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
};