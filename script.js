document.addEventListener('DOMContentLoaded', function() {
    // Navigation (SAME)
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
            this.classList.add('active');
            document.getElementById(this.dataset.target).classList.add('active');
        });
    });

    // Sign In Modal
    document.getElementById('signinBtn').addEventListener('click', () => {
        document.getElementById('signinModal').style.display = 'block';
    });

    // Student Registration Modal
    document.getElementById('signupBtn').addEventListener('click', () => {
        document.getElementById('signupModal').style.display = 'block';
    });

    // Close modals
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            closeBtn.closest('.modal').style.display = 'none';
        });
    });

    // Close on outside click
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });

    // Student Registration Form
    document.getElementById('studentRegForm').addEventListener('submit', (e) => {
        e.preventDefault();
        
        const password = document.querySelector('#studentRegForm input[type="password"]').value;
        const confirmPassword = document.querySelector('#studentRegForm input[type="password"]:last-of-type').value;
        
        if (password !== confirmPassword) {
            alert('❌ Passwords do not match!');
            return;
        }

        alert('🎓 STUDENT REGISTRATION SUCCESSFUL!\n\nWelcome to QIS College Portal!\n\nYour account will be activated within 24 hours.');
        document.getElementById('signupModal').style.display = 'none';
        document.getElementById('studentRegForm').reset();
    });

    // Sign In Form
    document.getElementById('signinForm').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('✅ Login successful! Welcome back to QIS College.');
        document.getElementById('signinModal').style.display = 'none';
    });

    // Switch from Registration to Login
    window.showLogin = function() {
        document.getElementById('signupModal').style.display = 'none';
        document.getElementById('signinModal').style.display = 'block';
    }
});