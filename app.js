fetch('https://restcountries.eu/rest/v2/all')
 .then(res => res.json())
  .then( data=>{
      
      showData(data)
  });

  function showData(users) {
      const user =document.getElementById('user');

      users.map( person =>{
          const showData = document.createElement("div");
          const id =`
         <div class="country">
          
         <img src="${person.flag}"></img>
         <p>${person.name}</p>
         <p>${person.capital}</p>
         <p>${person.region}</p>
         <p>${person.nativeName}</p>
         <p>${person.population}</p>
         </div>
          
          `;
          showData.innerHTML = (id);
          user.appendChild (showData);
      })
  }