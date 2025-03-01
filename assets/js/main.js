/*
	Story by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

// timeline.js

document.addEventListener("DOMContentLoaded", function () {
    const events = document.querySelectorAll(".myTL-event");
    events.forEach(event => {
        event.addEventListener("mouseover", function () {
            event.querySelector(".myTL-event-content").style.opacity = "1";
        });
        event.addEventListener("mouseout", function () {
            event.querySelector(".myTL-event-content").style.opacity = "0";
        });
    });
});


// 냉모밀 프로젝트 클릭 시 inner1으로 스크롤
document.getElementById('link1').addEventListener('click', function (e) {
    e.preventDefault(); // 링크의 기본 동작을 막음
    document.querySelector('.inner1').scrollIntoView({
        behavior: 'smooth',  // 부드럽게 스크롤
        block: 'start'       // 상단에 맞춤
    });
});

// 블로그 플랫폼 클릭 시 inner2로 스크롤
document.getElementById('link2').addEventListener('click', function (e) {
    e.preventDefault(); // 링크의 기본 동작을 막음
    document.querySelector('.inner2').scrollIntoView({
        behavior: 'smooth',  // 부드럽게 스크롤
        block: 'start'       // 상단에 맞춤
    });
});

// 블로그 플랫폼 클릭 시 inner3로 스크롤
document.getElementById('link3').addEventListener('click', function (e) {
    e.preventDefault(); // 링크의 기본 동작을 막음
    document.querySelector('.inner3').scrollIntoView({
        behavior: 'smooth',  // 부드럽게 스크롤
        block: 'start'       // 상단에 맞춤
    });
});


// 모달과 관련된 요소 가져오기
const modal = document.getElementById("contact-modal");
const btn = document.getElementById("contact-btn");
const closeBtn = document.getElementsByClassName("close")[0];

// 버튼 클릭 시 모달 열기
btn.onclick = function () {
    modal.style.display = "flex";
}

// 닫기 버튼 클릭 시 모달 닫기
closeBtn.onclick = function () {
    modal.style.display = "none";
}

// 모달 바깥 영역 클릭 시 모달 닫기
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function showDetails1(type) {
    const detailsSection = document.getElementById("details-section1");
    const detailsContent = document.getElementById("details-content1");

    // 각 항목에 대한 내용 정의
    const details = {
        ref: `
		<div style="display: flex; justify-content: space-between; align-items: center;">
			<div>
				<h3>
					<a href="https://github.com/1ceOut" target="_blank" rel="noopener noreferrer">
						<i class="fab fa-github"></i> git
					</a>
				</h3>
				<h3>
					<a href="https://docs.google.com/presentation/d/1is8VVNO42OjHbHKoKOktq5fW_JwTGoXTreb_RYrGAq4/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
						<i class="fas fa-file-alt"></i> 발표자료
					</a>
				</h3>
				<h3>
    <a href="https://www.youtube.com/watch?v=pwU9s9rRZQE" target="_blank" rel="noopener noreferrer">
       <i class="fas fa-file-alt"></i> 홍보영상
    </a>
</h3>

			</div>
			<div style="width: 60%;">
				<iframe width="100%" height="315" 
				src="https://www.youtube.com/embed/4FjUpdmVVVY?start=5895&autoplay=1&cc_load_policy=0&mute=1" 
				title="YouTube video player" frameborder="0" 
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
				</iframe>
			</div>
		</div>


			`,
        tech: `
            <h2>사용 기술</h2>
Frontend
<p>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/React%20Router%20DOM%20v6-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router DOM v6">
  <img src="https://img.shields.io/badge/Zustand-FF5D01?style=for-the-badge&logo=zustand&logoColor=white" alt="Zustand">
  <img src="https://img.shields.io/badge/React%20Query%20v5-FF4154?style=for-the-badge&logo=react-query&logoColor=white" alt="React Query v5">
  <img src="https://img.shields.io/badge/React%20Cookie-FF8C00?style=for-the-badge&logo=react&logoColor=white" alt="React Cookie">
  <img src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Axios-5A29E3?style=for-the-badge&logo=axios&logoColor=white" alt="Axios">
  <img src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/CSS-2965F1?style=for-the-badge&logo=css3&logoColor=white" alt="CSS">
  <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" alt="Figma">
  <img src="https://img.shields.io/badge/Tagify-3D6BF1?style=for-the-badge&logo=tagify&logoColor=white" alt="Tagify">
  <img src="https://img.shields.io/badge/SockJS-0082FC?style=for-the-badge&logo=sockjs&logoColor=white" alt="SockJS">
  <img src="https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=mui&logoColor=white" alt="MUI">
  <img src="https://img.shields.io/badge/MUI%20Joy-007FFF?style=for-the-badge&logo=mui&logoColor=white" alt="MUI Joy">
  <img src="https://img.shields.io/badge/Emoji%20Picker%20React-FFD700?style=for-the-badge&logo=emoji-picker-react&logoColor=white" alt="Emoji Picker React">
  <img src="https://img.shields.io/badge/Pretendard-000000?style=for-the-badge&logo=pretendard&logoColor=white" alt="Pretendard">
  <img src="https://img.shields.io/badge/React%20Webcam-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React Webcam">
  <img src="https://img.shields.io/badge/StompJS-00A8E1?style=for-the-badge&logo=stomp&logoColor=white" alt="StompJS">
  <img src="https://img.shields.io/badge/LiveKit-FF00FF?style=for-the-badge&logo=livekit&logoColor=white" alt="LiveKit">
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/OpenVidu%20React%20Component-FF3C3C?style=for-the-badge&logo=openvidu&logoColor=white" alt="OpenVidu React Component">
</p>


Backend
<p>
  <img src="https://img.shields.io/badge/Spring%20Cloud-6DB33F?style=for-the-badge&logo=spring&logoColor=white" />
  <img src="https://img.shields.io/badge/Spring%20Cloud%20Gateway-6DB33F?style=for-the-badge&logo=spring&logoColor=white" />
  <img src="https://img.shields.io/badge/Eureka-6DB33F?style=for-the-badge&logo=spring&logoColor=white" />
  <img src="https://img.shields.io/badge/Spring%20Cloud%20Bus%20AMQP-6DB33F?style=for-the-badge&logo=spring&logoColor=white" />
  <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logoColor=white" />
  <img src="https://img.shields.io/badge/Spring%20Cloud%20Config-6DB33F?style=for-the-badge&logo=spring&logoColor=white" />
  <img src="https://img.shields.io/badge/Spring%20Cloud%20OpenFeign-6DB33F?style=for-the-badge&logo=spring&logoColor=white" />
  <img src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white" />
  <img src="https://img.shields.io/badge/Spring%20Boot%20Actuator-6DB33F?style=for-the-badge&logo=spring&logoColor=white" />
  <img src="https://img.shields.io/badge/Spring%20Boot%20Scheduler-6DB33F?style=for-the-badge&logo=spring&logoColor=white" />
  <img src="https://img.shields.io/badge/Spring%20Kafka-6DB33F?style=for-the-badge&logo=spring&logoColor=white" />
  <img src="https://img.shields.io/badge/Spring%20Redis-6DB33F?style=for-the-badge&logo=spring&logoColor=white" />
  <img src="https://img.shields.io/badge/Spring%20Data%20JPA-6DB33F?style=for-the-badge&logo=spring&logoColor=white" />
  <img src="https://img.shields.io/badge/Spring%20Data%20JPA%20Neo4j-6DB33F?style=for-the-badge&logo=spring&logoColor=white" />
  <img src="https://img.shields.io/badge/Spring%20Data%20JPA%20MongoDB-6DB33F?style=for-the-badge&logo=spring&logoColor=white" />
  <img src="https://img.shields.io/badge/Spring%20WebSocket-6DB33F?style=for-the-badge&logo=spring&logoColor=white" />
  <img src="https://img.shields.io/badge/Spring%20Selenium-6DB33F?style=for-the-badge&logo=spring&logoColor=white" />
  <img src="https://img.shields.io/badge/OAuth%202.0-4A90E2?style=for-the-badge&logo=oauth&logoColor=white" />
  <img src="https://img.shields.io/badge/Java%20JDK%2017-007396?style=for-the-badge&logo=java&logoColor=white" />
  <img src="https://img.shields.io/badge/Lombok-2C2C2C?style=for-the-badge&logo=lombok&logoColor=white" />
  <img src="https://img.shields.io/badge/RabbitMQ-FF6600?style=for-the-badge&logo=rabbitmq&logoColor=white" />
  <img src="https://img.shields.io/badge/MySQL-00758F?style=for-the-badge&logo=mysql&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Neo4j-008CC1?style=for-the-badge&logo=neo4j&logoColor=white" />
  <img src="https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white" />
  <img src="https://img.shields.io/badge/Elasticsearch-005571?style=for-the-badge&logo=elasticsearch&logoColor=white" />
</p>


NAVER Cloud & API
<p>
  <img src="https://img.shields.io/badge/VPC-0033A0?style=for-the-badge&logo=aws&logoColor=white" alt="VPC">
  <img src="https://img.shields.io/badge/Clova%20OCR-00C4A7?style=for-the-badge&logo=clova&logoColor=white" alt="Clova OCR">
  <img src="https://img.shields.io/badge/NCP%20Object%20Storage-00C4A7?style=for-the-badge&logo=naver&logoColor=white" alt="NCP Object Storage">
  <img src="https://img.shields.io/badge/Cloud%20DB%20for%20MySQL-00758F?style=for-the-badge&logo=mysql&logoColor=white" alt="Cloud DB for MySQL">
  <img src="https://img.shields.io/badge/Container%20Registry-0069E6?style=for-the-badge&logo=docker&logoColor=white" alt="Container Registry">
  <img src="https://img.shields.io/badge/Kakao%20Social%20Login-FFCD00?style=for-the-badge&logo=kakao&logoColor=black" alt="Kakao Social Login">
  <img src="https://img.shields.io/badge/Naver%20Social%20Login-03C75A?style=for-the-badge&logo=naver&logoColor=white" alt="Naver Social Login">
  <img src="https://img.shields.io/badge/Google%20Social%20Login-4285F4?style=for-the-badge&logo=google&logoColor=white" alt="Google Social Login">
  <img src="https://img.shields.io/badge/openvidu-FFCD00?style=for-the-badge&logoColor=white" alt="Openvidu">
</p>


Tool
<p>
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git">
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  <img src="https://img.shields.io/badge/GitHub%20Desktop-000000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Desktop">
  <img src="https://img.shields.io/badge/Trello-0052CC?style=for-the-badge&logo=trello&logoColor=white" alt="Trello">
  <img src="https://img.shields.io/badge/IntelliJ%20IDEA-000000?style=for-the-badge&logo=intellij-idea&logoColor=white" alt="IntelliJ IDEA">
  <img src="https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white" alt="VSCode">
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker">
  <img src="https://img.shields.io/badge/Docker%20Hub-0db7ed?style=for-the-badge&logo=docker&logoColor=white" alt="Docker Hub">
  <img src="https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white" alt="Jenkins">
  <img src="https://img.shields.io/badge/Neo4j%20Desktop-009639?style=for-the-badge&logo=neo4j&logoColor=white" alt="Neo4j Desktop">
  <img src="https://img.shields.io/badge/Gradle-02303A?style=for-the-badge&logo=gradle&logoColor=white" alt="Gradle">
  <img src="https://img.shields.io/badge/Postman-F76935?style=for-the-badge&logo=postman&logoColor=white" alt="Postman">
  <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" alt="Figma">
  <img src="https://img.shields.io/badge/Redux%20DevTools-764ABC?style=for-the-badge&logo=redux&logoColor=white" alt="Redux DevTools">
  <img src="https://img.shields.io/badge/Termius-000000?style=for-the-badge&logo=termius&logoColor=white" alt="Termius">
  <img src="https://img.shields.io/badge/WebStorm-000000?style=for-the-badge&logo=webstorm&logoColor=white" alt="WebStorm">
  <img src="https://img.shields.io/badge/DataGrip-000000?style=for-the-badge&logo=datagrip&logoColor=white" alt="DataGrip">
</p>

      `,
        structure: `
            <h2>프로젝트 설명 및 개발 기간</h2>
			<p>개발기간 : 2024.07.25 ~ 2024.09.19 (약 2달) </p>
            <p>Spring Cloud 를 활용한 MSA(Micro Service Architecture) 기반의 플랫폼 입니다.</p>
            <p><ul><li>냉장고 공동 관리 서비스로 여러 사용자가 함께 냉장고를 효율적으로 관리하고 채팅기능으로 소통할 수 있습니다.</li>
				<li>바코드 인식을 통해 제품의 영양 정보와 유통기한을 손쉽게 등록하고 만료 알림을 받을 수 있어 관리가 편리합니다.</li>
				<li>또한 레시피 공유와 라이브 쿠킹 클래스를 통해 요리 아이디어를 나눌 수 있는 커뮤니티 공간을 제공합니다.</li>
				<li>더불어 개인 , AI 맞춤형 레시피 추천과 소셜 로그인 기능으로 사용자 편의를 극대화했습니다.</li></ul></p>
        `,
        erd: `
        <h2>프로젝트 구조</h2>
        <div style="display:flex; gap:20px;">
            <!-- 첫 번째 이미지와 설명 -->
            <div style="text-align:center;">
                <p>CI 설계</p>
                <img src="images/ci1.png" alt="CI 설계" width="500px" height="250px">
            </div>
            <!-- 두 번째 이미지와 설명 -->
            <div style="text-align:center;">
                <p>CD 설계</p>
                <img src="images/stack.png" alt="CD 설계" width="500px" height="250px">
            </div>
        </div>
        `
        ,
        features: `
            <h2>프로젝트 전체 구현 기능</h2>
            <p>소셜로그인, 메인페이지, <b>냉장고 생성</b>, 음식추가, 음식삭제, 음식관리, <b>커뮤니티 게시판</b>, 실시간 스트리밍, 쇼핑하기,마이페이지</p>
        `
    };

    // 선택된 타입에 따른 내용을 업데이트
    detailsContent.innerHTML = details[type];

    // 섹션을 표시
    detailsSection.style.display = "block";

    // 섹션으로 스크롤 이동
    detailsSection.scrollIntoView({
        behavior: "smooth",  // 스크롤을 부드럽게 이동
        block: "start"       // 화면 상단에 맞추어 스크롤
    });

}

function showDetails2(type) {
    const detailsSection = document.getElementById("details-section2");
    const detailsContent = document.getElementById("details-content2");

    // 각 항목에 대한 내용 정의
    const details = {
        ref: `
			<div style="display: flex; justify-content: space-between; align-items: center;">
				<h3>
					<a href="https://github.com/HanKyungPark/DevLog" target="_blank" rel="noopener noreferrer">
						<i class="fab fa-github"></i> git
					</a>
				</h3>
				<h3>
					<a href="https://drive.google.com/file/d/1vcTKJt71ERJShg0g15pT1cA2kW2tCHPf/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
						<i class="fas fa-file-alt"></i> 발표자료
					</a>
				</h3>
			</div>

			`,
        tech: `
            <h2>사용 기술</h2> 
			Front
			<p><img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"/> <img src="https://img.shields.io/badge/JSS-F7DF1E?style=flat-square&logo=JSS&logoColor=black"/> <img src="https://img.shields.io/badge/jQuery-0769AD?style=flat-square&logo=jQuery&logoColor=white"/> <img src="https://img.shields.io/badge/Bootstrapap-7952B3?style=flat-square&logo=bootstrap&logoColor=white"/> <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white"/> <img src="https://img.shields.io/badge/Thymeleaf-005F0F.svg?style=for-the-badge&logo=Thymeleaf&logoColor=white" wdiht=80 height=20>
			</p>Back
			<p><img src="https://img.shields.io/badge/java-007396?style=flat-square&logo=java&logoColor=white"/> <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=MySQL&logoColor=white"/>  <img src="https://img.shields.io/badge/Spring%20Security-6DB33F.svg?style=for-the-badge&logo=Spring-Security&logoColor=white"  width=80 height=20> <img src="https://img.shields.io/badge/Spring%20Boot-6DB33F.svg?style=for-the-badge&logo=Spring-Boot&logoColor=white" width=80 height=20> <img src="https://img.shields.io/badge/Gradle-02303A.svg?style=for-the-badge&logo=Gradle&logoColor=white" width=80 height=20>
			</p>deploy
			<p><img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=Docker&logoColor=white"/> <img src="https://img.shields.io/badge/Linux-FCC624?style=flat-square&logo=linux&logoColor=black"/> <img src="https://img.shields.io/badge/Kubernetes-326CE5?style=flat-square&logo=Kubernetes&logoColor=white"> <img src="https://img.shields.io/badge/jenkins-%232C5263.svg?style=for-the-badge&logo=jenkins&logoColor=white" width=80 height=20/><img src="https://img.shields.io/badge/Harbor-60B932.svg?style=for-the-badge&logo=Harbor&logoColor=white" width=80 height=20 /> <img src="https://img.shields.io/badge/.ENV-ECD53F.svg?style=for-the-badge&logo=dotenv&logoColor=black" height=20 height=20> <img src="https://img.shields.io/badge/VMware-607078.svg?style=for-the-badge&logo=VMware&logoColor=white" width=80 height=20> <img src="https://img.shields.io/badge/Traefik%20Proxy-24A1C1.svg?style=for-the-badge&logo=Traefik-Proxy&logoColor=white" width=80 height=20> <img src="https://img.shields.io/badge/Caddy-1F88C0.svg?style=for-the-badge&logo=Caddy&logoColor=white" width=80 height=20>
			</p>storage
			<p><img src="https://img.shields.io/badge/MinIO-C72E49.svg?style=for-the-badge&logo=MinIO&logoColor=white" widht=80 height=20></p>    `,
        structure: `
            <h2>프로젝트 설명 및 개발 기간</h2>
			<p>개발기간 : 2024.06.07 ~ 2024.07.01 (약 1달) </p>
            <p><ul><li>게시물 생성 (Create)&nbsp;:&nbsp;
				사용자는 새로운 블로그 게시물을 작성하고 게시할 수 있습니다. 게시물 작성 시 제목과 내용을 입력할 수 있으며, 필요에 따라 이미지나 태그를 추가할 수도 있습니다.</li>
				<li>게시물 조회 (Read)&nbsp;:&nbsp;
				사용자는 작성된 블로그 게시물을 목록 형태로 볼 수 있으며, 각 게시물의 제목을 클릭하여 상세 내용을 확인할 수 있습니다. 게시물 목록은 최신 게시물이 상단에 오도록 정렬되어 있습니다.</li>
				<li>게시물 수정 (Update)&nbsp;:&nbsp;
				사용자는 이미 작성된 게시물을 수정할 수 있습니다. 게시물의 제목, 내용, 이미지, 태그 등을 변경할 수 있으며, 수정된 내용은 저장됩니다.</li>
				<li>게시물 삭제 (Delete)&nbsp;:&nbsp;
				사용자는 작성된 게시물을 삭제할 수 있습니다. 삭제된 게시물은 블로그에서 영구적으로 제거됩니다.</li></ul></p>
        `,
        erd: `
        <h2>ERD</h2>
        <div style="display:flex; gap:20px;">
            <!-- 첫 번째 이미지와 설명 -->
            <div style="text-align:center;">
                <img src="images/devlogErd.png" alt="ERD" width="800px" height="550px">
            </div>
        </div>
        `
        ,
        features: `
            <h2>프로젝트 전체 구현 기능</h2>
            <strong>카카오톡 로그인</strong>, <strong>신규 블로그 생성 페이지</strong>, 블로그 글 (작성,조회,수정,삭제), <strong>블로그 댓글 (CSS)</strong>, 게시글 랜덤조회 피드페이지, 카테고리별 분류, 해쉬태그, 좋아요 등
        `
    };

    // 선택된 타입에 따른 내용을 업데이트
    detailsContent.innerHTML = details[type];

    // 섹션을 표시
    detailsSection.style.display = "block";
    // 섹션으로 스크롤 이동
    detailsSection.scrollIntoView({
        behavior: "smooth",  // 스크롤을 부드럽게 이동
        block: "start"       // 화면 상단에 맞추어 스크롤
    });
}


function showDetails3(type) {
    const detailsSection = document.getElementById("details-section3");
    const detailsContent = document.getElementById("details-content3");

    // 각 항목에 대한 내용 정의
    const details = {
        ref: `
			<div style="display: flex; justify-content: space-between; align-items: center;">
				<h3>
					<a href="https://github.com/ST00CK" target="_blank" rel="noopener noreferrer">
						<i class="fab fa-github"></i> git
					</a>
				</h3>
			</div>

			`,
        tech: `
            <h2>사용 기술</h2> 
			Front
			<p>
  <img src="https://img.shields.io/badge/ReactNative-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="ReactNative" />
  <img src="https://img.shields.io/badge/Zustand-FFCC00?style=for-the-badge&logo=zustand&logoColor=white" alt="Zustand" />
</p>

			Back
			<p>
  <img src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white" alt="Java" />
  <img src="https://img.shields.io/badge/SpringBoot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" alt="SpringBoot" />
  <img src="https://img.shields.io/badge/Kafka-231F20?style=for-the-badge&logo=apachekafka&logoColor=white" alt="Kafka" />
  <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white" alt="JWT" />
  <img src="https://img.shields.io/badge/Api6-2E8E8E?style=for-the-badge&logo=api6&logoColor=white" alt="api6" />
  <img src="https://img.shields.io/badge/gRPC-6A4E35?style=for-the-badge&logo=grpc&logoColor=white" alt="gRPC" />
</p>

DB
<p>
  <img src="https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white" alt="MariaDB" />
  <img src="https://img.shields.io/badge/Mybatis-1B1B1B?style=for-the-badge&logo=mybatis&logoColor=white" alt="Mybatis" />
  <img src="https://img.shields.io/badge/Neo4j-009639?style=for-the-badge&logo=neo4j&logoColor=white" alt="Neo4j" />
  <img src="https://img.shields.io/badge/Scylla-1F4766?style=for-the-badge&logo=scylla&logoColor=white" alt="Scylla" />
</p>

			deploy
			<p>
  <img src="https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white" alt="Kubernetes" />
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  <img src="https://img.shields.io/badge/Istio-466BB0?style=for-the-badge&logo=istio&logoColor=white" alt="Istio" />
  <img src="https://img.shields.io/badge/Minio-0099E5?style=for-the-badge&logo=minio&logoColor=white" alt="Minio" />
  <img src="https://img.shields.io/badge/MSA-0073E6?style=for-the-badge&logo=cloud&logoColor=white" alt="MSA" />
  <img src="https://img.shields.io/badge/Rook-Ceph-6B3FA0?style=for-the-badge&logo=rook&logoColor=white" alt="Rook-Ceph" />
</p>
   `,
        structure: `
            <h2>프로젝트 설명 및 개발 기간</h2>
			<p>개발기간 : 2024.12.05 ~ 2025.02.28 </p>
            <p><ul><li>MSA방식을 사용한 소셜로그인과 폼 로그인을 통한 회원가입 및 채팅 기반 메신저 플랫폼</li>
            <li>카카오 로그인, 폼 로그인 유저 취향에 맞게 로그인을 제공합니다.</li>
            <li>카카오 로그인과 폼로그인의 연동 기능을 제공합니다.</li>
            <li>유저 간의 친구 맺기 기능을 통해서 친구추가를 할 수 있습니다.</li>
            <li>친구등록이 된 유저들끼리 채팅, 메신저 기능을 제공합니다.</li>
           </ul></p>
        `,
        erd: `
        <h2>ERD</h2>
        <div style="display:flex; gap:20px;">
            <!-- 첫 번째 이미지와 설명 -->
            <div style="text-align:center;">
                <img src="images/devlogErd.png" alt="ERD" width="800px" height="550px">
            </div>
        </div>
        `
        ,
        features: `
            <h2>프로젝트 전체 구현 기능</h2>
            <strong>카카오톡 로그인</strong>, <strong>폼 로그인</strong>,<strong>소셜, 폼 연동</strong>, 친구 서비스, 메인 페이지, 채팅창, 채팅기능, 오픈채팅 등
        `
    };

    // 선택된 타입에 따른 내용을 업데이트
    detailsContent.innerHTML = details[type];

    // 섹션을 표시
    detailsSection.style.display = "block";
    // 섹션으로 스크롤 이동
    detailsSection.scrollIntoView({
        behavior: "smooth",  // 스크롤을 부드럽게 이동
        block: "start"       // 화면 상단에 맞추어 스크롤
    });
}

(function ($) {

    var $window = $(window),
        $body = $('body'),
        $wrapper = $('#wrapper');

    // Breakpoints.
    breakpoints({
        xlarge: ['1281px', '1680px'],
        large: ['981px', '1280px'],
        medium: ['737px', '980px'],
        small: ['481px', '736px'],
        xsmall: ['361px', '480px'],
        xxsmall: [null, '360px']
    });

    // Play initial animations on page load.
    $window.on('load', function () {
        window.setTimeout(function () {
            $body.removeClass('is-preload');
        }, 100);
    });

    // Browser fixes.

    // IE: Flexbox min-height bug.
    if (browser.name == 'ie')
        (function () {

            var flexboxFixTimeoutId;

            $window.on('resize.flexbox-fix', function () {

                var $x = $('.fullscreen');

                clearTimeout(flexboxFixTimeoutId);

                flexboxFixTimeoutId = setTimeout(function () {

                    if ($x.prop('scrollHeight') > $window.height())
                        $x.css('height', 'auto');
                    else
                        $x.css('height', '100vh');

                }, 250);

            }).triggerHandler('resize.flexbox-fix');

        })();

    // Object fit workaround.
    if (!browser.canUse('object-fit'))
        (function () {

            $('.banner .image, .spotlight .image').each(function () {

                var $this = $(this),
                    $img = $this.children('img'),
                    positionClass = $this.parent().attr('class').match(/image-position-([a-z]+)/);

                // Set image.
                $this
                    .css('background-image', 'url("' + $img.attr('src') + '")')
                    .css('background-repeat', 'no-repeat')
                    .css('background-size', 'cover');

                // Set position.
                switch (positionClass.length > 1 ? positionClass[1] : '') {

                    case 'left':
                        $this.css('background-position', 'left');
                        break;

                    case 'right':
                        $this.css('background-position', 'right');
                        break;

                    default:
                    case 'center':
                        $this.css('background-position', 'center');
                        break;

                }

                // Hide original.
                $img.css('opacity', '0');

            });

        })();

    // Smooth scroll.
    $('.smooth-scroll').scrolly();
    $('.smooth-scroll-middle').scrolly({anchor: 'middle'});

    // Wrapper.
    $wrapper.children()
        .scrollex({
            top: '30vh',
            bottom: '30vh',
            initialize: function () {
                $(this).addClass('is-inactive');
            },
            terminate: function () {
                $(this).removeClass('is-inactive');
            },
            enter: function () {
                $(this).removeClass('is-inactive');
            },
            leave: function () {

                var $this = $(this);

                if ($this.hasClass('onscroll-bidirectional'))
                    $this.addClass('is-inactive');

            }
        });

    // Items.
    $('.items')
        .scrollex({
            top: '30vh',
            bottom: '30vh',
            delay: 50,
            initialize: function () {
                $(this).addClass('is-inactive');
            },
            terminate: function () {
                $(this).removeClass('is-inactive');
            },
            enter: function () {
                $(this).removeClass('is-inactive');
            },
            leave: function () {

                var $this = $(this);

                if ($this.hasClass('onscroll-bidirectional'))
                    $this.addClass('is-inactive');

            }
        })
        .children()
        .wrapInner('<div class="inner"></div>');

    // Gallery.
    $('.gallery')
        .wrapInner('<div class="inner"></div>')
        .prepend(browser.mobile ? '' : '<div class="forward"></div><div class="backward"></div>')
        .scrollex({
            top: '30vh',
            bottom: '30vh',
            delay: 50,
            initialize: function () {
                $(this).addClass('is-inactive');
            },
            terminate: function () {
                $(this).removeClass('is-inactive');
            },
            enter: function () {
                $(this).removeClass('is-inactive');
            },
            leave: function () {

                var $this = $(this);

                if ($this.hasClass('onscroll-bidirectional'))
                    $this.addClass('is-inactive');

            }
        })
        .children('.inner')
        //.css('overflow', 'hidden')
        .css('overflow-y', browser.mobile ? 'visible' : 'hidden')
        .css('overflow-x', browser.mobile ? 'scroll' : 'hidden')
        .scrollLeft(0);

    // Style #1.
    // ...

    // Style #2.
    $('.gallery')
        .on('wheel', '.inner', function (event) {

            var $this = $(this),
                delta = (event.originalEvent.deltaX * 10);

            // Cap delta.
            if (delta > 0)
                delta = Math.min(25, delta);
            else if (delta < 0)
                delta = Math.max(-25, delta);

            // Scroll.
            $this.scrollLeft($this.scrollLeft() + delta);

        })
        .on('mouseenter', '.forward, .backward', function (event) {

            var $this = $(this),
                $inner = $this.siblings('.inner'),
                direction = ($this.hasClass('forward') ? 1 : -1);

            // Clear move interval.
            clearInterval(this._gallery_moveIntervalId);

            // Start interval.
            this._gallery_moveIntervalId = setInterval(function () {
                $inner.scrollLeft($inner.scrollLeft() + (5 * direction));
            }, 10);

        })
        .on('mouseleave', '.forward, .backward', function (event) {

            // Clear move interval.
            clearInterval(this._gallery_moveIntervalId);

        });

    // Lightbox.
    $('.gallery.lightbox')
        .on('click', 'a', function (event) {

            var $a = $(this),
                $gallery = $a.parents('.gallery'),
                $modal = $gallery.children('.modal'),
                $modalImg = $modal.find('img'),
                href = $a.attr('href');

            // Not an image? Bail.
            if (!href.match(/\.(jpg|gif|png|mp4)$/))
                return;

            // Prevent default.
            event.preventDefault();
            event.stopPropagation();

            // Locked? Bail.
            if ($modal[0]._locked)
                return;

            // Lock.
            $modal[0]._locked = true;

            // Set src.
            $modalImg.attr('src', href);

            // Set visible.
            $modal.addClass('visible');

            // Focus.
            $modal.focus();

            // Delay.
            setTimeout(function () {

                // Unlock.
                $modal[0]._locked = false;

            }, 600);

        })
        .on('click', '.modal', function (event) {

            var $modal = $(this),
                $modalImg = $modal.find('img');

            // Locked? Bail.
            if ($modal[0]._locked)
                return;

            // Already hidden? Bail.
            if (!$modal.hasClass('visible'))
                return;

            // Lock.
            $modal[0]._locked = true;

            // Clear visible, loaded.
            $modal
                .removeClass('loaded')

            // Delay.
            setTimeout(function () {

                $modal
                    .removeClass('visible')

                setTimeout(function () {

                    // Clear src.
                    $modalImg.attr('src', '');

                    // Unlock.
                    $modal[0]._locked = false;

                    // Focus.
                    $body.focus();

                }, 475);

            }, 125);

        })
        .on('keypress', '.modal', function (event) {

            var $modal = $(this);

            // Escape? Hide modal.
            if (event.keyCode == 27)
                $modal.trigger('click');

        })
        .prepend('<div class="modal" tabIndex="-1"><div class="inner"><img src="" /></div></div>')
        .find('img')
        .on('load', function (event) {

            var $modalImg = $(this),
                $modal = $modalImg.parents('.modal');

            setTimeout(function () {

                // No longer visible? Bail.
                if (!$modal.hasClass('visible'))
                    return;

                // Set loaded.
                $modal.addClass('loaded');

            }, 275);

        });

})(jQuery);