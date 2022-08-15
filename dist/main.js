(()=>{"use strict";const e=(()=>{let e=[],t=0,o=0;const r=e=>{e.sort(((e,t)=>e.priority-t.priority))};return{project:{add:(t,d)=>{e.push({id:o,name:t,priority:d,todoList:[]}),o++,r(e)},edit:(t,o,d)=>{let n=e.filter((e=>e.id===t))[0];n.name=o,n.priority=d,r(e)},forDOM:()=>{let t=[];return e.forEach((e=>{t.push({id:e.id,name:e.name,tasks:e.todoList.filter((e=>21!=e.priority)).length})})),t},remove:t=>{const o=e.indexOf(e.filter((e=>e.id===t))[0]);e.splice(o,1)},getIdOf:t=>e.filter((e=>e.name==t)).id,getCount:()=>e.length},todo:(()=>{const o=t=>{let o=e.indexOf(e.filter((e=>e.id==parseInt(t)))[0]);return e[o].todoList},d=t=>{if(-2===t)return n();const r=o(t);let d=[];return r.forEach((o=>{d.push({id:o.id,title:o.title,dueDate:o.dueDate,projectName:e.filter((e=>e.id===t))[0].name,done:21==o.priority,projectId:t})})),d},n=()=>{let t=[];return e.forEach((e=>t.push(d(e.id)))),t.flat(1)};return{add:(e,d,n,c)=>{let l=o(e);l.push({id:t,title:d,dueDate:n,priority:c}),t++,r(l)},edit:(e,t,d,n,c)=>{let l=o(e),i=l.filter((e=>e.id===t))[0];i.title=d,i.dueDate=n,i.priority=c,r(l)},remove:(e,t)=>{let r=o(e);const d=r.indexOf(r.filter((e=>e.id===t))[0]);r.splice(d,1)},forDOM:d}})()}})(),t=(()=>{const t=(()=>{let t=document.querySelector("table tbody");const n=t=>{l(),t.forEach((e=>{(({id:e,title:t,dueDate:o,projectName:r,done:d,projectId:n})=>{i(e,t,o,r,d,n)})(e)})),o(e.todo.forDOM(-2).filter((e=>!e.done)).length)},c=e=>document.querySelector(`tr[data-num='${e}']`).classList.toggle("done"),l=()=>{const e=document.createElement("tbody");t.parentNode.replaceChild(e,t),t=e},i=(o,l,i,s,u,a)=>{const p=t.insertRow();p.dataset.num=o;const m=p.insertCell(0),f=document.createElement("input");f.type="checkbox",u&&(f.checked=!0,c(o)),f.addEventListener("change",(()=>{!1===u?(u=!0,c(o),e.todo.edit(a,o,l,i,21),n(e.todo.forDOM(-2)),r.refreshAll(e.project.forDOM())):(u=!1,c(o),e.todo.edit(a,o,l,i,1),n(e.todo.forDOM(-2)),r.refreshAll(e.project.forDOM()))})),m.append(f),p.insertCell(1).textContent=l,p.insertCell(2).textContent=i,p.insertCell(3).textContent=s;const y=p.insertCell(4),h=document.createElement("button");h.dataset.num=o,h.classList.add("edit"),h.textContent="Edit",h.addEventListener("click",(()=>{d.showPrefill(l,a,i,1),e.todo.remove(a,o),n(e.todo.forDOM(-2)),r.refreshAll(e.project.forDOM())})),y.append(h);const v=p.insertCell(5),j=document.createElement("button");j.dataset.num=o,j.dataset.projectId=a,j.classList.add("rmv"),j.textContent="Remove",j.addEventListener("click",(()=>{e.todo.remove(a,o),n(e.todo.forDOM(-2)),r.refreshAll(e.project.forDOM())})),v.append(j)};return{refreshAll:n}})(),o=e=>{document.querySelector("#view-all .project-no").textContent=e},r=(()=>{const o=document.querySelector(".projects-list");return{refreshAll:r=>{d.clearProjects(),document.querySelectorAll("li.project").forEach((e=>e.remove())),r.forEach((r=>{(({id:r,name:n,tasks:c})=>{((r,n,c)=>{const l=document.createElement("li"),i=document.createElement("button"),s=document.createElement("div");l.id=`${r}`,d.addProject(r,n),i.addEventListener("click",(()=>t.refreshAll(e.todo.forDOM(r)))),s.classList.add("project-no"),i.classList.add("project"),l.classList.add("project"),s.textContent=c,i.textContent=n,i.append(s),l.append(i),o.append(l)})(r,n,c)})(r)}))}}})(),d=(()=>{const e=document.querySelector(".form-section"),t=document.querySelector("#td-project-input"),o=e=>{const t=document.querySelector(".add-todo"),o=document.querySelector(".add-project");switch(e){case"todo":t.classList.add("current"),o.classList.remove("current");break;case"project":o.classList.add("current"),t.classList.remove("current")}};return{addProject:(e,o)=>{const r=document.createElement("option");r.value=`${e}`,r.textContent=o,t.append(r)},clearProjects:()=>{document.querySelectorAll("option").forEach((e=>e.remove()))},show:()=>{o("todo"),e.classList.toggle("form-open")},showPrefill:(t,r,d,n)=>{o("todo"),e.classList.toggle("form-open"),document.querySelector("#td-project-input").value=r,document.querySelector("#td-title-input").value=t,document.querySelector("#td-due-date-input").value=d,document.querySelector("#td-priority-input").value=n},switchFormsTo:o}})();return{project:r,todo:t,updateViewAll:o,form:d}})();(()=>{t.project.refreshAll(e.project.forDOM()),t.todo.refreshAll(e.todo.forDOM(-2));const o=document.querySelector(".add-project-form"),r=document.querySelector(".add-todo-form");document.querySelector("#view-all button").addEventListener("click",(()=>t.todo.refreshAll(e.todo.forDOM(-2))));const d=document.querySelector(".add-new-button"),n=document.querySelector("#to-do-tab"),c=document.querySelector("#project-tab"),l=document.querySelector("#close-tab");d.addEventListener("click",t.form.show),l.addEventListener("click",t.form.show),n.addEventListener("click",(()=>{t.form.switchFormsTo("todo")})),c.addEventListener("click",(()=>{t.form.switchFormsTo("project")}));const i=document.querySelector(".warning-no-projects");o.addEventListener("submit",(()=>{event.preventDefault(),e.project.add(document.querySelector("#pr-title-input").value,document.querySelector("#pr-priority-input").value),t.todo.refreshAll(e.todo.forDOM(-2)),t.project.refreshAll(e.project.forDOM()),t.form.show(),i.style.display="none"})),r.addEventListener("submit",(()=>{event.preventDefault(),0!=e.project.getCount()?(e.todo.add(document.querySelector("#td-project-input").value,document.querySelector("#td-title-input").value,document.querySelector("#td-due-date-input").value,document.querySelector("#td-priority-input").value),t.todo.refreshAll(e.todo.forDOM(-2)),t.project.refreshAll(e.project.forDOM()),t.form.show()):i.style.display="block"}))})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixFQUFXbkMsUUFBUXVDLFdBQVdqRCxFQUFZVSxRQUFRVSxVQUNsRHlCLEVBQVcrQixLQUFLb0IsUUFHaEJPLEVBQVFHLE1BQU1DLFFBQVUsT0FDNUIsR0FFRixFQ3JFVkMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tb2Rpbi8uL3NyYy9kYXRhLmpzIiwid2VicGFjazovL3RvZG8tb2Rpbi8uL3NyYy9tYW5pcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1vZGluLy4vc3JjL2ludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly90b2RvLW9kaW4vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTkI6IHByaW9yaXR5ID0gMCBvciAtMSBmb3IgYSBDb21wbGV0ZWQgVGFza1xuLy8gUFJJT1JJVFkgMjEgPT09IERPTkVcblxuXG5jb25zdCBEYXRhSGFuZGxlciA9ICgoKSA9PiB7XG4gICAgbGV0IHByb2plY3RMaXN0ID0gW107XG5cbiAgICBsZXQgdGFza0lkQ291bnQgPSAwO1xuICAgIGxldCBwcm9qZWN0SWRDb3VudCA9IDA7XG5cbiAgICBjb25zdCBzb3J0TGlzdCA9IChsaXN0KSA9PiB7XG4gICAgICAgIGxpc3Quc29ydCgoYSxiKT0+YS5wcmlvcml0eSAtIGIucHJpb3JpdHkpO1xuICAgIH1cblxuICAgIGNvbnN0IHByb2plY3QgPSAoKCk9PntcbiAgICAgICAgY29uc3QgYWRkID0gKG5hbWUsIHByaW9yaXR5KSA9PiB7XG4gICAgICAgICAgICBsZXQgdG9kb0xpc3QgPSBbXTtcbiAgICAgICAgICAgIHByb2plY3RMaXN0LnB1c2goe2lkOiBwcm9qZWN0SWRDb3VudCxuYW1lLHByaW9yaXR5LHRvZG9MaXN0fSlcbiAgICAgICAgICAgIHByb2plY3RJZENvdW50Kys7XG4gICAgICAgICAgICBzb3J0TGlzdChwcm9qZWN0TGlzdCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVtb3ZlID0gaWQgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gcHJvamVjdExpc3QuaW5kZXhPZihwcm9qZWN0TGlzdC5maWx0ZXIocHJvaiA9PiBwcm9qLmlkID09PSBpZClbMF0pO1xuICAgICAgICAgICAgcHJvamVjdExpc3Quc3BsaWNlKHByb2plY3RJbmRleCwxKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBlZGl0XG4gICAgICAgIGNvbnN0IGVkaXQgPSAoaWQsIG5hbWUsIHByaW9yaXR5KSA9PiB7XG4gICAgICAgICAgICBsZXQgcHJvamVjdFRvQ2hhbmdlID0gcHJvamVjdExpc3QuZmlsdGVyKHByb2ogPT4gcHJvai5pZCA9PT0gaWQpWzBdXG4gICAgICAgICAgICBwcm9qZWN0VG9DaGFuZ2UubmFtZSA9IG5hbWU7XG4gICAgICAgICAgICBwcm9qZWN0VG9DaGFuZ2UucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgICAgIHNvcnRMaXN0KHByb2plY3RMaXN0KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBnZXRDb3VudCA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0TGlzdC5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZ2V0SWRPZiA9IHByb2plY3ROYW1lID0+IHtcbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0TGlzdC5maWx0ZXIocHJvaiA9PiBwcm9qLm5hbWUgPT0gcHJvamVjdE5hbWUpLmlkO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZvckRPTSA9ICgpID0+IHtcbiAgICAgICAgICAgIGxldCBsaXN0ID0gW107XG4gICAgICAgICAgICAvLyBpZCwgdGl0bGUsIG51bWJlclxuICAgICAgICAgICAgcHJvamVjdExpc3QuZm9yRWFjaChwcm9qID0+IHtcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2goe2lkOiBwcm9qLmlkLCBuYW1lOiBwcm9qLm5hbWUsIFxuICAgICAgICAgICAgICAgICAgICB0YXNrczogcHJvai50b2RvTGlzdC5maWx0ZXIodGFzayA9PiB0YXNrLnByaW9yaXR5ICE9IDIxKS5sZW5ndGhcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHthZGQsIGVkaXQsIGZvckRPTSwgcmVtb3ZlLCBnZXRJZE9mLCBnZXRDb3VudH07XG4gICAgfSkoKTtcbiAgICBjb25zdCB0b2RvID0gKCgpPT57XG4gICAgICAgIGNvbnN0IGdldFRvZG9MaXN0ID0gKHByb2plY3RJZCkgPT4ge1xuICAgICAgICAgICAgbGV0IHByb2plY3RJbmRleCA9IHByb2plY3RMaXN0LmluZGV4T2YocHJvamVjdExpc3QuZmlsdGVyKHByb2ogPT4gcHJvai5pZCA9PSBwYXJzZUludChwcm9qZWN0SWQpKVswXSk7XG4gICAgICAgICAgICByZXR1cm4gcHJvamVjdExpc3RbcHJvamVjdEluZGV4XS50b2RvTGlzdDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhZGQgPSAocHJvamVjdElkLCB0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IGN1cnJlbnRUb2RvTGlzdCA9IGdldFRvZG9MaXN0KHByb2plY3RJZCk7XG4gICAgICAgICAgICBjdXJyZW50VG9kb0xpc3QucHVzaCh7aWQ6IHRhc2tJZENvdW50LCB0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHl9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGFza0lkQ291bnQrKztcbiAgICAgICAgICAgIHNvcnRMaXN0KGN1cnJlbnRUb2RvTGlzdCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVtb3ZlID0gKHByb2plY3RJZCxpZCkgPT4ge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRUb2RvTGlzdCA9IGdldFRvZG9MaXN0KHByb2plY3RJZCk7XG4gICAgICAgICAgICBjb25zdCB0b2RvSW5kZXggPSBjdXJyZW50VG9kb0xpc3QuaW5kZXhPZihjdXJyZW50VG9kb0xpc3QuZmlsdGVyKHRkID0+IHRkLmlkID09PSBpZClbMF0pO1xuICAgICAgICAgICAgY3VycmVudFRvZG9MaXN0LnNwbGljZSh0b2RvSW5kZXgsMSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZWRpdCA9IChwcm9qZWN0SWQsIGlkLCB0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50VG9kb0xpc3QgPSBnZXRUb2RvTGlzdChwcm9qZWN0SWQpO1xuICAgICAgICAgICAgbGV0IHRhc2tUb0NoYW5nZSA9IGN1cnJlbnRUb2RvTGlzdC5maWx0ZXIodGFzayA9PiB0YXNrLmlkID09PSBpZClbMF07XG4gICAgICAgICAgICB0YXNrVG9DaGFuZ2UudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgICAgIHRhc2tUb0NoYW5nZS5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgICAgIHRhc2tUb0NoYW5nZS5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICAgICAgc29ydExpc3QoY3VycmVudFRvZG9MaXN0KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmb3JET00gPSAocHJvamVjdElkKSA9PiB7XG4gICAgICAgICAgICAvLyBtYWtlcyBpdCBlYXNpZXIgdG8gdHJhY2sgc3RhdGVcbiAgICAgICAgICAgIGlmKHByb2plY3RJZD09PS0yKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWxsRm9yRE9NKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VG9kb0xpc3QgPSBnZXRUb2RvTGlzdChwcm9qZWN0SWQpO1xuICAgICAgICAgICAgbGV0IGxpc3QgPSBbXTtcbiAgICAgICAgICAgIC8vIGlkLCB0aXRsZSwgZHVlRGF0ZSwgcHJvamVjdE5hbWUsIGRvbmU/XG4gICAgICAgICAgICBjdXJyZW50VG9kb0xpc3QuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBpZDogdGFzay5pZCwgdGl0bGU6IHRhc2sudGl0bGUsIGR1ZURhdGU6IHRhc2suZHVlRGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdE5hbWU6IHByb2plY3RMaXN0LmZpbHRlcihwcm9qID0+IHByb2ouaWQgPT09IHByb2plY3RJZClbMF0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZG9uZTogdGFzay5wcmlvcml0eSA9PSAyMSA/IHRydWUgOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdElkOiBwcm9qZWN0SWQsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBsaXN0O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFsbEZvckRPTSA9ICgpID0+IHtcbiAgICAgICAgICAgIGxldCBsaXN0ID0gW107XG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5mb3JFYWNoKHByb2ogPT4gbGlzdC5wdXNoKGZvckRPTShwcm9qLmlkKSkpO1xuICAgICAgICAgICAgcmV0dXJuIGxpc3QuZmxhdCgxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge2FkZCwgZWRpdCwgcmVtb3ZlLCBmb3JET019O1xuICAgIH0pKCk7XG5cbiAgICByZXR1cm4ge3Byb2plY3QsIHRvZG99O1xufSkoKTtcblxuXG5leHBvcnQge0RhdGFIYW5kbGVyfTsiLCIvLyBTVE9SRVMgRE9NIE1BTklQVUxBVElPTlNcblxuaW1wb3J0IHsgRGF0YUhhbmRsZXIgfSBmcm9tIFwiLi9kYXRhXCI7XG5cbmNvbnN0IERPTUhhbmRsZXIgPSAoKCkgPT4ge1xuICAgIC8vIFRPLURPIE1BTklQU1xuXG4gICAgY29uc3QgdG9kbyA9ICgoKSA9PiB7XG4gICAgICAgIGxldCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RhYmxlIHRib2R5Jyk7XG5cbiAgICAgICAgY29uc3QgcmVmcmVzaEFsbCA9IHRvZG9BcnJheSA9PiB7XG4gICAgICAgICAgICBjbGVhckFsbCgpO1xuICAgICAgICAgICAgdG9kb0FycmF5LmZvckVhY2godG9kb09iamVjdCA9PiB7XG4gICAgICAgICAgICAgICAgLy8gZGVzdHJ1Y3R1cmUgdGhlIG9iamVjdCBhbmQgSUlGRSBpdCBpbnRvIGFkZFxuICAgICAgICAgICAgICAgICgoe2lkLCB0aXRsZSwgZHVlRGF0ZSwgcHJvamVjdE5hbWUsIGRvbmUsIHByb2plY3RJZH0pID0+IFxuICAgICAgICAgICAgICAgIGFkZChpZCwgdGl0bGUsIGR1ZURhdGUsIHByb2plY3ROYW1lLCBkb25lLCBwcm9qZWN0SWQpKSh0b2RvT2JqZWN0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdXBkYXRlVmlld0FsbChEYXRhSGFuZGxlci50b2RvLmZvckRPTSgtMikuZmlsdGVyKHggPT4gIXguZG9uZSkubGVuZ3RoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1hcmtEb25lID0gKGlkKSA9PiBcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHRyW2RhdGEtbnVtPScke2lkfSddYClcbiAgICAgICAgICAgICAgICAgICAgLmNsYXNzTGlzdFxuICAgICAgICAgICAgICAgICAgICAudG9nZ2xlKCdkb25lJyk7XG5cbiAgICAgICAgY29uc3QgY2xlYXJBbGwgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGJvZHknKTtcbiAgICAgICAgICAgIHRhYmxlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld0JvZHksIHRhYmxlKTtcbiAgICAgICAgICAgIC8vIHRoZSBub2RlIHRoYXQgdXNlZCB0byBiZSB0YWJsZSBpcyBub3cgZ29uZS5cbiAgICAgICAgICAgIC8vIHNvIHJlZnJlc2ggaXRcbiAgICAgICAgICAgIHRhYmxlID0gbmV3Qm9keTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFkZCA9IChpZCwgdGl0bGUsIGR1ZURhdGUsIHByb2plY3ROYW1lLCBkb25lLCBwcm9qZWN0SWQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1JvdyA9IHRhYmxlLmluc2VydFJvdygpO1xuICAgICAgICAgICAgbmV3Um93LmRhdGFzZXQubnVtID0gaWQ7XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld0NoayA9IG5ld1Jvdy5pbnNlcnRDZWxsKDApO1xuICAgICAgICAgICAgY29uc3QgQ2hrSW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgQ2hrSW4udHlwZSA9ICdjaGVja2JveCc7XG4gICAgICAgICAgICBpZiAoZG9uZSkge1xuICAgICAgICAgICAgICAgIENoa0luLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIG1hcmtEb25lKGlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIENoZWNrYm94IEV2ZW50IExpc3RlbmVyXG4gICAgICAgICAgICAvLyBUaGlzIHNob3VsZCBub3QgaGFwcGVuIGRpcmVjdGx5LFxuICAgICAgICAgICAgLy8gYnV0IG1hcmtEb25lIHNob3VsZCBnZXQgY2FsbGVkIGJ5IGEgZnVuY3Rpb25cbiAgICAgICAgICAgIC8vIGFmdGVyIG9iamVjdCBzdGF0ZSBpcyBjaGFuZ2VkIFxuICAgICAgICAgICAgQ2hrSW4uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkb25lID09PSBmYWxzZSkgeyAgIFxuICAgICAgICAgICAgICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgbWFya0RvbmUoaWQpO1xuICAgICAgICAgICAgICAgICAgICBEYXRhSGFuZGxlci50b2RvLmVkaXQocHJvamVjdElkLCBpZCwgdGl0bGUsIGR1ZURhdGUsIDIxKTtcbiAgICAgICAgICAgICAgICAgICAgcmVmcmVzaEFsbChEYXRhSGFuZGxlci50b2RvLmZvckRPTSgtMikpO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LnJlZnJlc2hBbGwoRGF0YUhhbmRsZXIucHJvamVjdC5mb3JET00oKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBtYXJrRG9uZShpZCk7XG4gICAgICAgICAgICAgICAgICAgIERhdGFIYW5kbGVyLnRvZG8uZWRpdChwcm9qZWN0SWQsIGlkLCB0aXRsZSwgZHVlRGF0ZSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIHJlZnJlc2hBbGwoRGF0YUhhbmRsZXIudG9kby5mb3JET00oLTIpKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdC5yZWZyZXNoQWxsKERhdGFIYW5kbGVyLnByb2plY3QuZm9yRE9NKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBuZXdDaGsuYXBwZW5kKENoa0luKTtcblxuICAgICAgICAgICAgY29uc3QgbmV3VGl0bGUgPSBuZXdSb3cuaW5zZXJ0Q2VsbCgxKTtcbiAgICAgICAgICAgIG5ld1RpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld0RhdGUgPSBuZXdSb3cuaW5zZXJ0Q2VsbCgyKTtcbiAgICAgICAgICAgIG5ld0RhdGUudGV4dENvbnRlbnQgPSBkdWVEYXRlO1xuXG4gICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3Um93Lmluc2VydENlbGwoMyk7XG4gICAgICAgICAgICBuZXdQcm9qZWN0LnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld0VkaXQgPSBuZXdSb3cuaW5zZXJ0Q2VsbCg0KTtcbiAgICAgICAgICAgIGNvbnN0IEVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIEVkaXRCdG4uZGF0YXNldC5udW0gPSBpZDsgLy8gbWF5IG5vdCBldmVuIGJlIHJlbGV2YW50XG4gICAgICAgICAgICBFZGl0QnRuLmNsYXNzTGlzdC5hZGQoJ2VkaXQnKTtcbiAgICAgICAgICAgIEVkaXRCdG4udGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcbiAgICAgICAgICAgIC8vIEVkaXQgRXZlbnQgTGlzdGVuZXJcbiAgICAgICAgICAgIEVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZm9ybS5zaG93UHJlZmlsbCh0aXRsZSwgcHJvamVjdElkLCBkdWVEYXRlLCAxKTtcbiAgICAgICAgICAgICAgICBEYXRhSGFuZGxlci50b2RvLnJlbW92ZShwcm9qZWN0SWQsIGlkKTtcbiAgICAgICAgICAgICAgICByZWZyZXNoQWxsKERhdGFIYW5kbGVyLnRvZG8uZm9yRE9NKC0yKSk7XG4gICAgICAgICAgICAgICAgcHJvamVjdC5yZWZyZXNoQWxsKERhdGFIYW5kbGVyLnByb2plY3QuZm9yRE9NKCkpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIG5ld0VkaXQuYXBwZW5kKEVkaXRCdG4pO1xuXG5cbiAgICAgICAgICAgIGNvbnN0IG5ld1JtdiA9IG5ld1Jvdy5pbnNlcnRDZWxsKDUpO1xuICAgICAgICAgICAgY29uc3QgUm12QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBSbXZCdG4uZGF0YXNldC5udW0gPSBpZDsgLy8gbWF5IG5vdCBldmVuIGJlIHJlbGV2YW50XG4gICAgICAgICAgICBSbXZCdG4uZGF0YXNldC5wcm9qZWN0SWQgPSBwcm9qZWN0SWQ7XG4gICAgICAgICAgICBSbXZCdG4uY2xhc3NMaXN0LmFkZCgncm12Jyk7XG4gICAgICAgICAgICBSbXZCdG4udGV4dENvbnRlbnQgPSBcIlJlbW92ZVwiO1xuICAgICAgICAgICAgLy8gUmVtb3ZlIEV2ZW50IExpc3RlbmVyXG4gICAgICAgICAgICAvLyBUaGlzIHNob3VsZCBOT1QgZGlyZWN0bHkgY2FsbCB0aGUgRE9NIE1hbmlwLiBPdGhlcndpc2VcbiAgICAgICAgICAgIC8vIHRoZSB1bmRlcmx5aW5nIFRvLWRvIG9iamVjdCB3aWxsIG5vdCBiZSBkZWxldGVkIVxuICAgICAgICAgICAgUm12QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIERhdGFIYW5kbGVyLnRvZG8ucmVtb3ZlKHByb2plY3RJZCwgaWQpO1xuXG4gICAgICAgICAgICAgICAgcmVmcmVzaEFsbChEYXRhSGFuZGxlci50b2RvLmZvckRPTSgtMikpO1xuICAgICAgICAgICAgICAgIHByb2plY3QucmVmcmVzaEFsbChEYXRhSGFuZGxlci5wcm9qZWN0LmZvckRPTSgpKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBuZXdSbXYuYXBwZW5kKFJtdkJ0bik7XG5cbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4ge3JlZnJlc2hBbGx9O1xuXG4gICAgfSkoKTtcblxuICAgIC8vIFBST0pFQ1QgTUFOSVBTXG5cbiAgICBjb25zdCB1cGRhdGVWaWV3QWxsID0gdGFza3MgPT4ge1xuICAgICAgICBjb25zdCB2aWV3QWxsTnVtYmVyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ZpZXctYWxsIC5wcm9qZWN0LW5vJyk7XG4gICAgICAgIHZpZXdBbGxOdW1iZXJEaXYudGV4dENvbnRlbnQgPSB0YXNrcztcbiAgICB9XG5cbiAgICBjb25zdCBwcm9qZWN0ID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdHNMaXN0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1saXN0Jyk7XG5cbiAgICAgICAgY29uc3QgcmVmcmVzaEFsbCA9IHByb2plY3RBcnJheSA9PiB7XG4gICAgICAgICAgICBjbGVhckFsbCgpO1xuICAgICAgICAgICAgcHJvamVjdEFycmF5LmZvckVhY2gocHJvamVjdE9iamVjdCA9PiB7XG4gICAgICAgICAgICAgICAgLy8gZGVzdHJ1Y3R1cmUgdGhlIG9iamVjdCBhbmQgSUlGRSBpdCBpbnRvIGFkZFxuICAgICAgICAgICAgICAgICgoe2lkLCBuYW1lLCB0YXNrc30pID0+IFxuICAgICAgICAgICAgICAgIGFkZChpZCwgbmFtZSwgdGFza3MpKShwcm9qZWN0T2JqZWN0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsZWFyQWxsID0gKCkgPT4ge1xuICAgICAgICAgICAgZm9ybS5jbGVhclByb2plY3RzKCk7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TGlzdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGkucHJvamVjdCcpO1xuICAgICAgICAgICAgcHJvamVjdExpc3RJdGVtcy5mb3JFYWNoKHByb2ogPT4gcHJvai5yZW1vdmUoKSk7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBjb25zdCBhZGQgPSAoaWQsIG5hbWUsIHRhc2tzKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgXG4gICAgICAgICAgICAvLyBJRCBnZW5lcmF0aW9uIHNob3VsZCBiZSBoYW5kbGVkIGluIGxvZ2ljLiBcbiAgICAgICAgICAgIG5ld0l0ZW0uaWQgPSBgJHtpZH1gO1xuICAgICAgICAgICAgZm9ybS5hZGRQcm9qZWN0KGlkLCBuYW1lKTtcblxuICAgICAgICAgICAgbmV3QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdG9kby5yZWZyZXNoQWxsKERhdGFIYW5kbGVyLnRvZG8uZm9yRE9NKGlkKSkpO1xuICAgIFxuICAgICAgICAgICAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3Qtbm8nKTtcbiAgICAgICAgICAgIG5ld0J0bi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG4gICAgICAgICAgICBuZXdJdGVtLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICBcbiAgICAgICAgICAgIG5ld0Rpdi50ZXh0Q29udGVudCA9IHRhc2tzO1xuICAgICAgICAgICAgbmV3QnRuLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbmV3QnRuLmFwcGVuZChuZXdEaXYpO1xuICAgICAgICAgICAgbmV3SXRlbS5hcHBlbmQobmV3QnRuKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcHJvamVjdHNMaXN0RWxlbWVudC5hcHBlbmQobmV3SXRlbSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gSSBhbSBub3Qgc3VyZSBpZiB0aGVzZSB3aWxsIGJlIHJlbGV2YW50IGxhdGVyLlxuXG4gICAgICAgIC8vIGNvbnN0IHJlbW92ZSA9IGlkID0+IHtcbiAgICAgICAgLy8gICAgIGNvbnN0IGl0ZW1Ub1JlbW92ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lkfWApO1xuICAgICAgICAvLyAgICAgaXRlbVRvUmVtb3ZlLnJlbW92ZSgpO1xuICAgICAgICAvLyAgICAgZm9ybS5yZW1vdmVQcm9qZWN0KGlkKTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBjb25zdCB1cGRhdGUgPSAoaWQsIHRhc2tzKSA9PiB7XG4gICAgICAgIC8vICAgICBjb25zdCBudW1iZXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH0gLnByb2plY3Qtbm9gKTtcbiAgICAgICAgLy8gICAgIG51bWJlckRpdi50ZXh0Q29udGVudCA9IHRhc2tzO1xuICAgICAgICAgICAgXG4gICAgICAgIC8vIH1cbiAgICBcbiAgICAgICAgLy8gLy8gSSBhbSBub3Qgc3VyZSBpZiB0aGlzIGlzIHVzZWZ1bCBvciBjb3JyZWN0LlxuICAgICAgICAvLyBjb25zdCBfdXBkYXRlTmFtZSA9IChpZCwgbmFtZSkgPT4ge1xuICAgICAgICAvLyAgICAgY29uc3QgbmFtZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lkfSBidXR0b25gKTtcbiAgICAgICAgLy8gICAgIGNvbnN0IG51bWJlckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lkfSAucHJvamVjdC1ub2ApO1xuICAgICAgICAvLyAgICAgbmFtZUJ0bi50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgICAgIC8vICAgICBuYW1lQnRuLmFwcGVuZChudW1iZXJEaXYpO1xuICAgICAgICAvLyAgICAgLy8gZm9ybU1hbmlwcy5hZGRQcm9qZWN0KGlkLCBuYW1lKTtcbiAgICAgICAgLy8gfVxuICAgIFxuICAgICAgICByZXR1cm4ge3JlZnJlc2hBbGx9XG4gICAgfSkoKTtcbiAgICBcbiAgICAvLyBGT1JNIE1BTklQU1xuICAgIFxuICAgIGNvbnN0IGZvcm0gPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBmb3JtU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXNlY3Rpb24nKTtcbiAgICAgICAgY29uc3QgcHJvamVjdE9wdGlvbnNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RkLXByb2plY3QtaW5wdXQnKTtcblxuICAgICAgICBjb25zdCBzaG93ID0gKCkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoRm9ybXNUbygndG9kbycpO1xuICAgICAgICAgICAgZm9ybVNlY3Rpb24uY2xhc3NMaXN0LnRvZ2dsZSgnZm9ybS1vcGVuJyk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHNob3dQcmVmaWxsID0gKHRpdGxlLCBwcm9qZWN0SWQsIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2hGb3Jtc1RvKCd0b2RvJyk7XG4gICAgICAgICAgICBmb3JtU2VjdGlvbi5jbGFzc0xpc3QudG9nZ2xlKCdmb3JtLW9wZW4nKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZC1wcm9qZWN0LWlucHV0JykudmFsdWUgPSBwcm9qZWN0SWQ7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGQtdGl0bGUtaW5wdXQnKS52YWx1ZSA9IHRpdGxlO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RkLWR1ZS1kYXRlLWlucHV0JykudmFsdWUgPSBkdWVEYXRlO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RkLXByaW9yaXR5LWlucHV0JykudmFsdWUgPSBwcmlvcml0eTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN3aXRjaEZvcm1zVG8gPSBuYW1lID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10b2RvJyk7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdCcpO1xuICAgICAgICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBtYWtlcyBpdCBlYXN5IHRvIGFkZCwgZWcsIGEgbm90ZXMgdGFiXG4gICAgICAgICAgICBzd2l0Y2gobmFtZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3RvZG8nOlxuICAgICAgICAgICAgICAgICAgICB0b2RvRm9ybS5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAncHJvamVjdCc6XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RGb3JtLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0Zvcm0uY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhazsgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGFkZFByb2plY3QgPSAoaWQsIG5hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgbmV3T3B0aW9uLnZhbHVlID0gYCR7aWR9YDtcbiAgICAgICAgICAgIG5ld09wdGlvbi50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgICAgICAgICBwcm9qZWN0T3B0aW9uc0xpc3QuYXBwZW5kKG5ld09wdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTm90IHN1cmUgaWYgd2lsbCBiZSByZWxldmFudCBMYXRlclxuICAgICAgICBjb25zdCBjbGVhclByb2plY3RzID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uc1RvUmVtb3ZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgb3B0aW9uYCk7XG4gICAgICAgICAgICBvcHRpb25zVG9SZW1vdmUuZm9yRWFjaChwcm9qID0+IHByb2oucmVtb3ZlKCkpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHthZGRQcm9qZWN0LCBjbGVhclByb2plY3RzLCBzaG93LCBzaG93UHJlZmlsbCwgc3dpdGNoRm9ybXNUb307XG4gICAgfSkoKTtcblxuXG5cblxuICAgIHJldHVybiB7cHJvamVjdCwgdG9kbywgdXBkYXRlVmlld0FsbCwgZm9ybX07XG5cbn0pKCk7XG5cblxuXG5cblxuXG5cblxuXG5cbmV4cG9ydCB7RE9NSGFuZGxlcn07IiwiLy8gQWRkIFRvZG8gRm9ybSAtIGNyZWF0ZXMgbmV3IHRvZG8gaW4gZGF0YSAmIGFkZHMgdG8gRE9NLlxuLy8gQWRkIFByb2plY3QgRm9ybSAtIGNyZWF0ZXMgbmV3IHByb2plY3QgaW4gZGF0YSAmIGFkZHMgdG8gRE9NLlxuXG5pbXBvcnQgeyBEYXRhSGFuZGxlciB9IGZyb20gXCIuL2RhdGFcIjtcbmltcG9ydCB7IERPTUhhbmRsZXIgfSBmcm9tIFwiLi9tYW5pcHNcIjtcblxuY29uc3QgaW5pdGlhbGl6ZXIgPSAoKCkgPT4ge1xuXG4gICAgY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgICAgICAgRE9NSGFuZGxlci5wcm9qZWN0LnJlZnJlc2hBbGwoRGF0YUhhbmRsZXIucHJvamVjdC5mb3JET00oKSk7XG4gICAgICAgIERPTUhhbmRsZXIudG9kby5yZWZyZXNoQWxsKERhdGFIYW5kbGVyLnRvZG8uZm9yRE9NKC0yKSk7XG5cbiAgICAgICAgY29uc3QgUHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QtZm9ybScpO1xuICAgICAgICBjb25zdCBUb2RvRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdG9kby1mb3JtJyk7XG4gICAgICAgIGNvbnN0IHZpZXdBbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdmlldy1hbGwgYnV0dG9uJyk7XG4gICAgICAgIHZpZXdBbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBET01IYW5kbGVyLnRvZG8ucmVmcmVzaEFsbChEYXRhSGFuZGxlci50b2RvLmZvckRPTSgtMikpKTtcblxuICAgICAgICBjb25zdCBhZGROZXdCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLW5ldy1idXR0b24nKTtcbiAgICAgICAgY29uc3QgdG9kb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0by1kby10YWInKTtcbiAgICAgICAgY29uc3QgcHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LXRhYicpO1xuICAgICAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZS10YWInKTtcblxuICAgICAgICBhZGROZXdCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBET01IYW5kbGVyLmZvcm0uc2hvdyk7XG4gICAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgRE9NSGFuZGxlci5mb3JtLnNob3cpO1xuICAgICAgICB0b2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgRE9NSGFuZGxlci5mb3JtLnN3aXRjaEZvcm1zVG8oJ3RvZG8nKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIERPTUhhbmRsZXIuZm9ybS5zd2l0Y2hGb3Jtc1RvKCdwcm9qZWN0Jyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHdhcm5pbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2FybmluZy1uby1wcm9qZWN0cycpO1xuXG4gICAgICAgIC8vIFBST0pFQ1QgRk9STSBFVkVOVFNcbiAgICAgICAgUHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gQWRkIHByb2plY3QgdG8gZGF0YVxuICAgICAgICAgICAgRGF0YUhhbmRsZXIucHJvamVjdC5hZGQoXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByLXRpdGxlLWlucHV0JykudmFsdWUsXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByLXByaW9yaXR5LWlucHV0JykudmFsdWUsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgLy8gaSBmb3Jnb3QgdG8gaW1wbGVtZW50IGRlc2NyaXB0aW9ucy4uLi5cbiAgICAgICAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwci1kZXNjcmlwdGlvbi1pbnB1dCcpO1xuICAgIFxuICAgICAgICAgICAgLy8gcmVmcmVzaCBsaXN0XG4gICAgICAgICAgICBET01IYW5kbGVyLnRvZG8ucmVmcmVzaEFsbChEYXRhSGFuZGxlci50b2RvLmZvckRPTSgtMikpO1xuICAgICAgICAgICAgRE9NSGFuZGxlci5wcm9qZWN0LnJlZnJlc2hBbGwoRGF0YUhhbmRsZXIucHJvamVjdC5mb3JET00oKSk7XG4gICAgICAgICAgICBET01IYW5kbGVyLmZvcm0uc2hvdygpO1xuICAgICAgICAgICAgd2FybmluZy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFRPRE8gRk9STSBFVkVOVFNcbiAgICAgICAgVG9kb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICBpZihEYXRhSGFuZGxlci5wcm9qZWN0LmdldENvdW50KCkgIT0gMCkge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIEFkZCBwcm9qZWN0IHRvIGRhdGFcbiAgICAgICAgICAgICAgICBEYXRhSGFuZGxlci50b2RvLmFkZChcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RkLXByb2plY3QtaW5wdXQnKS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RkLXRpdGxlLWlucHV0JykudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZC1kdWUtZGF0ZS1pbnB1dCcpLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGQtcHJpb3JpdHktaW5wdXQnKS52YWx1ZSxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIC8vIGkgZm9yZ290IHRvIGltcGxlbWVudCBkZXNjcmlwdGlvbnMuLi4uXG4gICAgICAgICAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByLWRlc2NyaXB0aW9uLWlucHV0Jyk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIHJlZnJlc2ggbGlzdFxuICAgICAgICAgICAgICAgIERPTUhhbmRsZXIudG9kby5yZWZyZXNoQWxsKERhdGFIYW5kbGVyLnRvZG8uZm9yRE9NKC0yKSk7XG4gICAgICAgICAgICAgICAgRE9NSGFuZGxlci5wcm9qZWN0LnJlZnJlc2hBbGwoRGF0YUhhbmRsZXIucHJvamVjdC5mb3JET00oKSk7XG4gICAgICAgICAgICAgICAgRE9NSGFuZGxlci5mb3JtLnNob3coKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgd2FybmluZy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuXG4gICAgfVxuICAgIHJldHVybiB7aW5pdH07XG5cbn0pKCk7XG5cbmV4cG9ydCB7aW5pdGlhbGl6ZXJ9O1xuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQge0RPTUhhbmRsZXJ9IGZyb20gJy4vbWFuaXBzJztcbmltcG9ydCB7RGF0YUhhbmRsZXJ9IGZyb20gJy4vZGF0YSc7XG5pbXBvcnQgeyBpbml0aWFsaXplciB9IGZyb20gJy4vaW50ZXJmYWNlJztcblxuLy8gTGlzdCBUby1kb3MgYW5kIFByb2plY3RzIGluIGxldmVsIG9mIHByaW9yaXR5P1xuXG4vLyBJTVBPUlRTIFRFU1RJTkdcblxuaW5pdGlhbGl6ZXIuaW5pdCgpO1xuIl0sIm5hbWVzIjpbIkRhdGFIYW5kbGVyIiwicHJvamVjdExpc3QiLCJ0YXNrSWRDb3VudCIsInByb2plY3RJZENvdW50Iiwic29ydExpc3QiLCJsaXN0Iiwic29ydCIsImEiLCJiIiwicHJpb3JpdHkiLCJwcm9qZWN0IiwiYWRkIiwibmFtZSIsInB1c2giLCJpZCIsInRvZG9MaXN0IiwiZWRpdCIsInByb2plY3RUb0NoYW5nZSIsImZpbHRlciIsInByb2oiLCJmb3JET00iLCJmb3JFYWNoIiwidGFza3MiLCJ0YXNrIiwibGVuZ3RoIiwicmVtb3ZlIiwicHJvamVjdEluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsImdldElkT2YiLCJwcm9qZWN0TmFtZSIsImdldENvdW50IiwidG9kbyIsImdldFRvZG9MaXN0IiwicHJvamVjdElkIiwicGFyc2VJbnQiLCJhbGxGb3JET00iLCJjdXJyZW50VG9kb0xpc3QiLCJ0aXRsZSIsImR1ZURhdGUiLCJkb25lIiwiZmxhdCIsInRhc2tUb0NoYW5nZSIsInRvZG9JbmRleCIsInRkIiwiRE9NSGFuZGxlciIsInRhYmxlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicmVmcmVzaEFsbCIsInRvZG9BcnJheSIsImNsZWFyQWxsIiwidG9kb09iamVjdCIsInVwZGF0ZVZpZXdBbGwiLCJ4IiwibWFya0RvbmUiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJuZXdCb2R5IiwiY3JlYXRlRWxlbWVudCIsInBhcmVudE5vZGUiLCJyZXBsYWNlQ2hpbGQiLCJuZXdSb3ciLCJpbnNlcnRSb3ciLCJkYXRhc2V0IiwibnVtIiwibmV3Q2hrIiwiaW5zZXJ0Q2VsbCIsIkNoa0luIiwidHlwZSIsImNoZWNrZWQiLCJhZGRFdmVudExpc3RlbmVyIiwiYXBwZW5kIiwidGV4dENvbnRlbnQiLCJuZXdFZGl0IiwiRWRpdEJ0biIsImZvcm0iLCJzaG93UHJlZmlsbCIsIm5ld1JtdiIsIlJtdkJ0biIsInByb2plY3RzTGlzdEVsZW1lbnQiLCJwcm9qZWN0QXJyYXkiLCJjbGVhclByb2plY3RzIiwicXVlcnlTZWxlY3RvckFsbCIsInByb2plY3RPYmplY3QiLCJuZXdJdGVtIiwibmV3QnRuIiwibmV3RGl2IiwiYWRkUHJvamVjdCIsImZvcm1TZWN0aW9uIiwicHJvamVjdE9wdGlvbnNMaXN0Iiwic3dpdGNoRm9ybXNUbyIsInRvZG9Gb3JtIiwicHJvamVjdEZvcm0iLCJuZXdPcHRpb24iLCJ2YWx1ZSIsInNob3ciLCJQcm9qZWN0Rm9ybSIsIlRvZG9Gb3JtIiwiYWRkTmV3QnRuIiwidG9kb0J0biIsInByb2plY3RCdG4iLCJjbG9zZUJ0biIsIndhcm5pbmciLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3R5bGUiLCJkaXNwbGF5IiwiaW5pdGlhbGl6ZXIiXSwic291cmNlUm9vdCI6IiJ9