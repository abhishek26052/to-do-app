function addBtn(input) {
    const holdInput = input.value.trim();
    const li = `<li  class="flex justify-center m-1 ">
                        <div class="bg-gray-400 flex justify-between items-center gap-3.5 h-15 w-[80%] rounded-[5px] ">
                            <p class=" ml-2 text-[16px] font-bold ">${holdInput}</p>
                            <div class="flex items-center gap-0.5 ">
                                <button
                                    class="del-btn p-1.5 hover:border-2 bg-red-600 text-[16px] text-amber-100 font-bold rounded-[5px] h-11 w-[80%] ">Delete</button>
                                <button
                                    class="comp-btn p-1.5 mr-2 hover:border-2 bg-blue-500 text-[16px] text-amber-100 font-bold rounded-[5px] h-11 [80%] ">Done</button>
                            </div>
                        </div>
                    </li>`
    ul.innerHTML += li
};
function delBtn() { };
function compBtn() { };

let input = document.body.querySelector('#input');
let ul = document.body.querySelector('ul')

document.body.querySelector('#add-btn').addEventListener('click', function () {
    if (input.value.trim() === '') {
        alert("Please Enter a valid input")

    } else {
        addBtn(input);
        input.value = '';
    }
})
ul.addEventListener('click', function (e) {
    if (e.target.classList.contains('del-btn')) {
        e.target.closest('li').remove();
    } else if (e.target.classList.contains('comp-btn')) {
        const liDiv = e.target.closest('div')
        outerDiv = liDiv.parentElement;
        outerDiv.classList.remove('bg-gray-400');
        outerDiv.classList.add('bg-green-500');
    }


});

