// هنا بختبر إن الجافا سكربت شغال
console.log("Hello from Salma's script [225100171]");

// بنجيب الزرار عشان نعمل بيه التبديل
const themeButton = document.getElementById('theme-toggle');

// لما حد يدوس على الزرار بنغير الثيم
themeButton.addEventListener('click', function() {
    document.body.classList.toggle('dark');
});