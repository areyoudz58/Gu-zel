// تأثير تتبع حركة الماوس لإنشاء توهج ديناميكي بالخلفية
const bgGlow = document.querySelector('.bg-glow');

if (bgGlow) {
    window.addEventListener('mousemove', (e) => {
        // تحريك مسار التوهج الخلفي برفق مع حركة يد المستخدم
        const x = e.clientX;
        const y = e.clientY;
        
        bgGlow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0, 242, 254, 0.07) 0%, rgba(79, 172, 254, 0) 50%)`;
    });
}

// تأثير الأنيميشن عند ظهور عناصر الكروت أثناء سحب الصفحة (Scroll Animation)
const cards = document.querySelectorAll('.feature-card, .portfolio-card');

const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const cardObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        
        // تفعيل حركة رائعة عند ظهور العنصر على الشاشة
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
    });
}, observerOptions);

cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(40px)';
    card.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    cardObserver.observe(card);
});

// تأثير تفاعلي عند إرسال نموذج الاتصال
const contactForm = document.getElementById('customContactForm');
if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // تأثير اهتزاز وتوهج الزر عند الإرسال بنجاح
        const submitBtn = document.querySelector('.btn-submit');
        submitBtn.innerHTML = 'جاري الإرسال بنجاح... <i class="fas fa-check-circle"></i>';
        submitBtn.style.background = 'linear-gradient(45deg, #10b981, #059669)';
        
        setTimeout(() => {
            alert('تم استلام رسالتك وتفعيل مؤثر النجاح بنجاح بنسبة 100%!');
            contactForm.reset();
            submitBtn.innerHTML = 'إرسال الرسالة الآن <i class="fas fa-paper-plane"></i>';
            submitBtn.style.background = 'linear-gradient(45deg, #00f2fe, #4facfe)';
        }, 1500);
    });
}
