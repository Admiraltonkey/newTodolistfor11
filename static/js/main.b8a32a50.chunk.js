(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(t,e,n){t.exports=n(57)},34:function(t,e,n){},57:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(10),i=n.n(r),s=(n(34),n(1)),c=n(11),l=n(3),d=n(2),u=n(4),p=(n(7),n(12)),f=function(t){function e(){var t,n;Object(s.a)(this,e);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(r)))).onIsDoneChanged=function(t){n.props.changeStatus(n.props.task.id,t.currentTarget.checked?2:0)},n.onTitleChanged=function(t){n.setState({taskTitle:t.currentTarget.value})},n.state={editMode:!1,taskTitle:n.props.task.title},n.activateEditMode=function(){n.setState({editMode:!0})},n.deactivateEditMode=function(){n.props.changeTitle(n.props.task.id,n.state.taskTitle),n.setState({editMode:!1})},n.onDeleteTask=function(){n.props.deleteTask(n.props.task.id)},n.render=function(){var t=n.props.task.isDone?"todoList-task done":"todoList-task";return a.a.createElement("div",{className:t},a.a.createElement("input",{type:"checkbox",checked:2===n.props.task.status,onChange:n.onIsDoneChanged}),n.state.editMode?a.a.createElement("input",{onBlur:n.deactivateEditMode,onChange:n.onTitleChanged,autoFocus:!0,value:n.taskTitle}):a.a.createElement("span",{onClick:n.activateEditMode},n.props.task.id," - ",n.props.task.title),", priority: ",n.props.task.priority," ",a.a.createElement("button",{onClick:n.onDeleteTask},"X"))},n}return Object(u.a)(e,t),e}(a.a.Component),T=function(t){function e(){var t,n;Object(s.a)(this,e);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(r)))).render=function(){var t=n.props.tasks.map(function(t){return a.a.createElement(f,{task:t,changeStatus:n.props.changeStatus,changeTitle:n.props.changeTitle,deleteTask:n.props.deleteTask})});return a.a.createElement("div",{className:"todoList-tasks"},t)},n}return Object(u.a)(e,t),e}(a.a.Component),k=function(t){function e(){var t,n;Object(s.a)(this,e);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(r)))).state={isHidden:!1},n.onAllFilterClick=function(){n.props.changeFilter("All")},n.onCompletedFilterClick=function(){n.props.changeFilter("Completed")},n.onActiveFilterClick=function(){n.props.changeFilter("Active")},n.onShowFiltersClick=function(){n.setState({isHidden:!0})},n.onHideFiltersClick=function(){n.setState({isHidden:!1})},n.render=function(t){var e="All"===n.props.filterValue?"filter-active":"",o="Completed"===n.props.filterValue?"filter-active":"",r="Active"===n.props.filterValue?"filter-active":"";return a.a.createElement("div",{className:"todoList-footer"},!n.state.isHidden&&a.a.createElement("div",null,a.a.createElement("button",{onClick:n.onAllFilterClick,className:e},"All"),a.a.createElement("button",{onClick:n.onCompletedFilterClick,className:o},"Completed"),a.a.createElement("button",{onClick:n.onActiveFilterClick,className:r},"Active")),!n.state.isHidden&&a.a.createElement("span",{onClick:n.onShowFiltersClick},"hide"),n.state.isHidden&&a.a.createElement("span",{onClick:n.onHideFiltersClick},"show"))},n}return Object(u.a)(e,t),e}(a.a.Component),h=function(t){function e(){var t,n;Object(s.a)(this,e);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(r)))).state={editMode:!1,title:n.props.title},n.changeTitle=function(){n.setState({editMode:!0})},n.onTitleChange=function(t){n.setState({title:t.currentTarget.value})},n.onTitleBlur=function(){n.setState({editMode:!1}),n.props.updateTodolistTitle(n.state.title)},n.render=function(){return a.a.createElement("div",null,n.state.editMode?a.a.createElement("input",{value:n.state.title,onChange:n.onTitleChange,onBlur:n.onTitleBlur}):a.a.createElement("div",null,a.a.createElement("h3",{className:"todoList-header__title",onClick:n.changeTitle},n.state.title,"  "),a.a.createElement("button",{onClick:n.props.onDelete},"X")))},n}return Object(u.a)(e,t),e}(a.a.Component),m=function(t){function e(){var t,n;Object(s.a)(this,e);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(r)))).state={error:!1,title:""},n.onAddItemClick=function(){var t=n.state.title;n.setState({title:""}),""===t?n.setState({error:!0}):(n.setState({error:!1}),n.props.addItem(t))},n.onTitleChanged=function(t){n.setState({error:!1,title:t.currentTarget.value})},n.onKeyPress=function(t){"Enter"===t.key&&n.onAddItemClick()},n.render=function(){var t=n.state.error?"error":"";return a.a.createElement("div",{className:"todoList-newTaskForm"},a.a.createElement("input",{className:t,type:"text",placeholder:"New item name",onChange:n.onTitleChanged,onKeyPress:n.onKeyPress,value:n.state.title}),a.a.createElement("button",{onClick:n.onAddItemClick},"Add"))},n}return Object(u.a)(e,t),e}(a.a.Component),O=n(9),v=n(14);function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(n,!0).forEach(function(e){Object(p.a)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var E="TodoList/Reducer/ADD-TASK",j={todolists:[]},S=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"TodoList/Reducer/SET_TASKS":return b({},t,{todolists:Object(v.a)(t.todolists.map(function(t){return t.id===e.todolistId?b({},t,{tasks:e.tasks}):t}))});case"TodoList/Reducer/ADD-TODOLIST":return b({},t,{todolists:[].concat(Object(v.a)(t.todolists),[e.newTodolist])});case"TodoList/Reducer/SET_TODOLISTS":return b({},t,{todolists:e.todolists.map(function(t){return b({},t,{tasks:[]})})});case"TodoList/Reducer/DELETE-TODOLIST":return b({},t,{todolists:t.todolists.filter(function(t){return t.id!=e.todolistId})});case"TodoList/Reducer/DELETE-TASK":return b({},t,{todolists:t.todolists.map(function(t){return t.id===e.todolistId?b({},t,{tasks:t.tasks.filter(function(t){return t.id!=e.taskId})}):t})});case E:return b({},t,{todolists:t.todolists.map(function(t){return t.id===e.todolistId?b({},t,{tasks:[].concat(Object(v.a)(t.tasks),[e.newTask])}):t})});case"TodoList/Reducer/UPDATE-TASK":return b({},t,{todolists:t.todolists.map(function(t){return t.id===e.todolistId?b({},t,{tasks:t.tasks.map(function(t){return t.id!=e.taskId?t:b({},t,{},e.obj)})}):t})});case"TodoList/Reducer/CHANGE_TODOLIST_TITLE":return b({},t,{todolists:t.todolists.map(function(t){return t.id===e.todoListId?b({},t,{title:e.title}):t})})}return console.log("reducer: ",e),t},y=n(16),C=n.n(y).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/todo-lists",withCredentials:!0,headers:{"API-KEY":"8f9a9157-3f30-4705-bd4d-ae08502514a2"}}),L={createTask:function(t,e){return C.post("/".concat(e,"/tasks"),{title:t})},createTodolist:function(t){return C.post("",{title:t})},getTodolist:function(){return C.get("")},deleteTodolist:function(t){return C.delete("/".concat(t))},deleteTask:function(t){return C.delete("tasks/".concat(t))},updateTask:function(t){return C.put("/tasks",t)},getTasks:function(t){return C.get("/".concat(t,"/tasks"))},updateTitleTodolist:function(t,e){return C.put("/".concat(t),{title:e})}};function w(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}var A=function(t){function e(t){var n;return Object(s.a)(this,e),(n=Object(l.a)(this,Object(d.a)(e).call(this,t))).saveState=function(){var t=JSON.stringify(n.state);localStorage.setItem("our-state-"+n.props.id,t)},n.restoreState=function(){L.getTasks(n.props.id).then(function(t){n.props.setTasks(t.data.items,n.props.id)})},n.nextTaskId=0,n.state={tasks:[],filterValue:"All"},n.addTask=function(t){L.createTask(t,n.props.id).then(function(t){n.props.addTask(t.data.data.item,n.props.id)})},n.changeFilter=function(t){n.setState({filterValue:t},function(){n.saveState()})},n.changeTask=function(t,e){var o=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?w(n,!0).forEach(function(e){Object(p.a)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):w(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},n.props.tasks.find(function(e){return t===e.id}),{},e);L.updateTask(o).then(function(o){n.props.updateTask(t,e,n.props.id)}).catch(function(t){})},n.changeStatus=function(t,e){n.changeTask(t,{status:e})},n.changeTitle=function(t,e){n.changeTask(t,{title:e})},n.deleteTodolist=function(){L.deleteTodolist(n.props.id).then(function(t){n.props.deleteTodolist(n.props.id)})},n.deleteTask=function(t){L.deleteTask(t).then(function(e){n.props.deleteTask(t,n.props.id)})},n.updateTodolistTitle=function(t){L.updateTitleTodolist(n.props.id,t).then(function(e){n.props.changeTodoListTitle(n.props.id,t)})},n.render=function(){var t=n.props.tasks,e=void 0===t?[]:t;return a.a.createElement("div",{className:"todoList"},a.a.createElement("div",{className:"todoList-header"},a.a.createElement(h,{title:n.props.title,onDelete:n.deleteTodolist,updateTodolistTitle:n.updateTodolistTitle}),a.a.createElement(m,{addItem:n.addTask})),a.a.createElement(T,{changeStatus:n.changeStatus,changeTitle:n.changeTitle,deleteTask:n.deleteTask,tasks:e.filter(function(t){return"All"===n.state.filterValue||("Active"===n.state.filterValue?0===t.status:"Completed"===n.state.filterValue?2===t.status:void 0)})}),a.a.createElement(k,{changeFilter:n.changeFilter,filterValue:n.state.filterValue}))},n.newTasksTitileRef=a.a.createRef(),n}return Object(u.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){this.restoreState()}}]),e}(a.a.Component),I=Object(O.b)(null,function(t){return{addTask:function(e,n){t(function(t,e){return{type:E,newTask:t,todolistId:e}}(e,n))},updateTask:function(e,n,o){var a=function(t,e,n){return{type:"TodoList/Reducer/UPDATE-TASK",taskId:t,obj:e,todolistId:n}}(e,n,o);t(a)},deleteTodolist:function(e){var n=function(t){return{type:"TodoList/Reducer/DELETE-TODOLIST",todolistId:t}}(e);t(n)},deleteTask:function(e,n){var o=function(t,e){return{type:"TodoList/Reducer/DELETE-TASK",todolistId:t,taskId:e}}(n,e);t(o)},setTasks:function(e,n){t(function(t,e){return{type:"TodoList/Reducer/SET_TASKS",tasks:t,todolistId:e}}(e,n))},changeTodoListTitle:function(e,n){t(function(t,e){return{type:"TodoList/Reducer/CHANGE_TODOLIST_TITLE",todoListId:t,title:e}}(e,n))}}})(A),D=function(t){function e(){var t,n;Object(s.a)(this,e);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(r)))).addTodoList=function(t){L.createTodolist(t).then(function(t){var e=t.data.data.item;n.props.addTodolist(e)})},n.saveState=function(){var t=JSON.stringify(n.state);localStorage.setItem("todolists-state",t)},n.restoreState=function(){L.getTodolist().then(function(t){n.props.setTodolists(t.data)})},n.render=function(){var t=n.props.todolists.map(function(t){return a.a.createElement(I,{id:t.id,title:t.title,tasks:t.tasks})});return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",null,a.a.createElement(m,{addItem:n.addTodoList})),a.a.createElement("div",{className:"App"},t))},n}return Object(u.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){this.restoreState()}}]),e}(a.a.Component),P=Object(O.b)(function(t){return{todolists:t.todolists}},function(t){return{setTodolists:function(e){var n=function(t){return{type:"TodoList/Reducer/SET_TODOLISTS",todolists:t}}(e);t(n)},addTodolist:function(e){var n=function(t){return{type:"TodoList/Reducer/ADD-TODOLIST",newTodolist:t}}(e);t(n)}}})(D);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F=n(13),R=Object(F.b)(S);i.a.render(a.a.createElement(O.a,{store:R},a.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},7:function(t,e,n){}},[[29,1,2]]]);
//# sourceMappingURL=main.b8a32a50.chunk.js.map