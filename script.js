const music = document.getElementById('bgMusic');

if (music) {
    music.play().catch(() => {
        console.log("المتصفح ينتظر حركة المستخدم لتفعيل الصوت تلقائياً.");
    });

    const activateAudio = () => {
        if (music.muted) {
            music.muted = false; 
            music.volume = 0.10; // صوت البيانو ناعم وخلفي بنسبة 10%
        }
        window.removeEventListener('mousemove', activateAudio);
        window.removeEventListener('click', activateAudio);
        window.removeEventListener('touchstart', activateAudio);
        window.removeEventListener('scroll', activateAudio);
    };

    window.addEventListener('mousemove', activateAudio);
    window.addEventListener('click', activateAudio);
    window.addEventListener('touchstart', activateAudio);
    window.addEventListener('scroll', activateAudio);
}

const bgGlow = document.getElementById('bgGlow');
if (bgGlow) {
    window.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        bgGlow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0, 242, 254, 0.12) 0%, rgba(6, 9, 19, 0) 65%)`;
    });
}

const projectsData = {
    project1: {
        title: "منصة تجارة إلكترونية ثلاثية الأبعاد متكاملة",
        desc: "هذا المشروع يعتبر الطفرة القادمة لأكاديمية moh-gu zel academy في مجال البيع الرقمي الفاخر.",
        details: "تم بناء المنصة بالكامل من الصفر دون الاعتماد على قوالب جاهزة. تحتوي على لوحة تحكم ديناميكية تتيح للمشرفين تتبع المخزون وسلوك العملاء بدقة متناهية عبر خوارزميات الذكاء الاصطناعي. كما تم تزويد الواجهة الأمامية بتقنيات خفيفة ومؤثرات جافاسكريبت متكاملة لعرض المنتجات بزاوية 360 درجة.",
        features: ["بوابات دفع مشفرة بالكامل SSL", "لوحة تحكم للمبيعات الفورية", "أنظمة حماية ضد ثغرات XSS و CSRF"],
        tech: ["HTML5", "CSS3 Neon", "Vanilla JavaScript", "Node.js API"]
    },
    project2: {
        title: "لوحة تحكم إحصائية للبيانات الضخمة",
        desc: "أداة متطورة مصممة خصيصاً للمؤسسات والشركات الكبرى لمراقبة مؤشرات الأداء الحيوية والمالية.",
        details: "تتميز لوحة التحكم بقدرتها على معالجة ما يصل إلى 100,000 طلب في الثانية الواحدة وبث الرسوم البيانية التفاعلية والمتحركة بشكل لحظي ومباشر. تم تصميم الألوان بنظام الـ Dark Mode الفخم والمريح للعين الطويلة الاستخدام لحماية الموظفين من الإجهاد البصري مع تدعيم الأنظمة بأعلى درجات التشفير السيبراني المتقدم.",
        features: ["مخططات بيانية تفاعلية SVG حية", "تصدير فوري للتقارير بصيغة PDF و Excel", "نظام صلاحيات متعدد للموظفين والمشرفين"],
        tech: ["Advanced JS", "CSS Grid/Flexbox", "Charts Framework", "WebSockets Data"]
    }
};

function openModal(projectId) {
    const modal = document.getElementById('detailModal');
    const contentContainer = document.getElementById('modalContent');
    const project = projectsData[projectId];
    
    if (project) {
        let techBadges = project.tech.map(t => `<span class="badge">${t}</span>`).join('');
        let featuresList = project.features.map(f => `<li>${f}</li>`).join('');

        contentContainer.innerHTML = `
            <div class="modal-body-content">
                <h2>${project.title}</h2>
                <p><strong>نبذة أساسية:</strong> ${project.desc}</p>
                <h4>التفاصيل الهندسية العميقة للكود:</h4>
                <p>${project.details}</p>
                <h4>أبرز مميزات هذا النظام:</h4>
                <ul style="margin-right: 20px; color: #a0aec0; line-height: 1.8;">
                    ${featuresList}
                </ul>
                <h4>التقنيات المستخدمة في الأكاديمية:</h4>
                <div class="tech-badges">
                    ${techBadges}
                </div>
            </div>
        `;
        modal.classList.add('active');
    }
}

function closeModal() {
    const modal = document.getElementById('detailModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

const contactForm = document.getElementById('customContactForm');
if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = document.querySelector('.btn-submit');
        submitBtn.innerHTML = 'جاري المعالجة الفورية... <i class="fas fa-circle-notch fa-spin"></i>';
        
        setTimeout(() => {
            alert('تم استلام رسالتك وتوثيقها في قاعدة بيانات الأكاديمية بنجاح!');
            contactForm.reset();
            submitBtn.innerHTML = 'إرسال الرسالة الآن <i class="fas fa-paper-plane"></i>';
        }, 1200);
    });
}
