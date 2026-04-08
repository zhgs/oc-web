// 显示当前时间
document.addEventListener('DOMContentLoaded', function() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit',
        timeZone: 'Asia/Shanghai'
    };
    timeElement.textContent = now.toLocaleString('zh-CN', options);
});
