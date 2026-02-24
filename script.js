let interviewList = [];
let rejectedList = [];
let currentStatus = 'all'


let total = document.getElementById('total');
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount');


let allFilterBtn = document.getElementById('all-filter-btn');
let interviewFilterBtn = document.getElementById('interview-filter-btn');
let rejectedFilterBtn = document.getElementById('rejected-filter-btn');


let allCardSection = document.getElementById('allCards');
let mainContainer = document.querySelector('main');
let filterSection = document.getElementById('filtered-section');

let noJobs =document.getElementById('no-jobs');
// let deleteBtn = document.getElementById('btn-delete')



function calculateCount() {
   total.innerText = allCardSection.children.length;
   interviewCount.innerText = interviewList.length;
   rejectedCount.innerText = rejectedList.length;
}
calculateCount()


// step -1;
function toggleStyle(id) {
  
          //adding gray bg for all
   allFilterBtn.classList.add('bg-white','text-gray-500');
   interviewFilterBtn.classList.add('bg-white','text-gray-500');
   rejectedFilterBtn.classList.add('bg-white','text-gray-500');

//    if any button has black then remove
   allFilterBtn.classList.remove('bg-primary','text-white')
   interviewFilterBtn.classList.remove('bg-primary','text-white')
   rejectedFilterBtn.classList.remove('bg-primary','text-white')

   const selected = document.getElementById(id);
   currentStatus = id
//    adding primary bg for current button
     selected.classList.remove('bg-white','text-gray-500');
     selected.classList.add('bg-primary','text-white');


     if(id == 'interview-filter-btn'){
          allCardSection.classList.add('hidden');
          filterSection.classList.remove('hidden');
          renderInterview()

                 
     }
     else if(id == 'all-filter-btn'){
          allCardSection.classList.remove('hidden');
          filterSection.classList.add('hidden');
          
     }
     else if(id == 'rejected-filter-btn'){
          allCardSection.classList.add('hidden');
          filterSection.classList.remove('hidden');
          renderRejected()
            
     }


if (id === 'interview-filter-btn' || id === 'rejected-filter-btn') {

  const filterCount = filterSection.children.length;

  if (filterCount === 0) {
    noJobs.classList.remove('hidden');
  }
   else {
    noJobs.classList.add('hidden');
  }

} 
else {
  
  noJobs.classList.add('hidden');
}


}




//step -2 delegation
mainContainer.addEventListener('click', function (event) {
  if(event.target.classList.contains('interview-btn')){

  const parenNode = event.target.parentNode.parentNode;

 let mobile = parenNode.querySelector('.mobile').innerText;
 let react = parenNode.querySelector('.react').innerText;
 let remote = parenNode.querySelector('.remote').innerText;
//  let stat = parenNode.querySelector('.stat').innerText;
 let build = parenNode.querySelector('.build').innerText;

 parenNode.querySelector('.stat').innerText = 'interview';

 const cardInfo = {
          mobile,
          react,
          remote,
          stat:'interview',
          build
          

      }

  const plantExist = interviewList.find(item => item.mobile == cardInfo.mobile);

  if(!plantExist){
          interviewList.push(cardInfo);
  }

  //removing the plant from rejected list 
  rejectedList = rejectedList.filter(item => item.mobile != cardInfo.mobile);

  //after remove rerender the html
  if(currentStatus == 'rejected-filter-btn'){
    renderRejected()
  }

   calculateCount()
}


 else if(event.target.classList.contains('rejected-btn')){

  const parenNode = event.target.parentNode.parentNode;

 let mobile = parenNode.querySelector('.mobile').innerText;
 let react = parenNode.querySelector('.react').innerText;
 let remote = parenNode.querySelector('.remote').innerText;
//  let stat = parenNode.querySelector('.stat').innerText;
 let build = parenNode.querySelector('.build').innerText;

 parenNode.querySelector('.stat').innerText = 'rejected';

 const cardInfo = {
          mobile,
          react,
          remote,
          stat:'rejected',
          build
          
      }

  const plantExist = rejectedList.find(item => item.mobile == cardInfo.mobile);

  if(!plantExist){
          rejectedList.push(cardInfo);
  }

  //removing the plant from interview list
  interviewList = interviewList.filter(item => item.mobile != cardInfo.mobile)

  if(currentStatus == 'interview-filter-btn'){
    renderInterview()
  }

   calculateCount()
}


})




// step -3 html file create
function renderInterview() {
  //make the filterSection empty every time
  filterSection.innerHTML = ''

  //crating innerHTML
  for(let interview of interviewList){
          
          let div = document.createElement('div');
          div.className = 'bg-white rounded-lg p-6 flex flex-col gap-4 lg:flex-row justify-between';
          div.innerHTML = `
          <!-- right -->
          <div class="space-y-5">
                <div>
                  <h2 class="mobile text-xl font-semibold">${interview.mobile}</h2>
                  <p class="react text-[#64748bFF]">${interview.react}</p>
                </div> 
                <p class="remote text-[#64748bFF]">${interview.remote}</p>   
                <p class="stat bg-gray-100 inline p-3 rounded-lg uppercase">${interview.stat}</p><p></p>
                <p class="build">${interview.build}</p>
                <div class="flex gap-4">
                  <button class="interview-btn btn btn-outline btn-success uppercase">interview</button>
                  <button class="rejected-btn btn btn-outline btn-secondary uppercase">Rejected</button>
                </div>
          </div>
          <!-- left -->
           <div>
            <button  class="btn-delete bg-white p-3 rounded-full border border-gray-300"><i class="fa-solid fa-trash-can"></i></button>
           </div>
          `
          filterSection.appendChild(div)
  }


}


function renderRejected() {
  //make the filterSection empty every time
filterSection.innerHTML = ''

  //crating innerHTML
  for(let rejected of rejectedList){
          
          let div = document.createElement('div');
          div.className = 'bg-white rounded-lg p-6 flex flex-col gap-4 lg:flex-row justify-between';
          div.innerHTML = `
          <!-- right -->
          <div class="space-y-5">
                <div>
                  <h2 class="mobile text-xl font-semibold">${rejected.mobile}</h2>
                  <p class="react text-[#64748bFF]">${rejected.react}</p>
                </div> 
                <p class="remote text-[#64748bFF]">${rejected.remote}</p>   
                <p class="stat bg-gray-100 inline p-3 rounded-lg uppercase">${rejected.stat}</p><p></p>
                <p class="build">${rejected.build}</p>
                <div class="flex gap-4">
                  <button class="interview-btn btn btn-outline btn-success uppercase">interview</button>
                  <button class="rejected-btn btn btn-outline btn-secondary uppercase">Rejected</button>
                </div>
          </div>
          <!-- left -->
           <div>
            <button  class="btn-delete bg-white p-3 rounded-full border border-gray-300"><i class="fa-solid fa-trash-can"></i></button>
           </div>
          `
          filterSection.appendChild(div)
  }


}





