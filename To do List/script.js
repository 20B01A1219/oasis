  
  
function submit(){
    let t = document.getElementById('task').value;
    if(t == ''){
        alert("Please enter some task");
    }
    else{
        let list = document.getElementById('list');
        let li = document.createElement('li');
        li.textContent = t;
        let a = document.createElement('a');
        a.textContent = 'x';
        a.href ='javascript:void(0)';
        a.className='remove';
        li.appendChild(a);
        list.appendChild(li);
    }
    document.getElementById('task').value = '';
}
window.onload=function(){
let btn = document.querySelector('ul');
btn.addEventListener('click', function(e){
    let list = document.getElementById('list');
    let li = e.target.parentNode;
    list.removeChild(li);
});

}