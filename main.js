(()=>{"use strict";(()=>{(()=>{let t=document.querySelector("table tbody")})(),(()=>{const t=document.querySelector(".projects-list")})();const t=(()=>{const t=document.querySelector(".form-section"),e=document.querySelector("#td-project-input"),o=t=>{const e=document.querySelector(".add-todo"),o=document.querySelector(".add-project");switch(t){case"todo":e.classList.add("current"),o.classList.remove("current");break;case"project":o.classList.add("current"),e.classList.remove("current")}};return{addProject:(t,o)=>{const d=document.createElement("option");d.value=`project-${t}`,d.textContent=o,e.append(d)},show:()=>{o("todo"),t.classList.toggle("form-open")},switchFormsTo:o}})()})();const t=(()=>{let t=[];const e={add:(e,o,d,c,r)=>{t[e].todoList.push({id:o,title:d,dueDate:c,priority:r})},remove:e=>{const o=t[projectId].todoList,d=o.indexOf(o.filter((t=>t.id===e))[0]);o.splice(d,1)}};return{project:{add:(e,o,d)=>{t.push({id:e,name:o,priority:d,todoList:[]})},remove:e=>{const o=t.indexOf(t.filter((t=>t.id===e))[0]);t.splice(o,1)}},projectList:t,todo:e}})();t.project.add(1,"hi",1),t.project.add(2,"h2i",1),t.project.add(3,"hi3",1),t.project.add(4,"hi4",1),t.todo.add(0,1,"lol","date",1),t.todo.add(1,2,"lo2l","date",1),t.todo.add(3,3,"lo3l","date",1),t.project.remove(2),t.todo.remove(3),console.log(t.todoList),console.log(t.projectList)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBRW1CLE1Bb0JGLE1BQ1QsSUFBSUEsRUFBUUMsU0FBU0MsY0FBYyxjQTBFdEMsRUEzRVksR0FvRkcsTUFDWixNQUFNQyxFQUFzQkYsU0FBU0MsY0FBYyxpQkE0RHRELEVBN0RlLEdBdEdoQixNQXVLTUUsRUFBUSxNQUNWLE1BQU1DLEVBQWNKLFNBQVNDLGNBQWMsaUJBQ3JDSSxFQUFxQkwsU0FBU0MsY0FBYyxxQkFPNUNLLEVBQWdCQyxJQUNsQixNQUFNQyxFQUFXUixTQUFTQyxjQUFjLGFBQ2xDUSxFQUFjVCxTQUFTQyxjQUFjLGdCQUUzQyxPQUFPTSxHQUNILElBQUssT0FDREMsRUFBU0UsVUFBVUMsSUFBSSxXQUN2QkYsRUFBWUMsVUFBVUUsT0FBTyxXQUM3QixNQUNKLElBQUssVUFDREgsRUFBWUMsVUFBVUMsSUFBSSxXQUMxQkgsRUFBU0UsVUFBVUUsT0FBTyxXQUlsQyxFQWNKLE1BQU8sQ0FBQ0MsV0FYVyxDQUFDQyxFQUFJUCxLQUNwQixNQUFNUSxFQUFZZixTQUFTZ0IsY0FBYyxVQUN6Q0QsRUFBVUUsTUFBUSxXQUFXSCxJQUM3QkMsRUFBVUcsWUFBY1gsRUFDeEJGLEVBQW1CYyxPQUFPSixFQUFVLEVBT3BCSyxLQWxDUCxLQUNUZCxFQUFjLFFBQ2RGLEVBQVlNLFVBQVVXLE9BQU8sWUFBWSxFQWdDbkJmLGdCQUM3QixFQXZDYSxFQThDakIsRUF2TmtCLEdBQW5CLE1DTU1nQixFQUFjLE1BQ2hCLElBQUlDLEVBQWMsR0FDbEIsTUFZTUMsRUFTSyxDQUFDYixJQVJJLENBQUNjLEVBQVdYLEVBQUlZLEVBQU9DLEVBQVNDLEtBQ3hDTCxFQUFZRSxHQUFXSSxTQUFTQyxLQUFLLENBQUNoQixLQUFJWSxRQUFPQyxVQUFTQyxZQUFVLEVBTzNEaEIsT0FMRUUsSUFDWCxNQUFNZSxFQUFXTixFQUFZRSxXQUFXSSxTQUNsQ0UsRUFBWUYsRUFBU0csUUFBUUgsRUFBU0ksUUFBT0MsR0FBTUEsRUFBR3BCLEtBQU9BLElBQUksSUFDdkVlLEVBQVNNLE9BQU9KLEVBQVUsRUFBRSxHQUtwQyxNQUFPLENBQUNLLFFBZEcsQ0FBQ3pCLElBVEksQ0FBQ0csRUFBSVAsRUFBTXFCLEtBRW5CTCxFQUFZTyxLQUFLLENBQUNoQixLQUFHUCxPQUFLcUIsV0FBU0MsU0FEcEIsSUFDNkIsRUFPbkNqQixPQUxFRSxJQUNYLE1BQU11QixFQUFlZCxFQUFZUyxRQUFRVCxFQUFZVSxRQUFPSyxHQUFRQSxFQUFLeEIsS0FBT0EsSUFBSSxJQUNwRlMsRUFBWVksT0FBT0UsRUFBYSxFQUFFLEdBaUJ6QmQsY0FBYUMsT0FDakMsRUEzQm1CLEdBNkJwQkYsRUFBWWMsUUFBUXpCLElBQUksRUFBRSxLQUFLLEdBQy9CVyxFQUFZYyxRQUFRekIsSUFBSSxFQUFFLE1BQU0sR0FDaENXLEVBQVljLFFBQVF6QixJQUFJLEVBQUUsTUFBTSxHQUNoQ1csRUFBWWMsUUFBUXpCLElBQUksRUFBRSxNQUFNLEdBRWhDVyxFQUFZRSxLQUFLYixJQUFJLEVBQUcsRUFBRSxNQUFNLE9BQU8sR0FDdkNXLEVBQVlFLEtBQUtiLElBQUksRUFBRyxFQUFFLE9BQU8sT0FBTyxHQUN4Q1csRUFBWUUsS0FBS2IsSUFBSSxFQUFHLEVBQUUsT0FBTyxPQUFPLEdBRXhDVyxFQUFZYyxRQUFReEIsT0FBTyxHQUMzQlUsRUFBWUUsS0FBS1osT0FBTyxHQUtMMkIsUUFBUUMsSUFBSWxCLEVBQVlPLFVBQVVVLFFBQVFDLElBQUlsQixFQUFZQyxZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1vZGluLy4vc3JjL21hbmlwcy5qcyIsIndlYnBhY2s6Ly90b2RvLW9kaW4vLi9zcmMvZGF0YS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTVE9SRVMgRE9NIE1BTklQVUxBVElPTlNcblxuY29uc3QgRE9NSGFuZGxlciA9ICgoKSA9PiB7XG5cbiAgICBjb25zdCBpbml0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBhZGROZXdCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLW5ldy1idXR0b24nKTtcbiAgICAgICAgY29uc3QgdG9kb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0by1kby10YWInKTtcbiAgICAgICAgY29uc3QgcHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LXRhYicpO1xuICAgICAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZS10YWInKTtcblxuICAgICAgICBhZGROZXdCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfZm9ybS5zaG93KTtcbiAgICAgICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfZm9ybS5zaG93KTtcbiAgICAgICAgdG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIF9mb3JtLnN3aXRjaEZvcm1zVG8oJ3RvZG8nKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIF9mb3JtLnN3aXRjaEZvcm1zVG8oJ3Byb2plY3QnKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIFRPLURPIE1BTklQU1xuXG4gICAgY29uc3QgdG9kbyA9ICgoKSA9PiB7XG4gICAgICAgIGxldCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RhYmxlIHRib2R5Jyk7XG5cbiAgICAgICAgY29uc3QgcmVmcmVzaEFsbCA9IHRvZG9BcnJheSA9PiB7XG4gICAgICAgICAgICBjbGVhckFsbCgpO1xuICAgICAgICAgICAgdG9kb0FycmF5LmZvckVhY2godG9kb09iamVjdCA9PiB7XG4gICAgICAgICAgICAgICAgLy8gZGVzdHJ1Y3R1cmUgdGhlIG9iamVjdCBhbmQgSUlGRSBpdCBpbnRvIGFkZFxuICAgICAgICAgICAgICAgICgoe2lkLCB0aXRsZSwgZHVlRGF0ZSwgcHJvamVjdE5hbWV9KSA9PiBcbiAgICAgICAgICAgICAgICBhZGQoaWQsIHRpdGxlLCBkdWVEYXRlLCBwcm9qZWN0TmFtZSkpKHRvZG9PYmplY3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtYXJrRG9uZSA9IChpZCkgPT4gXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGB0cltkYXRhLW51bT0nJHtpZH0nXWApXG4gICAgICAgICAgICAgICAgICAgIC5jbGFzc0xpc3RcbiAgICAgICAgICAgICAgICAgICAgLnRvZ2dsZSgnZG9uZScpO1xuXG4gICAgICAgIGNvbnN0IGNsZWFyQWxsID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3Qm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rib2R5Jyk7XG4gICAgICAgICAgICB0YWJsZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdCb2R5LCB0YWJsZSk7XG4gICAgICAgICAgICAvLyB0aGUgbm9kZSB0aGF0IHVzZWQgdG8gYmUgdGFibGUgaXMgbm93IGdvbmUuXG4gICAgICAgICAgICAvLyBzbyByZWZyZXNoIGl0XG4gICAgICAgICAgICB0YWJsZSA9IG5ld0JvZHk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhZGQgPSAoaWQsIHRpdGxlLCBkdWVEYXRlLCBwcm9qZWN0TmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3Um93ID0gdGFibGUuaW5zZXJ0Um93KCk7XG4gICAgICAgICAgICBuZXdSb3cuZGF0YXNldC5udW0gPSBpZDtcblxuICAgICAgICAgICAgY29uc3QgbmV3Q2hrID0gbmV3Um93Lmluc2VydENlbGwoMCk7XG4gICAgICAgICAgICBjb25zdCBDaGtJbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBDaGtJbi50eXBlID0gJ2NoZWNrYm94JztcbiAgICAgICAgICAgIC8vIENoZWNrYm94IEV2ZW50IExpc3RlbmVyXG4gICAgICAgICAgICAvLyBUaGlzIHNob3VsZCBub3QgaGFwcGVuIGRpcmVjdGx5LFxuICAgICAgICAgICAgLy8gYnV0IG1hcmtEb25lIHNob3VsZCBnZXQgY2FsbGVkIGJ5IGEgZnVuY3Rpb25cbiAgICAgICAgICAgIC8vIGFmdGVyIG9iamVjdCBzdGF0ZSBpcyBjaGFuZ2VkIFxuICAgICAgICAgICAgQ2hrSW4uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIG1hcmtEb25lKGlkKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBuZXdDaGsuYXBwZW5kKENoa0luKTtcblxuICAgICAgICAgICAgY29uc3QgbmV3VGl0bGUgPSBuZXdSb3cuaW5zZXJ0Q2VsbCgxKTtcbiAgICAgICAgICAgIG5ld1RpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld0RhdGUgPSBuZXdSb3cuaW5zZXJ0Q2VsbCgyKTtcbiAgICAgICAgICAgIG5ld0RhdGUudGV4dENvbnRlbnQgPSBkdWVEYXRlO1xuXG4gICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3Um93Lmluc2VydENlbGwoMyk7XG4gICAgICAgICAgICBuZXdQcm9qZWN0LnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld0VkaXQgPSBuZXdSb3cuaW5zZXJ0Q2VsbCg0KTtcbiAgICAgICAgICAgIGNvbnN0IEVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIEVkaXRCdG4uZGF0YXNldC5udW0gPSBpZDsgLy8gbWF5IG5vdCBldmVuIGJlIHJlbGV2YW50XG4gICAgICAgICAgICBFZGl0QnRuLmNsYXNzTGlzdC5hZGQoJ2VkaXQnKTtcbiAgICAgICAgICAgIEVkaXRCdG4udGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcbiAgICAgICAgICAgIC8vIEVkaXQgRXZlbnQgTGlzdGVuZXJcbiAgICAgICAgICAgIG5ld0VkaXQuYXBwZW5kKEVkaXRCdG4pO1xuXG5cbiAgICAgICAgICAgIGNvbnN0IG5ld1JtdiA9IG5ld1Jvdy5pbnNlcnRDZWxsKDUpO1xuICAgICAgICAgICAgY29uc3QgUm12QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBSbXZCdG4uZGF0YXNldC5udW0gPSBpZDsgLy8gbWF5IG5vdCBldmVuIGJlIHJlbGV2YW50XG4gICAgICAgICAgICBSbXZCdG4uY2xhc3NMaXN0LmFkZCgncm12Jyk7XG4gICAgICAgICAgICBSbXZCdG4udGV4dENvbnRlbnQgPSBcIlJlbW92ZVwiO1xuICAgICAgICAgICAgLy8gUmVtb3ZlIEV2ZW50IExpc3RlbmVyXG4gICAgICAgICAgICAvLyBUaGlzIHNob3VsZCBOT1QgZGlyZWN0bHkgY2FsbCB0aGUgRE9NIE1hbmlwLiBPdGhlcndpc2VcbiAgICAgICAgICAgIC8vIHRoZSB1bmRlcmx5aW5nIFRvLWRvIG9iamVjdCB3aWxsIG5vdCBiZSBkZWxldGVkIVxuICAgICAgICAgICAgLy8gUm12QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcmVtb3ZlKGlkKSk7XG5cbiAgICAgICAgICAgIG5ld1Jtdi5hcHBlbmQoUm12QnRuKTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB7cmVmcmVzaEFsbH07XG5cbiAgICB9KSgpO1xuXG4gICAgLy8gUFJPSkVDVCBNQU5JUFNcblxuICAgIGNvbnN0IHVwZGF0ZVZpZXdBbGwgPSB0YXNrcyA9PiB7XG4gICAgICAgIGNvbnN0IHZpZXdBbGxOdW1iZXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdmlldy1hbGwgLnByb2plY3Qtbm8nKTtcbiAgICAgICAgdmlld0FsbE51bWJlckRpdi50ZXh0Q29udGVudCA9IHRhc2tzO1xuICAgIH1cblxuICAgIGNvbnN0IHByb2plY3QgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0c0xpc3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWxpc3QnKTtcblxuICAgICAgICBjb25zdCByZWZyZXNoQWxsID0gcHJvamVjdEFycmF5ID0+IHtcbiAgICAgICAgICAgIGNsZWFyQWxsKCk7XG4gICAgICAgICAgICBwcm9qZWN0QXJyYXkuZm9yRWFjaChwcm9qZWN0T2JqZWN0ID0+IHtcbiAgICAgICAgICAgICAgICAvLyBkZXN0cnVjdHVyZSB0aGUgb2JqZWN0IGFuZCBJSUZFIGl0IGludG8gYWRkXG4gICAgICAgICAgICAgICAgKCh7aWQsIG5hbWUsIHRhc2tzfSkgPT4gXG4gICAgICAgICAgICAgICAgYWRkKGlkLCBuYW1lLCB0YXNrcykpKHByb2plY3RPYmplY3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2xlYXJBbGwgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TGlzdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGkucHJvamVjdCcpO1xuICAgICAgICAgICAgcHJvamVjdExpc3RJdGVtcy5mb3JFYWNoKHByb2ogPT4gcHJvai5yZW1vdmUoKSk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgY29uc3QgYWRkID0gKGlkLCBuYW1lLCB0YXNrcykgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICBjb25zdCBuZXdCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFxuICAgICAgICAgICAgLy8gSUQgZ2VuZXJhdGlvbiBzaG91bGQgYmUgaGFuZGxlZCBpbiBsb2dpYy4gXG4gICAgICAgICAgICBuZXdJdGVtLmlkID0gYHByb2plY3QtJHtpZH1gO1xuICAgICAgICAgICAgX2Zvcm0uYWRkUHJvamVjdChpZCwgbmFtZSk7XG4gICAgXG4gICAgICAgICAgICBuZXdEaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1ubycpO1xuICAgICAgICAgICAgbmV3QnRuLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICAgICAgICAgIG5ld0l0ZW0uY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICAgIFxuICAgICAgICAgICAgbmV3RGl2LnRleHRDb250ZW50ID0gdGFza3M7XG4gICAgICAgICAgICBuZXdCdG4udGV4dENvbnRlbnQgPSBuYW1lO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBuZXdCdG4uYXBwZW5kKG5ld0Rpdik7XG4gICAgICAgICAgICBuZXdJdGVtLmFwcGVuZChuZXdCdG4pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBwcm9qZWN0c0xpc3RFbGVtZW50LmFwcGVuZChuZXdJdGVtKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBJIGFtIG5vdCBzdXJlIGlmIHRoZXNlIHdpbGwgYmUgcmVsZXZhbnQgbGF0ZXIuXG5cbiAgICAgICAgLy8gY29uc3QgcmVtb3ZlID0gaWQgPT4ge1xuICAgICAgICAvLyAgICAgY29uc3QgaXRlbVRvUmVtb3ZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Byb2plY3QtJHtpZH1gKTtcbiAgICAgICAgLy8gICAgIGl0ZW1Ub1JlbW92ZS5yZW1vdmUoKTtcbiAgICAgICAgLy8gICAgIF9mb3JtLnJlbW92ZVByb2plY3QoaWQpO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGNvbnN0IHVwZGF0ZSA9IChpZCwgdGFza3MpID0+IHtcbiAgICAgICAgLy8gICAgIGNvbnN0IG51bWJlckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwcm9qZWN0LSR7aWR9IC5wcm9qZWN0LW5vYCk7XG4gICAgICAgIC8vICAgICBudW1iZXJEaXYudGV4dENvbnRlbnQgPSB0YXNrcztcbiAgICAgICAgICAgIFxuICAgICAgICAvLyB9XG4gICAgXG4gICAgICAgIC8vIC8vIEkgYW0gbm90IHN1cmUgaWYgdGhpcyBpcyB1c2VmdWwgb3IgY29ycmVjdC5cbiAgICAgICAgLy8gY29uc3QgX3VwZGF0ZU5hbWUgPSAoaWQsIG5hbWUpID0+IHtcbiAgICAgICAgLy8gICAgIGNvbnN0IG5hbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcHJvamVjdC0ke2lkfSBidXR0b25gKTtcbiAgICAgICAgLy8gICAgIGNvbnN0IG51bWJlckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwcm9qZWN0LSR7aWR9IC5wcm9qZWN0LW5vYCk7XG4gICAgICAgIC8vICAgICBuYW1lQnRuLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICAgICAgLy8gICAgIG5hbWVCdG4uYXBwZW5kKG51bWJlckRpdik7XG4gICAgICAgIC8vICAgICAvLyBmb3JtTWFuaXBzLmFkZFByb2plY3QoaWQsIG5hbWUpO1xuICAgICAgICAvLyB9XG4gICAgXG4gICAgICAgIHJldHVybiB7cmVmcmVzaEFsbH1cbiAgICB9KSgpO1xuICAgIFxuICAgIC8vIEZPUk0gTUFOSVBTXG4gICAgXG4gICAgY29uc3QgX2Zvcm0gPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBmb3JtU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXNlY3Rpb24nKTtcbiAgICAgICAgY29uc3QgcHJvamVjdE9wdGlvbnNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RkLXByb2plY3QtaW5wdXQnKTtcblxuICAgICAgICBjb25zdCBzaG93ID0gKCkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoRm9ybXNUbygndG9kbycpO1xuICAgICAgICAgICAgZm9ybVNlY3Rpb24uY2xhc3NMaXN0LnRvZ2dsZSgnZm9ybS1vcGVuJyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgc3dpdGNoRm9ybXNUbyA9IG5hbWUgPT4ge1xuICAgICAgICAgICAgY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRvZG8nKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0Jyk7XG4gICAgICAgICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIG1ha2VzIGl0IGVhc3kgdG8gYWRkLCBlZywgYSBub3RlcyB0YWJcbiAgICAgICAgICAgIHN3aXRjaChuYW1lKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAndG9kbyc6XG4gICAgICAgICAgICAgICAgICAgIHRvZG9Gb3JtLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdwcm9qZWN0JzpcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50Jyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3QgYWRkUHJvamVjdCA9IChpZCwgbmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBuZXdPcHRpb24udmFsdWUgPSBgcHJvamVjdC0ke2lkfWA7XG4gICAgICAgICAgICBuZXdPcHRpb24udGV4dENvbnRlbnQgPSBuYW1lO1xuICAgICAgICAgICAgcHJvamVjdE9wdGlvbnNMaXN0LmFwcGVuZChuZXdPcHRpb24pO1xuICAgICAgICB9XG4gICAgICAgIC8vIE5vdCBzdXJlIGlmIHdpbGwgYmUgcmVsZXZhbnQgTGF0ZXJcbiAgICAgICAgLy8gY29uc3QgcmVtb3ZlUHJvamVjdCA9IGlkID0+IHtcbiAgICAgICAgLy8gICAgIGNvbnN0IG9wdGlvblRvUmVtb3ZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgb3B0aW9uW3ZhbHVlPSdwcm9qZWN0LSR7aWR9J11gKTtcbiAgICAgICAgLy8gICAgIG9wdGlvblRvUmVtb3ZlLnJlbW92ZSgpO1xuICAgICAgICAvLyB9XG4gICAgICAgIHJldHVybiB7YWRkUHJvamVjdCwgc2hvdywgc3dpdGNoRm9ybXNUb307XG4gICAgfSkoKTtcblxuXG5cblxuICAgIHJldHVybiB7aW5pdCwgcHJvamVjdCwgdG9kbywgdXBkYXRlVmlld0FsbH07XG5cbn0pKCk7XG5cblxuXG5cblxuXG5cblxuXG5cbmV4cG9ydCB7RE9NSGFuZGxlcn07IiwiLy8gTkI6IHByaW9yaXR5ID0gMCBvciAtMSBmb3IgYSBDb21wbGV0ZWQgVGFza1xuLy8gR2VuZXJhdGUgRE9NLWZyaWVuZGx5IERpc3BsYXkgTGlzdFxuLy8gLT5jYWxjdWxhdGUgaG93IG1hbnkgdGFza3MgcGVyIHByb2plY3Rcbi8vIC0+Z2V0IHByb2plY3QgbmFtZSBmb3IgZWFjaCB0YXNrXG4vLyAtPm9yZ2FuaXplIGxpc3QgYnkgcHJpb3JpdGllc1xuLy8gLT5vcmdhbml6ZSBsaXN0IGJ5IGNob2ljZS9wcm9qZWN0XG4vLyAoRE9ORSlBZGQscmVtb3ZlIHRvZG9zICYgcHJvamVjdHNcblxuY29uc3QgRGF0YUhhbmRsZXIgPSAoKCkgPT4ge1xuICAgIGxldCBwcm9qZWN0TGlzdCA9IFtdO1xuICAgIGNvbnN0IHByb2plY3QgPSAoKCk9PntcbiAgICAgICAgY29uc3QgYWRkID0gKGlkLCBuYW1lLCBwcmlvcml0eSkgPT4ge1xuICAgICAgICAgICAgbGV0IHRvZG9MaXN0ID0gW107XG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5wdXNoKHtpZCxuYW1lLHByaW9yaXR5LHRvZG9MaXN0fSlcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZW1vdmUgPSBpZCA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0TGlzdC5pbmRleE9mKHByb2plY3RMaXN0LmZpbHRlcihwcm9qID0+IHByb2ouaWQgPT09IGlkKVswXSk7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5zcGxpY2UocHJvamVjdEluZGV4LDEpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGVkaXRcbiAgICAgICAgcmV0dXJuIHthZGQsIHJlbW92ZX07XG4gICAgfSkoKTtcbiAgICBjb25zdCB0b2RvID0gKCgpPT57XG4gICAgICAgIGNvbnN0IGFkZCA9IChwcm9qZWN0SWQsIGlkLCB0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgICAgICAgICAgIHByb2plY3RMaXN0W3Byb2plY3RJZF0udG9kb0xpc3QucHVzaCh7aWQsIHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eX0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlbW92ZSA9IGlkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9MaXN0ID0gcHJvamVjdExpc3RbcHJvamVjdElkXS50b2RvTGlzdDtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9JbmRleCA9IHRvZG9MaXN0LmluZGV4T2YodG9kb0xpc3QuZmlsdGVyKHRkID0+IHRkLmlkID09PSBpZClbMF0pO1xuICAgICAgICAgICAgdG9kb0xpc3Quc3BsaWNlKHRvZG9JbmRleCwxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge2FkZCwgcmVtb3ZlfTtcbiAgICB9KSgpO1xuXG4gICAgcmV0dXJuIHtwcm9qZWN0LCBwcm9qZWN0TGlzdCwgdG9kb307XG59KSgpO1xuXG5EYXRhSGFuZGxlci5wcm9qZWN0LmFkZCgxLCdoaScsMSk7XG5EYXRhSGFuZGxlci5wcm9qZWN0LmFkZCgyLCdoMmknLDEpO1xuRGF0YUhhbmRsZXIucHJvamVjdC5hZGQoMywnaGkzJywxKTtcbkRhdGFIYW5kbGVyLnByb2plY3QuYWRkKDQsJ2hpNCcsMSk7XG5cbkRhdGFIYW5kbGVyLnRvZG8uYWRkKDAsIDEsJ2xvbCcsJ2RhdGUnLDEpO1xuRGF0YUhhbmRsZXIudG9kby5hZGQoMSwgMiwnbG8ybCcsJ2RhdGUnLDEpO1xuRGF0YUhhbmRsZXIudG9kby5hZGQoMywgMywnbG8zbCcsJ2RhdGUnLDEpO1xuXG5EYXRhSGFuZGxlci5wcm9qZWN0LnJlbW92ZSgyKTtcbkRhdGFIYW5kbGVyLnRvZG8ucmVtb3ZlKDMpO1xuXG4vLyBJIHdhbnQgdG8gYmUgYWJsZSB0byBjYWxsIERhdGFIYW5kbGVyLnByb2plY3RMaXN0W3hdLnJlbW92ZSgpXG4vLyBvciBEYXRhSGFuZGxlci5wcm9qZWN0TGlzdFt4XS50b2RvTGlzdFt5XS5yZW1vdmUoKTtcblxuY29uc3QgbG9sID0gKCkgPT4ge2NvbnNvbGUubG9nKERhdGFIYW5kbGVyLnRvZG9MaXN0KTtjb25zb2xlLmxvZyhEYXRhSGFuZGxlci5wcm9qZWN0TGlzdCl9O1xuXG5leHBvcnQge2xvbH07Il0sIm5hbWVzIjpbInRhYmxlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicHJvamVjdHNMaXN0RWxlbWVudCIsIl9mb3JtIiwiZm9ybVNlY3Rpb24iLCJwcm9qZWN0T3B0aW9uc0xpc3QiLCJzd2l0Y2hGb3Jtc1RvIiwibmFtZSIsInRvZG9Gb3JtIiwicHJvamVjdEZvcm0iLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJhZGRQcm9qZWN0IiwiaWQiLCJuZXdPcHRpb24iLCJjcmVhdGVFbGVtZW50IiwidmFsdWUiLCJ0ZXh0Q29udGVudCIsImFwcGVuZCIsInNob3ciLCJ0b2dnbGUiLCJEYXRhSGFuZGxlciIsInByb2plY3RMaXN0IiwidG9kbyIsInByb2plY3RJZCIsInRpdGxlIiwiZHVlRGF0ZSIsInByaW9yaXR5IiwidG9kb0xpc3QiLCJwdXNoIiwidG9kb0luZGV4IiwiaW5kZXhPZiIsImZpbHRlciIsInRkIiwic3BsaWNlIiwicHJvamVjdCIsInByb2plY3RJbmRleCIsInByb2oiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==