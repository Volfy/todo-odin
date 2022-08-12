(()=>{"use strict";const e=(()=>{const e=(()=>{let e=document.querySelector("table tbody");return{refreshAll:t=>{(()=>{const t=document.createElement("tbody");e.parentNode.replaceChild(t,e),e=t})(),t.forEach((t=>{(({id:t,title:o,dueDate:c,projectName:r})=>{((t,o,c,r)=>{const n=e.insertRow();n.dataset.num=t;const d=n.insertCell(0),l=document.createElement("input");l.type="checkbox",l.addEventListener("change",(()=>{(e=>{document.querySelector(`tr[data-num='${e}']`).classList.toggle("done")})(t)})),d.append(l),n.insertCell(1).textContent=o,n.insertCell(2).textContent=c,n.insertCell(3).textContent=r;const a=n.insertCell(4),s=document.createElement("button");s.dataset.num=t,s.classList.add("edit"),s.textContent="Edit",a.append(s);const u=n.insertCell(5),p=document.createElement("button");p.dataset.num=t,p.classList.add("rmv"),p.textContent="Remove",u.append(p)})(t,o,c,r)})(t)}))}}})(),t=e=>{document.querySelector("#view-all .project-no").textContent=e},o=(()=>{const e=document.querySelector(".projects-list");return{add:(t,o,r=0)=>{const n=document.createElement("li"),d=document.createElement("button"),l=document.createElement("div");n.id=`project-${t}`,c.addProject(t,o),l.classList.add("project-no"),d.classList.add("project"),n.classList.add("project"),l.textContent=r,d.textContent=o,d.append(l),n.append(d),e.append(n)},remove:e=>{document.querySelector(`#project-${e}`).remove(),c.removeProject(e)},update:(e,t)=>{document.querySelector(`#project-${e} .project-no`).textContent=t},updateViewAll:t}})(),c=(()=>{const e=document.querySelector(".form-section"),t=document.querySelector("#td-project-input"),o=e=>{const t=document.querySelector(".add-todo"),o=document.querySelector(".add-project");switch(e){case"todo":t.classList.add("current"),o.classList.remove("current");break;case"project":o.classList.add("current"),t.classList.remove("current")}};return{addProject:(e,o)=>{const c=document.createElement("option");c.value=`project-${e}`,c.textContent=o,t.append(c)},removeProject:e=>{document.querySelector(`option[value='project-${e}']`).remove()},show:()=>{o("todo"),e.classList.toggle("form-open")},switchFormsTo:o}})();return{todo:e,updateViewAll:t,project:o,init:()=>{const e=document.querySelector(".add-new-button"),t=document.querySelector("#to-do-tab"),o=document.querySelector("#project-tab"),r=document.querySelector("#close-tab");e.addEventListener("click",c.show),r.addEventListener("click",c.show),t.addEventListener("click",(()=>{c.switchFormsTo("todo")})),o.addEventListener("click",(()=>{c.switchFormsTo("project")}))}}})();e.init(),e.project.add(1,"Jogn1",1e3),e.project.add(2,"Jogn2",1e3),e.project.add(3,"Jogn3",1e3),e.project.add(4,"Jogn4",1e3),e.project.add(5,"Jogn5",1e3),e.project.add(6,"Jogn6",1e3),e.project.add(7,"nonumber"),e.project.add(8,"blablabla"),e.project.remove(5),e.project.remove(1),e.project.update(6,22),e.project.update(3,2e3),e.updateViewAll(22);const t=(e,t,o,c,r)=>({id:e,title:t,dueDate:o,projectName:c,priority:r});let o=[t(1,"hello","0/09/2020","godoe",5),t(2,"hello2","0/09/2020","godoe",5),t(3,"hello3","0/09/2020","godoe",5),t(4,"hello4","0/09/233020","go4doe",2),t(5,"hello5","0/09/2020","godoe",1)];e.todo.refreshAll(o)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RyxRQUFTLEtBQ25DbEMsRUFBV3VDLFFBQVFMLElBQUksRUFBRyxRQUFTLEtBRW5DbEMsRUFBV3VDLFFBQVFMLElBQUksRUFBRyxZQUMxQmxDLEVBQVd1QyxRQUFRTCxJQUFJLEVBQUcsYUFFMUJsQyxFQUFXdUMsUUFBUVEsT0FBTyxHQUMxQi9DLEVBQVd1QyxRQUFRUSxPQUFPLEdBRTFCL0MsRUFBV3VDLFFBQVFVLE9BQU8sRUFBRyxJQUM3QmpELEVBQVd1QyxRQUFRVSxPQUFPLEVBQUcsS0FFN0JqRCxFQUFXcUMsY0FBYyxJQUV6QixNQUFNMEIsRUFBWSxDQUFFakQsRUFBSUMsRUFBT0MsRUFBU0MsRUFBYStDLEtBQXFCLENBQUNsRCxLQUFJQyxRQUFPQyxVQUFTQyxjQUFhK0MsYUFFNUcsSUFBSUMsRUFBVyxDQUNYRixFQUFVLEVBQUUsUUFBUSxZQUFZLFFBQVMsR0FDekNBLEVBQVUsRUFBRSxTQUFTLFlBQVksUUFBUyxHQUMxQ0EsRUFBVSxFQUFFLFNBQVMsWUFBWSxRQUFTLEdBQzFDQSxFQUFVLEVBQUUsU0FBUyxjQUFjLFNBQVUsR0FDN0NBLEVBQVUsRUFBRSxTQUFTLFlBQVksUUFBUyxJQUc5Qy9ELEVBQVdDLEtBQUtJLFdBQVc0RCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1vZGluLy4vc3JjL21hbmlwcy5qcyIsIndlYnBhY2s6Ly90b2RvLW9kaW4vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gU1RPUkVTIERPTSBNQU5JUFVMQVRJT05TXG4vLyAoRE9ORSlBZGQgUHJvamVjdCwgUmVtb3ZlIFByb2plY3Rcbi8vIChET05FKVVwZGF0ZSBudW1iZXIgb2YgdGFza3MgaW4gYSBwcm9qZWN0XG4vLyAoRE9ORSlVcGRhdGUgT3B0aW9ucyBpbiBGb3JtIHdpdGggbmV3IHByb2plY3RzXG4vLyAoRE9ORSlVcGRhdGUgVmlldyBBbGwgVGFza3MgTGlzdCBcbi8vIChET05FKUFkZCBUby1kbywgUmVtb3ZlIFRvLWRvXG4vLyAoRE9ORSljbGVhciB0by1kb3M/XG4vLyAoRE9ORSlNYXJrIFRvLWRvIGFzIGNvbXBsZXRlZFxuLy8gKERPTkUpVGFiIGJldHdlZW4gdG8tZG8gYW5kIFByb2plY3QgZm9ybVxuLy8gKERPTkUpU2hvdyBBZGQgTmV3IEZvcm1cblxuLy8gUHJvamVjdHMgLSByZWZyZXNoQWxsIGVxdWl2YWxlbnRcblxuXG4vLyBMaXN0IFRvLWRvcyBhbmQgUHJvamVjdHMgaW4gbGV2ZWwgb2YgcHJpb3JpdHk/XG5cblxuY29uc3QgRE9NSGFuZGxlciA9ICgoKSA9PiB7XG5cbiAgICBjb25zdCBpbml0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBhZGROZXdCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLW5ldy1idXR0b24nKTtcbiAgICAgICAgY29uc3QgdG9kb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0by1kby10YWInKTtcbiAgICAgICAgY29uc3QgcHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LXRhYicpO1xuICAgICAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZS10YWInKTtcblxuICAgICAgICBhZGROZXdCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmb3JtLnNob3cpO1xuICAgICAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZvcm0uc2hvdyk7XG4gICAgICAgIHRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBmb3JtLnN3aXRjaEZvcm1zVG8oJ3RvZG8nKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGZvcm0uc3dpdGNoRm9ybXNUbygncHJvamVjdCcpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gVE8tRE8gTUFOSVBTXG5cbiAgICBjb25zdCB0b2RvID0gKCgpID0+IHtcbiAgICAgICAgbGV0IHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGFibGUgdGJvZHknKTtcblxuICAgICAgICBjb25zdCByZWZyZXNoQWxsID0gdG9kb0FycmF5ID0+IHtcbiAgICAgICAgICAgIGNsZWFyQWxsKCk7XG4gICAgICAgICAgICB0b2RvQXJyYXkuZm9yRWFjaCh0b2RvT2JqZWN0ID0+IHtcbiAgICAgICAgICAgICAgICAvLyBkZXN0cnVjdHVyZSB0aGUgb2JqZWN0IGFuZCBJSUZFIGl0IGludG8gYWRkXG4gICAgICAgICAgICAgICAgKCh7aWQsIHRpdGxlLCBkdWVEYXRlLCBwcm9qZWN0TmFtZX0pID0+IFxuICAgICAgICAgICAgICAgIGFkZChpZCwgdGl0bGUsIGR1ZURhdGUsIHByb2plY3ROYW1lKSkodG9kb09iamVjdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1hcmtEb25lID0gKGlkKSA9PiBcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHRyW2RhdGEtbnVtPScke2lkfSddYClcbiAgICAgICAgICAgICAgICAgICAgLmNsYXNzTGlzdFxuICAgICAgICAgICAgICAgICAgICAudG9nZ2xlKCdkb25lJyk7XG5cbiAgICAgICAgY29uc3QgY2xlYXJBbGwgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGJvZHknKTtcbiAgICAgICAgICAgIHRhYmxlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld0JvZHksIHRhYmxlKTtcbiAgICAgICAgICAgIC8vIHRoZSBub2RlIHRoYXQgdXNlZCB0byBiZSB0YWJsZSBpcyBub3cgZ29uZS5cbiAgICAgICAgICAgIC8vIHNvIHJlZnJlc2ggaXRcbiAgICAgICAgICAgIHRhYmxlID0gbmV3Qm9keTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFkZCA9IChpZCwgdGl0bGUsIGR1ZURhdGUsIHByb2plY3ROYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdSb3cgPSB0YWJsZS5pbnNlcnRSb3coKTtcbiAgICAgICAgICAgIG5ld1Jvdy5kYXRhc2V0Lm51bSA9IGlkO1xuXG4gICAgICAgICAgICBjb25zdCBuZXdDaGsgPSBuZXdSb3cuaW5zZXJ0Q2VsbCgwKTtcbiAgICAgICAgICAgIGNvbnN0IENoa0luID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIENoa0luLnR5cGUgPSAnY2hlY2tib3gnO1xuICAgICAgICAgICAgLy8gQ2hlY2tib3ggRXZlbnQgTGlzdGVuZXJcbiAgICAgICAgICAgIC8vIFRoaXMgc2hvdWxkIG5vdCBoYXBwZW4gZGlyZWN0bHksXG4gICAgICAgICAgICAvLyBidXQgbWFya0RvbmUgc2hvdWxkIGdldCBjYWxsZWQgYnkgYSBmdW5jdGlvblxuICAgICAgICAgICAgLy8gYWZ0ZXIgb2JqZWN0IHN0YXRlIGlzIGNoYW5nZWQgXG4gICAgICAgICAgICBDaGtJbi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbWFya0RvbmUoaWQpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIG5ld0Noay5hcHBlbmQoQ2hrSW4pO1xuXG4gICAgICAgICAgICBjb25zdCBuZXdUaXRsZSA9IG5ld1Jvdy5pbnNlcnRDZWxsKDEpO1xuICAgICAgICAgICAgbmV3VGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcblxuICAgICAgICAgICAgY29uc3QgbmV3RGF0ZSA9IG5ld1Jvdy5pbnNlcnRDZWxsKDIpO1xuICAgICAgICAgICAgbmV3RGF0ZS50ZXh0Q29udGVudCA9IGR1ZURhdGU7XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXdSb3cuaW5zZXJ0Q2VsbCgzKTtcbiAgICAgICAgICAgIG5ld1Byb2plY3QudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcblxuICAgICAgICAgICAgY29uc3QgbmV3RWRpdCA9IG5ld1Jvdy5pbnNlcnRDZWxsKDQpO1xuICAgICAgICAgICAgY29uc3QgRWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgRWRpdEJ0bi5kYXRhc2V0Lm51bSA9IGlkOyAvLyBtYXkgbm90IGV2ZW4gYmUgcmVsZXZhbnRcbiAgICAgICAgICAgIEVkaXRCdG4uY2xhc3NMaXN0LmFkZCgnZWRpdCcpO1xuICAgICAgICAgICAgRWRpdEJ0bi50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuICAgICAgICAgICAgLy8gRWRpdCBFdmVudCBMaXN0ZW5lclxuICAgICAgICAgICAgbmV3RWRpdC5hcHBlbmQoRWRpdEJ0bik7XG5cblxuICAgICAgICAgICAgY29uc3QgbmV3Um12ID0gbmV3Um93Lmluc2VydENlbGwoNSk7XG4gICAgICAgICAgICBjb25zdCBSbXZCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIFJtdkJ0bi5kYXRhc2V0Lm51bSA9IGlkOyAvLyBtYXkgbm90IGV2ZW4gYmUgcmVsZXZhbnRcbiAgICAgICAgICAgIFJtdkJ0bi5jbGFzc0xpc3QuYWRkKCdybXYnKTtcbiAgICAgICAgICAgIFJtdkJ0bi50ZXh0Q29udGVudCA9IFwiUmVtb3ZlXCI7XG4gICAgICAgICAgICAvLyBSZW1vdmUgRXZlbnQgTGlzdGVuZXJcbiAgICAgICAgICAgIC8vIFRoaXMgc2hvdWxkIE5PVCBkaXJlY3RseSBjYWxsIHRoZSBET00gTWFuaXAuIE90aGVyd2lzZVxuICAgICAgICAgICAgLy8gdGhlIHVuZGVybHlpbmcgVG8tZG8gb2JqZWN0IHdpbGwgbm90IGJlIGRlbGV0ZWQhXG4gICAgICAgICAgICAvLyBSbXZCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiByZW1vdmUoaWQpKTtcblxuICAgICAgICAgICAgbmV3Um12LmFwcGVuZChSbXZCdG4pO1xuXG4gICAgICAgIH07XG4gICAgICAgIC8vIE5vdCBuZWNlc3NhcnkuXG4gICAgICAgIGNvbnN0IF9yZW1vdmUgPSBpZCA9PiB7XG4gICAgICAgICAgICBjb25zdCByb3dUb1JlbW92ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHRyW2RhdGEtbnVtPScke2lkfSddYCk7XG4gICAgICAgICAgICByb3dUb1JlbW92ZS5yZW1vdmUoKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBBZGRpbmcvUmVtb3ZpbmcgVG8tZG9zIGZyb20gRE9NIGlzIHVubmVjZXNzYXJ5LlxuICAgICAgICAvLyBXZSBjYW4gc2ltcGx5IHJlZnJlc2hBbGwuXG4gICAgICAgIHJldHVybiB7cmVmcmVzaEFsbH07XG5cbiAgICB9KSgpO1xuXG4gICAgLy8gUFJPSkVDVCBNQU5JUFNcblxuICAgIGNvbnN0IHVwZGF0ZVZpZXdBbGwgPSB0YXNrcyA9PiB7XG4gICAgICAgIGNvbnN0IHZpZXdBbGxOdW1iZXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdmlldy1hbGwgLnByb2plY3Qtbm8nKTtcbiAgICAgICAgdmlld0FsbE51bWJlckRpdi50ZXh0Q29udGVudCA9IHRhc2tzO1xuICAgIH1cblxuICAgIGNvbnN0IHByb2plY3QgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0c0xpc3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWxpc3QnKTtcbiAgICBcbiAgICAgICAgY29uc3QgYWRkID0gKGlkLCBuYW1lLCB0YXNrcyA9IDApID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgY29uc3QgbmV3QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBjb25zdCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBcbiAgICAgICAgICAgIC8vIElEIGdlbmVyYXRpb24gc2hvdWxkIGJlIGhhbmRsZWQgaW4gbG9naWMuIFxuICAgICAgICAgICAgbmV3SXRlbS5pZCA9IGBwcm9qZWN0LSR7aWR9YDtcbiAgICAgICAgICAgIGZvcm0uYWRkUHJvamVjdChpZCwgbmFtZSk7XG4gICAgXG4gICAgICAgICAgICBuZXdEaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1ubycpO1xuICAgICAgICAgICAgbmV3QnRuLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICAgICAgICAgIG5ld0l0ZW0uY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICAgIFxuICAgICAgICAgICAgbmV3RGl2LnRleHRDb250ZW50ID0gdGFza3M7XG4gICAgICAgICAgICBuZXdCdG4udGV4dENvbnRlbnQgPSBuYW1lO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBuZXdCdG4uYXBwZW5kKG5ld0Rpdik7XG4gICAgICAgICAgICBuZXdJdGVtLmFwcGVuZChuZXdCdG4pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBwcm9qZWN0c0xpc3RFbGVtZW50LmFwcGVuZChuZXdJdGVtKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVtb3ZlID0gaWQgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbVRvUmVtb3ZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Byb2plY3QtJHtpZH1gKTtcbiAgICAgICAgICAgIGl0ZW1Ub1JlbW92ZS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGZvcm0ucmVtb3ZlUHJvamVjdChpZCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdXBkYXRlID0gKGlkLCB0YXNrcykgPT4ge1xuICAgICAgICAgICAgY29uc3QgbnVtYmVyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Byb2plY3QtJHtpZH0gLnByb2plY3Qtbm9gKTtcbiAgICAgICAgICAgIG51bWJlckRpdi50ZXh0Q29udGVudCA9IHRhc2tzO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLy8gSSBhbSBub3Qgc3VyZSBpZiB0aGlzIGlzIHVzZWZ1bCBvciBjb3JyZWN0LlxuICAgICAgICBjb25zdCBfdXBkYXRlTmFtZSA9IChpZCwgbmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmFtZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwcm9qZWN0LSR7aWR9IGJ1dHRvbmApO1xuICAgICAgICAgICAgY29uc3QgbnVtYmVyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Byb2plY3QtJHtpZH0gLnByb2plY3Qtbm9gKTtcbiAgICAgICAgICAgIG5hbWVCdG4udGV4dENvbnRlbnQgPSBuYW1lO1xuICAgICAgICAgICAgbmFtZUJ0bi5hcHBlbmQobnVtYmVyRGl2KTtcbiAgICAgICAgICAgIC8vIGZvcm1NYW5pcHMuYWRkUHJvamVjdChpZCwgbmFtZSk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgcmV0dXJuIHthZGQsIHJlbW92ZSwgdXBkYXRlLCB1cGRhdGVWaWV3QWxsfVxuICAgIH0pKCk7XG4gICAgXG4gICAgLy8gRk9STSBNQU5JUFNcbiAgICBcbiAgICBjb25zdCBmb3JtID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgZm9ybVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1zZWN0aW9uJyk7XG4gICAgICAgIGNvbnN0IHByb2plY3RPcHRpb25zTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZC1wcm9qZWN0LWlucHV0Jyk7XG5cbiAgICAgICAgY29uc3Qgc2hvdyA9ICgpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaEZvcm1zVG8oJ3RvZG8nKTtcbiAgICAgICAgICAgIGZvcm1TZWN0aW9uLmNsYXNzTGlzdC50b2dnbGUoJ2Zvcm0tb3BlbicpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHN3aXRjaEZvcm1zVG8gPSBuYW1lID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10b2RvJyk7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdCcpO1xuICAgICAgICAgICAgc3dpdGNoKG5hbWUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICd0b2RvJzpcbiAgICAgICAgICAgICAgICAgICAgdG9kb0Zvcm0uY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Rm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50Jyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3Byb2plY3QnOlxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9Gb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7IFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCBhZGRQcm9qZWN0ID0gKGlkLCBuYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIG5ld09wdGlvbi52YWx1ZSA9IGBwcm9qZWN0LSR7aWR9YDtcbiAgICAgICAgICAgIG5ld09wdGlvbi50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgICAgICAgICBwcm9qZWN0T3B0aW9uc0xpc3QuYXBwZW5kKG5ld09wdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IGlkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvblRvUmVtb3ZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgb3B0aW9uW3ZhbHVlPSdwcm9qZWN0LSR7aWR9J11gKTtcbiAgICAgICAgICAgIG9wdGlvblRvUmVtb3ZlLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7YWRkUHJvamVjdCwgcmVtb3ZlUHJvamVjdCwgc2hvdywgc3dpdGNoRm9ybXNUb307XG4gICAgfSkoKTtcblxuXG5cblxuICAgIHJldHVybiB7dG9kbywgdXBkYXRlVmlld0FsbCwgcHJvamVjdCwgaW5pdH07XG5cbn0pKCk7XG5cblxuXG5cblxuXG5cblxuXG5cbmV4cG9ydCB7RE9NSGFuZGxlcn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBET01IYW5kbGVyfSBmcm9tICcuL21hbmlwcyc7XG5cblxuLy8gSU1QT1JUUyBURVNUSU5HXG5cbkRPTUhhbmRsZXIuaW5pdCgpO1xuXG5ET01IYW5kbGVyLnByb2plY3QuYWRkKDEsICdKb2duMScsIDEwMDApO1xuRE9NSGFuZGxlci5wcm9qZWN0LmFkZCgyLCAnSm9nbjInLCAxMDAwKTtcbkRPTUhhbmRsZXIucHJvamVjdC5hZGQoMywgJ0pvZ24zJywgMTAwMCk7XG5ET01IYW5kbGVyLnByb2plY3QuYWRkKDQsICdKb2duNCcsIDEwMDApO1xuRE9NSGFuZGxlci5wcm9qZWN0LmFkZCg1LCAnSm9nbjUnLCAxMDAwKTtcbkRPTUhhbmRsZXIucHJvamVjdC5hZGQoNiwgJ0pvZ242JywgMTAwMCk7XG5cbkRPTUhhbmRsZXIucHJvamVjdC5hZGQoNywgJ25vbnVtYmVyJyk7XG5ET01IYW5kbGVyLnByb2plY3QuYWRkKDgsICdibGFibGFibGEnKTtcblxuRE9NSGFuZGxlci5wcm9qZWN0LnJlbW92ZSg1KTtcbkRPTUhhbmRsZXIucHJvamVjdC5yZW1vdmUoMSk7XG5cbkRPTUhhbmRsZXIucHJvamVjdC51cGRhdGUoNiwgMjIpO1xuRE9NSGFuZGxlci5wcm9qZWN0LnVwZGF0ZSgzLCAyMDAwKTtcblxuRE9NSGFuZGxlci51cGRhdGVWaWV3QWxsKDIyKTtcblxuY29uc3QgdG9kb01ha2VyID0gKChpZCwgdGl0bGUsIGR1ZURhdGUsIHByb2plY3ROYW1lLCBwcmlvcml0eSkgPT4ge3JldHVybiB7aWQsIHRpdGxlLCBkdWVEYXRlLCBwcm9qZWN0TmFtZSwgcHJpb3JpdHl9fSk7XG5cbmxldCB0b2RvTGlzdCA9IFsgXG4gICAgdG9kb01ha2VyKDEsJ2hlbGxvJywnMC8wOS8yMDIwJywnZ29kb2UnLCA1KSxcbiAgICB0b2RvTWFrZXIoMiwnaGVsbG8yJywnMC8wOS8yMDIwJywnZ29kb2UnLCA1KSxcbiAgICB0b2RvTWFrZXIoMywnaGVsbG8zJywnMC8wOS8yMDIwJywnZ29kb2UnLCA1KSxcbiAgICB0b2RvTWFrZXIoNCwnaGVsbG80JywnMC8wOS8yMzMwMjAnLCdnbzRkb2UnLCAyKSxcbiAgICB0b2RvTWFrZXIoNSwnaGVsbG81JywnMC8wOS8yMDIwJywnZ29kb2UnLCAxKSxcbl07XG5cbkRPTUhhbmRsZXIudG9kby5yZWZyZXNoQWxsKHRvZG9MaXN0KTtcbiJdLCJuYW1lcyI6WyJET01IYW5kbGVyIiwidG9kbyIsInRhYmxlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicmVmcmVzaEFsbCIsInRvZG9BcnJheSIsIm5ld0JvZHkiLCJjcmVhdGVFbGVtZW50IiwicGFyZW50Tm9kZSIsInJlcGxhY2VDaGlsZCIsImNsZWFyQWxsIiwiZm9yRWFjaCIsInRvZG9PYmplY3QiLCJpZCIsInRpdGxlIiwiZHVlRGF0ZSIsInByb2plY3ROYW1lIiwibmV3Um93IiwiaW5zZXJ0Um93IiwiZGF0YXNldCIsIm51bSIsIm5ld0NoayIsImluc2VydENlbGwiLCJDaGtJbiIsInR5cGUiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwibWFya0RvbmUiLCJhcHBlbmQiLCJ0ZXh0Q29udGVudCIsIm5ld0VkaXQiLCJFZGl0QnRuIiwiYWRkIiwibmV3Um12IiwiUm12QnRuIiwidXBkYXRlVmlld0FsbCIsInRhc2tzIiwicHJvamVjdCIsInByb2plY3RzTGlzdEVsZW1lbnQiLCJuYW1lIiwibmV3SXRlbSIsIm5ld0J0biIsIm5ld0RpdiIsImZvcm0iLCJhZGRQcm9qZWN0IiwicmVtb3ZlIiwicmVtb3ZlUHJvamVjdCIsInVwZGF0ZSIsImZvcm1TZWN0aW9uIiwicHJvamVjdE9wdGlvbnNMaXN0Iiwic3dpdGNoRm9ybXNUbyIsInRvZG9Gb3JtIiwicHJvamVjdEZvcm0iLCJuZXdPcHRpb24iLCJ2YWx1ZSIsInNob3ciLCJpbml0IiwiYWRkTmV3QnRuIiwidG9kb0J0biIsInByb2plY3RCdG4iLCJjbG9zZUJ0biIsInRvZG9NYWtlciIsInByaW9yaXR5IiwidG9kb0xpc3QiXSwic291cmNlUm9vdCI6IiJ9