//   //   //   //   //   //   //   //   //   //   //   //   //   //   //   //
const closeBtn = document.querySelector('.close-icon');
const teamContainer = document.querySelector('.team-container');
const modalSection = document.querySelector('.modal-section');
const teamMembers = [
     {
          id: 1,
          image: 'images/okuhle.png',
          name: 'Okuhle Mhambi', 
          position: 'Chief Financial Officer',
          educationalHistory: [
               'Completed a Diploma in Financial Information Systems in Walter Sisulu University',
               'Completed both a Software Development and Social and Innovation course at University of the Western Cape under Future Innovation Lab',
               'Completed a one year course in Web Development at Quirky30',
               'Incomplete BTech in Information Technology (Software Development in WSU'
          ]
     },
     {
          id: 2,
          image: 'images/angezwa.png',
          name: 'Angezwa Gagayi', 
          position: 'Marketing Director',
          educationalHistory: [
               'Completed a Diploma in Marketing at Cape Peninsula University of Technology',
               'Completed both a Software Development and Social and Innovation course at University of the Western Cape under Future Innovation Lab',
               'Currrently completing an advanced Diploma / Btech in Marketing at Cape Peninsula University of Technology',
          ]
     },
     {
          id: 3,
          image: 'images/lusanda.png',
          name: 'Lusanda Vinqi', 
          position: 'Marketing Director',
          educationalHistory: [
               'Currrently a MSc student in Hydrology at the University of Western Cape',
               'Completed both a Software Development and Social and Innovation course at University of the Western Cape under Future Innovation Lab',
          ]

     },
     {
          id: 4,
          image: 'images/luthando.png',
          name: 'Luthando Sitole', 
          position: 'Creative Director / Graphic Designer',
          educationalHistory: [
               'Completed a one year course in Web Development at Quirky30.',
               'Completed both a Software Development and Social and Innovation course at University of the Western Cape under Future Innovation Lab',
               'Completed Graphic design at Culvin'
          ]

     },
     {
          id: 5,
          image: 'images/sibusiso.png',
          name: 'Sibusiso Labi', 
          position: 'Fullstack Developer',
          educationalHistory: [
               'Completed a one year course in Web Development at Quirky30.',
               'Completed both a Software Development and Social and Innovation course at University of the Western Cape under Future Innovation Lab',
          ]
     },
     {
          id: 6,
          image: 'images/luyanda.png',
          name: 'Luyanda Dingindlela', 
          position: 'Fullstack Developer',
          educationalHistory: [
               'Completed a one year course in Web Development at Quirky30.',
               'Completed both a Software Development and Social and Innovation course at University of the Western Cape under Future Innovation Lab',
          ]
     }
] 



//   //   //   //   //   //   //   //   //   //   //   //   //   //   //   //
window.addEventListener('DOMContentLoaded', showTeamMembers);
teamContainer.addEventListener('click', e => {
     // console.log(e.target.id);
     if(
          e.target.id == 1 || e.target.id == 2 || 
          e.target.id == 3 || e.target.id == 4 || 
          e.target.id == 5 || e.target.id == 6  
     ) {

          showTeamModal(e);
     }
});
modalSection.addEventListener('click', e => {
     if(e.target.className == 'close-icon') {
          closeTeamModal();
     }
})




//   //   //   //   //   //   //   //   //   //   //   //   //   //   //   //
function showTeamModal(e) {
     let memberId = e.target.id;
     let teamModal = document.querySelector('.team-modal');

     member = teamMembers.forEach(currentMember => {
          if(currentMember.id == memberId) { 
               if(currentMember.name == 'Okuhle Mhambi') {
                    teamModal.innerHTML = 
                    `
                         <div class="team-image">
                              <img src="${teamMembers[memberId - 1].image}" alt="${teamMembers[memberId - 1].name} | ${teamMembers[memberId - 1].position}">
                         </div>
                         <div class="team-details">
                              <img src="images/close_icon.png" alt="close icon" class="close-icon">
                              <h5>${teamMembers[memberId - 1].name}</h5>
                              <h6>${teamMembers[memberId - 1].position}</h6>
                              <ul>
                                   <li>${teamMembers[memberId - 1].educationalHistory[0]}</li>
                                   <li>${teamMembers[memberId - 1].educationalHistory[1]}</li>
                                   <li>${teamMembers[memberId - 1].educationalHistory[2]}</li>
                                   <li>${teamMembers[memberId - 1].educationalHistory[3]}</li>
                              </ul>
                         </div>
                    `
               } else if(currentMember.name == 'Angezwa Gagayi' || currentMember.name == 'Luthando Sitole') {
                    teamModal.innerHTML = 
                                             `
                                                  <div class="team-image">
                                                       <img src="${teamMembers[memberId - 1].image}" alt="${teamMembers[memberId - 1].name} | ${teamMembers[memberId - 1].position}">
                                                  </div>
                                                  <div class="team-details">
                                                       <img src="images/close_icon.png" alt="close icon" class="close-icon">
                                                       <h5>${teamMembers[memberId - 1].name}</h5>
                                                       <h6>${teamMembers[memberId - 1].position}</h6>
              
                                                       <ul>
                                                            <li>${teamMembers[memberId - 1].educationalHistory[0]}</li>
                                                            <li>${teamMembers[memberId - 1].educationalHistory[1]}</li>
                                                            <li>${teamMembers[memberId - 1].educationalHistory[2]}</li>
                                                       </ul>
                                                  </div>
                                             `

               } else {
                    teamModal.innerHTML = 
                                             `
                                                  <div class="team-image">
                                                       <img src="${teamMembers[memberId - 1].image}" alt="${teamMembers[memberId - 1].name} | ${teamMembers[memberId - 1].position}">
                                                  </div>
                                                  <div class="team-details">
                                                       <img src="images/close_icon.png" alt="close icon" class="close-icon">
                                                       <h5>${teamMembers[memberId - 1].name}</h5>
                                                       <h6>${teamMembers[memberId - 1].position}</h6>
                                                       <ul>
                                                            <li>${teamMembers[memberId - 1].educationalHistory[0]}</li>
                                                            <li>${teamMembers[memberId - 1].educationalHistory[1]}</li>
                                                       </ul>
                                                  </div>
                                             `
               }

               document.querySelector('.modal-section').style = 'display: block';
          }
     })
}

function showTeamMembers() {

     teamMembers.forEach((member, i) => {
          teamContainer.innerHTML += 
                                   `                    
                                        <div class="team-member" id="${teamMembers[i].id}">
                                             <img src="${teamMembers[i].image}" alt="${teamMembers[i].name} | ${teamMembers[i].position}"  id="${teamMembers[i].id}">
                                             <h5 id="${teamMembers[i].id}">${teamMembers[i].name}</h5>
                                             <h6 id="${teamMembers[i].id}">${teamMembers[i].position}</h6>
                                        </div>
                                   `
     })
}

function closeTeamModal() {
     document.querySelector('.modal-section').style = 'display: none';
}