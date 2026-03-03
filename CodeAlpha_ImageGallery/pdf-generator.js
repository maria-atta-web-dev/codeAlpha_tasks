// Enhanced PDF Resume Generator with Stunning Visual Design
// Uses real data from Maria Atta's CV with amazing colors and effects

async function downloadAmazingPDFResume() {
    // Show loading state with animation
    const btn = document.querySelector('.download-cv-btn');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-magic"></i> Creating Magic... <i class="fas fa-spinner fa-spin"></i>';
    btn.disabled = true;

    try {
        // Create a stunning temporary container for the PDF content
        const pdfContainer = document.createElement('div');
        pdfContainer.style.width = '850px';
        pdfContainer.style.padding = '0';
        pdfContainer.style.fontFamily = "'Poppins', 'Segoe UI', 'Arial', sans-serif";
        pdfContainer.style.background = 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)';
        pdfContainer.style.position = 'absolute';
        pdfContainer.style.left = '-9999px';
        pdfContainer.style.top = '-9999px';
        
        // Build the AMAZING PDF content with REAL resume data and stunning design
        pdfContainer.innerHTML = `
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
                
                .amazing-resume {
                    max-width: 850px;
                    margin: 0 auto;
                    background: white;
                    border-radius: 30px;
                    overflow: hidden;
                    box-shadow: 0 30px 60px rgba(0,0,0,0.3);
                    animation: slideIn 0.5s ease;
                }
                
                @keyframes slideIn {
                    from { transform: translateY(30px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                
                /* Header with Gradient Animation */
                .amazing-header {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #6C5CE7 100%);
                    background-size: 200% 200%;
                    animation: gradientShift 10s ease infinite;
                    color: white;
                    padding: 40px 40px 30px;
                    position: relative;
                    overflow: hidden;
                }
                
                @keyframes gradientShift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                
                .amazing-header::before {
                    content: '';
                    position: absolute;
                    top: -50%;
                    right: -50%;
                    width: 200%;
                    height: 200%;
                    background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 60%);
                    animation: rotate 20s linear infinite;
                }
                
                @keyframes rotate {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                
                .header-content {
                    position: relative;
                    z-index: 2;
                }
                
                .name-title {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 20px;
                }
                
                .name-title h1 {
                    font-size: 52px;
                    font-weight: 800;
                    margin: 0;
                    text-shadow: 4px 4px 0 rgba(0,0,0,0.2);
                    letter-spacing: 2px;
                    background: linear-gradient(135deg, #fff, #f0f0f0);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                
                .badge {
                    background: rgba(255,255,255,0.2);
                    backdrop-filter: blur(10px);
                    padding: 12px 25px;
                    border-radius: 50px;
                    font-weight: 600;
                    font-size: 16px;
                    border: 2px solid rgba(255,255,255,0.3);
                    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
                }
                
                .badge i {
                    margin-right: 8px;
                    color: #FECA57;
                }
                
                .subtitle {
                    font-size: 22px;
                    font-weight: 300;
                    margin: 15px 0 25px;
                    opacity: 0.95;
                    letter-spacing: 1px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                
                .subtitle i {
                    color: #FECA57;
                    font-size: 28px;
                }
                
                /* Contact Info with Glassmorphism */
                .contact-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 15px;
                    margin-top: 25px;
                }
                
                .contact-item {
                    background: rgba(255,255,255,0.15);
                    backdrop-filter: blur(10px);
                    padding: 12px 15px;
                    border-radius: 15px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    border: 1px solid rgba(255,255,255,0.3);
                    transition: transform 0.3s ease;
                }
                
                .contact-item:hover {
                    transform: translateY(-5px);
                    background: rgba(255,255,255,0.25);
                }
                
                .contact-item i {
                    font-size: 20px;
                    color: #FECA57;
                }
                
                .contact-item span {
                    font-size: 13px;
                    font-weight: 500;
                }
                
                /* Main Content */
                .main-content {
                    padding: 40px;
                    background: white;
                }
                
                /* Section Titles with Underline Animation */
                .section-title {
                    font-size: 28px;
                    font-weight: 700;
                    margin-bottom: 25px;
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    position: relative;
                }
                
                .section-title i {
                    font-size: 32px;
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                
                .section-title::after {
                    content: '';
                    position: absolute;
                    bottom: -8px;
                    left: 0;
                    width: 80px;
                    height: 4px;
                    background: linear-gradient(90deg, #667eea, #764ba2, #FECA57);
                    border-radius: 4px;
                    animation: expandLine 1s ease forwards;
                }
                
                @keyframes expandLine {
                    from { width: 0; }
                    to { width: 80px; }
                }
                
                /* About Me Card */
                .about-card {
                    background: linear-gradient(135deg, #f8f9ff, #f0f2ff);
                    padding: 25px;
                    border-radius: 20px;
                    margin-bottom: 35px;
                    border-left: 5px solid #667eea;
                    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.1);
                }
                
                .about-card p {
                    font-size: 16px;
                    line-height: 1.8;
                    color: #2d3748;
                    margin: 0;
                }
                
                /* Skills Grid with Animated Bars */
                .skills-container {
                    background: #f8fafc;
                    border-radius: 25px;
                    padding: 25px;
                    margin-bottom: 35px;
                    box-shadow: inset 0 2px 10px rgba(0,0,0,0.03);
                }
                
                .skills-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 25px;
                }
                
                .skill-card {
                    background: white;
                    padding: 20px;
                    border-radius: 15px;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
                    transition: all 0.3s ease;
                }
                
                .skill-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 30px rgba(102, 126, 234, 0.15);
                }
                
                .skill-header {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 12px;
                    font-weight: 600;
                }
                
                .skill-name {
                    color: #2d3748;
                    font-size: 15px;
                }
                
                .skill-percent {
                    color: #667eea;
                    font-weight: 700;
                }
                
                .skill-bar-bg {
                    height: 10px;
                    background: #e2e8f0;
                    border-radius: 10px;
                    overflow: hidden;
                    position: relative;
                }
                
                .skill-bar-fill {
                    height: 100%;
                    background: linear-gradient(90deg, #667eea, #764ba2, #FECA57);
                    border-radius: 10px;
                    position: relative;
                    animation: fillBar 1.5s ease forwards;
                    width: 0;
                }
                
                @keyframes fillBar {
                    to { width: var(--width); }
                }
                
                /* Experience Timeline */
                .timeline {
                    position: relative;
                    margin-bottom: 40px;
                }
                
                .timeline::before {
                    content: '';
                    position: absolute;
                    left: 20px;
                    top: 0;
                    bottom: 0;
                    width: 3px;
                    background: linear-gradient(180deg, #667eea, #764ba2, #FECA57);
                    border-radius: 3px;
                }
                
                .timeline-item {
                    position: relative;
                    padding-left: 60px;
                    margin-bottom: 30px;
                }
                
                .timeline-dot {
                    position: absolute;
                    left: 10px;
                    top: 0;
                    width: 20px;
                    height: 20px;
                    background: white;
                    border: 4px solid #667eea;
                    border-radius: 50%;
                    z-index: 2;
                    animation: pulse 2s infinite;
                }
                
                @keyframes pulse {
                    0% { box-shadow: 0 0 0 0 rgba(102, 126, 234, 0.7); }
                    70% { box-shadow: 0 0 0 10px rgba(102, 126, 234, 0); }
                    100% { box-shadow: 0 0 0 0 rgba(102, 126, 234, 0); }
                }
                
                .timeline-content {
                    background: white;
                    padding: 20px;
                    border-radius: 15px;
                    box-shadow: 0 5px 20px rgba(0,0,0,0.05);
                    border-left: 5px solid #667eea;
                }
                
                .timeline-content h4 {
                    font-size: 20px;
                    font-weight: 700;
                    margin: 0 0 5px;
                    color: #2d3748;
                }
                
                .timeline-content .company {
                    color: #667eea;
                    font-weight: 600;
                    margin-bottom: 8px;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                
                .timeline-content .date {
                    color: #718096;
                    font-size: 14px;
                    margin-bottom: 15px;
                    display: flex;
                    align-items: center;
                    gap: 5px;
                }
                
                .timeline-content ul {
                    margin: 0;
                    padding-left: 20px;
                }
                
                .timeline-content li {
                    margin-bottom: 8px;
                    color: #4a5568;
                }
                
                /* Projects Grid */
                .projects-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 25px;
                    margin-bottom: 40px;
                }
                
                .project-card {
                    background: linear-gradient(135deg, #fff, #f8f9ff);
                    padding: 25px;
                    border-radius: 20px;
                    border: 1px solid #e2e8f0;
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                }
                
                .project-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 100px;
                    height: 100px;
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    opacity: 0.1;
                    border-radius: 0 0 0 100px;
                }
                
                .project-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 20px 40px rgba(102, 126, 234, 0.2);
                    border-color: #667eea;
                }
                
                .project-icon {
                    width: 50px;
                    height: 50px;
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    border-radius: 15px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 20px;
                }
                
                .project-icon i {
                    font-size: 24px;
                    color: white;
                }
                
                .project-card h5 {
                    font-size: 20px;
                    font-weight: 700;
                    margin: 0 0 10px;
                    color: #2d3748;
                }
                
                .project-card p {
                    color: #718096;
                    font-size: 14px;
                    line-height: 1.6;
                    margin: 0;
                }
                
                /* Education Section */
                .education-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 20px;
                    margin-bottom: 40px;
                }
                
                .edu-card {
                    background: white;
                    padding: 20px;
                    border-radius: 15px;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
                    text-align: center;
                    border-bottom: 4px solid #667eea;
                }
                
                .edu-card i {
                    font-size: 30px;
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    margin-bottom: 10px;
                }
                
                .edu-card h6 {
                    font-size: 16px;
                    font-weight: 700;
                    margin: 0 0 8px;
                    color: #2d3748;
                }
                
                .edu-card .school {
                    color: #667eea;
                    font-size: 13px;
                    font-weight: 500;
                    margin-bottom: 5px;
                }
                
                .edu-card .year {
                    color: #718096;
                    font-size: 12px;
                }
                
                /* Languages & Interests */
                .info-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 30px;
                    margin-bottom: 30px;
                }
                
                .language-item {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    margin-bottom: 15px;
                    padding: 10px 15px;
                    background: #f8fafc;
                    border-radius: 10px;
                }
                
                .language-name {
                    font-weight: 600;
                    min-width: 80px;
                }
                
                .language-level {
                    flex: 1;
                    height: 8px;
                    background: #e2e8f0;
                    border-radius: 4px;
                    overflow: hidden;
                }
                
                .level-fill {
                    height: 100%;
                    background: linear-gradient(90deg, #667eea, #764ba2);
                    border-radius: 4px;
                }
                
                .interest-tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                }
                
                .interest-tag {
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    color: white;
                    padding: 8px 16px;
                    border-radius: 50px;
                    font-size: 13px;
                    font-weight: 500;
                    display: flex;
                    align-items: center;
                    gap: 6px;
                }
                
                .interest-tag i {
                    font-size: 14px;
                }
                
                /* Footer */
                .amazing-footer {
                    background: linear-gradient(135deg, #2d3748, #1a202c);
                    color: white;
                    padding: 30px 40px;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                }
                
                .amazing-footer::before {
                    content: '';
                    position: absolute;
                    top: -50%;
                    left: -50%;
                    width: 200%;
                    height: 200%;
                    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
                    animation: rotate 30s linear infinite;
                }
                
                .footer-content {
                    position: relative;
                    z-index: 2;
                }
                
                .social-links {
                    display: flex;
                    justify-content: center;
                    gap: 20px;
                    margin: 20px 0;
                }
                
                .social-link {
                    width: 45px;
                    height: 45px;
                    background: rgba(255,255,255,0.1);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                }
                
                .social-link:hover {
                    background: #667eea;
                    transform: translateY(-5px) rotate(360deg);
                }
                
                .social-link i {
                    font-size: 20px;
                    color: white;
                }
                
                .footer-text {
                    font-size: 14px;
                    opacity: 0.8;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 15px;
                }
                
                .footer-text i {
                    color: #FECA57;
                }
                
                /* Watermark */
                .watermark {
                    position: absolute;
                    bottom: 10px;
                    right: 20px;
                    font-size: 80px;
                    font-weight: 800;
                    opacity: 0.03;
                    color: white;
                    pointer-events: none;
                    transform: rotate(-15deg);
                }
            </style>
            
            <div class="amazing-resume">
                <!-- Header with Animation -->
                <div class="amazing-header">
                    <div class="header-content">
                        <div class="name-title">
                            <h1>MARIA ATTA</h1>
                            <div class="badge">
                                <i class="fas fa-crown"></i> TOP CREATOR
                            </div>
                        </div>
                        
                        <div class="subtitle">
                            <i class="fas fa-code"></i>
                            <span>BSCS Student | Web Developer | Creative Designer</span>
                        </div>
                        
                        <div class="contact-grid">
                            <div class="contact-item">
                                <i class="fas fa-envelope"></i>
                                <span>mariaatta33@gmail.com</span>
                            </div>
                            <div class="contact-item">
                                <i class="fas fa-phone-alt"></i>
                                <span>+92 346 8628578</span>
                            </div>
                            <div class="contact-item">
                                <i class="fas fa-map-marker-alt"></i>
                                <span>Rawalpindi, Pakistan</span>
                            </div>
                            <div class="contact-item">
                                <i class="fab fa-github"></i>
                                <span>maria-atta-web-dev</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Main Content -->
                <div class="main-content">
                    <!-- About Me Card -->
                    <div class="section-title">
                        <i class="fas fa-user-astronaut"></i>
                        <span>About Me</span>
                    </div>
                    
                    <div class="about-card">
                        <p>🚀 BSCS student with hands-on academic experience in Web Technologies and Data Structures & Algorithms. Passionate about building structured web projects and implementing core DSA concepts. Eager to contribute to remote technical and online support roles while creating amazing digital experiences.</p>
                    </div>
                    
                    <!-- Technical Skills -->
                    <div class="section-title">
                        <i class="fas fa-cog"></i>
                        <span>Technical Mastery</span>
                    </div>
                    
                    <div class="skills-container">
                        <div class="skills-grid">
                            <div class="skill-card">
                                <div class="skill-header">
                                    <span class="skill-name">HTML5/CSS3</span>
                                    <span class="skill-percent">95%</span>
                                </div>
                                <div class="skill-bar-bg">
                                    <div class="skill-bar-fill" style="width:95%"></div>
                                </div>
                            </div>
                            
                            <div class="skill-card">
                                <div class="skill-header">
                                    <span class="skill-name">JavaScript</span>
                                    <span class="skill-percent">85%</span>
                                </div>
                                <div class="skill-bar-bg">
                                    <div class="skill-bar-fill" style="width:85%"></div>
                                </div>
                            </div>
                            
                            <div class="skill-card">
                                <div class="skill-header">
                                    <span class="skill-name">SQL & Databases</span>
                                    <span class="skill-percent">80%</span>
                                </div>
                                <div class="skill-bar-bg">
                                    <div class="skill-bar-fill" style="width:80%"></div>
                                </div>
                            </div>
                            
                            <div class="skill-card">
                                <div class="skill-header">
                                    <span class="skill-name">Data Structures</span>
                                    <span class="skill-percent">85%</span>
                                </div>
                                <div class="skill-bar-bg">
                                    <div class="skill-bar-fill" style="width:85%"></div>
                                </div>
                            </div>
                            
                            <div class="skill-card">
                                <div class="skill-header">
                                    <span class="skill-name">AI Tools</span>
                                    <span class="skill-percent">90%</span>
                                </div>
                                <div class="skill-bar-bg">
                                    <div class="skill-bar-fill" style="width:90%"></div>
                                </div>
                            </div>
                            
                            <div class="skill-card">
                                <div class="skill-header">
                                    <span class="skill-name">Communication</span>
                                    <span class="skill-percent">95%</span>
                                </div>
                                <div class="skill-bar-bg">
                                    <div class="skill-bar-fill" style="width:95%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Experience Timeline -->
                    <div class="section-title">
                        <i class="fas fa-briefcase"></i>
                        <span>Professional Journey</span>
                    </div>
                    
                    <div class="timeline">
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <div class="timeline-content">
                                <h4>Accounts Intern</h4>
                                <div class="company">
                                    <i class="fas fa-building"></i> Seven Concepts
                                </div>
                                <div class="date">
                                    <i class="far fa-calendar-alt"></i> June - August 2024
                                </div>
                                <ul>
                                    <li>✨ Completed a 2.5-month intensive internship in Accounts</li>
                                    <li>📊 Assisted with data entry and financial records management</li>
                                    <li>📈 Contributed to documentation and reporting tasks</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <div class="timeline-content">
                                <h4>Web Development Projects</h4>
                                <div class="company">
                                    <i class="fas fa-laptop-code"></i> Academic Projects
                                </div>
                                <div class="date">
                                    <i class="far fa-calendar-alt"></i> 2024 - Present
                                </div>
                                <ul>
                                    <li>🎨 Developed static and form-based web pages using HTML, CSS, and JavaScript</li>
                                    <li>📱 Focused on responsive layout structure and form validation</li>
                                    <li>⚡ Implemented interactive features and smooth animations</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Featured Projects -->
                    <div class="section-title">
                        <i class="fas fa-rocket"></i>
                        <span>Featured Projects</span>
                    </div>
                    
                    <div class="projects-grid">
                        <div class="project-card">
                            <div class="project-icon">
                                <i class="fas fa-images"></i>
                            </div>
                            <h5>Dreamscape Gallery</h5>
                            <p>Interactive image gallery with lightbox view, category filtering, and smooth animations using vanilla JavaScript. Features autoplay slideshow and keyboard navigation.</p>
                        </div>
                        
                        <div class="project-card">
                            <div class="project-icon">
                                <i class="fas fa-code-branch"></i>
                            </div>
                            <h5>DSA Practice Projects</h5>
                            <p>Implemented core data structures including Arrays, Linked Lists, and Stacks. Solved searching and sorting problems with optimized algorithms.</p>
                        </div>
                        
                        <div class="project-card">
                            <div class="project-icon">
                                <i class="fas fa-database"></i>
                            </div>
                            <h5>Web Technology Projects</h5>
                            <p>Developed static and form-based web pages with focus on layout structure, validation, and responsive design principles.</p>
                        </div>
                        
                        <div class="project-card">
                            <div class="project-icon">
                                <i class="fas fa-user-circle"></i>
                            </div>
                            <h5>Portfolio Website</h5>
                            <p>Personal portfolio with custom cursor, glitch effects, and responsive design. Integrated PDF resume generation functionality.</p>
                        </div>
                    </div>
                    
                    <!-- Education -->
                    <div class="section-title">
                        <i class="fas fa-graduation-cap"></i>
                        <span>Education</span>
                    </div>
                    
                    <div class="education-grid">
                        <div class="edu-card">
                            <i class="fas fa-university"></i>
                            <h6>Bachelor of Computer Science</h6>
                            <div class="school">Bilquis College (Air University)</div>
                            <div class="year">2024 - 2028</div>
                        </div>
                        
                        <div class="edu-card">
                            <i class="fas fa-school"></i>
                            <h6>FSC-ICS</h6>
                            <div class="school">Govt. Associate College for Women</div>
                            <div class="year">2022 - 2024</div>
                        </div>
                        
                        <div class="edu-card">
                            <i class="fas fa-book"></i>
                            <h6>Computer Science</h6>
                            <div class="school">Govt. Girls High School</div>
                            <div class="year">2020 - 2022</div>
                        </div>
                    </div>
                    
                    <!-- Languages & Interests -->
                    <div class="info-grid">
                        <div>
                            <h4 style="color: #667eea; margin-bottom: 15px; font-size: 18px;">
                                <i class="fas fa-language" style="margin-right: 8px;"></i>Languages
                            </h4>
                            
                            <div class="language-item">
                                <span class="language-name">English</span>
                                <div class="language-level">
                                    <div class="level-fill" style="width:90%"></div>
                                </div>
                                <span style="font-size:12px; color:#718096;">90%</span>
                            </div>
                            
                            <div class="language-item">
                                <span class="language-name">Urdu</span>
                                <div class="language-level">
                                    <div class="level-fill" style="width:100%"></div>
                                </div>
                                <span style="font-size:12px; color:#718096;">100%</span>
                            </div>
                            
                            <div class="language-item">
                                <span class="language-name">Punjabi</span>
                                <div class="language-level">
                                    <div class="level-fill" style="width:85%"></div>
                                </div>
                                <span style="font-size:12px; color:#718096;">85%</span>
                            </div>
                        </div>
                        
                        <div>
                            <h4 style="color: #667eea; margin-bottom: 15px; font-size: 18px;">
                                <i class="fas fa-heart" style="margin-right: 8px;"></i>Interests
                            </h4>
                            
                            <div class="interest-tags">
                                <span class="interest-tag"><i class="fas fa-camera"></i> Photography</span>
                                <span class="interest-tag"><i class="fas fa-paint-brush"></i> UI/UX Design</span>
                                <span class="interest-tag"><i class="fas fa-code"></i> Open Source</span>
                                <span class="interest-tag"><i class="fas fa-music"></i> Music</span>
                                <span class="interest-tag"><i class="fas fa-robot"></i> AI</span>
                                <span class="interest-tag"><i class="fas fa-book"></i> Reading</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Footer -->
                <div class="amazing-footer">
                    <div class="footer-content">
                        <div class="social-links">
                            <div class="social-link"><i class="fab fa-github"></i></div>
                            <div class="social-link"><i class="fab fa-linkedin-in"></i></div>
                            <div class="social-link"><i class="fab fa-instagram"></i></div>
                            <div class="social-link"><i class="fab fa-twitter"></i></div>
                        </div>
                        
                        <div class="footer-text">
                            <i class="fas fa-calendar-alt"></i> Last Updated: March 2026
                            <i class="fas fa-map-pin"></i> Rawalpindi, Pakistan
                        </div>
                        
                        <div style="margin-top: 15px; font-size: 12px; opacity: 0.6;">
                            <i class="fas fa-link"></i> github.com/maria-atta-web-dev
                        </div>
                    </div>
                    <div class="watermark">MA</div>
                </div>
            </div>
        `;
        
        document.body.appendChild(pdfContainer);
        
        // Use html2canvas with high quality settings
        const canvas = await html2canvas(pdfContainer, {
            scale: 2.5,
            backgroundColor: '#f5f7fa',
            logging: false,
            allowTaint: true,
            useCORS: true,
            windowWidth: 850,
            windowHeight: pdfContainer.scrollHeight
        });
        
        document.body.removeChild(pdfContainer);
        
        // Create PDF using jsPDF
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'px',
            format: 'a4'
        });
        
        const imgData = canvas.toDataURL('image/png');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
        const width = imgWidth * ratio;
        const height = imgHeight * ratio;
        
        pdf.addImage(imgData, 'PNG', (pdfWidth - width) / 2, 0, width, height);
        
        // Add metadata
        pdf.setProperties({
            title: 'Maria Atta - Amazing Resume',
            subject: 'Professional Resume with Stunning Design',
            author: 'Maria Atta',
            keywords: 'resume, cv, web developer, creative, designer',
            creator: 'Maria Atta'
        });
        
        // Save the PDF with creative filename
        const date = new Date();
        const filename = `Maria_Atta_Amazing_Resume_${date.getFullYear()}_${(date.getMonth()+1).toString().padStart(2,'0')}.pdf`;
        pdf.save(filename);
        
        // Show success message with animation
        showSuccessNotification('✨ Amazing! Your stunning resume is ready! ✨');
        
    } catch (error) {
        console.error('PDF generation error:', error);
        alert('❌ Oops! Something went wrong. Please try again.\n\nError: ' + error.message);
    } finally {
        // Reset button with original text
        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-file-pdf"></i> Download Amazing CV (PDF)';
            btn.disabled = false;
        }, 1000);
    }
}

// Success notification function
function showSuccessNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        padding: 20px 30px;
        border-radius: 15px;
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        box-shadow: 0 20px 40px rgba(102, 126, 234, 0.4);
        z-index: 10000;
        animation: slideInRight 0.5s ease, fadeOut 0.5s ease 2.5s forwards;
        display: flex;
        align-items: center;
        gap: 12px;
        border-left: 5px solid #FECA57;
    `;
    
    notification.innerHTML = `
        <i class="fas fa-check-circle" style="font-size: 24px; color: #FECA57;"></i>
        <span>${message}</span>
        <div style="
            position: absolute;
            bottom: 0;
            left: 0;
            height: 4px;
            width: 100%;
            background: rgba(255,255,255,0.3);
            border-radius: 0 0 15px 15px;
            overflow: hidden;
        ">
            <div style="
                height: 100%;
                width: 100%;
                background: #FECA57;
                animation: shrinkWidth 3s linear forwards;
            "></div>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Add keyframe animations to the page
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes fadeOut {
        to {
            opacity: 0;
            transform: translateX(100%);
        }
    }
    
    @keyframes shrinkWidth {
        from { width: 100%; }
        to { width: 0%; }
    }
`;
document.head.appendChild(style);

// Set as the default download function
window.downloadPDFResume = downloadAmazingPDFResume;