// 순서대로 실행하는 것과 그렇지 않은 것
// 자바스크립트 내장 비동기함수 => setTimeout()

function taskA(a,b, cb) { // cb : 콜백함수
	setTimeout(()=>{
		const res = a+b;
		cb(res);
		console.log("A 작업 끝");
	},2000);
}

function taskB(a, cb) {
	setTimeout(()=>{
		const res = a * 2;
		cb(res);
	},1000);
} 

function taskC(a, cb) {
	setTimeout(()=>{
		const res = a * -1;
		cb(res);
	},1000);
} 

// 👀 콜백함수를 이용해서 값(지역변수_setTimeout 함수 안의 변수) res를 setTimeout 함수 바깥으로 전달한다.
// 비동기함수 setTimeout 에 함수를 전달하기 위해서
// taskC 함수 인자로 콜백함수(taskC 함수 실행시 실행되는 함수)를 전달

// 콜백지옥 
// 비동기 처리의 결과를 또다른 비동기 처리의 값으로 전달 
taskA(3,4, (A함수결과값)=>{ // A함수 콜백함수
	console.log("taskA 함수 결과: ", A함수결과값);
	taskB(A함수결과값, (B함수결과값)=>{ // B함수 콜백함수
		console.log("taskB 함수 결과: ", B함수결과값);
		taskC(B함수결과값, (C함수결과값)=>{
			console.log("taskC 함수 결과: ", C함수결과값);
		})
	})
});
// 콜백지옥 해결 => Promise (자바스크립트의 비동기 담당)

console.log("코드 끝"); // taskA 함수를 기다리지 않고 먼저 수행 => 비동기 방식






// 코드 한줄한줄 연산 필요
// 코드를 실행시키는 것 == 스레드

// 자바스크립트 == 웹사이트를 동적으로. 웹사이트의 동작을 제어

// 자바스크립트 싱글스레드 작업 수행
// 자바스크립트는 코드가 작성된 순서대로 작업을 처리함
// 이전 작업이 진행 중 일때는 다음 작업을 수행하지 않음
// 먼저 작성된 코드를 다 실행하고 나서 뒤에 작성된 코드를 실행
// => 동기 방식(블로킹 방식)

// 동기 방식의 문제점
// 하나의 작업이 오래 걸릴 시, 작업 종료 전까지 모든 작업 중지
// => 전반적인 흐름이 느려진다.
// => 해결책은 멀티스레드 ?!
// 안타깝게도 자바스클비트는 싱글스레드로 동작하므로
// 동기적 작업의 단점을 극복하기 위해 여러 일을 동시에 실행하는
// 비동기 작업을 지원한다!
// 먼저 작성된 코드의 결과를 기다리지 않고 다음 코드를 실행함
// => 비동기 방식처리(논 블로킹 방식)

// 너 작업끝나면 이거 실행해
// 비동기 작업에, 콜백함수를 담아서
// 비동기 작업 실행시, 함수를 실행하게끔 만든다.

// 자바스크립트 엔진(웹브라우저에 탐재) => 자바스크립트 실행 
// 힙_메모리할당 + 콜스택(스레드)_코드실행(호출스택)
// 콜스택(스레드 == 일꾼) - 프로그램 실행, 종료
// 메인컨텍스트가 제거되는 순간 - 콜스택 종료(프로그램 종료)

// 자바스크립트의 동작과 웹브라우저의 상호작용을 위한 기능으로
// WebAPI, CallbackQueue, Event Loop 등이 있다. (비동기 처리방식 지원)

// 비동기함수(setTimeout)는 콜스택에서 WebAPI 로 넘긴다.
// setTimeout 의 시간이 만료가 되면 WebAPI 에서 CallbackQueue 로 옮겨진다.
// CallbackQueue 로 이동해서, Event Loop 에 의해서 다시 콜스택으로 옮겨진다.
// 이때, Event Loop 는 콜스택에 mainContext 만 남아있는게 맞는지 확인 후 콜스택으로 비동기함수를 넘긴다. => 비동기 함수 실행가능 





