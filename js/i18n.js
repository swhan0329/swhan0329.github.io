// i18n translations
const translations = {
    en: {
        'nav.about': 'About',
        'nav.experience': 'Experience',
        'nav.projects': 'Projects',
        'nav.publications': 'Publications',
        'nav.teaching': 'Teaching',
        'nav.ecosystem': 'AI Ecosystem',
        'nav.media': 'Media',
        'nav.life': 'Life',
        'nav.contact': 'Contact',

        // Site
        'site.name': 'Seowoo Han',

        // Hero
        'hero.name': 'Seowoo Han',
        'hero.greeting': "Hello, I'm",
        'hero.title': 'Impact Engineer',
        'hero.education': 'Ph.D. Candidate, Korea University CS | CMU AI Program (Full Scholarship by IITP, Korea)',
        'hero.description': 'I\'m an Impact Engineer who creates change by solving real problems in society and business. As an AI Native, I use AI not as a tool but as a collaborator to expand the speed and depth of problem-solving. Through mentoring, open-source, and community talks, I share knowledge to help technology reach more people.',
        'hero.cta': 'Get in Touch',
        'hero.projects': 'View Projects',

        // About
        'about.title': 'About Me',
        'about.intro': 'I\'m an <strong>Impact Engineer</strong>. I solve problems to create meaningful change in society and business. As an AI Native, I leverage AI to amplify my capabilities and accelerate solutions. I love sharing knowledge through mentoring, open-source, and community talks.',
        'about.education.korea': '🎓 Korea University, Ph.D. in Computer Science (ABD)',
        'about.education.cmu': '🇺🇸 Carnegie Mellon University AI Intensive Program (Full IITP National Scholarship, Top 31 Nationwide)',
        'about.education.combined': 'Korea Univ. Ph.D. in CS · <span class="edu-secondary">CMU AI Program</span>',
        'about.skills': 'Tech Stack',
        'about.education': 'Education',
        'about.edu.korea': 'Ph.D. Candidate in Computer Science (ABD)',
        'about.edu.cmu': 'Intensive AI Program (IITP Full Scholarship, Top 31 Nationwide)',
        'about.edu.khu.ms': 'M.S. in Electronic Engineering',
        'about.edu.khu.bs': 'B.S. in Electronic Engineering, Summa Cum Laude',

        // Experience
        'experience.title': 'Experience',
        'exp.bgarage.narrative': "Automated warehouse inventory inspection with drones. Developed vision AI systems to extract label information from drone-captured images in warehouse environments, and now enhancing perception systems for safe autonomous drone navigation. Pushing the boundaries of mono RGB depth estimation.",
        'exp.visit.narrative': 'Led the enhancement of RoundPic, an existing 360° panoramic camera app. With a team of 5 engineers, advanced its AI-based inpainting and stitching algorithms to reduce visible seams in panoramic images, helping grow the customer base 3x in just 2 months.',
        'exp.viewmagine.narrative': 'Directed technical strategy for AI-powered infrastructure inspection. Our VODA system detects building cracks at 0.01mm precision using drone imagery.',
        'exp.keti.company': 'Korea Electronics Technology Institute',
        'exp.keti.narrative': 'Developed real-time traffic monitoring AI for smart city infrastructure. Built detection pipelines using YOLO and DeepSORT, achieving 98% accuracy on multi-CCTV feeds. This research led to 2 international publications.',
        'exp.webarter.narrative': 'Founded a social media startup at CMU targeting U.S. college students. Our mission was breaking filter bubbles by exposing students to diverse perspectives. Built the app with Flutter and ML-powered recommendation systems. The experience taught me how to ship products that people actually use.',
        'exp.cesInterview': 'CES 2023 AVING Interview',
        'exp.linkedinPost': 'LinkedIn Post',
        'exp.githubRepo': 'GitHub Repo',
        'exp.aihubDataset': 'AIHub Dataset',

        // Projects
        'projects.title': 'Side Projects',
        'projects.impactbridge.title': 'ImpactBridge',
        'projects.impactbridge.desc': 'Platform connecting social innovators with tech talent. Supported by Kakao Impact.',
        'projects.retext.desc': 'AI document summarization for seniors and visually impaired users. Accessibility-first UX.',
        'projects.findleader.title': 'Find My Leader',
        'projects.findleader.desc': "AI-powered election analysis app helping voters understand candidates' stances. 2,000+ users.",
        'projects.explore.desc': 'AI-generated personal branding sentences. Built in 7 hours using React + AWS Lambda.',
        'projects.techabreak.title': 'Tech a Break',
        'projects.techabreak.desc': 'An email interview series about how people are living through the AI transition. I started it to document human stories and emotions around change, not just tactical advice on how to use AI better.',
        'projects.dva.desc': 'A 2-year nonprofit collaboration as part of a Tech for Impact pilot cohort. Developed an AI web solution to detect and track tourism boats, protecting the habitat of Jeju\'s Indo-Pacific bottlenose dolphins.',
        'projects.dva.kickoff': 'Kickoff Meeting',
        'projects.dva.journey': 'Project LOG',
        'projects.dva.partnership': 'Tech For Impact MOU',
        'projects.dva.moducon': 'MODUCON Talk',
        'projects.dva.season2': 'Season 2 Start',
        'projects.dva.usertest': 'User Testing',
        'projects.dva.documentary': 'Mini Documentary',
        'projects.dva.media': 'Media & Articles',
        'projects.dva.modulabs': 'Modulabs Blog',
        'projects.dva.brunch': 'Kakao Impact Brunch',
        'projects.badge.kakao': 'Kakao Impact Support',
        'projects.roundpic.desc': '360° panoramic image creation app enhanced with AI-based inpainting and stitching algorithms',
        'projects.voda.desc': 'Drone-based building defect analysis and crack detection system',
        'projects.traffic.title': 'Traffic Analysis',
        'projects.traffic.desc': "Real-time traffic flow analysis using CCTV bird's-eye view conversion",
        'projects.posvision.desc': 'OCR-based parking lot management and license plate recognition system',
        'projects.webarter.desc': 'Co-founded as CTO. Social network for US college students with ML-powered recommender systems.',
        'projects.viewMore': 'Mini Documentary',
        'projects.tryApp': 'Try App',
        'projects.readNewsletter': 'Read Newsletter',
        'projects.devStory': 'Dev Story',
        'projects.experiment': 'Experiment Review',

        'publications.title': 'Publications',
        'publications.intlJournals': 'International Journals',
        'publications.intlConfs': 'International Conferences',
        'publications.domestic': 'Domestic Publications',
        'publications.viewPaper': 'View Paper',

        // Life
        'life.title': 'Life & Hobbies',
        'life.travel.title': 'Travel',
        'life.travel.desc': 'Visited 5 of 6 continents—Switzerland, UK, Czech Republic, Germany, France, USA, Thailand, Guam, Japan, China, South Africa, and more. Oceania is next! I love stepping out of the familiar and embracing new cultures.',
        'life.camping.title': 'Camping',
        'life.camping.desc': 'Escaping to nature and disconnecting from the digital world.',
        'life.nightsky.title': 'Stargazing',
        'life.nightsky.desc': 'Earth science enthusiast. I love gazing at stars, the moon, and the night sky.',
        'life.coding.title': 'Side Projects',
        'life.coding.desc': 'Outstanding execution—if I want to build it, I build it. No hesitation.',
        'life.photo.title': 'Photography',
        'life.photo.desc': 'Capturing moments and things I love. Recording life as it happens.',
        'life.books.title': 'Reading',
        'life.books.desc': 'Continuous learning through books across various genres.',

        // Teaching
        'teaching.title': 'Teaching & Education',
        'teaching.intro': 'Sharing knowledge in AI and Computer Vision through various educational platforms.',
        'teaching.cat.instructor': 'Instructor',
        'teaching.cat.mentor': 'Tutor & Mentor',
        'teaching.cat.ambassador': 'Ambassador',
        'teaching.topic.cv': 'Computer Vision',
        'teaching.topic.chatgpt': 'ChatGPT & Generative AI',
        'teaching.topic.ethics': 'AI Ethics',
        'teaching.topic.career': 'AI Career',
        'teaching.topic.programming': 'AI Introduction',
        'teaching.topic.career.mentor': 'Career',
        'teaching.topic.ai_mentoring': 'AI Mentoring',
        'teaching.topic.ocr': 'OCR Challenges',
        'teaching.topic.ds': 'Data Science & AI',
        'teaching.topic.bootcamp': 'AI Bootcamp',
        'teaching.platform.fastcampus': 'FastCampus',
        'teaching.platform.teamsparta': 'TeamSparta / Sparta Coding Club',
        'teaching.platform.modulabs': 'MODULABS',
        'teaching.platform.wantedlab': 'WantedLab',
        'teaching.platform.elice': 'Elice (Alice Coding)',
        'teaching.platform.codeit': 'Codeit',
        'teaching.platform.cv_mentor': 'Likelion, Upstage, Day1Company',
        'teaching.platform.ocr_mentor': 'Upstage, Day1Company',
        'teaching.platform.naver': 'NAVER Connect Foundation',
        'teaching.platform.sparta': 'Sparta Coding Club, Codeit',

        // Talks
        'nav.talks': 'Talks',
        'talks.title': 'Invited Talks',
        'talks.type.panel': 'Panel Talk',
        'talks.iwd.title': "International Women's Day: Female Leadership in AI",
        'talks.iwd.subtitle': 'Canadian & UK Embassies in Seoul',
        'talks.iwd.desc': 'Invited panel speaker for the March 9, 2026 event co-hosted by the Canadian and UK Embassies in Seoul, joined by 35 participants including students and early-career AI professionals.',
        'talks.leadher.subtitle': 'Personal Branding in the AI Era',
        'talks.leadher.desc': 'A talk for 80+ women developers on how personal branding, not job titles, will define our careers in the AI era. Balancing measured skepticism with cautious optimism while actively adapting to change.',
        'talks.aiconf.title': 'AI for Good Conference 2025',
        'talks.aiconf.subtitle': 'Kakao Impact x Social Value Festa',
        'talks.aiconf.desc': 'Presentation on AI for social good and tech for impact initiatives at Kakao Impact x Social Value Festa.',
        'talks.code.subtitle': 'The Secret of Developer Leadership',
        'talks.code.desc': 'A session on balancing "I" and "We" in leadership. Leadership has no fixed formula—everyone leads differently, and followership is just as essential.',
        'talks.modupop.subtitle': 'DVA LAB: Marine Ecosystem AI Monitoring',
        'talks.modupop.desc': 'Vision AI-based drone video analysis web service for Jeju dolphin protection, including ship speed estimation using BEV transformation.',
        'talks.jeju.desc': 'Talk on protecting Indo-Pacific bottlenose dolphins near Jeju using AI-based ship detection and tracking technology.',
        'talks.digilab.subtitle': 'Changing the World with Technology',
        'talks.digilab.desc': 'Presentation on AI-driven conservation efforts for Indo-Pacific bottlenose dolphins, inspired by real-time drone vision systems.',
        'talks.wtm.desc': "Talk on how emerging technologies can shape tomorrow, drawing lessons from DVA LAB's social impact projects.",
        'talks.moducon.desc': 'Presentation on the journey of uniting individual talents to solve social problems through collaborative AI projects, inspired by DVA LAB.',
        'talks.google.desc': 'Founded a social media startup targeting U.S. college students, focused on breaking filter bubbles and encouraging diverse perspectives.',
        'talks.posco.title': 'POSCO E&C Smart Construction Academy',
        'talks.posco.desc': 'Invited lecture on AI applications and positive influence in construction technology.',
        'talks.watchVideo': 'Watch Video',
        'talks.talkReview': 'Talk Review',
        'talks.watchReplay': 'Watch Replay',
        'talks.eventInfo': 'Event Info',

        // Experience
        'exp.interview': 'Interview',
        'exp.viewmagine.narrative': 'Directed technical strategy for AI-powered infrastructure inspection. Our VODA system detects building cracks at 0.01mm precision using drone imagery. Represented the company at CES 2023 in Las Vegas, showcasing our drone-based crack detection technology.',

        // Contact
        'contact.title': 'Get in Touch',
        'contact.text': "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",

        // Media
        'media.title': 'Media & Archive',

        // AI Ecosystem
        'ecosystem.title': 'AI Ecosystem',
        'ecosystem.ambassador.desc': 'Contributing to the AI developer ecosystem in Korea through mentoring, content creation, and community building.',
        'ecosystem.techabreak.date': 'Ongoing',
        'ecosystem.techabreak.desc': 'An email interview series about how people are living through the AI transition. I started it to document human stories and emotions around change, not just tactical advice on how to use AI better.',
        'ecosystem.btn.linkedin': '📝 LinkedIn',
        'ecosystem.btn.articles': '📰 Articles',
        'ecosystem.btn.events': '🎪 Events',
        'ecosystem.btn.series': '✉️ Series',
        'ecosystem.comingSoon': 'Coming soon',
        'ecosystem.article.codex101': 'Codex 101 - OpenAI Codex Complete Guide',
        'ecosystem.article.aiAgent': 'Understanding AI Agent Concepts',
        'ecosystem.article.codexBestPractices': 'OpenAI Codex Best Practices (Korean Summary)',
        'ecosystem.article.agentWorkflow': 'Agent Workflow Evolution with OmC, OmX, and Codex',
        'ecosystem.article.dearHumans': "Dear Humans, What AI Still Can't Answer for Us",
        'ecosystem.article.codexSimple': 'Codex, Explained Simply',
        'ecosystem.article.pluginsEn': 'How Plugins Actually Work in Codex (EN)',
        'ecosystem.article.pluginsKo': 'How Plugins Actually Work in Codex (KO)',
        'ecosystem.link.codexAnnouncement': 'OpenAI Codex Ambassador announcement',
        'ecosystem.link.meetupRecruitment': 'Codex Community Meetup - Seoul 3.11 (Host Recap)',
        'ecosystem.link.codex101Story': 'Why I built Codex 101',
        'ecosystem.link.aiAgentStory': 'Why I wrote Understanding AI Agent Concepts',
        'ecosystem.link.ralphtonRecap': '2026.02.28-03.01 Ralphton (Field Recap)',
        'ecosystem.link.codexForOpenSource': 'Codex for Open Source program announcement',
        'ecosystem.link.codexWebinar': 'OpenAI webinar: multi-agent workflows with Codex',
        'ecosystem.link.techabreak.substack': 'Read the interview series',
        'ecosystem.link.techabreak.story': 'Why I started Tech a Break',
        'ecosystem.event.meetupHost': '2026.03.11 Codex Community Meetup - Seoul (Solo Host)',
        'ecosystem.event.ralphtonSponsor': '2026.02.28-03.01 Ralphton (Community Sponsorship)',

        'media.profile.title': 'Wanted Lab People Encyclopedia',
        'media.profile.desc': 'An honest conversation about finding meaning in work, dealing with workplace stress and gaslighting, and the lessons learned along the way.',
        'media.archive.title': 'OpenAI Codex Community Meetup Archive',
        'media.archive.desc': 'A collection of the March 11, 2026 Seoul meetup event page and edited talk videos, including the OmX demo session and long-running harness session.',
        'media.btn.article': 'View Article',
        'media.btn.youtube': 'Watch on YouTube',
        'media.btn.event': 'Event Page',
        'media.btn.ax': 'AX Talk Video',
        'media.btn.harness': 'Harness Talk Video',
        'media.btn.omx': 'OmX Talk Video',
        'media.modulabs.title': 'DVA LAB Story',
        'media.modulabs.desc': 'Interview on building "safe greenhouses" for technical experiments and community-led AI projects.',

        // Partners
        'partner.likelion': 'Likelion',
        'partner.naver': 'NAVER Connect',
        'partner.fastcampus': 'FastCampus',
        'partner.modulabs': 'MODULABS',
        'partner.wanted': 'WantedLab',
        'partner.sparta': 'Sparta Coding Club',
        'partner.elice': 'Elice',
        'partner.day1': 'Day1Company',
        'partner.codeit': 'Codeit',

        // Ambassador
        'ambassador.codex': 'Codex Ambassador',

        // Footer
        'footer.rights': 'All rights reserved.'
    },
    ko: {
        // Navigation
        'nav.about': '소개',
        'nav.experience': '경력',
        'nav.projects': '프로젝트',
        'nav.publications': '논문',
        'nav.teaching': '교육',
        'nav.ecosystem': 'AI 생태계',
        'nav.media': '미디어',
        'nav.life': '일상',
        'nav.contact': '연락처',

        // Site
        'site.name': '한서우',

        // Hero
        'hero.name': '한서우입니다.',
        'hero.greeting': '안녕하세요, ',
        'hero.title': '임팩트 엔지니어',
        'hero.education': '고려대학교 컴퓨터학과 박사 수료 · <a href="https://www.donga.com/news/Society/article/all/20190820/97026745/1" class="edu-link" target="_blank" rel="noopener">CMU AI 프로그램 (전액 장학, IITP 지원)</a>',
        'hero.description': '저는 사회와 비즈니스의 실제 문제를 해결하며 변화를 만들어내는 임팩트 엔지니어입니다. AI Native로서 AI를 도구가 아닌 동료로 활용해 문제 해결 속도와 깊이를 확장합니다. 멘토링, 오픈소스, 커뮤니티 강연을 통해 지식을 공유하며 기술이 더 많은 사람에게 닿도록 노력합니다.',
        'hero.cta': '연락하기',
        'hero.projects': '프로젝트 보기',

        // About
        'about.title': '소개',
        'about.intro': '저는 <strong>임팩트 엔지니어</strong>입니다. 사회와 비즈니스에 의미 있는 변화를 만들기 위해 문제를 해결합니다. AI Native로서 AI를 활용해 제 역량을 확장하고 솔루션을 가속화합니다. 멘토링, 오픈소스, 커뮤니티 강연을 통해 지식을 나누는 것을 좋아합니다.',
        'about.education.korea': '🎓 고려대학교 컴퓨터학과 박사 수료 (ABD)',
        'about.education.cmu': '🇺🇸 Carnegie Mellon University AI 집중 프로그램 수료 (IITP 전액 국가 장학, 전국 31명 선발)',
        'about.education.combined': '🎓 고려대학교 컴퓨터학과 박사 수료 · <span class="edu-secondary">CMU AI 집중 프로그램 (IITP 국가 장학)</span>',
        'about.skills': '기술 스택',
        'about.education': '학력',
        'about.edu.korea': '컴퓨터공학 박사 수료 (ABD)',
        'about.edu.cmu': 'AI 집중 프로그램 (IITP 전액 장학, 전국 31명 선발)',
        'about.edu.khu.ms': '전자공학 석사',
        'about.edu.khu.bs': '전자공학 학사, 최우수 졸업',

        // Experience
        'experience.title': '경력',
        'exp.bgarage.narrative': '물류 재고 조사 자동화를 위해 드론을 활용하는 시스템을 개발했습니다. 창고 환경에서 드론이 찍은 이미지에서 라벨 정보를 추출하는 비전 AI 시스템을 개발했고, 드론 안전 자율주행을 위한 perception 시스템을 고도화하고 있습니다.',
        'exp.visit.narrative': '기존 360° 파노라마 카메라 앱 RoundPic의 고도화를 리드했습니다. 5명의 엔지니어 팀과 함께 AI 기반 Inpainting 및 Stitching 알고리즘을 개선해 파노라마 이미지의 눈에 띄는 이음새 문제를 해결했고, 2개월 만에 고객사를 3배로 성장시켰습니다.',
        'exp.viewmagine.narrative': 'AI 기반 인프라 검사를 위한 기술 전략을 총괄했습니다. VODA 시스템은 드론 영상으로 0.01mm 정밀도의 건물 균열을 탐지합니다.',
        'exp.keti.company': '한국전자기술연구원',
        'exp.keti.narrative': '스마트시티 인프라를 위한 실시간 교통 모니터링 AI를 개발했습니다. YOLO와 DeepSORT로 다중 CCTV 피드에서 98% 정확도를 달성했고, 이 연구로 2편의 국제 논문을 발표했습니다.',
        'exp.webarter.narrative': 'CMU에서 미국 대학생을 타겟으로 소셜 미디어 스타트업을 창업했습니다. 필터 버블을 깨고 다양한 관점을 보여주는 것이 미션이었습니다. Flutter와 ML 추천 시스템으로 앱을 만들었고, 사람들이 실제로 사용하는 제품을 출시하는 법을 배웠습니다.',
        'exp.cesInterview': 'CES 2023 AVING 인터뷰',
        'exp.linkedinPost': 'LinkedIn 글',
        'exp.githubRepo': 'GitHub 레포',
        'exp.aihubDataset': 'AIHub 데이터셋',

        'projects.title': '사이드 프로젝트',
        'projects.impactbridge.title': '임팩트브릿지',
        'projects.impactbridge.desc': '사회혁신가와 기술 인재를 연결하는 플랫폼. 카카오임팩트 지원.',
        'projects.retext.desc': '시니어와 저시력자를 위한 AI 문서 요약. 접근성 중심 UX 설계.',
        'projects.findleader.title': '나의 리더를 찾아서',
        'projects.findleader.desc': 'LLM 기반 대선 후보 분석 앱. Vibe Coding으로 3시간 개발, 2,000+ 사용자.',
        'projects.explore.desc': '"나다움"을 표현하는 문장 생성 AI. 7시간 만에 React + AWS Lambda로 개발.',
        'projects.techabreak.title': 'Tech a Break',
        'projects.techabreak.desc': 'AI를 “더 잘 쓰는 방법”보다, 그 변화를 살아가는 사람들의 경험과 감정을 이메일 인터뷰 시리즈로 기록하는 프로젝트입니다. 천천히, 하지만 오래 남는 이야기를 남기고 싶어 시작했습니다.',
        'projects.dva.desc': 'Tech for Impact 파일럿 기수로 약 2년간 진행한 비영리 협업 프로젝트. 제주 남방큰돌고래의 서식지 보존을 위해 관광 보트를 AI로 탐지·추적하는 웹 솔루션을 개발했습니다.',
        'projects.dva.kickoff': '킥오프 미팅',
        'projects.dva.journey': '프로젝트 로그',
        'projects.dva.partnership': '테크포임팩트 협약',
        'projects.dva.moducon': 'MODUCON 발표',
        'projects.dva.season2': '2기 시작',
        'projects.dva.usertest': '유저 테스트',
        'projects.dva.documentary': '미니다큐',
        'projects.dva.media': '미디어 & 아티클',
        'projects.dva.modulabs': '모두의연구소 블로그',
        'projects.dva.brunch': '카카오임팩트 브런치',
        'projects.badge.kakao': '카카오임팩트 지원',
        'projects.roundpic.desc': 'AI 기반 Inpainting 및 Stitching 알고리즘을 고도화한 360° 파노라마 이미지 생성 앱',
        'projects.voda.desc': '드론 기반 건물 결함 분석 및 균열 탐지 시스템',
        'projects.traffic.title': '교통 분석',
        'projects.traffic.desc': 'CCTV 조감도 변환을 활용한 실시간 교통 흐름 분석',
        'projects.posvision.desc': 'OCR 기반 주차장 관리 및 번호판 인식 시스템',
        'projects.webarter.desc': 'CTO/Co-founder. ML 추천 시스템을 적용한 미국 대학생 소셜 네트워크 서비스.',
        'projects.viewMore': '미니다큐',
        'projects.tryApp': '앱 체험',
        'projects.readNewsletter': '뉴스레터 읽기',
        'projects.devStory': '개발 스토리',
        'projects.experiment': '실험 회고',

        'publications.title': '논문',
        'publications.intlJournals': '국제 저널',
        'publications.intlConfs': '국제 학회',
        'publications.domestic': '국내 논문',
        'publications.viewPaper': '논문 보기',

        // Life
        'life.title': '일상 & 취미',
        'life.travel.title': '여행',
        'life.travel.desc': '스위스, 영국, 체코, 독일, 프랑스, 미국, 태국, 괌, 일본, 중국, 남아프리카공화국 등 6대륙 중 5대륙을 다녀왔습니다. 다음은 오세아니아! 익숙함에서 벗어나 새로운 문화를 받아들이는 것을 좋아합니다.',
        'life.camping.title': '캠핑',
        'life.camping.desc': '자연 속으로 떠나 디지털 세계에서 단절되는 시간.',
        'life.nightsky.title': '밤하늘 구경',
        'life.nightsky.desc': '지구과학을 좋아하고, 별과 달, 하늘을 바라보는 것을 좋아합니다.',
        'life.coding.title': '사이드 프로젝트',
        'life.coding.desc': '뛰어난 실행력으로 만들고 싶은 게 있으면 무엇이든 만듭니다.',
        'life.photo.title': '사진',
        'life.photo.desc': '기록 남기는 것을 좋아해서, 좋아하는 것들을 사진으로 담습니다.',
        'life.books.title': '독서',
        'life.books.desc': '다양한 장르의 책을 통해 계속 배움을 이어갑니다.',

        // Teaching
        'teaching.title': '교육 활동',
        'teaching.intro': 'AI와 컴퓨터 비전 분야의 지식을 다양한 교육 플랫폼을 통해 전달하고 있습니다.',
        'teaching.cat.instructor': '강사',
        'teaching.cat.mentor': '튜터 & 멘토',
        'teaching.cat.ambassador': '앰배서더',
        'teaching.topic.cv': '컴퓨터 비전',
        'teaching.topic.chatgpt': 'ChatGPT & 생성형 AI',
        'teaching.topic.ethics': 'AI 윤리',
        'teaching.topic.career': 'AI 커리어',
        'teaching.topic.programming': 'AI 개론',
        'teaching.topic.career.mentor': '커리어',
        'teaching.topic.ai_mentoring': 'AI 멘토링',
        'teaching.topic.ocr': 'OCR 챌린지',
        'teaching.topic.ds': '데이터 사이언스 & AI',
        'teaching.topic.bootcamp': 'AI 부트캠프',
        'teaching.platform.fastcampus': '패스트캠퍼스',
        'teaching.platform.teamsparta': '팀스파르타 / 스파르타코딩클럽',
        'teaching.platform.modulabs': '모두의연구소',
        'teaching.platform.wantedlab': '원티드랩',
        'teaching.platform.elice': '엘리스 코딩',
        'teaching.platform.codeit': '코드잇',
        'teaching.platform.cv_mentor': '멋쟁이사자처럼, 업스테이지, 데이원컴퍼니',
        'teaching.platform.ocr_mentor': '업스테이지, 데이원컴퍼니',
        'teaching.platform.naver': '네이버 커넥트재단',
        'teaching.platform.sparta': '스파르타코딩클럽, 코드잇',

        // Talks
        'nav.talks': '발표',
        'talks.title': '초청 발표',
        'talks.type.panel': '패널 토크',
        'talks.iwd.title': "International Women's Day: Female Leadership in AI",
        'talks.iwd.subtitle': '주한 캐나다대사관 · 주한영국대사관 공동 주최',
        'talks.iwd.desc': '2026년 3월 9일에 열리는 행사에 패널 토크 연사로 초청되었습니다. AI 분야에 관심 있는 학부/대학원생 및 커리어 초기 실무자 등 35명이 등록한 자리입니다.',
        'talks.leadher.subtitle': 'AI 시대, 직함이 아니라 브랜드가 나를 살린다',
        'talks.leadher.desc': '80여 명의 여성 개발자들과 함께한 자리. AI가 가져올 미래는 예측 불가능하지만, 지나친 회의주의나 맹목적 낙관주의를 경계하며 균형 잡힌 시각으로 변화에 능동적으로 대응해야 합니다.',
        'talks.aiconf.title': '돕는AI컨퍼런스 2025',
        'talks.aiconf.subtitle': '카카오임팩트 x 사회가치페스타',
        'talks.aiconf.desc': '카카오임팩트 x 사회가치페스타에서 AI for Good과 Tech for Impact에 대한 발표.',
        'talks.code.subtitle': '개발자 리더십의 비밀',
        'talks.code.desc': '리더십에서 "나"와 "우리"의 균형에 대한 세션. 리더십에 정해진 공식은 없으며, 모두가 다르게 리드하고, 팔로워십도 그만큼 중요합니다.',
        'talks.modupop.subtitle': 'DVA LAB: 해양 생태계 AI 모니터링',
        'talks.modupop.desc': '제주 돌고래 보호를 위한 Vision AI 기반 드론 영상 분석 웹서비스 - BEV 변환을 활용한 선박 속도 추정.',
        'talks.jeju.desc': 'AI 기반 선박 탐지 및 추적 기술을 활용한 제주 남방큰돌고래 보호에 관한 발표.',
        'talks.digilab.subtitle': '기술로 세상을 바꾸다',
        'talks.digilab.desc': '실시간 드론 비전 시스템에서 영감을 받은 남방큰돌고래 AI 보전 활동에 대한 발표.',
        'talks.wtm.desc': 'DVA LAB의 사회적 임팩트 프로젝트에서 얻은 교훈을 바탕으로 신기술이 미래를 어떻게 형성할 수 있는지에 대한 발표.',
        'talks.moducon.desc': 'DVA LAB에서 영감을 받아 협업 AI 프로젝트를 통해 개인의 재능을 모아 사회 문제를 해결한 여정에 대한 발표.',
        'talks.google.desc': '필터 버블을 깨고 다양한 관점을 볼 수 있도록 하는 데 초점을 맞춘 미국 대학생 대상 소셜 미디어 스타트업을 창업했습니다.',
        'talks.posco.title': '포스코E&C 스마트 건설 아카데미',
        'talks.posco.desc': 'AI 활용 및 건설 기술의 긍정적 영향력에 대한 초청 강연.',
        'talks.watchVideo': '영상 보기',
        'talks.talkReview': '발표 후기',
        'talks.watchReplay': '발표 다시보기',
        'talks.eventInfo': '행사 소개',

        // Experience
        'exp.interview': '인터뷰',
        'exp.viewmagine.narrative': 'AI 기반 인프라 검사를 위한 기술 전략을 총괄했습니다. VODA 시스템은 드론 영상으로 0.01mm 정밀도의 건물 균열을 탐지합니다. CES 2023에서 회사를 대표하여 드론 기반 균열 탐지 기술을 선보였습니다.',

        // Contact
        'contact.title': '연락하기',
        'contact.text': '새로운 프로젝트, 창의적인 아이디어, 또는 함께할 기회에 대해 언제든 연락해 주세요.',

        // Media
        'media.title': '미디어 & 아카이브',

        // AI Ecosystem
        'ecosystem.title': 'AI 생태계',
        'ecosystem.ambassador.desc': '한국에서 멘토링, 콘텐츠 제작, 커뮤니티 빌딩을 통해 AI 개발자 생태계에 기여하고 있습니다.',
        'ecosystem.techabreak.date': '진행 중',
        'ecosystem.techabreak.desc': 'AI를 “더 잘 쓰는 방법”보다, 그 변화를 살아가는 사람들의 경험과 감정을 이메일 인터뷰 시리즈로 기록하는 프로젝트입니다. 천천히, 하지만 오래 남는 이야기를 남기고 싶어 시작했습니다.',
        'ecosystem.btn.linkedin': '📝 링크드인',
        'ecosystem.btn.articles': '📰 아티클',
        'ecosystem.btn.events': '🎪 행사',
        'ecosystem.btn.series': '✉️ 시리즈',
        'ecosystem.comingSoon': '업데이트 예정',
        'ecosystem.article.codex101': 'Codex 101 - OpenAI Codex 완전 가이드',
        'ecosystem.article.aiAgent': 'AI Agent 개념 이해하기',
        'ecosystem.article.codexBestPractices': 'OpenAI Codex Best Practices 한국어 정리',
        'ecosystem.article.agentWorkflow': '에이전트 시대, 우리가 설계해야 할 것은 모델이 아니라 시스템이다',
        'ecosystem.article.dearHumans': 'Dear, Humans: 딸깍의 시대에 우리는 왜 여전히 자기 삶을 살아봐야 할까',
        'ecosystem.article.codexSimple': 'Codex, 쉽게 말해본다면',
        'ecosystem.article.pluginsEn': 'How Plugins Actually Work in Codex (영문)',
        'ecosystem.article.pluginsKo': 'Codex에서 Plugin이 실제로 어떻게 동작하는가 (국문)',
        'ecosystem.link.codexAnnouncement': 'OpenAI Codex Ambassador 선정 소식',
        'ecosystem.link.meetupRecruitment': 'Codex Community Meetup - Seoul 3.11 개최 후기',
        'ecosystem.link.codex101Story': 'Codex 101을 만들게 된 이야기',
        'ecosystem.link.aiAgentStory': 'AI Agent 개념 이해하기를 쓰게 된 이야기',
        'ecosystem.link.ralphtonRecap': '2026.02.28-03.01 Ralphton 참관 후기',
        'ecosystem.link.codexForOpenSource': 'Codex for Open Source 프로그램 소개',
        'ecosystem.link.codexWebinar': 'OpenAI 웨비나: Codex 멀티 에이전트 워크플로우',
        'ecosystem.link.techabreak.substack': '인터뷰 시리즈 읽기',
        'ecosystem.link.techabreak.story': 'Tech a Break를 시작한 이유',
        'ecosystem.event.meetupHost': '2026.03.11 Codex Community Meetup - Seoul (단독 호스트)',
        'ecosystem.event.ralphtonSponsor': '2026.02.28-03.01 Ralphton (커뮤니티 후원)',

        'media.profile.title': '원티드랩 인물도감',
        'media.profile.desc': '일의 의미, 직장 내 스트레스와 가스라이팅을 극복한 경험, 그리고 그 과정에서 배운 것들에 대한 솔직한 이야기.',
        'media.archive.title': 'OpenAI Codex Community Meetup 아카이브',
        'media.archive.desc': '2026년 3월 11일 서울 밋업의 행사 페이지와 편집된 발표 영상 모음입니다. OmX 데모 세션과 long-running harness 세션을 다시 볼 수 있습니다.',
        'media.btn.article': '인물도감 보러가기',
        'media.btn.youtube': '유튜브 보러가기',
        'media.btn.event': '행사 페이지',
        'media.btn.ax': 'AX 발표 영상',
        'media.btn.harness': 'Harness 발표 영상',
        'media.btn.omx': 'OmX 발표 영상',
        'media.modulabs.title': 'DVA LAB 스토리',
        'media.modulabs.desc': '기술 실험을 위한 "안전한 온실"을 만들고 커뮤니티 주도 AI 프로젝트를 이끄는 이야기.',

        // Partners
        'partner.likelion': '멋쟁이사자처럼',
        'partner.naver': '네이버 커넥트재단',
        'partner.fastcampus': '패스트캠퍼스',
        'partner.modulabs': '모두의연구소',
        'partner.wanted': '원티드랩',
        'partner.sparta': '스파르타코딩클럽',
        'partner.elice': '엘리스',
        'partner.day1': '데이원컴퍼니',
        'partner.codeit': '코드잇',

        // Ambassador
        'ambassador.codex': 'Codex Ambassador',

        // Footer
        'footer.rights': 'All rights reserved.'
    }
};

// Current language
let currentLang = 'en';

// Detect browser language
function detectLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    // Check if Korean
    if (browserLang.startsWith('ko')) {
        return 'ko';
    }
    return 'en';
}

// Apply translations
function applyTranslations(lang) {
    if (!translations[lang]) {
        lang = detectLanguage();
        if (!translations[lang]) {
            lang = 'en';
        }
    }

    currentLang = lang;
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // Use innerHTML if translation contains HTML tags
            const translation = translations[lang][key];
            if (translation.includes('<') && translation.includes('>')) {
                el.innerHTML = translation;
            } else {
                el.textContent = translation;
            }
        }
    });

    // Handle data-i18n-html for HTML content translations
    const htmlElements = document.querySelectorAll('[data-i18n-html]');
    htmlElements.forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Update language toggle button
    const langText = document.querySelector('.lang-text');
    if (langText) {
        langText.textContent = lang === 'ko' ? 'EN' : '한';
    }

    // Save preference
    localStorage.setItem('lang', lang);
}

// Toggle language
function toggleLanguage() {
    const newLang = currentLang === 'en' ? 'ko' : 'en';
    applyTranslations(newLang);
}

// Initialize i18n
function initI18n() {
    // Check localStorage first, then detect browser language
    const savedLang = (localStorage.getItem('lang') || '').toLowerCase();
    let lang = detectLanguage();
    if (savedLang.startsWith('ko')) {
        lang = 'ko';
    } else if (savedLang.startsWith('en')) {
        lang = 'en';
    }

    applyTranslations(lang);
}

// Export for main.js
window.i18n = {
    init: initI18n,
    toggle: toggleLanguage,
    apply: applyTranslations
};
