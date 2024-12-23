// التعامل مع زر تسجيل الدخول
document.getElementById('login-btn').addEventListener('click', function () {
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('files-page').style.display = 'block';
});

// التعامل مع زر الرجوع
document.getElementById('back-btn').addEventListener('click', function () {
    document.getElementById('files-page').style.display = 'none';
    document.getElementById('login-page').style.display = 'block';
});
